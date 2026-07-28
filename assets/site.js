(function () {
  var config = window.MAPORY_SITE || {};
  var email = config.contactEmail || '';
  var storeUrl = (config.appStoreUrl || '').trim();

  document.querySelectorAll('[data-contact-email]').forEach(function (el) {
    el.textContent = email;
  });

  document.querySelectorAll('a[data-contact-mailto]').forEach(function (el) {
    if (email) {
      el.setAttribute('href', 'mailto:' + email);
    }
  });

  document.querySelectorAll('[data-app-store]').forEach(function (el) {
    if (!storeUrl) {
      el.hidden = true;
      el.classList.add('is-hidden');
      return;
    }
    el.hidden = false;
    el.classList.remove('is-hidden');
    if (el.tagName === 'A') {
      el.setAttribute('href', storeUrl);
    }
  });
})();
