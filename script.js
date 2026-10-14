const pgs=[...document.querySelectorAll('.pg')],ls=[...document.querySelectorAll('a.l')],nav=document.getElementById('nav'),bar=document.getElementById('bar');
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('v');io.unobserve(x.target)}}),{threshold:.12});
function cnt(el){const n=+el.dataset.n,d=n%1?1:0;let t=0;const s=performance.now();(function f(now){t=Math.min((now-s)/1400,1);el.textContent=(n*t).toFixed(d);if(t<1)requestAnimationFrame(f)})(s)}
function route(){const h=(location.hash||'#home').slice(1);const id=pgs.some(p=>p.id==h)?h:'home';
pgs.forEach(p=>p.classList.toggle('on',p.id==id));ls.forEach(a=>a.classList.toggle('on',a.getAttribute('href')=='#'+id));
bar.classList.remove('open');window.scrollTo(0,0);
document.querySelectorAll('#'+id+' .rv').forEach((e,i)=>{e.classList.remove('v');e.style.transitionDelay=(i%4*.08)+'s';io.observe(e)});
if(id=='home')document.querySelectorAll('[data-n]').forEach(cnt)}
addEventListener('hashchange',route);route();
addEventListener('scroll',()=>nav.classList.toggle('s',scrollY>30),{passive:true});
document.getElementById('bg').onclick=()=>bar.classList.toggle('open');
