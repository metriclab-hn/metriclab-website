// Barra fija: se compacta al bajar; en mobile se esconde al bajar y vuelve al subir.
(function () {
  var bar = document.getElementById('topbar');
  if (!bar) return;
  var ultimo = window.scrollY, pendiente = false;
  function actualizar() {
    var y = window.scrollY;
    bar.classList.toggle('is-scrolled', y > 8);
    var mobile = window.matchMedia('(max-width: 860px)').matches;
    if (mobile && y > 120 && y > ultimo + 4) bar.classList.add('is-hidden');
    else if (y < ultimo - 4 || y <= 120 || !mobile) bar.classList.remove('is-hidden');
    ultimo = y; pendiente = false;
  }
  window.addEventListener('scroll', function () {
    if (!pendiente) { pendiente = true; requestAnimationFrame(actualizar); }
  }, { passive: true });
  // Si el foco del teclado entra a la barra, se muestra.
  bar.addEventListener('focusin', function () { bar.classList.remove('is-hidden'); });
  actualizar();
})();

// Centro de Control de ejemplo: pestañas, tarjetas que llevan a su sección y foco del día que rota.
(function () {
  var dash = document.getElementById('dash');
  if (!dash) return;
  var tabs = Array.prototype.slice.call(dash.querySelectorAll('.dtab'));
  var hint = document.getElementById('dash-hint');
  var quieto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var usado = false;

  function mostrar(clave, conFoco) {
    tabs.forEach(function (t) {
      var activa = t.id === 'tab-' + clave;
      t.setAttribute('aria-selected', activa ? 'true' : 'false');
      t.tabIndex = activa ? 0 : -1;
      var p = document.getElementById(t.getAttribute('aria-controls'));
      if (p) p.hidden = !activa;
      if (activa) {
        if (conFoco) t.focus();
        // en mobile, que la pestaña activa quede a la vista dentro de la fila
        if (t.scrollIntoView && window.matchMedia('(max-width: 600px)').matches) {
          t.scrollIntoView({ block: 'nearest', inline: 'center', behavior: quieto ? 'auto' : 'smooth' });
        }
      }
    });
    if (!usado) { usado = true; if (hint) hint.classList.add('is-done'); dash.classList.remove('demo'); }
    if (clave !== 'general') detener();
  }

  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { mostrar(t.id.replace('tab-', ''), false); });
    t.addEventListener('keydown', function (e) {
      var sig = null;
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') sig = (i + 1) % tabs.length;
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') sig = (i - 1 + tabs.length) % tabs.length;
      if (e.key === 'Home') sig = 0;
      if (e.key === 'End') sig = tabs.length - 1;
      if (sig !== null) { e.preventDefault(); mostrar(tabs[sig].id.replace('tab-', ''), true); }
    });
  });
  dash.addEventListener('click', function (e) {
    var b = e.target.closest('[data-goto]');
    if (b) mostrar(b.getAttribute('data-goto'), false);
  });

  // Foco del día
  var items = Array.prototype.slice.call(dash.querySelectorAll('.foco-item'));
  var pips = Array.prototype.slice.call(dash.querySelectorAll('.foco-pip'));
  var actual = 0, reloj = null;
  function foco(n) {
    actual = (n + items.length) % items.length;
    items.forEach(function (it, k) { it.hidden = k !== actual; });
    pips.forEach(function (p, k) { if (k === actual) p.setAttribute('aria-current', 'true'); else p.removeAttribute('aria-current'); });
  }
  function iniciar() { if (quieto || reloj || items.length < 2) return; reloj = setInterval(function () { foco(actual + 1); }, 4500); }
  function detener() { if (reloj) { clearInterval(reloj); reloj = null; } }
  pips.forEach(function (p, k) { p.addEventListener('click', function () { detener(); foco(k); }); });
  var focoBox = dash.querySelector('.foco');
  if (focoBox) {
    focoBox.addEventListener('mouseenter', detener);
    focoBox.addEventListener('mouseleave', function () { if (!usado) iniciar(); });
    focoBox.addEventListener('focusin', detener);
  }

  // Cuando el panel entra en pantalla: un recorrido por las pestañas (una vez) y arranca el foco.
  if ('IntersectionObserver' in window) {
    var visto = false;
    new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (en.isIntersecting) {
          if (!visto && !quieto) { visto = true; dash.classList.add('demo'); }
          if (!usado) iniciar();
        } else { detener(); }
      });
    }, { threshold: 0.45 }).observe(dash);
  } else { iniciar(); }
})();
