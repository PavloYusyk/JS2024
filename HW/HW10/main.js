// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let register = document.forms.register;


let users = document.createElement('div');
users.style.display = 'flex';

register.onsubmit = function (objectUser){
    objectUser.preventDefault();
    let name = register.name.value;
    let surname = register.surname.value;
    let age = register.age.value;
    let user = {name,surname,age}

    let userChek = JSON.parse(localStorage.getItem('userChek')) || [];
    userChek.push(user);
    localStorage.setItem('userChek', JSON.stringify(userChek));

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
//
// - створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
//
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається