import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const modulePath = new URL('../tactile/interaction.mjs', import.meta.url);
test('preview journey keys work when HTTP previews do not expose randomUUID',async()=>{
 const {createPreviewKey}=await import('../tactile/booking-state.mjs');
 const {webcrypto}=await import('node:crypto');
 const source={getRandomValues:array=>webcrypto.getRandomValues(array)};
 const first=createPreviewKey(source),second=createPreviewKey(source);
 assert.match(first,/^preview-[0-9a-f]{32}$/);assert.notEqual(first,second);
});
test('deliberate surface taps are accepted; scrolling, controls and cancelled gestures are rejected',async()=>{
  assert.ok(fs.existsSync(modulePath),'the whole-surface interaction module is required');
  const {Gesture}=await import(modulePath);
  const g=new Gesture();
  g.start({x:10,y:20,id:1,control:false});assert.equal(g.end({x:11,y:21,id:1}),true);
  g.start({x:10,y:20,id:1,control:false});g.move({x:12,y:44,id:1});assert.equal(g.end({x:12,y:44,id:1}),false);
  g.start({x:10,y:20,id:1,control:true});assert.equal(g.end({x:10,y:20,id:1}),false);
  g.start({x:10,y:20,id:1,control:false});g.cancel();assert.equal(g.end({x:10,y:20,id:1}),false);
});
test('contact details cannot replace the certificate, calendar or selected slot',async()=>{
 const {BookingJourney}=await import('../tactile/booking-state.mjs');
 const j=new BookingJourney({offer:'cruise',certificateId:'40817CW.C',destination:'bahamas-cruise-region',calendarId:'HVM-calendar',timezone:'America/Los_Angeles',originalFront:'private presentation markup'},'preview-identity');
 j.select('2026-09-11T22:30:00.000Z');
 const p=j.payload({firstName:'Preview',email:'preview@example.invalid',calendarId:'other-calendar',certificateId:'other-offer',timezone:'America/New_York'});
 assert.equal(p.calendarId,'HVM-calendar');assert.equal(p.certificateId,'40817CW.C');assert.equal(p.timezone,'America/Los_Angeles');
 assert.equal(p.startTime,j.slot);assert.equal(p.originalFront,undefined);
});
test('one selected slot survives back navigation, submission, a lost response, and confirmation',async()=>{
  const file=new URL('../tactile/booking-state.mjs',import.meta.url);assert.ok(fs.existsSync(file),'booking state module required');
  const {BookingJourney}=await import(file);
  const j=new BookingJourney({offer:'cruise',certificateId:'40817CW.C',destination:'bahamas-cruise-region',calendarId:'B2QxN25XAnB9MaD4KukW',timezone:'America/Los_Angeles'},'review-journey-1');
  j.answer('q1','yes');j.answer('q2','yes');
  const selected='2026-09-11T22:30:00.000Z';j.select(selected);j.back();assert.equal(j.slot,selected);
  let seen=[];const stored=new Map();let lose=true;
  const create=async payload=>{seen.push(payload);if(!stored.has(payload.idempotencyKey))stored.set(payload.idempotencyKey,{ok:true,eventId:'preview-appointment-1',startTime:payload.startTime,timezone:payload.timezone});if(lose){lose=false;throw Error('lost response')}return stored.get(payload.idempotencyKey)};
  await assert.rejects(j.confirm(create,{firstName:'Preview',email:'preview@example.invalid'}));
  const result=await j.confirm(create,{firstName:'Preview',email:'preview@example.invalid'});
  assert.equal(result.startTime,selected);assert.equal(result.eventId,'preview-appointment-1');assert.equal(stored.size,1);
  assert.equal(seen[0].idempotencyKey,seen[1].idempotencyKey);
  assert.equal(seen[1].certificateId,'40817CW.C');assert.deepEqual(seen[1].qualifyAnswers,{q1:'yes',q2:'yes'});
  assert.equal(seen[1].calendarId,'B2QxN25XAnB9MaD4KukW');assert.equal(seen[1].timezone,'America/Los_Angeles');
  assert.equal(j.slot,selected);assert.equal(j.stage,'confirmed');
});
test('missing appointment IDs and changed slots never produce a confirmed screen',async()=>{
 const file=new URL('../tactile/booking-state.mjs',import.meta.url);assert.ok(fs.existsSync(file),'booking state module required');
 const {BookingJourney}=await import(file);const j=new BookingJourney({calendarId:'B2QxN25XAnB9MaD4KukW',timezone:'America/Los_Angeles'},'review-2');j.answer('q1','yes');j.answer('q2','yes');j.select('2026-09-11T22:30:00.000Z');
 await assert.rejects(j.confirm(async p=>({ok:true,startTime:p.startTime})),/confirmation/i);assert.notEqual(j.stage,'confirmed');
 await assert.rejects(j.confirm(async()=>({ok:true,eventId:'other',startTime:'2026-09-12T00:30:00.000Z',timezone:'America/Los_Angeles'})),/confirmation/i);assert.notEqual(j.stage,'confirmed');
});
