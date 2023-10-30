function createHome(){
    const docFrag = document.createDocumentFragment();

    const navBar = document.createElement('nav');
    navBar.classList.add('nav-bar');

    const logo = document.createElement('div');
    logo.classList.add('logo');

    const navItems = document.createElement('nav');
    navItems.classList.add('nav-items');

    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'HOME';
    navItems.appendChild(homeBtn);

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'MENUS';
    navItems.appendChild(menuBtn);

    const aboutBtn = document.createElement('button');
    aboutBtn.textContent = 'OUR STORY';
    navItems.appendChild(aboutBtn);

    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'CONTACT';
    navItems.appendChild(contactBtn);

    const reservationBtn = document.createElement('button');
    reservationBtn.textContent = 'RESERVATION';
    navItems.appendChild(reservationBtn);

    navBar.appendChild(logo);
    navBar.appendChild(navItems);

    const welcomeSection = document.createElement('div');
    const restraurantName = document.createElement('div');
    const restraurantSlogan = document.createElement('div');    

    restraurantName.textContent = 'The Patisserie Haven';
    restraurantName.classList.add('restaurant-name');

    restraurantSlogan.textContent = "A Sweet Sip and a Pastry's Kiss";
    restraurantSlogan.classList.add('restaurant-slogan');

    welcomeSection.classList.add('welcome-section');
    welcomeSection.appendChild(restraurantName);
    welcomeSection.appendChild(restraurantSlogan);


    docFrag.appendChild(navBar);
    docFrag.appendChild(welcomeSection);

    return docFrag;
}

function loadHome (){
    const $content = document.querySelector('.content');
    $content.appendChild(createHome());
}

export default loadHome;