/**
 * i18n — Language Switcher Module
 * Erkennt aktuelle Sprache aus URL, rendert Dropdown, speichert Präferenz.
 */
(function() {
  'use strict';

  var LANGUAGES = [
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' }
  ];

  function getCurrentLang() {
    var match = window.location.pathname.match(/^\/(de|en|es|fr)\//);
    return match ? match[1] : 'de';
  }

  function getCurrentPage() {
    var path = window.location.pathname;
    var page = path.replace(/^\/(de|en|es|fr)\//, '/');
    return page === '/' ? '/' : page;
  }

  function switchLanguage(newLang) {
    localStorage.setItem('cs-lang', newLang);
    var page = getCurrentPage();
    var newPath = '/' + newLang + (page === '/' ? '/' : page);
    window.location.href = newPath;
  }

  function renderDropdown() {
    var currentLang = getCurrentLang();
    var current = null;
    for (var i = 0; i < LANGUAGES.length; i++) {
      if (LANGUAGES[i].code === currentLang) {
        current = LANGUAGES[i];
        break;
      }
    }
    if (!current) current = LANGUAGES[0];

    // Container
    var wrapper = document.createElement('div');
    wrapper.className = 'lang-switcher';
    wrapper.setAttribute('role', 'navigation');
    wrapper.setAttribute('aria-label', 'Language');

    // Toggle Button
    var toggle = document.createElement('button');
    toggle.className = 'lang-switcher__toggle';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-haspopup', 'listbox');
    toggle.innerHTML =
      '<span class="lang-switcher__flag">' + current.flag + '</span>' +
      '<span class="lang-switcher__code">' + currentLang.toUpperCase() + '</span>' +
      '<svg class="lang-switcher__chevron" width="12" height="12" viewBox="0 0 12 12" fill="none">' +
        '<path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
      '</svg>';

    // Dropdown List
    var list = document.createElement('ul');
    list.className = 'lang-switcher__list';
    list.setAttribute('role', 'listbox');

    LANGUAGES.forEach(function(lang) {
      var item = document.createElement('li');
      item.setAttribute('role', 'option');
      item.setAttribute('aria-selected', lang.code === currentLang ? 'true' : 'false');
      item.className = 'lang-switcher__item' + (lang.code === currentLang ? ' lang-switcher__item--active' : '');

      var link = document.createElement('a');
      link.href = '#';
      link.className = 'lang-switcher__link';
      link.innerHTML =
        '<span class="lang-switcher__flag">' + lang.flag + '</span>' +
        '<span class="lang-switcher__label">' + lang.label + '</span>';

      link.addEventListener('click', function(e) {
        e.preventDefault();
        switchLanguage(lang.code);
      });

      item.appendChild(link);
      list.appendChild(item);
    });

    // Toggle open/close
    toggle.addEventListener('click', function(e) {
      e.stopPropagation();
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      list.classList.toggle('lang-switcher__list--open');
      wrapper.classList.toggle('lang-switcher--open');
    });

    // Close on outside click
    document.addEventListener('click', function() {
      toggle.setAttribute('aria-expanded', 'false');
      list.classList.remove('lang-switcher__list--open');
      wrapper.classList.remove('lang-switcher--open');
    });

    // Close on Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        toggle.setAttribute('aria-expanded', 'false');
        list.classList.remove('lang-switcher__list--open');
        wrapper.classList.remove('lang-switcher--open');
      }
    });

    wrapper.appendChild(toggle);
    wrapper.appendChild(list);

    // Insert into nav (before hamburger)
    var navInner = document.querySelector('.nav__inner');
    var hamburger = document.querySelector('.nav__hamburger');
    if (navInner && hamburger) {
      navInner.insertBefore(wrapper, hamburger);
    } else if (navInner) {
      navInner.appendChild(wrapper);
    }
  }

  // Init
  document.addEventListener('DOMContentLoaded', function() {
    renderDropdown();
    localStorage.setItem('cs-lang', getCurrentLang());
  });
})();
