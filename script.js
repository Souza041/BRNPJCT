const toggleButton = document.getElementById('themeToggle');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');

function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.innerText = '☀️';
  } else {
    document.body.classList.remove('dark-mode');
    toggleButton.innerText = '🌙';
  }
}

applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

toggleButton.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  toggleButton.innerText = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
