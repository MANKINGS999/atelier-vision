(function(){
  /* ---------- art generators ---------- */
  var S='url(#gSteel)',SH='url(#gSteelH)',D='url(#gDark)',DH='url(#gDarkH)',B='url(#gBlue)',Z='url(#gBronze)';
  function r(x,y,w,h,f,rx){return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="'+(rx||1.5)+'" fill="'+(f||S)+'" stroke="rgba(0,0,0,.28)" stroke-width=".8"/>'}
  function c(cx,cy,rad,f,st){return '<circle cx="'+cx+'" cy="'+cy+'" r="'+rad+'" fill="'+(f||S)+'" stroke="'+(st||'rgba(0,0,0,.3)')+'" stroke-width=".8"/>'}
  function sh(cx,rx){return '<ellipse cx="'+(cx||150)+'" cy="202" rx="'+(rx||105)+'" ry="7" fill="#000" opacity=".2"/>'}
  function glass(x,y,w,h){return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" fill="#fff" opacity=".18" stroke="rgba(0,0,0,.25)" stroke-width=".8"/>'}
  function wrap(inner,vb){return '<svg viewBox="'+(vb||'0 0 300 220')+'" width="100%" height="100%" aria-hidden="true">'+inner+'</svg>'}
  var A={
    fix1:function(){return sh()+r(28,170,244,22,D)+r(34,164,232,8,S)+r(50,88,14,76,B)+r(236,88,14,76,B)+r(44,80,212,14,B)+r(96,122,108,10,Z)+r(108,132,8,32,S)+r(184,132,8,32,S)+
      '<path d="M80 164L92 138H208L220 164Z" fill="url(#gSteelH)" stroke="rgba(0,0,0,.3)"/>'+r(66,104,22,8,D)+r(212,104,22,8,D)+r(70,112,14,16,S)+r(216,112,14,16,S)+c(150,151,9,'#0b0a09','rgba(255,255,255,.5)')+r(130,60,40,20,S)+c(150,70,4,Z)},
    fix2:function(){return sh()+r(60,176,180,16,D)+r(64,168,172,10,S)+r(72,72,12,96,SH)+r(216,72,12,96,SH)+r(64,60,172,16,D)+r(64,60,172,3,'rgba(255,255,255,.35)',0)+
      r(138,26,24,34,S)+r(144,76,12,52,SH)+r(132,128,36,10,Z)+r(112,146,76,22,DH)+c(150,157,10,'#0b0a09','rgba(255,255,255,.5)')+r(94,100,112,4,Z,0)},
    disp:function(){return sh()+r(44,176,212,16,D)+r(48,168,204,10,S)+r(54,50,8,120,SH)+r(238,50,8,120,SH)+r(54,50,192,8,SH)+
      glass(62,58,176,110)+r(62,108,176,8,D)+r(136,66,28,42,S)+r(144,108,12,22,SH)+'<path d="M147 130h6l-3 14z" fill="url(#gBronze)"/>'+r(100,150,100,18,DH)+c(150,148,12,SH)+r(60,176,40,6,Z,0)+'<path d="M92 124c20-20 40-20 60-14" stroke="#b08d57" stroke-width="1.4" fill="none"/>'},
    'a-mag':function(){return sh()+r(80,110,140,84,SH,3)+r(86,116,60,72,DH)+r(152,116,62,34,D)+c(160,172,6,Z)+r(190,160,16,4,S)+'<path d="M96 110L120 58H180L204 110Z" fill="url(#gSteelH)" stroke="rgba(0,0,0,.3)"/>'+r(112,44,76,14,SH)+r(70,194,160,8,D)+r(110,100,80,10,Z,0)},
    'a-pull':function(){return sh()+r(62,184,176,12,D)+r(74,66,14,118,SH)+r(212,66,14,118,SH)+r(66,56,168,14,D)+r(140,20,20,36,Z)+r(144,70,12,70,SH)+r(122,138,56,12,D)+r(128,150,44,28,SH)+c(150,164,10,'#0b0a09','rgba(255,255,255,.5)')+r(100,176,100,8,S)},
    'a-leak':function(){return sh()+r(70,60,160,134,SH,3)+glass(80,70,140,50)+r(106,84,88,28,D)+c(150,98,10,'#0b0a09','rgba(255,255,255,.5)')+r(80,128,140,60,DH)+c(112,150,12,'#e9e6df')+'<path d="M112 150l6-6" stroke="#0b0a09" stroke-width="1.5"/>'+r(150,140,56,6,S,0)+c(190,168,5,Z)+r(60,194,180,8,D)},
    'a-press':function(){return sh()+r(60,186,180,12,D)+r(72,60,16,126,B)+r(212,60,16,126,B)+r(62,44,176,20,B)+r(128,16,44,30,SH)+r(140,64,20,56,SH)+r(112,118,76,12,Z)+r(88,150,124,10,DH)+r(100,160,100,26,D)+r(134,136,32,14,S)},
    'a-asm':function(){return sh(150,130)+r(20,168,260,24,D)+r(26,160,248,10,S)+r(36,100,42,60,SH,3)+r(98,112,42,48,DH)+r(160,92,42,68,SH,3)+r(222,108,42,52,DH)+r(46,86,22,14,Z)+r(108,96,22,16,S)+r(170,76,22,16,Z)+r(232,92,22,16,S)+'<path d="M26 60H274" stroke="rgba(0,0,0,.35)" stroke-width="3"/>'+r(60,50,20,10,D)+r(180,50,20,10,D)+c(150,152,0)},
    'a-plc':function(){return sh()+r(54,64,100,132,SH,3)+r(62,72,84,116,DH)+r(70,84,68,44,'#0b0a09')+'<path d="M76 96h40M76 106h28M76 116h52" stroke="#b08d57" stroke-width="1.5"/>'+c(80,148,4,Z)+c(96,148,4,S)+c(112,148,4,S)+r(70,160,68,18,D)+r(168,96,80,100,B,3)+r(176,104,64,40,'#0b0a09')+'<path d="M182 134l10-10 10 6 10-14 10 6 12-8" stroke="#b08d57" stroke-width="1.5" fill="none"/>'+r(176,152,64,10,D)+r(176,168,28,20,S)+r(210,168,30,20,S)},
    's-struct':function(){return '<svg viewBox="0 0 200 180"><use href="#part" fill="url(#gSteelH)" stroke="rgba(0,0,0,.4)" stroke-width="1.2" width="200" height="180"/><use href="#partholes" width="200" height="180"/><path d="M40 40Q100 6 160 40" stroke="rgba(255,255,255,.5)" fill="none"/></svg>'},
    's-modal':function(){return '<svg viewBox="0 0 200 180"><use href="#part" fill="url(#gJet2)" width="200" height="180"/><use href="#partholes" width="200" height="180"/></svg>'},
    's-fat':function(){return '<svg viewBox="0 0 200 180"><use href="#part" fill="url(#gJet3)" width="200" height="180"/><use href="#partholes" width="200" height="180"/></svg>'},
    's-cfd':function(){var p='';for(var i=0;i<17;i++){var y=20+i*9,a=Math.sin(i/16*Math.PI);var d='M0 '+y+' C60 '+y+' 70 '+(y+(i<8?-1:1)*(20*a+6))+' 100 '+(y+(i<8?-1:1)*(26*a+4))+' S150 '+y+' 200 '+(y+(i<8?-1:1)*4);p+='<path d="'+d+'" fill="none" stroke="url(#gStream)" stroke-width="1.5" opacity="'+(0.55+0.4*a).toFixed(2)+'"/>'}return '<svg viewBox="0 0 200 180">'+p+'<ellipse cx="100" cy="90" rx="22" ry="17" fill="#1a1917" stroke="rgba(255,255,255,.45)"/></svg>'},
    's-crash':function(){return '<svg viewBox="0 0 220 180"><g fill="none" stroke="#c9c6bf" stroke-width="1.2" stroke-linejoin="round"><path d="M10 120L16 96L50 90L82 58H150L178 88L206 96L212 120Z"/><path d="M82 58L72 90M150 58L158 90M50 90H206M82 58H150"/><path d="M20 120H204" stroke="#8c8f92"/><circle cx="52" cy="124" r="15"/><circle cx="170" cy="124" r="15"/><path d="M96 58L92 90M124 58L126 90M10 106H212" stroke="#8c8f92" stroke-width=".8"/></g><path d="M10 120L16 96L50 90L56 104L40 122Z" fill="#d4452e" opacity=".85"/><path d="M50 90L82 58L96 58L92 90Z" fill="#e8c23a" opacity=".8"/><path d="M92 90L96 58L124 58L126 90Z" fill="#4aa87a" opacity=".75"/><path d="M126 90L124 58L150 58L178 88Z" fill="#2b9cc0" opacity=".7"/><rect x="204" y="38" width="8" height="90" fill="url(#gLegend)"/></svg>'}
  };
  document.querySelectorAll('[data-art]').forEach(function(el){
    var k=el.getAttribute('data-art'),f=A[k];if(!f)return;
    var h=f();el.innerHTML=h.indexOf('<svg')===0?h:wrap(h);
    var s=el.querySelector('svg');if(s){s.style.width='100%';s.style.height='100%';s.style.position='relative'}
  });
  document.querySelectorAll('.proj .art > div').forEach(function(d){d.style.cssText='position:absolute;inset:0'});

  /* ---------- nav ---------- */
  var b=document.getElementById('burger'),n=document.getElementById('nav');
  b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
  n.addEventListener('click',function(e){if(e.target.tagName==='A'){n.classList.remove('open');b.setAttribute('aria-expanded','false')}});

  /* ---------- carousel ---------- */
  var t=document.getElementById('track');
  if(t){
    var step=function(d){var w=t.querySelector('.proj').offsetWidth;t.scrollBy({left:d*w,behavior:'smooth'})};
    document.getElementById('prev').onclick=function(){step(-1)};
    document.getElementById('next').onclick=function(){step(1)};
  }

  /* ---------- reveal ---------- */
  var rv=document.querySelectorAll('.rv');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
    rv.forEach(function(e){io.observe(e)});
  }else{rv.forEach(function(e){e.classList.add('in')})}

  /* ---------- hero pointer parallax ---------- */
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine=window.matchMedia('(pointer: fine)').matches;
  var sc=document.getElementById('scene');
  if(!reduce&&fine&&sc){
    var layers=sc.querySelectorAll('[data-depth]'),raf=0,px=0,py=0;
    sc.parentNode.addEventListener('pointermove',function(e){
      var b=sc.getBoundingClientRect();px=(e.clientX-b.left)/b.width-.5;py=(e.clientY-b.top)/b.height-.5;
      if(!raf)raf=requestAnimationFrame(function(){raf=0;layers.forEach(function(l){var d=parseFloat(l.getAttribute('data-depth'));l.style.transform='translate('+(-px*d*14).toFixed(1)+'px,'+(-py*d*8).toFixed(1)+'px)'})});
    });
    sc.parentNode.addEventListener('pointerleave',function(){layers.forEach(function(l){l.style.transform=''})});
  }

  /* ---------- page transitions ---------- */
  var rm=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var cur=document.createElement('div');cur.className='curtain';cur.setAttribute('aria-hidden','true');
  cur.innerHTML='<img src="img/logo.webp" width="900" height="475" alt="">';document.body.appendChild(cur);
  window.addEventListener('pageshow',function(e){if(e.persisted)cur.classList.remove('on')});
  if(!rm){
    document.addEventListener('click',function(e){
      var a=e.target.closest&&e.target.closest('a[href]');
      if(!a||e.defaultPrevented||e.button||e.metaKey||e.ctrlKey||e.shiftKey||a.target||a.hasAttribute('download'))return;
      var u;try{u=new URL(a.href,location.href)}catch(x){return}
      if(u.protocol!==location.protocol||u.host!==location.host||u.pathname===location.pathname)return;
      if(!/\.html$|\/$/.test(u.pathname))return;
      e.preventDefault();cur.classList.add('on');
      setTimeout(function(){location.href=a.href},560);
    });
  }
})();
