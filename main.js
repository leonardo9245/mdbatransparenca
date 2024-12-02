const button = document.getElementById('button');
const menuListContainer = document.querySelector('.menu-sections');
const menuItens = document.querySelectorAll('li');

const openMenu = () => {
  if (document.body.clientWidth <= 766) {
    menuListContainer.classList.toggle('open');
    menuListContainer.classList.contains('open')
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'auto');
  }
};

for (const i of menuItens) {
  i.addEventListener('click', () => {
    openMenu();
  });
}

button.addEventListener('click', () => {
  openMenu();
});
