export class Gesture {
  start({x,y,id,control}){this.active={x,y,id,cancelled:!!control};}
  move({x,y,id}){const a=this.active;if(a&&a.id===id&&Math.hypot(x-a.x,y-a.y)>10)a.cancelled=true;}
  cancel(){if(this.active)this.active.cancelled=true;}
  end(point){this.move(point);const a=this.active;this.active=null;return !!a&&a.id===point.id&&!a.cancelled;}
}
export function mountCertificate(surface){
 const g=new Gesture(),motion=matchMedia('(prefers-reduced-motion: reduce)'),fine=matchMedia('(hover:hover) and (pointer:fine)');
 const front=surface.querySelector('.certificate-front'),back=surface.querySelector('.certificate-back'),stage=surface.closest('.certificate-stage');
 const hint=document.querySelector('[data-flip-hint]'),status=document.querySelector('[data-flip-status]');let flipped=false;
 const isControl=e=>!!e.target.closest('a,button,input,select,textarea,label,summary,[data-no-flip]');
 const clear=()=>{surface.classList.remove('pressed');surface.style.setProperty('--rx','0deg');surface.style.setProperty('--ry','0deg');stage.style.setProperty('--shadow-x','0px');};
 function flip(touch=false){flipped=!flipped;surface.dataset.side=flipped?'back':'front';front.inert=flipped;back.inert=!flipped;front.setAttribute('aria-hidden',String(flipped));back.setAttribute('aria-hidden',String(!flipped));if(status)status.textContent=flipped?'Certificate details. Tap again to see the artwork.':'Certificate artwork. Tap again to see the details.';clear();if(touch&&!motion.matches&&navigator.vibrate)navigator.vibrate(18);}
 front.inert=false;back.inert=true;back.setAttribute('aria-hidden','true');
 if(hint)hint.textContent=fine.matches?'Click certificate to flip':'Tap certificate to flip';
 surface.addEventListener('pointerdown',e=>{if(e.button!==0||!e.isPrimary)return;g.start({x:e.clientX,y:e.clientY,id:e.pointerId,control:isControl(e)});if(!isControl(e))surface.classList.add('pressed');});
 surface.addEventListener('pointermove',e=>{g.move({x:e.clientX,y:e.clientY,id:e.pointerId});if(g.active?.cancelled)surface.classList.remove('pressed');if(!fine.matches||motion.matches||e.pointerType!=='mouse'||isControl(e))return;const r=surface.getBoundingClientRect();surface.style.setProperty('--rx',((.5-(e.clientY-r.top)/r.height)*4).toFixed(2)+'deg');surface.style.setProperty('--ry',(((e.clientX-r.left)/r.width-.5)*5).toFixed(2)+'deg');stage.style.setProperty('--shadow-x',((.5-(e.clientX-r.left)/r.width)*12).toFixed(2)+'px');});
 surface.addEventListener('pointerup',e=>{const deliberate=g.end({x:e.clientX,y:e.clientY,id:e.pointerId});clear();if(deliberate&&!isControl(e)&&!(getSelection()?.toString()))flip(e.pointerType==='touch');});
 surface.addEventListener('pointercancel',()=>{g.cancel();clear();});
 surface.addEventListener('pointerleave',()=>{g.cancel();clear();});
 addEventListener('scroll',()=>{g.cancel();clear();},{passive:true,capture:true});
 // Adapted from Magic UI MagicCard's global reset pattern (MIT; see THIRD_PARTY_NOTICES.md).
 addEventListener('blur',()=>{g.cancel();clear();});
 document.addEventListener('visibilitychange',()=>{if(document.visibilityState!=='visible'){g.cancel();clear();}});
 surface.addEventListener('keydown',e=>{if(e.target===surface&&(e.key==='Enter'||e.key===' ')){e.preventDefault();flip();}});
 motion.addEventListener('change',clear);
 return {flip,get side(){return flipped?'back':'front'}};
}
