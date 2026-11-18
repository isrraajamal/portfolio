/* Renders project.html?p=<slug> from window.PROJECTS (js/projects.js) */
(function () {
  'use strict';

  var root = document.getElementById('caseStudy');
  var list = window.PROJECTS || [];
  if (!root) return;

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  var slug = new URLSearchParams(location.search).get('p');
  var i = list.findIndex(function (p) { return p.slug === slug; });

  /* ----- Not found ----- */
  if (i === -1) {
    document.title = 'Project not found | Israa Gamal';
    root.innerHTML =
      '<section class="case-hero text-center"><div class="container">' +
      '<span class="eyebrow"><i class="bi bi-emoji-frown"></i> 404</span>' +
      '<h1>We couldn’t find that project.</h1>' +
      '<p class="lead-text mx-auto">It may have moved or the link is incorrect. Let’s get you back to my work.</p>' +
      '<a href="index.html#work" class="btn btn-maroon btn-lg"><i class="bi bi-arrow-left me-2"></i>Back to My Work</a>' +
      '</div></section>';
    return;
  }

  var p = list[i], next = list[(i + 1) % list.length];
  document.title = p.title + ' | Case Study | Israa Gamal';
  var meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', p.summary);

  /* ----- Screenshots or placeholders ----- */
  var shots = '';
  var imgs = p.shots || [];
  var dots = '<div class="bar"><i></i><i></i><i></i></div>';

  // width/height from the optimiser's size table, so the page never jumps while images load
  function sz(u) { var d = (window.IMG_DIMS || {})[u]; return d ? ' width="' + d[0] + '" height="' + d[1] + '"' : ''; }

  function alt(n) { return esc(p.title) + ' screenshot ' + n; }

  if (!imgs.length) {
    for (var s = 0; s < 3; s++) {
      shots += '<div class="col-md-4 reveal" style="--d:' + (s * 0.1) + 's"><div class="shot shot-ph ' + p.color + '"><i class="bi ' + p.icon + '"></i><div class="mock"><span></span><span></span><span></span></div><small>Screenshot ' + (s + 1) + '</small></div></div>';
    }
  } else {
    // Sort screenshots by type using the file name: *mobile* → phone, *full* → scrollable page, others → desktop
    var mobile = imgs.filter(function (u) { return /mobile/i.test(u); });
    var full = imgs.filter(function (u) { return /full/i.test(u); });
    var desk = imgs.filter(function (u) { return !/mobile|full/i.test(u); });

    if (imgs.length > 8) {
      // Compact mode for big projects: one tab per screenshot type, each a strip of equal-size cards
      var zoom = '<span class="g-zoom" aria-hidden="true"><i class="bi bi-arrows-fullscreen"></i></span>';
      var groups = [];
      if (desk.length) groups.push({ k: 'desk', label: 'Desktop', n: desk.length, items: desk.map(function (u, i) {
        return '<a class="g-card g-desk" href="' + esc(u) + '" target="_blank" rel="noopener" aria-label="Open desktop screenshot ' + (i + 1) + ' of ' + desk.length + '">' + dots + '<span class="g-ph"><img src="' + esc(u) + '"' + sz(u) + ' alt="' + alt(i + 1) + '" loading="lazy" decoding="async"></span>' + zoom + '</a>'; }).join('') });
      if (mobile.length) groups.push({ k: 'mob', label: 'Mobile', n: mobile.length, items: mobile.map(function (u, i) {
        return '<a class="g-card g-phone" href="' + esc(u) + '" target="_blank" rel="noopener" aria-label="Open mobile screenshot ' + (i + 1) + ' of ' + mobile.length + '"><span class="g-ph"><img src="' + esc(u) + '"' + sz(u) + ' alt="' + esc(p.title) + ' mobile view ' + (i + 1) + '" loading="lazy" decoding="async"></span>' + zoom + '</a>'; }).join('') });
      if (full.length) groups.push({ k: 'full', label: 'Full page', n: 0, items: full.map(function (u) {
        return '<a class="g-card g-fullpage" data-tall="1" href="' + esc(u) + '" target="_blank" rel="noopener" aria-label="Open the full page">' + dots + '<span class="g-ph"><img src="' + esc(u) + '"' + sz(u) + ' alt="' + esc(p.title) + ' full page" loading="lazy" decoding="async"></span><span class="g-hint"><i class="bi bi-mouse"></i> Scroll or hover to explore · click to open</span></a>'; }).join('') });
      // Full page first, so it is the default tab
      var fi = groups.map(function (g) { return g.k; }).indexOf('full');
      if (fi > 0) groups.unshift(groups.splice(fi, 1)[0]);
      var cfg = { desk: { cls: 'is-desk', init: 6, step: 6 }, mob: { cls: 'is-mob', init: 5, step: 10 }, full: { cls: 'is-full', init: 99, step: 0 } };
      shots = '<div class="col-12 reveal"><div class="gal" data-gal><div class="gal-tabs" role="tablist" aria-label="Screenshot types">' +
        groups.map(function (g, i) { return '<button type="button" role="tab" class="gal-tab' + (i ? '' : ' on') + '" data-panel="' + g.k + '" aria-selected="' + (i ? 'false' : 'true') + '">' + g.label + (g.n ? ' <b>' + g.n + '</b>' : '') + '</button>'; }).join('') +
        '</div>' +
        groups.map(function (g, i) { var c = cfg[g.k]; return '<div class="gal-panel' + (i ? '' : ' on') + '" data-panel="' + g.k + '" data-init="' + c.init + '" data-step="' + c.step + '">' + (g.k === 'mob' ? '<p class="gal-tip"><i class="bi bi-mouse"></i> Scroll inside a phone to see the whole screen · click to enlarge</p>' : '') + '<div class="gal-grid ' + c.cls + '">' + g.items + '</div>' + (c.step ? '<div class="gal-more-wrap"><button type="button" class="gal-more">Show more <b></b></button></div>' : '') + '</div>'; }).join('') +
        '</div></div>';
    } else {
      desk.forEach(function (u, i) {
        var cls = desk.length === 1 ? 'col-lg-10' : (i === 0 && desk.length % 2 === 1 ? 'col-12' : 'col-md-6');
        shots += '<div class="' + cls + ' reveal"><a class="browser" href="' + esc(u) + '" target="_blank" rel="noopener" aria-label="Open screenshot full size">' + dots + '<img src="' + esc(u) + '"' + sz(u) + ' alt="' + alt(i + 1) + '" loading="lazy" decoding="async"></a></div>';
      });

      mobile.forEach(function (u) {
        shots += '<div class="' + (full.length ? 'col-lg-4' : 'col-lg-4') + ' reveal"><a class="phone" href="' + esc(u) + '" target="_blank" rel="noopener" aria-label="Open mobile screenshot full size"><img src="' + esc(u) + '"' + sz(u) + ' alt="' + esc(p.title) + ' mobile view" loading="lazy" decoding="async"></a></div>';
      });

      full.forEach(function (u) {
        shots += '<div class="' + (mobile.length ? 'col-lg-8' : 'col-lg-10') + ' reveal"><figure class="browser scroller">' +
          '<div class="bar"><i></i><i></i><i></i><span><i class="bi bi-mouse"></i> Scroll to explore the full page</span></div>' +
          '<div class="scroll-area" tabindex="0"><img src="' + esc(u) + '"' + sz(u) + ' alt="' + esc(p.title) + ' full page" loading="lazy" decoding="async"></div></figure></div>';
      });
    }
  }

  var buttons = '';
  if (p.live) buttons += '<a class="btn btn-maroon" href="' + esc(p.live) + '" target="_blank" rel="noopener">Live site <i class="bi bi-box-arrow-up-right ms-2"></i></a>';
  if (p.code) buttons += '<a class="btn btn-ghost" href="' + esc(p.code) + '" target="_blank" rel="noopener"><i class="bi bi-github me-2"></i>Source code</a>';

  root.innerHTML =
    /* Hero */
    '<section class="case-hero"><div class="container">' +
      '<a class="back-link" href="index.html#work"><i class="bi bi-arrow-left"></i> All projects</a>' +
      '<div class="row align-items-center gy-4">' +
        '<div class="col-lg-6 reveal">' +
          '<span class="tag">' + esc(p.tag) + '</span>' +
          '<h1>' + esc(p.title) + '</h1>' +
          '<p class="lead-text">' + esc(p.summary) + '</p>' +
          (buttons ? '<div class="d-flex flex-wrap gap-3">' + buttons + '</div>' : '') +
        '</div>' +
        '<div class="col-lg-6 reveal" style="--d:.12s"><div class="case-visual ' + p.color + (p.cover ? ' has-shot' : '') + '">' +
          (p.cover ? '<img src="' + esc(p.cover) + '"' + sz(p.cover) + ' alt="' + esc(p.title) + ' preview" fetchpriority="high" decoding="async">' : '<i class="bi ' + p.icon + '"></i><div class="mock"><span></span><span></span><span></span></div>') + '</div></div>' +
      '</div>' +
    '</div></section>' +

    /* Meta strip */
    '<section class="stripes meta-strip"><div class="container"><div class="meta-card reveal"><div class="row g-4">' +
      '<div class="col-6 col-md-3"><small>Role</small><b>' + esc(p.role) + '</b></div>' +
      '<div class="col-6 col-md-3"><small>Year</small><b>' + esc(p.year) + '</b></div>' +
      '<div class="col-6 col-md-3"><small>Timeline</small><b>' + esc(p.duration) + '</b></div>' +
      '<div class="col-6 col-md-3"><small>Type</small><b>' + esc(p.tag) + '</b></div>' +
    '</div></div></div></section>' +

    /* Story */
    '<section class="section"><div class="container"><div class="row gy-5">' +
      '<div class="col-lg-5 reveal"><span class="kicker">The challenge</span><h2 class="title">What the project needed</h2>' +
        '<p class="text-body-muted">' + esc(p.challenge) + '</p>' +
        '<h3 class="mini-title">Tools used</h3><div class="chips">' +
        p.tools.map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('') + '</div></div>' +
      '<div class="col-lg-7 reveal" style="--d:.1s"><span class="kicker">The approach</span><h2 class="title">How I built it</h2>' +
        '<ol class="steps">' + p.approach.map(function (a) { return '<li>' + esc(a) + '</li>'; }).join('') + '</ol></div>' +
    '</div></div></section>' +

    /* Gallery */
    '<section class="stripes case-gallery"><div class="container">' +
      '<h2 class="title ribbon">A closer look</h2><div class="row g-4 justify-content-center">' + shots + '</div></div></section>' +

    /* Results */
    '<section class="section"><div class="container"><div class="text-center mb-4 reveal">' +
      '<span class="kicker">The outcome</span><h2 class="title">What it delivered</h2></div>' +
      '<div class="row g-4 justify-content-center">' +
      p.results.map(function (r, n) {
        return '<div class="col-md-4 reveal" style="--d:' + (n * 0.1) + 's"><div class="result"><i class="bi bi-check2-circle"></i><p>' + esc(r) + '</p></div></div>';
      }).join('') +
    '</div></div></section>' +

    /* Next project + CTA */
    '<section class="stripes next-sec"><div class="container"><div class="row g-4">' +
      '<div class="col-lg-6 reveal"><a class="next-card ' + next.color + '" href="project.html?p=' + encodeURIComponent(next.slug) + '">' +
        '<small>Next project</small><h3>' + esc(next.title) + '</h3><span>View case study <i class="bi bi-arrow-right"></i></span><i class="bi ' + next.icon + ' ghost-ic"></i></a></div>' +
      '<div class="col-lg-6 reveal" style="--d:.1s"><div class="next-card cta">' +
        '<small>Have an idea?</small><h3>Let’s build yours next.</h3>' +
        '<a class="btn btn-cream" href="index.html#contact">Start a project <i class="bi bi-send-heart ms-2"></i></a></div></div>' +
    '</div></div></section>';

  /* Reveal animations for the injected content */
  var els = Array.prototype.slice.call(root.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('in-view'); });
  }

  /* ----- Gallery tabs + sliders (large projects) ----- */
  function setShift(card) {
    var frame = card.querySelector('.g-ph'), im = card.querySelector('img');
    if (!frame || !im || !frame.clientHeight || !im.clientHeight) return;
    var shift = Math.max(0, im.clientHeight - frame.clientHeight);
    card.style.setProperty('--shift', shift);
    card.style.setProperty('--dur', Math.min(Math.max(shift * 5, 4000), 22000) + 'ms');
  }
  // Equal-size cards: mark the ones whose screenshot is taller than the frame (they scroll inside it)
  function markTall() {
    Array.prototype.slice.call(root.querySelectorAll('.g-desk, .g-phone')).forEach(function (card) {
      var ph = card.querySelector('.g-ph');
      if (!ph || !ph.clientHeight) return;                           // hidden tab
      card.classList.toggle('is-tall', ph.scrollHeight > ph.clientHeight + 4);
    });
  }
  var tallTimer = 0;
  function markTallSoon() { clearTimeout(tallTimer); tallTimer = setTimeout(markTall, 60); }
  window.addEventListener('resize', markTallSoon);
  window.addEventListener('load', markTallSoon);
  if (window.ResizeObserver) {
    var tallRO = new ResizeObserver(markTallSoon);
    Array.prototype.slice.call(root.querySelectorAll('.g-desk img, .g-phone img')).forEach(function (im) { tallRO.observe(im); });
  }
  // little "01 / 27" counter in each browser bar
  (function () {
    var cards = Array.prototype.slice.call(root.querySelectorAll('.g-desk'));
    cards.forEach(function (card, i) {
      var bar = card.querySelector('.bar'); if (!bar) return;
      var s = document.createElement('span'); s.className = 'g-num';
      s.textContent = ('0' + (i + 1)).slice(-2) + ' / ' + cards.length;
      bar.appendChild(s);
    });
  })();
  markTallSoon();

  function refreshShifts() { Array.prototype.slice.call(root.querySelectorAll('.g-fullpage')).forEach(setShift); }
  Array.prototype.slice.call(root.querySelectorAll('.g-fullpage img')).forEach(function (im) {
    if (im.complete) setShift(im.closest('.g-fullpage')); else im.addEventListener('load', function () { setShift(im.closest('.g-fullpage')); });
  });

  // Full-page window: scroll it with wheel / touch / drag-free swipe, or let it glide on hover until you take over
  Array.prototype.slice.call(root.querySelectorAll('.g-fullpage')).forEach(function (card) {
    var ph = card.querySelector('.g-ph'), raf = 0, last = 0, manual = false, gliding = false;
    function stop() { gliding = false; cancelAnimationFrame(raf); }
    function step(t) {
      if (!gliding) return;
      var max = ph.scrollHeight - ph.clientHeight;
      var speed = Math.max(70, max / 24);                         // px per second, whole page in about 24 s
      ph.scrollTop = Math.min(max, ph.scrollTop + (last ? (t - last) / 1000 * speed : 0));
      last = t;
      if (ph.scrollTop >= max) stop(); else raf = requestAnimationFrame(step);
    }
    card.addEventListener('mouseenter', function () {
      if (!window.matchMedia('(hover:hover)').matches) return;
      manual = false; gliding = true; last = 0; raf = requestAnimationFrame(step);
    });
    card.addEventListener('mouseleave', function () {
      stop();
      if (!manual) ph.scrollTo({ top: 0, behavior: 'smooth' });  // glide back only if you did not scroll yourself
    });
    ['wheel', 'touchstart', 'pointerdown', 'keydown'].forEach(function (ev) {
      ph.addEventListener(ev, function () { manual = true; stop(); }, { passive: true });
    });
  });
  window.addEventListener('resize', refreshShifts);

  Array.prototype.slice.call(root.querySelectorAll('[data-gal]')).forEach(function (g) {
    var tabs = Array.prototype.slice.call(g.querySelectorAll('.gal-tab')), panels = Array.prototype.slice.call(g.querySelectorAll('.gal-panel'));
    tabs.forEach(function (t) {
      t.addEventListener('click', function () {
        tabs.forEach(function (x) { x.classList.toggle('on', x === t); x.setAttribute('aria-selected', x === t); });
        panels.forEach(function (pn) { pn.classList.toggle('on', pn.getAttribute('data-panel') === t.getAttribute('data-panel')); });
        refreshShifts();
        markTallSoon();
      });
    });
    // Show the first few cards, reveal more on demand
    panels.forEach(function (pn) {
      var btn = pn.querySelector('.gal-more'); if (!btn) return;
      var cards = Array.prototype.slice.call(pn.querySelectorAll('.g-card'));
      var shown = +pn.getAttribute('data-init'), step = +pn.getAttribute('data-step');
      function apply() {
        cards.forEach(function (c, i) { c.classList.toggle('is-hidden', i >= shown); });
        var left = cards.length - shown;
        btn.parentNode.hidden = left <= 0;
        btn.querySelector('b').textContent = '(' + Math.max(left, 0) + ' more)';
        markTallSoon();
      }
      btn.addEventListener('click', function () { shown += step; apply(); });
      apply();
    });
  });

  /* ----- Image viewer (lightbox): X button, click outside, Esc, arrows ----- */
  var triggers = Array.prototype.slice.call(root.querySelectorAll('.case-visual.has-shot > img, .case-gallery a.browser, .case-gallery a.phone, .case-gallery a.g-card'));
  if (!triggers.length) return;

  var items = triggers.map(function (el) {
    var img = el.tagName === 'IMG' ? el : el.querySelector('img');
    return { src: img.currentSrc || img.src, alt: img.alt || '', tall: el.hasAttribute && el.hasAttribute('data-tall') };
  });

  var lb = document.createElement('div');
  lb.className = 'lb';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.setAttribute('aria-label', 'Image viewer');
  lb.innerHTML =
    '<button type="button" class="lb-close" aria-label="Close image"><i class="bi bi-x-lg"></i></button>' +
    '<button type="button" class="lb-nav lb-prev" aria-label="Previous image"><i class="bi bi-chevron-left"></i></button>' +
    '<img alt="">' +
    '<button type="button" class="lb-nav lb-next" aria-label="Next image"><i class="bi bi-chevron-right"></i></button>' +
    '<span class="lb-count"></span>';
  document.body.appendChild(lb);

  var lbImg = lb.querySelector('img'), lbCount = lb.querySelector('.lb-count');
  var current = 0, lastFocus = null;

  function show(i) {
    current = (i + items.length) % items.length;
    lbImg.src = items[current].src;
    lbImg.alt = items[current].alt;
    lbCount.textContent = (current + 1) + ' / ' + items.length;
    lb.classList.toggle('tall', !!items[current].tall);
    lbImg.onload = function () { if (lbImg.naturalWidth && lbImg.naturalHeight / lbImg.naturalWidth > 2.2) lb.classList.add('tall'); lb.scrollTop = 0; };
    lb.scrollTop = 0;
  }
  function open(i) {
    lastFocus = document.activeElement;
    show(i);
    lb.classList.add('open');
    document.body.classList.add('lb-lock');
    lb.querySelector('.lb-close').focus();
  }
  function close() {
    lb.classList.remove('open');
    document.body.classList.remove('lb-lock');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  triggers.forEach(function (el, i) {
    el.style.cursor = 'zoom-in';
    el.addEventListener('click', function (e) { e.preventDefault(); open(i); });
  });

  lb.addEventListener('click', function (e) {
    if (e.target === lb) close();                                  // click outside the image
    else if (e.target.closest('.lb-close')) close();               // X button
    else if (e.target.closest('.lb-prev')) show(current - 1);
    else if (e.target.closest('.lb-next')) show(current + 1);
  });

  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') show(current - 1);
    else if (e.key === 'ArrowRight') show(current + 1);
  });

  if (items.length < 2) lb.classList.add('single');
})();
