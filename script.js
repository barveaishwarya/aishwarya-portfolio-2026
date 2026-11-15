const reduce=matchMedia('(prefers-reduced-motion: reduce)');
let paused=reduce.matches;
const motion=document.querySelector('#motion');
function setMotion(){document.body.classList.toggle('paused',paused);motion.setAttribute('aria-pressed',String(paused));motion.setAttribute('aria-label',paused?'Enable animation':'Pause animation');motion.querySelector('span').textContent=paused?'off':'on';document.documentElement.style.scrollBehavior=paused?'auto':'smooth'}
setMotion();motion.addEventListener('click',()=>{paused=!paused;setMotion()});reduce.addEventListener('change',e=>{paused=e.matches;setMotion()});
if('IntersectionObserver' in window){document.body.classList.add('js-motion');const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}
const character=document.querySelector('.character');let winkTimer;character.addEventListener('click',()=>{character.classList.add('wink');character.querySelector('.character-note').textContent='nice to meet you! ✳';clearTimeout(winkTimer);winkTimer=setTimeout(()=>{character.classList.remove('wink');character.querySelector('.character-note').textContent='psst… tap me ↗'},1200)});
window.addEventListener('scroll',()=>{const range=document.documentElement.scrollHeight-innerHeight;document.querySelector('.progress').style.width=(range>0?scrollY/range*100:0)+'%'},{passive:true});
document.querySelectorAll('.process-list details').forEach(detail=>detail.addEventListener('toggle',()=>{if(detail.open)document.querySelectorAll('.process-list details').forEach(other=>{if(other!==detail)other.open=false})}));


const customCursor = document.querySelector(".custom-cursor");

if (customCursor) {
    document.addEventListener("mousemove", (event) => {
        customCursor.style.left = `${event.clientX}px`;
        customCursor.style.top = `${event.clientY}px`;

        customCursor.classList.add("visible");
    });

    document.addEventListener("mouseleave", () => {
        customCursor.classList.remove("visible");
    });
}