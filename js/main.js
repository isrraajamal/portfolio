(function () {
  'use strict';

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------- Header: scrolled state, active link, back-to-top ---------- */
  var header = $('#header'), toTop = $('#toTop');
  var links = $$('.nav-link');
  var isHome = !!$('#home');
  var sections = links.map(function (l) {
    var h = l.getAttribute('href');
    return isHome && h.charAt(0) === '#' ? $(h) : null;
  });

  function onScroll() {
    var y = window.scrollY;
    header.classList.toggle('scrolled', y > 30);
    toTop.classList.toggle('show', y > 600);
    if (!isHome) return; // inner pages set the active link in their markup

    // Find the section currently in view, then highlight every link (desktop + mobile menu) that points to it
    var pos = y + 140, currentHref = null;
    sections.forEach(function (s, i) { if (s && s.offsetTop <= pos) currentHref = links[i].getAttribute('href'); });
    links.forEach(function (l) { l.classList.toggle('active', !!currentHref && l.getAttribute('href') === currentHref); });
    if (typeof focusEl !== 'undefined' && focusEl && !focusEl.classList.contains('active')) focusEl = null;   // scrolling elsewhere releases a keyboard-focused link
    moveGlider();
  }

  /* ---------- Desktop menu: sliding highlight follows hover / current section ---------- */
  var capsule = $('.nav-capsule'), glider = capsule && $('.nav-glider', capsule);
  var capLinks = capsule ? $$('.nav-link', capsule) : [];
  var hoverEl = null, focusEl = null, leaveTimer = 0, lastX = null, lastW = null;
  function moveGlider() {
    if (!glider || capsule.offsetParent === null) return;      // hidden on mobile
    // Priority: mouse hover → keyboard focus → current section
    var target = hoverEl || focusEl || capLinks.filter(function (l) { return l.classList.contains('active'); })[0];
    capLinks.forEach(function (l) { l.classList.toggle('is-on', l === target); });
    if (!target) { glider.style.opacity = 0; return; }
    var c = capsule.getBoundingClientRect(), r = target.getBoundingClientRect();
    var x = Math.round(r.left - c.left - capsule.clientLeft), w = Math.round(r.width);   // whole pixels = no shimmer
    if (x !== lastX || w !== lastW) {
      glider.style.width = w + 'px';
      glider.style.transform = 'translateX(' + x + 'px)';
      lastX = x; lastW = w;
    }
    glider.style.opacity = 1;
    if (!glider.classList.contains('ready')) {
      void glider.offsetWidth;                                  // first placement without animating from 0
      glider.classList.add('ready');
    }
  }
  capLinks.forEach(function (l) {
    l.addEventListener('mouseenter', function () { clearTimeout(leaveTimer); hoverEl = l; moveGlider(); });
    // Only keyboard focus moves the highlight; a mouse click must not "stick" it to the clicked link
    l.addEventListener('focus', function () { if (l.matches(':focus-visible')) { focusEl = l; moveGlider(); } });
    l.addEventListener('blur', function () { if (focusEl === l) { focusEl = null; moveGlider(); } });
  });
  if (capsule) {
    // Short delay before returning to the current section, so crossing the gap between links never flickers
    capsule.addEventListener('mouseleave', function () {
      clearTimeout(leaveTimer);
      leaveTimer = setTimeout(function () { hoverEl = null; moveGlider(); }, 90);
    });
    window.addEventListener('resize', moveGlider);
    window.addEventListener('load', moveGlider);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(moveGlider);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

  // Mobile menu (offcanvas): close after choosing a link, then scroll to the section
  var oc = $('#navCanvas');
  if (oc && window.bootstrap) {
    var ocInst = window.bootstrap.Offcanvas.getOrCreateInstance(oc);
    $$('a[href]', oc).forEach(function (a) {
      a.addEventListener('click', function (e) {
        var h = a.getAttribute('href');
        if (h.charAt(0) !== '#' || h.length < 2) { if (h.charAt(0) !== '#') return; ocInst.hide(); return; }
        e.preventDefault();
        var target = $(h);
        oc.addEventListener('hidden.bs.offcanvas', function go() {
          oc.removeEventListener('hidden.bs.offcanvas', go);
          if (target) target.scrollIntoView({ behavior: 'smooth' });
          if (history.pushState) history.pushState(null, '', h);
        });
        ocInst.hide();
      });
    });
    // If the window grows to desktop size while the menu is open, close it
    var mq = window.matchMedia('(min-width: 992px)');
    var onMq = function (e) { if (e.matches) ocInst.hide(); };
    if (mq.addEventListener) mq.addEventListener('change', onMq); else if (mq.addListener) mq.addListener(onMq);
  }

  /* ---------- Counters ---------- */
  function countUp(el) {
    var target = +el.dataset.count, suffix = el.dataset.suffix || '', dur = 1400, start = null;
    function step(t) {
      if (!start) start = t;
      var p = Math.min((t - start) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- Reveal on scroll (+ triggers bars, rings, counters) ---------- */
  var animTargets = $$('.reveal, [data-bars], .skills .bar');
  function activate(el) {
    el.classList.add('in-view');
    $$('[data-count]', el).concat(el.matches('[data-count]') ? [el] : []).forEach(function (c) {
      if (!c.dataset.done) { c.dataset.done = 1; countUp(c); }
    });
    $$('.ring-fg', el).forEach(function (r) {
      r.style.strokeDashoffset = 314 - (314 * (+r.dataset.pct) / 100);
    });
    $$('.bar', el).forEach(function (b) { b.classList.add('in-view'); });
  }

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { activate(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    animTargets.forEach(function (el) { io.observe(el); });
  } else {
    animTargets.forEach(activate);
  }

  /* ---------- Portfolio filter ---------- */
  var filterBtns = $$('.filters button'), projects = $$('.project');
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var f = btn.dataset.filter;
      projects.forEach(function (p) {
        var show = f === 'all' || p.dataset.cat === f;
        p.classList.toggle('hide', !show);
        p.classList.remove('fade-in');
        if (show) { void p.offsetWidth; p.classList.add('fade-in'); }
      });
    });
  });

  if ($('#contactForm')) {
  /* ---------- Package buttons preselect plan in the form ---------- */
  var planSel = $('#plan');

  /* ---------- Custom select ---------- */
  var cs = $('#planSelect'), csBtn = $('.cs-btn', cs), csVal = $('.cs-val', cs), csList = $('.cs-list', cs);
  var csItems = $$('li', csList), csIndex = 0;

  function csOpen(open) {
    cs.classList.toggle('open', open);
    csBtn.setAttribute('aria-expanded', open);
    if (open) setActive(csItems.findIndex(function (i) { return i.classList.contains('selected'); }));
  }
  function setActive(i) {
    csIndex = (i + csItems.length) % csItems.length;
    csItems.forEach(function (li, n) { li.classList.toggle('active', n === csIndex); });
  }
  function choose(value) {
    planSel.value = value;
    csVal.textContent = value;
    csItems.forEach(function (li) {
      var on = li.dataset.value === value;
      li.classList.toggle('selected', on);
      li.setAttribute('aria-selected', on);
    });
  }
  csBtn.addEventListener('click', function () { csOpen(!cs.classList.contains('open')); });
  csItems.forEach(function (li, n) {
    li.addEventListener('mouseenter', function () { setActive(n); });
    li.addEventListener('click', function () { choose(li.dataset.value); csOpen(false); csBtn.focus(); });
  });
  document.addEventListener('click', function (e) { if (!cs.contains(e.target)) csOpen(false); });
  cs.addEventListener('keydown', function (e) {
    var open = cs.classList.contains('open');
    if (e.key === 'Escape') { csOpen(false); csBtn.focus(); }
    else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (!open) csOpen(true); else setActive(csIndex + (e.key === 'ArrowDown' ? 1 : -1));
    } else if ((e.key === 'Enter' || e.key === ' ') && open) {
      e.preventDefault(); choose(csItems[csIndex].dataset.value); csOpen(false);
    }
  });

  $$('[data-plan]').forEach(function (b) {
    b.addEventListener('click', function () { choose(b.dataset.plan); });
  });

  /* ---------- Contact form validation ---------- */
  var MAIL_TO = 'isrraa.gamal@gmail.com';   // where contact messages are delivered
  var form = $('#contactForm'), ok = $('#formSuccess');
  var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function validate(field) {
    var v = field.value.trim(), good = true;
    if (field.required && !v) good = false;
    if (good && field.minLength > 0 && v.length < field.minLength) good = false;
    if (good && field.type === 'email' && !emailRe.test(v)) good = false;
    field.classList.toggle('is-invalid', !good);
    field.classList.toggle('is-valid', good && !!v);
    return good;
  }

  $$('input[required], textarea[required]', form).forEach(function (f) {
    f.addEventListener('blur', function () { validate(f); });
    f.addEventListener('input', function () { if (f.classList.contains('is-invalid')) validate(f); });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var valid = $$('input[required], textarea[required]', form).map(validate).every(Boolean);
    if (!valid) return;
    if ($('#hp').value) return; // honeypot: bots fill this hidden field, people never do

    var data = {
      name: $('#name').value.trim(),
      email: $('#email').value.trim(),
      interested_in: planSel.value,
      message: $('#message').value.trim(),
      _subject: 'Portfolio inquiry: ' + planSel.value + ' (' + $('#name').value.trim() + ')',
      _replyto: $('#email').value.trim(),
      _template: 'table',
      _captcha: 'false'
    };

    var btn = $('button[type="submit"]', form), btnHtml = btn.innerHTML;
    var err = $('#formError');
    btn.disabled = true;
    btn.innerHTML = 'Sending… <span class="spinner-border spinner-border-sm ms-2" aria-hidden="true"></span>';
    ok.hidden = true; err.hidden = true;

    // FormSubmit.co forwards the message to the inbox below — no backend of our own needed.
    fetch('https://formsubmit.co/ajax/' + MAIL_TO, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(function (r) { return r.json().then(function (j) { return { ok: r.ok, body: j }; }); })
      .then(function (res) {
        if (!res.ok || String(res.body.success) === 'false') throw new Error(res.body.message || 'send failed');
        ok.hidden = false;
        form.reset();
        choose(planSel.options[0].value);
        $$('.is-valid', form).forEach(function (f) { f.classList.remove('is-valid'); });
      })
      .catch(function (e) {
        if (window.console) console.warn('Contact form:', e && e.message);
        // Fallback: let the visitor send it from their own email app
        var mailto = 'mailto:' + MAIL_TO + '?subject=' + encodeURIComponent(data._subject) +
          '&body=' + encodeURIComponent(data.message + '\n\n— ' + data.name + ' (' + data.email + ')');
        err.innerHTML = '<i class="bi bi-exclamation-circle-fill"></i> Sorry, the message could not be sent. ' +
          '<a href="' + mailto + '">Send it from your email app</a> instead.';
        if (location.protocol === 'file:') {
          err.innerHTML += '<br><small>Preview note: forms cannot be sent from a local file. Run the site through a local server or publish it, then test again.</small>';
        } else if (e && /activat/i.test(e.message)) {
          err.innerHTML += '<br><small>Owner note: open the activation email FormSubmit sent to ' + MAIL_TO + ' and click “Activate Form”.</small>';
        }
        err.hidden = false;
      })
      .then(function () { btn.disabled = false; btn.innerHTML = btnHtml; });
  });
  }

  /* ---------- Palette: click a swatch to copy its hex ---------- */
  $$('.sw').forEach(function (sw) {
    var label = $('span', sw), orig = label.textContent, t;
    sw.addEventListener('click', function () {
      var hex = sw.dataset.hex;
      var done = function () {
        label.textContent = hex;
        sw.classList.add('copied');
        clearTimeout(t);
        t = setTimeout(function () { label.textContent = orig; sw.classList.remove('copied'); }, 1400);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(hex).then(done, done);
      else done();
    });
  });

  /* ---------- Reviews wall: stickers drift with the mouse ---------- */
  var wall = $('#wall');
  if (wall && window.matchMedia('(hover:hover)').matches && !window.matchMedia('(prefers-reduced-motion:reduce)').matches) {
    var decos = $$('.deco', wall), raf = 0;
    wall.addEventListener('mousemove', function (e) {
      var r = wall.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(function () {
        decos.forEach(function (d) {
          var k = +d.dataset.depth || 20;
          d.style.translate = (x * k).toFixed(1) + 'px ' + (y * k).toFixed(1) + 'px';
        });
      });
    });
    wall.addEventListener('mouseleave', function () {
      decos.forEach(function (d) { d.style.translate = ''; });
    });
  }

  /* ---------- Footer year ---------- */
  var yr = $('#year'); if (yr) yr.textContent = new Date().getFullYear();
})();
