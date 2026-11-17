// Gestão kanban: quadros, período, etiquetas, busca, colunas, arrastar, detalhes e nova atividade.
const kb={board:'padrao',periodo:'Este mês',tag:'Todas',busca:'',edit:null};
const boards={padrao:{nome:'Quadro padrão',cols:['A fazer','Fazendo','Concluído']},trab:{nome:'Trabalhista',cols:['A fazer','Fazendo','Concluído']}};
let nBoards=1;
const TAGS={1:['Cível'],2:['Cível'],3:['Cível'],4:['Audiência'],6:['Consumidor'],7:['Cível'],10:['Trabalhista'],11:['Financeiro']};
dados.forEach(a=>{a.board='padrao';a.tags=TAGS[a.id]||[]});
dados.push({id:12,tipo:'Tarefa',titulo:'Renovar certificado digital',caso:'Interno',proc:'',data:d(12,3),resp:'JA',col:'A fazer',board:'padrao',tags:['Financeiro']});
const esc=t=>String(t).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fimCol=()=>boards[kb.board].cols.at(-1);
const colDe=a=>a.feito?fimCol():a.col;
function filtrosKb(a){if(a.board!==kb.board)return false;
 if(kb.tag!=='Todas'&&!a.tags.includes(kb.tag))return false;
 if(kb.busca&&!`${a.titulo} ${a.caso} ${a.proc}`.toLowerCase().includes(kb.busca.toLowerCase()))return false;
 if(!a.feito&&dias(a)<0)return true; // atraso nunca sai pelo período
 if(kb.periodo==='Este mês')return a.data.getMonth()===HOJE.getMonth()&&a.data.getFullYear()===HOJE.getFullYear();
 if(kb.periodo==='Próximos 7 dias')return dias(a)>=0&&dias(a)<=7;
 return true}
function cartao(a){return `<article class="kcard" draggable="true" tabindex="0" data-card="${a.id}" aria-label="${a.tipo}: ${a.titulo}">${tipoEl(a)}<div class="title">${a.titulo}</div><div class="meta">${a.caso}</div>${a.tags.length?`<div class="ktags">${a.tags.map(t=>`<span class="ktag">${t}</span>`).join('')}</div>`:''}<div class="kpe">${due(a)}<span class="flags">${a.alta?'<span class="flag high">Alta</span>':''}${a.novos?`<span class="flag new">${ic('chat',13)}${a.novos}</span>`:''}<span class="avatar">${a.resp}</span></span></div></article>`}
function vKanban(){const B=boards[kb.board],todos=dados.some(a=>a.board===kb.board),its=visiveis().filter(filtrosKb);
 return `<div class="kb">`+B.cols.map((c,i)=>{const l=its.filter(a=>colDe(a)===c).sort((x,y)=>x.data-y.data),ult=i===B.cols.length-1;
  const cab=kb.edit===c?`<input id="kb-nome" value="${esc(c)}" aria-label="Nome da coluna">`:`<span>${c}</span><span class="n">${l.length}</span><div class="ddn"><button class="kh-btn" data-kb="colmenu" aria-label="Opções da coluna ${c}" aria-expanded="false">${ic('more',15)}</button><div class="menu" role="menu" hidden>${ult?'':`<button role="menuitem" data-kb="renomear" data-col="${esc(c)}">Renomear coluna</button>`}<button role="menuitem" data-kb="addcol" data-col="${esc(c)}">Adicionar coluna antes</button></div></div>`;
  const vazio=!l.length?(!todos&&i===0?`<div class="kvazio"><b>Este quadro ainda não tem atividades</b>Adicione a primeira para começar.</div>`:`<div class="kvazio">Nenhuma atividade nesta coluna.</div>`):'';
  return `<section class="kc" data-col="${esc(c)}" aria-label="Coluna ${c}"><div class="kh">${cab}</div>${l.map(cartao).join('')}${vazio}<button class="kadd" data-kb="nova" data-col="${esc(c)}">${ic('plus',14)}Nova atividade</button></section>`}).join('')+'</div>'}
function moverCartao(a,c){const ant={col:a.col,feito:a.feito};if(colDe(a)===c)return;a.feito=c===fimCol()?1:0;if(!a.feito)a.col=c;render();aviso(`Movida para ${c}.`,()=>{a.col=ant.col;a.feito=ant.feito});anima(document.querySelector(`[data-card="${a.id}"]`),[{transform:'scale(.95)',opacity:.4},{transform:'none',opacity:1}],DUR.base,POP)}
function fecharModal(el){if(!el.open||el.dataset.fechando)return;const a=anima(el,[{opacity:1,transform:'none'},{opacity:0,transform:'scale(.97)'}],160);if(!a){el.close();return}el.dataset.fechando='1';a.onfinish=()=>{el.close();delete el.dataset.fechando}}
function abrirModal(el){el.showModal();anima(el,[{opacity:0,transform:'translateY(10px) scale(.96)'},{opacity:1,transform:'none'}],DUR.slow,IOS)}
function menuSimples(btn,menu,itens,onPick){const abrir=()=>{menu.innerHTML=itens().map(([v,t,on])=>`<button type="button" role="option" aria-selected="${!!on}" data-v="${esc(v)}">${t}</button>`).join('');menu.hidden=false;btn.setAttribute('aria-expanded','true');anima(menu,[{opacity:0,transform:'scale(.94) translateY(-4px)'},{opacity:1,transform:'none'}],DUR.slow,IOS);(menu.querySelector('[aria-selected=true]')||menu.querySelector('button')).focus()};
 const fechar=f=>{if(menu.hidden)return;btn.setAttribute('aria-expanded','false');const a=anima(menu,[{opacity:1,transform:'none'},{opacity:0,transform:'scale(.97)'}],130);if(a)a.onfinish=()=>menu.hidden=true;else menu.hidden=true;if(f)btn.focus()};
 btn.addEventListener('click',e=>{e.stopPropagation();menu.hidden?abrir():fechar()});
 menu.addEventListener('click',e=>{const b=e.target.closest('[data-v]');if(!b)return;e.stopPropagation();onPick(b.dataset.v);fechar(true)});
 menu.addEventListener('keydown',e=>{const l=[...menu.querySelectorAll('button')],i=l.indexOf(document.activeElement);if(e.key==='ArrowDown'){e.preventDefault();l[(i+1)%l.length].focus()}if(e.key==='ArrowUp'){e.preventDefault();l[(i-1+l.length)%l.length].focus()}if(e.key==='Escape')fechar(true);if(e.key==='Tab')fechar()});
 document.addEventListener('click',()=>fechar())}
function detalhes(a){const el=document.getElementById('kb-det');document.getElementById('kd-tit').textContent=a.titulo.replace(/&amp;/g,'&');document.getElementById('kd-dl').innerHTML=`<dt>Tipo</dt><dd>${a.tipo}</dd><dt>Data</dt><dd>${due(a)}</dd><dt>Responsável</dt><dd>${a.resp==='JA'?'Você':a.resp}</dd><dt>Processo ou caso</dt><dd>${a.caso}${a.proc?`<br>${a.proc}`:''}</dd><dt>Etiquetas</dt><dd>${a.tags.join(', ')||'Sem etiquetas'}</dd><dt><label for="kd-mover">Coluna</label></dt><dd><select id="kd-mover" data-acao="mover" data-id="${a.id}" style="margin:0">${boards[a.board].cols.map(o=>`<option ${o===colDe(a)?'selected':''}>${o}</option>`).join('')}</select></dd>`;const b=document.getElementById('kd-concluir');b.textContent=a.feito?'Reabrir':'Concluir';b.dataset.id=a.id;hydrate(el);abrirModal(el)}
function renomear(){const i=document.getElementById('kb-nome');if(!i||!kb.edit)return;const de=kb.edit,novo=esc(i.value.trim())||de,B=boards[kb.board];kb.edit=null;if(novo!==de&&!B.cols.includes(novo)){B.cols[B.cols.indexOf(de)]=novo;dados.forEach(a=>{if(a.board===kb.board&&a.col===de)a.col=novo})}render()}
document.addEventListener('DOMContentLoaded',()=>{
 const $=i=>document.getElementById(i);
 menuSimples($('kb-board'),$('kb-board-menu'),()=>[...Object.entries(boards).map(([k,b])=>[k,b.nome,k===kb.board]),['__novo','+ Novo quadro',false]],v=>{if(v==='__novo'){nBoards++;v='q'+nBoards;boards[v]={nome:`Novo quadro ${nBoards}`,cols:['A fazer','Fazendo','Concluído']};aviso('Quadro criado.')}kb.board=v;$('kb-board-val').textContent=boards[v].nome;render();entrar()});
 menuSimples($('kb-periodo'),$('kb-periodo-menu'),()=>['Este mês','Próximos 7 dias','Todos os períodos'].map(p=>[p,p,p===kb.periodo]),v=>{kb.periodo=v;$('kb-periodo-val').textContent=v;render()});
 menuSimples($('kb-tag'),$('kb-tag-menu'),()=>['Todas',...new Set(dados.flatMap(a=>a.tags))].map(t=>[t,t,t===kb.tag]),v=>{kb.tag=v;$('kb-tag-val').textContent=v;$('kb-tag').classList.toggle('active',v!=='Todas');render()});
 $('kb-q').addEventListener('input',e=>{kb.busca=e.target.value;render()});
 $('kb-att').addEventListener('click',()=>{render();aviso('Quadro atualizado.')});
 $('kb-nova').addEventListener('click',()=>abrirNova(boards[kb.board].cols[0]));
 function abrirNova(c,dt){const el=$('kb-novo');el.dataset.col=c;$('kn-col').textContent=`Coluna: ${c}`;$('kn-tit').value='';$('kn-data').value=dt||'';$('kn-erro').hidden=true;$('kn-tit').classList.remove('err');$('kn-data').classList.remove('err');abrirModal(el);$('kn-tit').focus()}
 window.abrirNova=abrirNova;
 $('kn-cancelar').addEventListener('click',()=>fecharModal($('kb-novo')));
 $('kd-fechar').addEventListener('click',()=>fecharModal($('kb-det')));
 ['kb-novo','kb-det'].forEach(i=>$(i).addEventListener('cancel',e=>{e.preventDefault();fecharModal($(i))}));
 $('kd-concluir').addEventListener('click',e=>{const a=dados.find(x=>x.id===+e.target.dataset.id),ant=a.feito;fecharModal($('kb-det'));a.feito=a.feito?0:1;render();aviso(a.feito?'Atividade concluída.':'Atividade reaberta.',()=>{a.feito=ant})});
 $('kn-form').addEventListener('submit',e=>{e.preventDefault();const t=$('kn-tit').value.trim(),v=$('kn-data').value;if(!t||!v){$('kn-erro').hidden=false;$('kn-tit').classList.toggle('err',!t);$('kn-data').classList.toggle('err',!v);(t?$('kn-data'):$('kn-tit')).focus();return}const[y,m,di]=v.split('-').map(Number),c=$('kb-novo').dataset.col,n={id:Date.now(),tipo:$('kn-tipo').value,titulo:esc(t),caso:'Sem processo vinculado',proc:'',data:new Date(y,m-1,di),resp:'JA',col:c===fimCol()?boards[kb.board].cols[0]:c,feito:c===fimCol()?1:0,board:kb.board,tags:[]};dados.push(n);fecharModal($('kb-novo'));render();aviso('Atividade criada.',()=>{dados=dados.filter(x=>x!==n)});anima(document.querySelector(`[data-card="${n.id}"]`),[{transform:'scale(.92)',opacity:0},{transform:'none',opacity:1}],DUR.slow,POP)});
 const area=$('conteudo');
 area.addEventListener('click',e=>{const b=e.target.closest('[data-kb]');
  if(b){e.stopPropagation();const k=b.dataset.kb,B=boards[kb.board];
   if(k==='nova')abrirNova(b.dataset.col);
   if(k==='colmenu'){const m=b.nextElementSibling,ab=m.hidden;document.querySelectorAll('.kh .menu').forEach(x=>x.hidden=true);m.hidden=!ab;b.setAttribute('aria-expanded',ab);if(ab){anima(m,[{opacity:0,transform:'scale(.94) translateY(-4px)'},{opacity:1,transform:'none'}],DUR.slow,IOS);m.querySelector('button').focus()}}
   if(k==='renomear'){kb.edit=b.dataset.col;render();const i=$('kb-nome');i.focus();i.select()}
   if(k==='addcol'){let nome='Nova coluna',n=2;while(B.cols.includes(nome))nome=`Nova coluna ${n++}`;B.cols.splice(B.cols.indexOf(b.dataset.col),0,nome);kb.edit=nome;render();const i=$('kb-nome');i.focus();i.select()}
   return}
  const c=e.target.closest('[data-card]');if(c)detalhes(dados.find(a=>a.id===+c.dataset.card))});
 area.addEventListener('keydown',e=>{if(e.target.id==='kb-nome'){if(e.key==='Enter')renomear();if(e.key==='Escape'){kb.edit=null;render()}return}if(e.key==='Escape'&&e.target.closest('.kh .menu')){const m=e.target.closest('.menu');m.hidden=true;m.previousElementSibling.focus();return}if(e.key==='Enter'&&e.target.matches('article[data-card]'))detalhes(dados.find(a=>a.id===+e.target.dataset.card))});
 area.addEventListener('focusout',e=>{if(e.target.id==='kb-nome')renomear()});
 area.addEventListener('dragstart',e=>{const c=e.target.closest('[data-card]');if(!c)return;e.dataTransfer.setData('text/plain',c.dataset.card);e.dataTransfer.effectAllowed='move';c.classList.add('arrastando')});
 area.addEventListener('dragend',e=>{e.target.closest?.('[data-card]')?.classList.remove('arrastando');document.querySelectorAll('.over-col').forEach(x=>x.classList.remove('over-col'))});
 area.addEventListener('dragover',e=>{const k=e.target.closest('.kc');if(!k)return;e.preventDefault();document.querySelectorAll('.over-col').forEach(x=>x!==k&&x.classList.remove('over-col'));k.classList.add('over-col')});
 area.addEventListener('drop',e=>{const k=e.target.closest('.kc');if(!k)return;e.preventDefault();const a=dados.find(x=>x.id===+e.dataTransfer.getData('text/plain'));if(a)moverCartao(a,k.dataset.col)});
 document.addEventListener('click',()=>document.querySelectorAll('.kh .menu').forEach(x=>x.hidden=true));
});
