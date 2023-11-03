import loadHome from './home'
import loadMenus from './menus'
import loadAbout from './about'
import loadContact from './contact'

function createNav(){
    const navBar = document.createElement('nav');
    navBar.classList.add('nav-bar');

    const logo = document.createElement('div');
    logo.classList.add('logo');

    const navItems = document.createElement('nav');
    navItems.classList.add('nav-items');

    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'HOME';
    homeBtn.addEventListener('click',()=>{
        loadHome();
    })
    navItems.appendChild(homeBtn);

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'MENUS';
    menuBtn.addEventListener('click',()=>{
        loadMenus();
    })
    navItems.appendChild(menuBtn);

    const aboutBtn = document.createElement('button');
    aboutBtn.textContent = 'OUR STORY';
    aboutBtn.addEventListener('click',()=>{
        loadAbout();
    })
    navItems.appendChild(aboutBtn);

    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'CONTACT';
    contactBtn.addEventListener('click',()=>{
        loadContact();
    })
    navItems.appendChild(contactBtn);

    const reservationBtn = document.createElement('button');
    reservationBtn.textContent = 'RESERVATION';
    navItems.appendChild(reservationBtn);

    navBar.appendChild(logo);
    navBar.appendChild(navItems);

    return navBar;
}

function createMain(){
    const main = document.createElement('div');
    main.setAttribute('id','main');
    return main;
}

function initializeWebsite(){
    const $content = document.querySelector('#content');

    $content.appendChild(createNav());
    $content.appendChild(createMain());

    loadHome();
}

export default initializeWebsite;