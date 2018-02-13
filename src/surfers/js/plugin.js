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
  let div, n,
    v = document.getElementsByClassName("s__about_us__content__video");
  for (n = 0; n < v.length; n++) {
    div = document.createElement("div");
    div.setAttribute("data-id", v[n].dataset.id);
    div.innerHTML = labnolThumb(v[n].dataset.id);
    // div.onclick = labnolIframe; // uncomment for playing youtube video
    v[n].appendChild(div);
  }
}, false);

function labnolThumb(id) {
  const thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
    play = '<div class="play"></div>';
  return thumb.replace("ID", id) + play;
}

function labnolIframe() {
  const iframe = document.createElement("iframe");
  const embed = "https://www.youtube.com/embed/ID?autoplay=1";
  iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allowfullscreen", "1");
  this.parentNode.replaceChild(iframe, this);
}
