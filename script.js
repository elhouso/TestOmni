const tabs = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.content');
const themeToggle = document.getElementById('themeToggle');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Set tab active state
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Show corresponding content
    const page = tab.dataset.page;
    sections.forEach(section => {
      section.style.display = section.id === page ? 'block' : 'none';
    });

    // Update page title
    document.title = `Omni World - ${page.charAt(0).toUpperCase() + page.slice(1)}`;
  });
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  document.body.classList.toggle('dark');

  themeToggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
});
