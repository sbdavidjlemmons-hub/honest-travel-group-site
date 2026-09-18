/* Golden certificate journey bridge.
   Browser events are evidence of page progress only. Booking completion,
   attendance and revenue remain CRM/server facts and are never inferred here. */
(function () {
  'use strict';

  var ENDPOINT = 'https://hvm-lead-intake.lead-intake.workers.dev';
  var current = window.HVM_PAGE && window.HVM_PAGE.dest || 'golden-miami-cruise';

  function attribution() {
    try { return typeof window.hvmAttr === 'function' ? window.hvmAttr() : {}; }
    catch (_) { return {}; }
  }

  function source() {
    var a = attribution();
    if (a.gclid) return 'paid-search';
    if (a.fbclid) return 'paid-social';
    if (a.utm_medium === 'email') return 'email';
    if (/paid|cpc|ppc/i.test(a.utm_medium || '')) return 'paid';
    return document.referrer ? 'referral' : 'direct';
  }

  function hvm(eventName) {
    var price = eventName === 'certificate_flipped';
    var booking = eventName === 'booking_page_reached';
    var body = {
      net: 'net1', bucket: 'visit', event: eventName,
      visitorId: window.HVM_VID || 'v_anon', visitNo: 1,
      ts: new Date().toISOString(), kind: 'cert', family: 'cruise', dest: current,
      page: location.pathname + '#' + eventName,
      dwellMs: 0, scrollPct: 0,
      reachedPrice: price, reachedForm: booking, formStarted: false,
      source: source(), attribution: attribution()
    };
    var payload = JSON.stringify(body);
    try {
      if (navigator.sendBeacon && navigator.sendBeacon(ENDPOINT,
          new Blob([payload], { type: 'application/json' }))) return;
    } catch (_) {}
    try {
      fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: payload, keepalive: true }).catch(function () {});
    } catch (_) {}
  }

  function analytics(eventName) {
    var params = {
      content_name: current,
      content_category: 'golden-cruise-certificate',
      page_path: location.pathname
    };
    try {
      if (typeof window.gtag === 'function') window.gtag('event', eventName, params);
    } catch (_) {}
    try {
      if (typeof window.fbq === 'function') {
        if (eventName === 'certificate_viewed') window.fbq('track', 'ViewContent', params);
        else window.fbq('trackCustom', eventName, params);
      }
    } catch (_) {}
    hvm(eventName);
  }

  function choose(id) {
    current = id === 'west' ? 'golden-west-coast-mexico' : 'golden-miami-cruise';
    if (window.HVM_PAGE) window.HVM_PAGE.dest = current;
  }

  document.addEventListener('click', function (event) {
    var target = event.target && event.target.closest && event.target.closest('a,button,.card');
    if (!target) return;
    if (target.id === 'miami' || target.id === 'west') {
      choose(target.id);
      analytics('offer_clicked');
      return;
    }
    if (target.matches('.booking-hotspot,#join')) {
      analytics('booking_page_reached');
      return;
    }
    if (target.matches('.hotspot')) {
      analytics('offer_clicked');
      return;
    }
    if (target.id === 'turn' || target.matches('.card')) analytics('certificate_flipped');
  }, true);

  analytics('certificate_viewed');
})();
