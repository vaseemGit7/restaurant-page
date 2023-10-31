function createMenu(){
    const mainDocFrag = document.createDocumentFragment();
    const menuDocFrag = document.createDocumentFragment();

    const menuBanner = document.createElement('div');
    menuBanner.classList.add('menu-banner');

    const menuSection = document.createElement('div');
    menuSection.classList.add('menu-section');

    const beveragesTitle = document.createElement('div');
    beveragesTitle.textContent = 'BEVERAGES';
    beveragesTitle.classList.add('beverages-title');

    const beveragesMenu = document.createElement('div');
    beveragesMenu.classList.add('beverages-menu');

    const beverageItems = document.createElement('div');
    beverageItems.classList.add('menu-items');

    beverageItems.appendChild(createMenuItem('Espresso','₹80'));
    beverageItems.appendChild(createMenuItem('Americano','₹100'));
    beverageItems.appendChild(createMenuItem('Hot Chocolate','₹120'));
    beverageItems.appendChild(createMenuItem('Macchiato','₹120'));
    beverageItems.appendChild(createMenuItem('Iced Coffee','₹130'));
    beverageItems.appendChild(createMenuItem('Cappuccino','₹150'));
    beverageItems.appendChild(createMenuItem('Cold Brew','₹150'));
    beverageItems.appendChild(createMenuItem('Latte','₹160'));
    beverageItems.appendChild(createMenuItem('Frappe','₹170'));
    beverageItems.appendChild(createMenuItem('Mocha','₹180'));

    const beveragesImage = document.createElement('div');
    beveragesImage.classList.add('beverages-image');

    beveragesMenu.appendChild(beverageItems);
    beveragesMenu.appendChild(beveragesImage);
    
    const pastriesTitle = document.createElement('div');
    pastriesTitle.textContent = 'PASTRIES';
    pastriesTitle.classList.add('pastries-title');

    const pastriesMenu = document.createElement('div');
    pastriesMenu.classList.add('beverages-menu');

    const pastriesItems = document.createElement('div');
    pastriesItems.classList.add('menu-items');

    pastriesItems.appendChild(createMenuItem('Cookies','₹30'));
    pastriesItems.appendChild(createMenuItem('Croissant','₹60'));
    pastriesItems.appendChild(createMenuItem('Turnover','₹70'));
    pastriesItems.appendChild(createMenuItem('Scone','₹80'));
    pastriesItems.appendChild(createMenuItem('Éclair','₹80'));
    pastriesItems.appendChild(createMenuItem('Muffin','₹80'));
    pastriesItems.appendChild(createMenuItem('Bagel','₹100'));
    pastriesItems.appendChild(createMenuItem('Cinnamon Roll','₹100'));
    pastriesItems.appendChild(createMenuItem('Mille-Feuille','₹150'));

    
    const pastriesImage = document.createElement('div');
    pastriesImage.classList.add('pastries-image');

    pastriesMenu.appendChild(pastriesImage);
    pastriesMenu.appendChild(pastriesItems);

    menuDocFrag.appendChild(beveragesTitle);
    menuDocFrag.appendChild(beveragesMenu);

    menuDocFrag.appendChild(pastriesTitle);
    menuDocFrag.appendChild(pastriesMenu);

    menuSection.appendChild(menuDocFrag);

    mainDocFrag.appendChild(menuBanner);
    mainDocFrag.appendChild(menuSection);

    return mainDocFrag;
}

function createMenuItem(name,price){
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const itemName = document.createElement('p');
    itemName.textContent = name;

    const itemPrice = document.createElement('p');
    itemPrice.textContent = price;

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemPrice);

    return menuItem;
}

function loadMenus (){
    const $content = document.querySelector('.content');
    $content.appendChild(createMenu());
}

export default loadMenus;