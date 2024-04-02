let menu = document.querySelector('#menu_icon');
let sidenavbar = document.querySelector('.silde_navbar');
let content = document.querySelector('.content');

menu.onclick = () => {
    sidenavbar.classList.toggle('active');
    content.classList.toggle('active');
}