document.addEventListener('DOMContentLoaded', function(){
  console.log('Works!');
  const toggleNav = document.getElementsByClassName('menu__toggle-nav')[0];
  toggleNav.addEventListener('click', function (e) {
    const menu = document.querySelector('.menu>ul');
    menu.classList.toggle('header__menu');
    const parentOffset = this.getBoundingClientRect();
    const menuOffset = menu.getBoundingClientRect();
    menu.setAttribute('style', `left: ${parentOffset.left - (menuOffset.width / 2) + (parentOffset.width / 2)}px`);
    e.preventDefault();
  });
}, false);
