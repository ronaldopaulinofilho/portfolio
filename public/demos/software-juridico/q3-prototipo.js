// Protótipo navegável. Lista, Agenda e Kanban leem o mesmo array: uma atividade, várias visões.
const HOJE=new Date(2026,10,4);
const d=(m,dia)=>new Date(2026,m-1,dia);
const TIPOS={Prazo:['prazo',1],Audiência:['audiencia',1],Evento:['evento',0],Tarefa:['tarefa',0]};
let dados=[
 {id:1,tipo:'Prazo',titulo:'Contestação',caso:'Almeida x Construtora Aurora',proc:'0001234-56.2026.8.24.0023',data:d(11,3),resp:'JA',alta:1,col:'A fazer'},
 {id:2,tipo:'Tarefa',titulo:'Enviar procuração assinada ao cliente',caso:'Nunes x Mercado Central',proc:'0004567-89.2025.8.24.0023',data:d(10,30),resp:'JA',col:'Fazendo'},
 {id:3,tipo:'Prazo',titulo:'Réplica à contestação',caso:'Ramos x Seguradora Litoral',proc:'0007890-12.2026.8.24.0045',data:d(11,4),resp:'JA',col:'Fazendo'},
 {id:4,tipo:'Audiência',titulo:'Audiência de conciliação',caso:'Ferreira x Banco Horizonte',proc:'0002345-67.2026.8.24.0023',data:d(11,4),hora:'14:00',resp:'JA',col:'A fazer'},
 {id:5,tipo:'Tarefa',titulo:'Revisar minuta de acordo',caso:'Lima x Transportes Serra',proc:'0003456-78.2026.8.24.0064',data:d(11,4),resp:'JA',novos:2,col:'A fazer'},
 {id:6,tipo:'Prazo',titulo:'Recurso inominado',caso:'Souza x Telecom Sul',proc:'0005678-90.2025.8.24.0007',data:d(11,5),resp:'JA',col:'A fazer'},
 {id:7,tipo:'Prazo',titulo:'Embargos de declaração',caso:'Costa x Imobiliária Norte',proc:'0006789-01.2026.8.24.0023',data:d(11,9),resp:'JA',col:'A fazer'},
 {id:8,tipo:'Evento',titulo:'Reunião de alinhamento com o cliente',caso:'Lima x Transportes Serra',proc:'0003456-78.2026.8.24.0064',data:d(11,10),resp:'JA',col:'A fazer'},
 {id:9,tipo:'Tarefa',titulo:'Protocolar substabelecimento',caso:'Souza x Telecom Sul',proc:'0005678-90.2025.8.24.0007',data:d(11,11),resp:'JA',col:'A fazer'},
 {id:10,tipo:'Prazo',titulo:'Alegações finais',caso:'Barros x Clínica Vida',proc:'0008901-23.2025.8.24.0023',data:d(10,28),resp:'MC',col:'A fazer'},
 {id:11,tipo:'Tarefa',titulo:'Atualizar cálculo de honorários',caso:'Dias x Editora Mar',proc:'0009012-34.2026.8.24.0023',data:d(11,4),resp:'MC',col:'Fazendo'},
];
let estado={visao:'Lista',dono:'Minhas',tipo:'Todos'};
let pubs=[{id:'p1',t:'Intimação para contrarrazões',c:'Almeida x Construtora Aurora',quando:'Hoje, 09:12',proc:'0001234-56.2026.8.24.0023',ia:1},{id:'p2',t:'Despacho de saneamento',c:'Ramos x Seguradora Litoral',quando:'Ontem',proc:'0007890-12.2026.8.24.0045'},{id:'p3',t:'Sentença publicada',c:'Nunes x Mercado Central',quando:'Ontem',proc:'0004567-89.2025.8.24.0023'}];

// Movimento: curvas inspiradas no iOS. Com "reduzir movimento", tudo acontece direto.
const IOS='cubic-bezier(.32,.72,0,1)',POP='cubic-bezier(.34,1.56,.64,1)',DUR={fast:120,base:240,slow:380};
const semMov=()=>matchMedia('(prefers-reduced-motion:reduce)').matches;
function anima(el,kf,d,e='ease'){if(!el||semMov()||!el.animate)return null;return el.animate(kf,{duration:d,easing:e})}
function entrar(){anima(document.getElementById('conteudo'),[{opacity:0,transform:'translateY(6px)'},{opacity:1,transform:'none'}],DUR.base,IOS)}
function setN(id,v){const el=document.getElementById(id),m=el.textContent!==String(v);el.textContent=v;if(m)anima(el,[{transform:'scale(1.25)'},{transform:'none'}],DUR.slow,POP)}
const NOMES={Lista:'Área de trabalho',Agenda:'Agenda',Kanban:'Gestão kanban'};
let saidas=[];
function sair(row){if(!row||semMov()){render();return}const h=row.offsetHeight;row.style.overflow='hidden';const a=row.animate([{height:h+'px',minHeight:0,opacity:1},{height:'0px',minHeight:0,paddingTop:0,paddingBottom:0,opacity:0}],{duration:DUR.slow,delay:180,easing:IOS,fill:'forwards'});saidas.push(a);a.onfinish=render}
function fecharAviso(){const t=document.getElementById('toast');clearTimeout(aviso.t);if(t.hidden)return;const a=anima(t,[{opacity:1,transform:'translate(-50%,0)'},{opacity:0,transform:'translate(-50%,10px)'}],DUR.base);if(a)a.onfinish=()=>t.hidden=true;else t.hidden=true}
function fecharDlg(){const d=document.getElementById('dlg');if(!d.open||d.dataset.fechando)return;const a=anima(d,[{opacity:1,transform:'none'},{opacity:0,transform:'scale(.97)'}],160);if(!a){d.close();return}d.dataset.fechando='1';a.onfinish=()=>{d.close();delete d.dataset.fechando}}
function thumbs(){document.querySelectorAll('.seg[role=group]').forEach(g=>{let t=g.querySelector('.thumb'),novo=!t;if(novo){t=document.createElement('span');t.className='thumb no-anim';g.prepend(t)}const b=g.querySelector('[aria-pressed=true]');t.style.width=b.offsetWidth+'px';t.style.transform=`translateX(${b.offsetLeft}px)`;if(novo){t.offsetWidth;t.classList.remove('no-anim')}})}
function montarCartoes(){document.querySelectorAll('aside .card').forEach(c=>{const h=c.querySelector('.ch'),b=c.querySelector('.cb');if(!b)return;const f=c.hasAttribute('data-closed'),g=document.createElement('div'),i=document.createElement('div');g.className='grp'+(f?' closed':'');i.className='grp-in';g.inert=f;b.replaceWith(g);g.append(i);i.append(b);h.setAttribute('role','button');h.tabIndex=0;h.setAttribute('aria-expanded',!f);const tg=()=>{const x=!g.classList.contains('closed');g.classList.toggle('closed',x);g.inert=x;h.setAttribute('aria-expanded',!x)};h.addEventListener('click',tg);h.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();tg()}})})}
function montarMenu(){const ch=document.getElementById('f-chip'),m=document.getElementById('f-menu'),sel=document.getElementById('f-tipo');
 m.innerHTML=[...sel.options].map(o=>`<button type="button" role="option" data-tipo="${o.value}">${o.value}</button>`).join('');
 const itens=()=>[...m.querySelectorAll('button')];
 const abrirM=()=>{itens().forEach(b=>b.setAttribute('aria-selected',b.dataset.tipo===estado.tipo));m.hidden=false;ch.setAttribute('aria-expanded','true');anima(m,[{opacity:0,transform:'scale(.94) translateY(-4px)'},{opacity:1,transform:'none'}],DUR.slow,IOS);(m.querySelector('[aria-selected=true]')||itens()[0]).focus()};
 const fecharM=f=>{if(m.hidden)return;ch.setAttribute('aria-expanded','false');const a=anima(m,[{opacity:1,transform:'none'},{opacity:0,transform:'scale(.97)'}],130);if(a)a.onfinish=()=>m.hidden=true;else m.hidden=true;if(f)ch.focus()};
 ch.addEventListener('click',e=>{e.stopPropagation();ch.getAttribute('aria-expanded')==='true'?fecharM():abrirM()});
 m.addEventListener('click',e=>{const b=e.target.closest('[data-tipo]');if(!b)return;e.stopPropagation();sel.value=b.dataset.tipo;sel.dispatchEvent(new Event('change',{bubbles:true}));fecharM(true)});
 m.addEventListener('keydown',e=>{const l=itens(),i=l.indexOf(document.activeElement);if(e.key==='ArrowDown'){e.preventDefault();l[(i+1)%l.length].focus()}if(e.key==='ArrowUp'){e.preventDefault();l[(i-1+l.length)%l.length].focus()}if(e.key==='Escape')fecharM(true);if(e.key==='Tab')fecharM()});
 document.addEventListener('click',()=>fecharM())}
let desfazer=null;
const fechados=new Set();
const dias=x=>Math.round((x.data-HOJE)/864e5);
const dm=x=>String(x.getDate()).padStart(2,'0')+'/'+String(x.getMonth()+1).padStart(2,'0');
const ic=(n,s=16)=>`<span data-i="${n}" data-s="${s}"></span>`;
function due(a){
 if(a.feito)return `<span class="due done">${ic('check',14)}Concluído</span>`;
 const n=dias(a),ds=dm(a.data);
 if(n<0)return `<span class="due overdue">${ic('alert',14)}${n===-1?'Venceu ontem':(a.tipo==='Prazo'?'Venceu há ':'Há ')+(-n)+' dias'} · ${ds}</span>`;
 if(n===0)return `<span class="due today">${ic('sun',14)}${a.hora?'Hoje, '+a.hora:(a.tipo==='Prazo'?'Hoje, até o fim do dia':'Hoje')}</span>`;
 if(n===1)return `<span class="due next">Amanhã · ${ds}</span>`;
 return `<span class="due next">Em ${n} dias · ${ds}</span>`;
}
const tipoEl=a=>`<span data-t="${a.tipo}" class="type ${TIPOS[a.tipo][1]?'strong':''}">${ic(TIPOS[a.tipo][0])}${a.tipo}</span>`;
function escopo(){return dados.filter(a=>estado.dono==='Equipe'||a.resp==='JA')}
// Regra do trade-off: atrasadas continuam visíveis com qualquer filtro de tipo.
function visiveis(){return escopo().filter(a=>a.feito||dias(a)<0||estado.tipo==='Todos'||a.tipo===estado.tipo)}
function linha(a){return `<div class="row ${dias(a)<0&&!a.feito?'is-overdue':''}" data-id="${a.id}"><button class="check" aria-label="Concluir: ${a.titulo}" data-acao="concluir" data-id="${a.id}"></button>${tipoEl(a)}<div class="main"><div class="title">${a.titulo}</div><div class="meta">${a.caso} · <a href="#" onclick="return false">${a.proc}</a><button class="copy" aria-label="Copiar número do processo" data-acao="copiar" data-p="${a.proc}">${ic('copy',13)}</button></div></div><div class="flags">${a.alta?'<span class="flag high">Alta</span>':''}${a.novos?`<span class="flag new">${ic('chat',13)}${a.novos} novos</span>`:''}</div><span class="avatar" title="${a.resp==='JA'?'Você':'Marina Costa'}">${a.resp}</span>${due(a)}</div>`}
function grupo(nome,itens){if(!itens.length)return'';const f=fechados.has(nome);return `<button class="gh" aria-expanded="${!f}" data-acao="grupo" data-nome="${nome}">${ic('up',14)}${nome} <span class="c">${itens.length}</span></button><div class="grp ${f?'closed':''}" ${f?'inert':''}><div class="grp-in">${itens.map(linha).join('')}</div></div>`}
function vLista(){
 const v=visiveis().filter(a=>!a.feito).sort((a,b)=>a.data-b.data);
 const at=v.filter(a=>dias(a)<0),ho=v.filter(a=>dias(a)===0),pr=v.filter(a=>dias(a)>0&&dias(a)<=7),de=v.filter(a=>dias(a)>7);
 const nota=estado.tipo!=='Todos'&&at.some(a=>a.tipo!==estado.tipo)?`<div class="gh" style="font-weight:450">Filtro de tipo ativo. As atrasadas continuam visíveis por segurança.</div>`:'';
 const vazio=!ho.length&&estado.tipo==='Todos'?'':(!ho.length&&!pr.length&&!de.length&&!at.length?`<div class="empty" style="margin:16px"><b>Nenhuma atividade com estes filtros</b><button class="btn sm" data-acao="limpar">Limpar filtros</button></div>`:'');
 return nota+grupo('Atrasadas',at)+grupo('Hoje',ho)+grupo('Próximos 7 dias',pr)+grupo('Depois',de)+vazio;
}
function resumo(){
 const v=escopo().filter(a=>!a.feito),c=f=>v.filter(f);
 const desc=l=>{const n={};l.forEach(a=>n[a.tipo]=(n[a.tipo]||0)+1);return Object.entries(n).map(([k,q])=>q+' '+k.toLowerCase()+(q>1?(k==='Audiência'?'s':'s'):'')).join(', ')||'Nada no momento'};
 const a=c(x=>dias(x)<0),h=c(x=>dias(x)===0),p=c(x=>dias(x)>0&&dias(x)<=7);
 setN('t-at',a.length);setN('t-ho',h.length);setN('t-pr',p.length);
 document.getElementById('d-ho').textContent=desc(h);document.getElementById('d-pr').textContent=desc(p);
 document.getElementById('n-pub').textContent=pubs.length;document.getElementById('nav-pub').textContent=pubs.length;
}
function vPubs(){
 document.getElementById('pubs').innerHTML=pubs.length?pubs.map((p,i)=>p.ia?`<div class="pub">${p.t}<small>${p.c} · ${p.quando}</small></div><div class="ai" style="margin:10px 0"><div class="ai-h">${ic('spark',14)}Sugestão da IA · Confira antes de salvar</div><div class="ai-t">Criar prazo para 26/11</div><div class="ai-d">15 dias úteis a partir de 05/11, considerando o feriado de 20/11. <a href="#" onclick="return false">Ver trecho usado</a></div><div class="ai-a"><button class="btn sm ai-go" data-acao="tratar" data-id="${p.id}" data-sug="1">Revisar e criar</button><button class="btn sm ghost" data-acao="ignorar" data-id="${p.id}">Ignorar</button></div></div>`:`<div class="pub2"><div class="pub">${p.t}<small>${p.c} · ${p.quando}</small></div><button class="btn sm ghost" style="color:var(--link)" data-acao="tratar" data-id="${p.id}">Tratar</button></div>`).join(''):`<p class="m" style="margin:0;font-size:13px">Nenhuma publicação a tratar.</p>`;
}
function render(){
 saidas.forEach(x=>{x.onfinish=null;x.cancel()});saidas=[];
 const c=document.getElementById('conteudo');
 c.innerHTML=estado.visao==='Lista'?vLista():estado.visao==='Agenda'?vAgenda():vKanban();
 document.querySelectorAll('nav [data-visao]').forEach(b=>{const on=b.dataset.visao===estado.visao;b.classList.toggle('on',on);on?b.setAttribute('aria-current','page'):b.removeAttribute('aria-current')});
 document.getElementById('pagina').dataset.pagina=estado.visao;const nome=NOMES[estado.visao];document.getElementById('titulo').textContent=nome;document.getElementById('titulo-ic').innerHTML=ic({Lista:'briefcase',Agenda:'cal',Kanban:'board'}[estado.visao],18);document.title=nome+' · Protótipo';
 document.querySelectorAll('[data-dono]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.dono===estado.dono));
 document.getElementById('f-tipo').value=estado.tipo;document.getElementById('f-chip').classList.toggle('active',estado.tipo!=='Todos');document.getElementById('f-val').textContent=estado.tipo;
 resumo();vPubs();hydrate();thumbs();
}
function aviso(msg,fn){const t=document.getElementById('toast');desfazer=fn;t.innerHTML=`<span>${msg}</span>${fn?'<button class="btn sm" style="background:transparent;color:#fff;border-color:#fff" data-acao="desfazer">Desfazer</button>':''}`;t.hidden=false;anima(t,[{opacity:0,transform:'translate(-50%,14px) scale(.96)'},{opacity:1,transform:'translate(-50%,0)'}],DUR.slow,IOS);clearTimeout(aviso.t);aviso.t=setTimeout(fecharAviso,8000)}
document.addEventListener('click',e=>{
 const v=e.target.closest('[data-visao]');if(v){e.preventDefault();estado.visao=v.dataset.visao;render();entrar();document.getElementById('titulo').focus({preventScroll:true});return}
 const ln=e.target.closest('nav a');if(ln){e.preventDefault();aviso('Esta página não faz parte do protótipo.');return}
 const lk=e.target.closest('a[href="#"]');if(lk)e.preventDefault();
 const o=e.target.closest('[data-dono]');if(o){estado.dono=o.dataset.dono;render();entrar();return}
 const b=e.target.closest('[data-acao]');if(!b)return;const ac=b.dataset.acao,id=+b.dataset.id;
 if(ac==='concluir'){const a=dados.find(x=>x.id===id);a.feito=1;b.classList.add('on');b.innerHTML=ic('check',13);hydrate(b);resumo();aviso('Atividade concluída.',()=>{a.feito=0});sair(b.closest('.row'));}
 if(ac==='desfazer'){desfazer&&desfazer();fecharAviso();render()}
 if(ac==='copiar'){navigator.clipboard&&navigator.clipboard.writeText(b.dataset.p).catch(()=>{});aviso('Número do processo copiado.')}
 if(ac==='grupo'){const n=b.dataset.nome,f=!fechados.has(n);f?fechados.add(n):fechados.delete(n);b.setAttribute('aria-expanded',!f);const g=b.nextElementSibling;g.classList.toggle('closed',f);g.inert=f}
 if(ac==='limpar'){estado.tipo='Todos';render()}
 if(ac==='ignorar'){const p=pubs.find(x=>x.id===b.dataset.id);p.ia=0;render();aviso('Sugestão ignorada. A publicação continua a tratar.')}
 if(ac==='tratar'){abrir(b.dataset.id,b.dataset.sug)}
 if(ac==='voltar'){aviso('No produto real, esta ação voltaria à versão anterior.')}
});
document.addEventListener('change',e=>{
 if(e.target.id==='f-tipo'){estado.tipo=e.target.value;render()}
 if(e.target.dataset.acao==='mover'){const a=dados.find(x=>x.id===+e.target.dataset.id);const dt=document.getElementById('kb-det');if(dt.open)fecharModal(dt);moverCartao(a,e.target.value)}
});
let atual=null;
function abrir(id,sug){atual=pubs.find(p=>p.id===id);const dl=document.getElementById('dlg');document.getElementById('dl-sub').textContent=atual.t+' · '+atual.c;document.getElementById('dl-tit').value=atual.ia?'Contrarrazões':'';document.getElementById('dl-data').value=sug?'2026-11-26':'';document.getElementById('dl-erro').hidden=true;document.getElementById('dl-data').classList.remove('err');document.getElementById('dl-ia').hidden=!sug;dl.showModal();document.getElementById('dl-tit').focus();anima(dl,[{opacity:0,transform:'translateY(10px) scale(.96)'},{opacity:1,transform:'none'}],DUR.slow,IOS)}
document.getElementById('dl-form').addEventListener('submit',e=>{
 e.preventDefault();const t=document.getElementById('dl-tit').value.trim(),v=document.getElementById('dl-data').value;
 if(!t||!v){document.getElementById('dl-erro').hidden=false;document.getElementById('dl-data').classList.toggle('err',!v);(v?document.getElementById('dl-tit'):document.getElementById('dl-data')).focus();return}
 const [y,m,di]=v.split('-').map(Number);const n={id:Date.now(),tipo:'Prazo',titulo:t,caso:atual.c,proc:atual.proc,data:new Date(y,m-1,di),resp:'JA',col:'A fazer'};
 dados.push(n);const pub=atual;pubs=pubs.filter(p=>p!==atual);fecharDlg();render();
 aviso('Prazo criado a partir da publicação.',()=>{dados=dados.filter(x=>x!==n);pubs.unshift(pub)});
});
document.getElementById('dl-cancelar').addEventListener('click',fecharDlg);
document.getElementById('dlg').addEventListener('cancel',e=>{e.preventDefault();fecharDlg()});
document.addEventListener('DOMContentLoaded',()=>{montarMenu();montarCartoes();render()});
