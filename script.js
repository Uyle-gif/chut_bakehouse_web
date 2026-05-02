const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  document.body.classList.toggle('menu-open');
  menuToggle.textContent = nav.classList.contains('active') ? '×' : '☰';
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    document.body.classList.remove('menu-open');
    menuToggle.textContent = '☰';
  });
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    const filterValue = button.dataset.filter;

    productCards.forEach((card) => {
      const showCard = filterValue === 'all' || card.dataset.category === filterValue;
      card.classList.toggle('hide', !showCard);
    });
  });
});
