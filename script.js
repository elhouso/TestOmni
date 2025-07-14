const tabs = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.tab-content');
const themeToggle = document.getElementById('themeToggle');

tabs.forEach(btn => {
  btn.addEventListener('click', () => {
    // Set page title
    document.title = `Omni World - ${btn.textContent.charAt(0).toUpperCase() + btn.textContent.slice(1).toLowerCase()}`;
    
    tabs.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    sections.forEach(sec => {
      sec.classList.remove('active');
      if (sec.id === btn.dataset.tab) sec.classList.add('active');
    });
  });
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
});
