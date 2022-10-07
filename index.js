const sectionRegister = document.querySelector('#sectionRegister');
const sectionList = document.querySelector('#sectionList');
const div = document.createElement('div');
const form = document.createElement('form');
const br = document.createElement('br');
const br1 = document.createElement('br');
const button = document.querySelector('#actionButton');
let counter = 0;

function actionButton() {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    div.id = 'divForm';
    button.disabled = true;

    const labelName = document.createElement('label');
    labelName.setAttribute('for', 'registerName');
    labelName.innerText = 'Insira o nome completo do DEV: ';
    const inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.id = 'registerName';
    inputName.className = 'registerName';
    inputName.placeholder = 'Insira o nome do DEV';
    inputName.required = true;
    form.append(labelName, inputName, br1, br1.cloneNode(true));

    const labelTech = document.createElement('label');
    labelTech.setAttribute('for', 'technology' + counter);
    labelTech.innerText = 'Insira qual a tecnologia o DEV conhece: ';
    const inputTech = document.createElement('input');
    inputTech.type = 'text';
    inputTech.id = 'technology' + counter;
    inputTech.className = 'technology' + counter;
    inputTech.placeholder = 'Insira o nome da tecnologia';
    form.append(labelTech, inputTech);

    const inputInitialYear = document.createElement('input');
    inputInitialYear.type = 'radio';
    inputInitialYear.id = 'initialYear' + counter;
    inputInitialYear.value = ' 0 a 2 anos';
    inputInitialYear.name = 'forms';
    const initialYear = document.createElement('label');
    initialYear.setAttribute('for', 'initialYear' + counter);
    initialYear.innerText = ' 0 a 2 anos';
    form.append(inputInitialYear, initialYear);

    const inputMiddleYear = document.createElement('input');
    inputMiddleYear.type = 'radio';
    inputMiddleYear.id = 'middleYear' + counter;
    inputMiddleYear.value = ' 3 a 4 anos';
    inputMiddleYear.name = 'forms';
    const middleYear = document.createElement('label');
    middleYear.setAttribute('for', 'middleYear' + counter);
    middleYear.innerText = ' 3 a 4 anos';
    form.append(inputMiddleYear, middleYear);

    const inputLastYear = document.createElement('input');
    inputLastYear.type = 'radio';
    inputLastYear.id = 'lastYear' + counter;
    inputLastYear.value = ' 5+ anos';
    inputLastYear.name = 'forms';
    const lastYear = document.createElement('label');
    lastYear.setAttribute('for', 'lastYear' + counter);
    lastYear.innerText = ' 5+ anos ';
    form.append(inputLastYear, lastYear);

    const plusButton = document.createElement('button');
    plusButton.innerText = '+';
    plusButton.id = 'button' + counter;
    plusButton.style.cssText = ('cursor: pointer; background-color: transparent; border-color: blue');
    plusButton.setAttribute('onclick', 'addTech()');
    form.append(plusButton, br1.cloneNode(true));

    const saveButton = document.createElement('button');
    saveButton.setAttribute('onclick', 'saveForm()');
    saveButton.id = 'saveButton';
    saveButton.innerText = 'Salvar!';

    div.appendChild(form)
    sectionRegister.append(div, saveButton);
}


function addTech() {
    counter++;

    const removeForm = document.createElement('form');
    removeForm.id = 'removeForms' + counter;
    removeForm.addEventListener('submit', (e) => {
        e.preventDefault();
    })

    const labelTech = document.createElement('label');
    labelTech.setAttribute('for', 'technology' + counter);
    labelTech.innerText = 'Insira qual a tecnologia o DEV conhece: ';
    const inputTech = document.createElement('input');
    inputTech.type = 'text';
    inputTech.id = 'technology' + counter;
    inputTech.placeholder = 'Insira o nome da tecnologia';
    inputTech.name = 'forms' + counter;
    removeForm.append(labelTech, inputTech);

    const inputInitialYear = document.createElement('input');
    inputInitialYear.type = 'radio';
    inputInitialYear.id = 'initialYear' + counter;
    inputInitialYear.value = ' 0 a 2 anos';
    inputInitialYear.name = 'forms' + counter;
    const initialYear = document.createElement('label');
    initialYear.name = 'forms' + counter;
    initialYear.setAttribute('for', 'initialYear' + counter);
    initialYear.innerText = ' 0 a 2 anos';
    removeForm.append(inputInitialYear, initialYear);

    const inputMiddleYear = document.createElement('input');
    inputMiddleYear.type = 'radio';
    inputMiddleYear.id = 'middleYear' + counter;
    inputMiddleYear.name = 'forms' + counter;
    inputMiddleYear.value = ' 3 a 4 anos';
    const middleYear = document.createElement('label');
    middleYear.setAttribute('for', 'middleYear' + counter);
    middleYear.name = 'forms' + counter;
    middleYear.innerText = ' 3 a 4 anos';
    removeForm.append(inputMiddleYear, middleYear);

    const inputLastYear = document.createElement('input');
    inputLastYear.type = 'radio';
    inputLastYear.id = 'lastYear' + counter;
    inputLastYear.value = ' 5+ anos';
    inputLastYear.name = 'forms' + counter;
    const lastYear = document.createElement('label');
    lastYear.setAttribute('for', 'lastYear' + counter);
    lastYear.name = 'forms' + counter;
    lastYear.innerText = ' 5+ anos ';
    removeForm.append(inputLastYear, lastYear);

    const addButton = document.createElement('button');
    addButton.innerText = '+ ';
    addButton.name = 'forms' + counter;
    addButton.id = 'button' + counter;
    addButton.style.cssText = ('cursor: pointer; background-color: transparent; border-color: blue; margin-right:2px');
    addButton.setAttribute('onclick', 'addTech()');
    removeForm.appendChild(addButton);

    const removeButton = document.createElement('button');
    removeButton.innerText = ' -';
    removeButton.name = 'forms' + counter;
    removeButton.id = 'button' + counter;
    removeButton.style.cssText = ('cursor: pointer; background-color: transparent; border-color: blue');
    removeButton.setAttribute('onclick', 'removeTech()');
    removeForm.append(removeButton, br.cloneNode(true));

    const disabledButtons = document.querySelectorAll(`#button${counter - 1}`)
    disabledButtons[0].style.visibility = 'hidden';
    // if (disabledButton.length == 2) disabledButton[1].style.visibility = 'hidden';

    div.appendChild(removeForm)
}

function removeTech() {
    const removeForm = document.querySelector('#removeForms' + counter)
    const enabledButton = document.querySelectorAll(`#button${counter - 1}`)
    enabledButton[0].style.visibility = '';
    // if (enabledButton.length == 2) enabledButton[1].style.visibility = '';
    counter--;

    div.removeChild(removeForm)
}

function saveForm() {
    const registerName = document.querySelector('#registerName');
    const technology = document.querySelectorAll('[id^="technology"]');
    const years = document.querySelectorAll('[id*="Year"]:checked');

    const header = document.createElement('h2');
    header.innerText = 'Informações do DEV';

    const hr = document.createElement('hr');

    const listDiv = document.createElement('div');

    let register = `O DEV: ${registerName.value}
    `;

    const listTechs = [];
    technology.forEach((e) => {
        listTechs.push(e.value)
    });

    const listYears = [];
    years.forEach((e) => {
        listYears.push(e.value)
    });

    for (let i = 0; i < listYears.length; i++) {
        register += `Possui experiência em ${listTechs[i]}, com o tempo de: ${listYears[i]}
        `
    };

    listDiv.innerText = register;
    sectionList.append(header, hr, listDiv);

    registerName.value = '';
    technology.forEach((e) => {
        e.value = '';
    })

    const allForms = document.querySelectorAll('form')
    allForms.forEach((e) => { e.textContent = '' })
    while (sectionRegister.firstChild) {
        sectionRegister.removeChild(sectionRegister.lastChild);
    }
    button.disabled = false;
}