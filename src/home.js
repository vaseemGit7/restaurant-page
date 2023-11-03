function createHome(){
    const docFrag = document.createDocumentFragment();

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

    docFrag.appendChild(welcomeSection);

    return docFrag;
}

function loadHome (){
    const $main = document.querySelector('#main');
    $main.innerHTML ='';
    $main.appendChild(createHome());
}

export default loadHome;