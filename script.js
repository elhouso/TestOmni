const tabs = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const page = tab.dataset.page;
    sections.forEach(section => {
      section.classList.remove('active');
      if (section.id === page) {
        section.classList.add('active');
      }
    });

    document.title = `Omni World - ${page.charAt(0).toUpperCase() + page.slice(1)}`;
  });
});
