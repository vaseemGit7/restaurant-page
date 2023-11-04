function createHome(){
    const docFrag = document.createDocumentFragment();

    const welcomeSection = document.createElement('div');
    const restraurantName = document.createElement('div');
    const restraurantSlogan = document.createElement('div');    

    const firstPara = document.createElement('p');
    firstPara.textContent = "THE";
    firstPara.classList.add('name-first');

    const secondPara = document.createElement('p');
    secondPara.textContent = "PATISSERIE HAVEN";
    secondPara.classList.add('name-second')

    restraurantName.appendChild(firstPara);
    restraurantName.appendChild(secondPara);
    restraurantName.classList.add('restaurant-name');

    restraurantSlogan.textContent = "A SWEET SIP AND A PASTRY'S KISS";
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