export function createPreviewKey(source=crypto){return 'preview-'+Array.from(source.getRandomValues(new Uint8Array(16)),b=>b.toString(16).padStart(2,'0')).join('');}
export class BookingJourney {
 constructor(offer,key){this.offer={...offer};this.key=key;this.answers={};this.slot=null;this.stage='qualification';this.pending=null;this.confirmation=null;}
 answer(key,value){this.answers[key]=value;}
 back(){this.stage='qualification';}
 select(startTime){if(this.pending)throw Error('Booking is in progress');if(!Number.isFinite(Date.parse(startTime)))throw Error('Choose a valid appointment');if(this.slot!==startTime)this.confirmation=null;this.slot=startTime;this.stage='review';}
 payload(contact={}){const {offer,certificateId,destination,calendarId,timezone}=this.offer;const {firstName,email,phone,acknowledge,marketing}=contact;return {offer,certificateId,destination,calendarId,timezone,firstName,email,phone,acknowledge,marketing,startTime:this.slot,qualifyAnswers:{...this.answers},idempotencyKey:this.key+':'+this.slot};}
 async confirm(create,contact={}){
  if(this.confirmation)return this.confirmation;if(this.pending)return this.pending;
  if(!this.slot||this.answers.q1!=='yes'||this.answers.q2!=='yes')throw Error('Complete qualification and select an appointment');
  this.stage='submitting';
  this.pending=(async()=>{try{const r=await create(this.payload(contact));if(!r?.ok||!r.eventId||r.startTime!==this.slot||r.timezone!==this.offer.timezone)throw Error('We could not verify the booking confirmation. Your selected time is retained.');this.confirmation=r;this.stage='confirmed';return r;}catch(e){this.stage='review';throw e;}finally{this.pending=null;}})();return this.pending;
 }
}
