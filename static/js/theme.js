function setThemePreference(themeName) {
  localStorage.setItem('themePreference', themeName);
  document.documentElement.setAttribute('data-theme', themeName);
}

function setIconClass(iconName) {
  localStorage.setItem('iconClass', iconName);
  const themeIcon = document.getElementById('theme-icon');
  themeIcon.className = iconName;
}

function getThemePreference() {
  return localStorage.getItem('themePreference') || 'light';
}

function getIconClass() {
  return localStorage.getItem('iconClass') || 'far fa-moon';
}

window.addEventListener('DOMContentLoaded', () => {
  const theme = getThemePreference();
  const iconClass = getIconClass();
  setThemePreference(theme);
  setIconClass(iconClass);
});

const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = getThemePreference();
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  const newIcon = currentTheme === 'light' ? 'far fa-sun' : 'far fa-moon';
  setThemePreference(newTheme);
  setIconClass(newIcon);
});
