function setThemePreference(themeName, iconName) {
  localStorage.setItem('themePreference', themeName);
  localStorage.setItem('iconClass', iconName);
  updateTheme();
}

function getThemePreference() {
  return localStorage.getItem('themePreference') || 'light';
}

function getIconClass() {
  return localStorage.getItem('iconClass') || 'far fa-moon';
}

function updateTheme() {
  const theme = getThemePreference();
  const root = document.documentElement;

  if (theme === 'light') {
      root.style.setProperty('--bg-clr1', '#ffffff');
      root.style.setProperty('--text-clr1', '#000000');
      setThemePreference('light', 'far fa-moon');
  } else {
      root.style.setProperty('--bg-clr1', '#000000');
      root.style.setProperty('--text-clr1', '#ffffff');
      setThemePreference('dark', 'far fa-sun');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  updateTheme();
});

const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
  updateTheme();
});
