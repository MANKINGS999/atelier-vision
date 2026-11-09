(function () {
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* image reveal (clip + de-blur) */
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: .03, rootMargin: '0px 0px -6% 0px' }) : null;
  $$('[data-ph],.g-item,.cat,.vid,.conv-gal .ph').forEach(function (el, i) {
    el.style.setProperty('--d', ((i % 4) * .09) + 's');
    if (io) io.observe(el); else el.classList.add('in');
  });

  /* scroll parallax on image inner */
  var par = $$('[data-par]');
  if (!reduce && par.length) {
    var ticking = false;
    var upd = function () {
      ticking = false;
      var vh = innerHeight;
      par.forEach(function (el) {
        var r = el.parentNode.getBoundingClientRect();
        if (r.bottom < -50 || r.top > vh + 50) return;
        var p = (r.top + r.height / 2 - vh / 2) / vh;
        el.style.setProperty('--py', (p * -26).toFixed(1) + 'px');
      });
    };
    addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(upd); } }, { passive: true });
    upd();
  }

  /* 3D tilt + shine on gallery and category cards (fine pointers) */
  if (!reduce && matchMedia('(pointer: fine)').matches) {
    $$('.g-btn,.cat').forEach(function (el) {
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        el.style.setProperty('--rx', ((.5 - y) * 7).toFixed(2) + 'deg');
        el.style.setProperty('--ry', ((x - .5) * 9).toFixed(2) + 'deg');
        el.style.setProperty('--sx', (x * 100) + '%');
        el.style.setProperty('--sy2', (y * 100) + '%');
      });
      el.addEventListener('pointerleave', function () { el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg'); });
    });
  }

  /* gallery filter (supports ?f=) */
  var grid = $('#gGrid');
  if (grid) {
    var chips = $$('.chip-f'), items = $$('.g-item', grid);
    var apply = function (f) {
      chips.forEach(function (c) { var on = c.dataset.f === f; c.classList.toggle('is-on', on); c.setAttribute('aria-pressed', on); });
      var n = 0;
      items.forEach(function (it) {
        var show = f === 'all' || it.dataset.c === f;
        if (show) { it.hidden = false; it.style.setProperty('--d', (n++ * .05) + 's'); it.classList.remove('pop'); void it.offsetWidth; it.classList.add('pop'); }
        else it.hidden = true;
      });
    };
    chips.forEach(function (c) { c.addEventListener('click', function () { apply(c.dataset.f); }); });
    var q = new URLSearchParams(location.search).get('f');
    if (q && chips.some(function (c) { return c.dataset.f === q; })) {
      apply(q);
      setTimeout(function () { var g = $('#gallery'); if (g) g.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }); }, 700);
    }
  }

  /* lightbox */
  var lb = $('#lb');
  if (lb) {
    var li = $('img', lb), lc = $('.lb-c', lb), last = null;
    var open = function (b) { last = b; li.src = b.dataset.lb; li.alt = b.dataset.cap; lc.textContent = b.dataset.cap; lb.hidden = false; requestAnimationFrame(function () { lb.classList.add('on'); }); document.body.style.overflow = 'hidden'; $('.lb-x', lb).focus(); };
    var close = function () { lb.classList.remove('on'); document.body.style.overflow = ''; setTimeout(function () { lb.hidden = true; }, 300); if (last) last.focus(); };
    $$('.g-btn').forEach(function (b) { b.addEventListener('click', function () { open(b); }); });
    lb.addEventListener('click', function (e) { if (e.target !== li) close(); });
    document.addEventListener('keydown', function (e) { if (!lb.hidden && e.key === 'Escape') close(); });
  }

  /* videos play only while visible */
  var vids = $$('video[data-autoplay]');
  if (vids.length && 'IntersectionObserver' in window && !reduce) {
    var vo = new IntersectionObserver(function (es) {
      es.forEach(function (e) { var v = e.target; if (e.isIntersecting) { v.play().catch(function () {}); } else v.pause(); });
    }, { threshold: .35 });
    vids.forEach(function (v) { vo.observe(v); });
  } else vids.forEach(function (v) { v.controls = true; });

  /* count up */
  $$('[data-count]').forEach(function (el) {
    var to = +el.dataset.count;
    if (reduce) return;
    var co = new IntersectionObserver(function (es) {
      if (!es[0].isIntersecting) return; co.disconnect();
      var t0 = performance.now();
      (function tick(t) { var k = Math.min(1, (t - t0) / 1400); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(tick); })(t0);
    }, { threshold: .6 });
    co.observe(el);
  });
})();
