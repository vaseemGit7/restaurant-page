function createAbout () {
    const mainDocFrag = document.createDocumentFragment();

    const aboutBanner = document.createElement('div');
    aboutBanner.classList.add('about-banner');

    const aboutSection = document.createElement('div');
    aboutSection.classList.add('about-section');

    const aboutNote = document.createElement('div');
    aboutNote.classList.add('about-note');


    const noteFirstPara = document.createElement('p');
    noteFirstPara.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    const noteSecondPara = document.createElement('p');
    noteSecondPara.textContent = "Ullamcorper dignissim cras tincidunt lobortis. Ante in nibh mauris cursus. Justo laoreet sit amet cursus sit amet dictum sit amet. Sit amet porttitor eget dolor morbi non.";
    
    aboutNote.appendChild(noteFirstPara);
    aboutNote.appendChild(noteSecondPara);


    const aboutMenu = document.createElement('div');
    aboutMenu.classList.add('about-menu');

    const aboutMenuImage = document.createElement('div');
    aboutMenuImage.classList.add('about-menu-image');

    const aboutMenuNote = document.createElement('div');
    aboutMenuNote.classList.add('about-menu-note');

    const menuContext = document.createElement('div');
    menuContext.classList.add('context');

    const menuTitle = document.createElement('div');
    menuTitle.textContent="OUR MENUS";
    menuTitle.classList.add('title');

    const menuDescription = document.createElement('div');
    menuDescription.classList.add('description');

    const menuFirstPara = document.createElement('p');
    menuFirstPara.textContent = "Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Urna neque viverra justo nec ultrices dui sapien eget mi. Elit at imperdiet dui accumsan sit amet nulla facilisi."

    const menuSecondPara = document.createElement('p');
    menuSecondPara.textContent = "Luctus accumsan tortor posuere ac ut consequat semper. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Faucibus purus in massa tempor. Id velit ut tortor pretium viverra.";

    menuDescription.appendChild(menuFirstPara);
    menuDescription.appendChild(menuSecondPara);

    menuContext.appendChild(menuTitle);
    menuContext.appendChild(menuDescription);
    
    aboutMenuNote.appendChild(menuContext);

    aboutMenu.appendChild(aboutMenuImage);
    aboutMenu.appendChild(aboutMenuNote);


    const tagline = document.createElement('div');
    tagline.textContent = "A Sweet Sip and a Pastry's Kiss";
    tagline.classList.add('tagline');


    const aboutExp = document.createElement('div');
    aboutExp.classList.add('about-experience');

    const aboutExpNote = document.createElement('div');
    aboutExpNote.classList.add('about-experience-note');

    const aboutExpImage = document.createElement('div');
    aboutExpImage.classList.add('about-experience-image');

    const expContext = document.createElement('div');
    expContext.classList.add('context');

    const expTitle = document.createElement('div');
    expTitle.textContent = "THE HAVEN EXPERIENCE";
    expTitle.classList.add('title');

    const expDescription = document.createElement('div');
    expDescription.classList.add('description');

    const expFirstPara = document.createElement('p');
    expFirstPara.textContent = "Nullam vehicula ipsum a arcu cursus vitae. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices.";

    const expSecondPara = document.createElement('p');
    expSecondPara.textContent = "Sed cras ornare arcu dui vivamus arcu felis bibendum. Morbi leo urna molestie at. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. Dictum at tempor commodo ullamcorper a lacus.";
    
    const expThirdPara = document.createElement('p');
    expThirdPara.textContent = "Duis tristique sollicitudin nibh sit amet. Vitae elementum curabitur vitae nunc sed velit dignissim. Magna ac placerat vestibulum lectus mauris ultrices eros. Gravida in fermentum et sollicitudin ac. Risus nec feugiat in fermentum.";

    const expFourthPara = document.createElement('p');
    expFourthPara.textContent = "Aliquam vestibulum morbi blandit cursus risus at. Consequat semper viverra nam libero justo laoreet sit amet cursus. Pharetra magna ac placerat vestibulum lectus mauris.";

    const expFifthPara = document.createElement('p');
    expFifthPara.textContent = "Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue.";

    expDescription.appendChild(expFirstPara);
    expDescription.appendChild(expSecondPara);
    expDescription.appendChild(expThirdPara);
    expDescription.appendChild(expFourthPara);
    expDescription.appendChild(expFifthPara);

    expContext.appendChild(expTitle);
    expContext.appendChild(expDescription);

    aboutExpNote.appendChild(expContext);

    aboutExp.appendChild(aboutExpNote);
    aboutExp.appendChild(aboutExpImage);


    aboutSection.appendChild(aboutNote);
    aboutSection.appendChild(aboutMenu);
    aboutSection.appendChild(tagline);
    aboutSection.appendChild(aboutExp);

    mainDocFrag.appendChild(aboutBanner);
    mainDocFrag.appendChild(aboutSection);

    return mainDocFrag;
}

function loadAbout(){
    const $content = document.querySelector('.content');
    $content.appendChild(createAbout());
}

export default loadAbout;
