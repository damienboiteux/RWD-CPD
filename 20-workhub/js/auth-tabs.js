const authRoot = document.querySelector('[data-auth-tabs]');

if (authRoot) {
  const tabs = Array.from(authRoot.querySelectorAll('[data-auth-target]'));
  const panels = Array.from(authRoot.querySelectorAll('[data-auth-panel]'));

  const activateTab = (target) => {
    tabs.forEach((tab) => {
      const isActive = tab.dataset.authTarget === target;
      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-selected', String(isActive));
      tab.setAttribute('tabindex', isActive ? '0' : '-1');
    });

    panels.forEach((panel) => {
      const isActive = panel.dataset.authPanel === target;
      panel.classList.toggle('is-active', isActive);
      panel.hidden = !isActive;
    });
  };

  const setFromHash = () => {
    const target = window.location.hash.replace('#', '');
    if (target === 'inscription' || target === 'connexion') {
      activateTab(target);
    }
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.authTarget;
      window.location.hash = target;
      activateTab(target);
    });
  });

  window.addEventListener('hashchange', setFromHash);
  setFromHash();
}
