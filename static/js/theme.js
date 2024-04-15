function setThemePreference(themeName, iconName) {
  localStorage.setItem('themePreference', themeName);
  localStorage.setItem('iconClass', iconName);
  updateTheme();
}

function updateTheme() {
  const currentTheme = getThemePreference();
  const themeIcon = document.getElementById('theme-icon');
  const themeStyle = document.getElementById('theme-css');

  if (currentTheme === '/css/ads-light.css') {
      document.documentElement.style.setProperty('--bg-clr1', 'var(--bg-clr1-light)');
      document.documentElement.style.setProperty('--text-clr1', 'var(--text-clr1-light)');
      themeIcon.className = 'far fa-moon';
      themeStyle.setAttribute('href', '/css/ads-light.css');
  } else {
      document.documentElement.style.setProperty('--bg-clr1', 'var(--bg-clr1-dark)');
      document.documentElement.style.setProperty('--text-clr1', 'var(--text-clr1-dark)');
      themeIcon.className = 'far fa-sun';
      themeStyle.setAttribute('href', '/css/ads-dark.css');
  }
}

function getThemePreference() {
  return localStorage.getItem('themePreference') || '/css/ads-light.css';
}

window.addEventListener('DOMContentLoaded', () => {
  const themeIcon = document.getElementById('theme-icon');
  themeIcon.className = localStorage.getItem('iconClass') || 'far fa-moon';
  updateTheme();
});

const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = getThemePreference();

  if (currentTheme === '/css/ads-light.css') {
      setThemePreference('/css/ads-dark.css', 'far fa-sun');
  } else {
      setThemePreference('/css/ads-light.css', 'far fa-moon');
  }
});
