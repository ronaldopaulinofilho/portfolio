// Menu lateral: rótulos acessíveis, recolher e lembrar a escolha neste navegador.
document.addEventListener('DOMContentLoaded',()=>{
 document.querySelectorAll('nav a').forEach(a=>{let t='';[...a.childNodes].forEach(n=>{if(n.nodeType===3&&n.textContent.trim()){t=n.textContent.trim();const s=document.createElement('span');s.className='lb';s.textContent=t;n.replaceWith(s)}});a.dataset.tip=t});
 const r=document.getElementById('rec'),sh=document.querySelector('.shell');if(!r||!sh)return;
 const aplicar=m=>{sh.classList.toggle('mini',m);r.setAttribute('aria-expanded',!m);r.setAttribute('aria-label',m?'Expandir menu':'Recolher menu');r.dataset.tip=m?'Expandir':'Recolher';r.querySelector('.lb').textContent=m?'Expandir':'Recolher'};
 let ini=false;try{ini=localStorage.getItem('menu-recolhido')==='1'}catch(e){}
 sh.style.transition='none';aplicar(ini);sh.offsetWidth;sh.style.transition='';
 r.addEventListener('click',()=>{const m=!sh.classList.contains('mini');aplicar(m);try{localStorage.setItem('menu-recolhido',m?'1':'0')}catch(e){}});
});
