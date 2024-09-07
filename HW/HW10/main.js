// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let register = document.forms.register;

let users = document.createElement('div');
users.style.display = 'flex';
let userChek = JSON.parse(localStorage.getItem('userChek')) || [];
start();
register.onsubmit = function (objectUser){
    objectUser.preventDefault();
    let name = register.name.value;
    let surname = register.surname.value;
    let age = register.age.value;
    let user = {name,surname,age}


    userChek.push(user);
    localStorage.setItem('userChek', JSON.stringify(userChek));
    let userDiv = document.createElement('div');
    userDiv.style.marginRight = '10px';
    let hName = document.createElement('h2');
    hName.innerText = `Name: ${user.name}`;

    let hSurname = document.createElement('h2');
    hSurname.innerText = `Surname: ${user.surname}`;

    let hAge = document.createElement('h2');
    hAge.innerText = `Age: ${user.age}`;

    userDiv.append(hName,hSurname,hAge);
    users.appendChild(userDiv);

}
function start () {
    for (const userItem of userChek) {
        let userDiv = document.createElement('div');
        userDiv.style.marginRight = '10px';
        let hName = document.createElement('h2');
        hName.innerText = `Name: ${userItem.name}`;

        let hSurname = document.createElement('h2');
        hSurname.innerText = `Surname: ${userItem.surname}`;

        let hAge = document.createElement('h2');
        hAge.innerText = `Age: ${userItem.age}`;

        userDiv.append(hName,hSurname,hAge);
        users.appendChild(userDiv);
    }
}
document.body.appendChild(users);


// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +
let counter = +localStorage.getItem('number');
counter += 1;
localStorage.setItem('number',counter);

let hCounter = document.createElement('h2');
hCounter.innerText = counter;
document.body.appendChild(hCounter)

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
let sessions = JSON.parse(localStorage.getItem('session')) || [] ;
sessions.push(new Date());
localStorage.setItem('session',JSON.stringify(sessions));

let sessionDiv = document.createElement('div');
for (const session of sessions) {
    let strSession = document.createElement('h2');
    strSession.innerText = session.toString();
    sessionDiv.appendChild(strSession);
}
document.body.appendChild(sessionDiv);


// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let arrObj = [];
for (let i = 0; i < 100; i++){
    arrObj.push({name: `Obj ${i + 1}`,id: `${i + 1}`});
}

let pageDiv = document.createElement('div');
let displayObj = document.createElement('div');
pageDiv.appendChild(displayObj);


function createObjPage (first,second) {
    displayObj.innerHTML = '';
    for (let i = first; i <= second; i++){
        let objIdName = document.createElement('h2');
        console.log(arrObj[i])
        objIdName.innerText = `ID: ${arrObj[i].id}, Name: ${arrObj[i].name}`;
        displayObj.appendChild(objIdName);
    }
}

let pageNumber = 1;
updatePage()

let prevButton = document.createElement('button');
prevButton.innerText = '< Prev';
prevButton.onclick = function (){
    pageNumber--;
    if (pageNumber < 1){
        pageNumber = 10;
    }
    updatePage()
}

let nextButton = document.createElement('button');
nextButton.innerText = 'Next >';
nextButton.onclick = function () {
    pageNumber++;
    if (pageNumber > 10){
        pageNumber = 1;
    }
    updatePage()
}

console.log(pageNumber)

function updatePage (){
    switch (pageNumber){
        case 1:
            createObjPage(0,9);
            break
        case 2:
            createObjPage(10,19);
            break
        case 3:
            createObjPage(20,29);
            break;
        case 4:
            createObjPage(30,39);
            break;
        case 5:
            createObjPage(40,49);
            break;
        case 6:
            createObjPage(50,59);
            break;
        case 7:
            createObjPage(60,69);
            break;
        case 8:
            createObjPage(70,79);
            break;
        case 9:
            createObjPage(70,79);
            break;
        case 10:
            createObjPage(90,99);
            break
    }
}

pageDiv.append(displayObj,prevButton,nextButton);
document.body.appendChild(pageDiv);

//
// - створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
let inputKg = document.createElement('input');
inputKg.type = 'number';
document.body.appendChild(inputKg);
let outFt = document.createElement('h2');

inputKg.oninput = function () {
    let kg = +this.value;
    let ft = kg * 2.2;

    outFt.innerText = `${kg} kg = ${ft} ft.`
    document.body.append(outFt);
}

//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let clickDiv = document.createElement('div');
clickDiv.style.marginTop = '20px';
let elementH2 = document.createElement('h2');
elementH2.setAttribute('id','text');
elementH2.innerText = 'hello';

let offOn = document.createElement('button');

offOn.innerText = 'Click me!'


offOn.onclick = function () {
    if (elementH2.style.display === 'none'){
        elementH2.style.display = 'flex';
    }else {
        elementH2.style.display = 'none';
    }
}

clickDiv.append(elementH2,offOn);
document.body.appendChild(clickDiv);


//
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let ageCheckDiv = document.createElement('div');
let ageInput = document.createElement('input');
ageInput.type = 'number';

let checkButton = document.createElement('button');
checkButton.innerText = 'Check age'
let result = document.createElement('h2');

checkButton.onclick = function (){
    let userAge = +ageInput.value;
    if (userAge < 18){

        result.innerText = 'Cartoon';
    }else {
        result.innerText = 'Content 18+';
    }
}

ageCheckDiv.append(ageInput,checkButton,result);
document.body.appendChild(ageCheckDiv)
