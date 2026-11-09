(function(){
  var f=document.getElementById('cf'); if(!f) return;
  var $=function(s,r){return (r||document).querySelector(s)};
  var sel=$('select',f); if(sel) sel.addEventListener('change',function(){sel.classList.toggle('has',!!sel.value)});
  var rules={
    name:function(v){return v.trim().length>1||'Please tell us your name.'},
    email:function(v){return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())||'Enter a valid email address.'},
    phone:function(v){return !v.trim()||/^[+()\d][\d\s().+-]{6,}$/.test(v.trim())||'Enter a valid phone number.'},
    message:function(v){return v.trim().length>9||'Add a few details about what you need (10+ characters).'}
  };
  function check(name){
    var el=f.elements[name],box=el.closest('.fld'),r=rules[name]?rules[name](el.value):true,err=$('.err',box);
    if(r===true){box.classList.remove('bad');if(err)err.textContent='';return true}
    box.classList.add('bad');if(err)err.textContent=r;return false;
  }
  Object.keys(rules).forEach(function(n){var el=f.elements[n];el.addEventListener('blur',function(){if(el.value||el.closest('.fld').classList.contains('bad'))check(n)});el.addEventListener('input',function(){if(el.closest('.fld').classList.contains('bad'))check(n)})});
  f.addEventListener('submit',function(e){
    e.preventDefault();
    if(f.elements.website&&f.elements.website.value) return; /* honeypot */
    var ok=true,first=null;
    Object.keys(rules).forEach(function(n){if(!check(n)){ok=false;if(!first)first=f.elements[n]}});
    if(!ok){first.focus();return}
    var d={};['name','email','phone','company','interest','message'].forEach(function(k){d[k]=f.elements[k].value.trim()});
    f.classList.add('sending');
    var done=function(note){
      f.classList.remove('sending');
      var s=$('#cfNote'); if(s&&note) s.textContent=note;
      document.querySelector('.ct-main').classList.add('sent');
      var h=$('.cf-ok h2'); if(h){h.setAttribute('tabindex','-1');h.focus()}
    };
    var endpoint=f.dataset.endpoint,to=f.dataset.email||'';
    if(endpoint){
      fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(d)})
        .then(function(r){if(!r.ok)throw 0;done('We have your message and will reply by email.')})
        .catch(function(){f.classList.remove('sending');alert('Sorry, the message could not be sent. Please try again.')});
    }else{
      var body='Name: '+d.name+'\nEmail: '+d.email+'\nPhone: '+(d.phone||'-')+'\nCompany: '+(d.company||'-')+'\nInterested in: '+(d.interest||'-')+'\n\n'+d.message;
      setTimeout(function(){
        location.href='mailto:'+encodeURIComponent(to).replace('%40','@')+'?subject='+encodeURIComponent('Project enquiry from '+d.name)+'&body='+encodeURIComponent(body);
        done('Your email app should now open with the message filled in. Press send there to complete your enquiry.');
      },600);
    }
  });
})();
