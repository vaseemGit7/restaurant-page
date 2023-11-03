function createContact(){
    const mainDocFrag = document.createDocumentFragment();
    const formEleFrag = document.createDocumentFragment();

    const contactSection = document.createElement('div');
    contactSection.classList.add('contact-section');

    const contactHeader = document.createElement('div');
    contactHeader.textContent = "CONTACT";
    contactHeader.classList.add('contact-header');

    const contactSubheader = document.createElement('div');
    contactSubheader.textContent = "Send us a message and we'll get back to you as soon as possible. Looking forward to hearing from you.";
    contactSubheader.classList.add('contact-subheader');

    const contactForm = document.createElement('form');
    contactForm.classList.add('contact-form');

    const firstEle = document.createElement('div');
    firstEle.classList.add('form-element');

    var span = document.createElement('span');
    span.textContent="*required";

    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for','name');
    nameLabel.textContent = "Name";
    nameLabel.appendChild(span);

    const nameInput = document.createElement('input');
    nameInput.type = "text";
    nameInput.name = "name";
    nameInput.placeholder = "Name";
    nameInput.required = true;

    firstEle.appendChild(nameLabel);
    firstEle.appendChild(nameInput);

    const secondEle = document.createElement('div');
    secondEle.classList.add('form-element');

    var span = document.createElement('span');
    span.textContent="*required";

    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for','email');
    emailLabel.textContent = "Email";
    emailLabel.appendChild(span);

    const emailInput = document.createElement('input');
    emailInput.type = "email";
    emailInput.name = "email";
    emailInput.placeholder = "Email";
    emailInput.required = true;

    secondEle.appendChild(emailLabel);
    secondEle.appendChild(emailInput);

    const thirdEle = document.createElement('div');
    thirdEle.classList.add('form-element');

    var span = document.createElement('span');
    span.textContent="*required";

    const phoneLabel = document.createElement('label');
    phoneLabel.setAttribute('for','phoneNumber');
    phoneLabel.textContent = "Phone Number"
    phoneLabel.appendChild(span);

    const phoneInput = document.createElement('input');
    phoneInput.type = "tel";
    phoneInput.name = "phoneNumber";
    phoneInput.placeholder = "Phone Number";
    phoneInput.required = true;

    thirdEle.appendChild(phoneLabel);
    thirdEle.appendChild(phoneInput);

    const fourthEle = document.createElement('div');
    fourthEle.classList.add('form-element');

    var span = document.createElement('span');
    span.textContent="*required";

    const areaLabel = document.createElement('label');
    areaLabel.setAttribute('for','textArea');
    areaLabel.textContent = "Your Message";
    areaLabel.appendChild(span);

    const areaInput = document.createElement('textarea');
    areaInput.name = "textArea";
    areaInput.required = true;
    areaInput.placeholder = "Your Message";

    fourthEle.appendChild(areaLabel);
    fourthEle.appendChild(areaInput);

    const sendBtn = document.createElement('button');
    sendBtn.textContent = "SEND";
    sendBtn.classList.add('sendBtn');

    formEleFrag.appendChild(firstEle);
    formEleFrag.appendChild(secondEle);
    formEleFrag.appendChild(thirdEle);
    formEleFrag.appendChild(fourthEle);
    formEleFrag.appendChild(sendBtn);

    contactForm.appendChild(formEleFrag);

    mainDocFrag.appendChild(contactHeader);
    mainDocFrag.appendChild(contactSubheader);
    mainDocFrag.appendChild(contactForm);

    contactSection.appendChild(mainDocFrag);

    return contactSection;
}

function loadContact(){
    const $main = document.querySelector('#main');
    $main.innerHTML ='';
    $main.appendChild(createContact());
}

export default loadContact;