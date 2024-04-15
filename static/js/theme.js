function setThemePreference(themeName, iconName) {
  localStorage.setItem('themePreference', themeName);
  localStorage.setItem('iconClass', iconName);
}

function getThemePreference() {
  return localStorage.getItem('themePreference') || '/css/ads-light.css';
}

function getIconClass() {
  return localStorage.getItem('iconClass') || 'far fa-moon';
}

window.addEventListener('DOMContentLoaded', () => {
  const themeStyle = document.createElement('link');
  themeStyle.setAttribute('id', 'theme-css');
  themeStyle.setAttribute('rel', 'stylesheet');
  themeStyle.setAttribute('href', getThemePreference());
  document.head.appendChild(themeStyle);

  const themeIcon = document.getElementById('theme-icon');
  themeIcon.className = getIconClass();
});

const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = getThemePreference();
  const currentIcon = getIconClass();

  let newTheme;
  let newIcon;

  if (currentTheme === '/css/ads-light.css') {
    newTheme = '/css/ads-dark.css';
    newIcon = 'far fa-sun';
  } else {
    newTheme = '/css/ads-light.css';
    newIcon = 'far fa-moon';
  }

  const themeStyle = document.getElementById('theme-css');
  themeStyle.setAttribute('href', newTheme);
  setThemePreference(newTheme, newIcon);

  const themeIcon = document.getElementById('theme-icon');
  themeIcon.className = newIcon;
});
