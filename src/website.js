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
    homeBtn.classList.add('nav-buttons');
    homeBtn.addEventListener('click',(e)=>{
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeBtn);
        loadHome();
    })
    navItems.appendChild(homeBtn);

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'MENUS';
    menuBtn.classList.add('nav-buttons');
    menuBtn.addEventListener('click',(e)=>{
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuBtn);
        loadMenus();
    })
    navItems.appendChild(menuBtn);

    const aboutBtn = document.createElement('button');
    aboutBtn.textContent = 'OUR STORY';
    aboutBtn.classList.add('nav-buttons');
    aboutBtn.addEventListener('click',(e)=>{
        if (e.target.classList.contains("active")) return;
        setActiveButton(aboutBtn);
        loadAbout();
    })
    navItems.appendChild(aboutBtn);

    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'CONTACT';
    contactBtn.classList.add('nav-buttons');
    contactBtn.addEventListener('click',(e)=>{
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactBtn);
        loadContact();
    })
    navItems.appendChild(contactBtn);

    navBar.appendChild(logo);
    navBar.appendChild(navItems);

    return navBar;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll('.nav-buttons');
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
  }

function createMain(){
    const main = document.createElement('div');
    main.setAttribute('id','main');
    return main;
}

function createFooter(){
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const name = document.createElement('div');
    name.textContent = "Made by Vaseem Ahamed";

    const githubLink = document.createElement('a');
    githubLink.href = "https://github.com/vaseemGit7/restaurant-page";
    
    const ionIcon = document.createElement("ion-icon");
    ionIcon.setAttribute("name", "logo-github");
    githubLink.appendChild(ionIcon);

    footer.appendChild(name);
    footer.appendChild(githubLink);

    return footer;
}

function initializeWebsite(){
    const $content = document.querySelector('#content');

    $content.appendChild(createNav());
    $content.appendChild(createMain());
    $content.appendChild(createFooter());

    loadHome();
}

export default initializeWebsite;