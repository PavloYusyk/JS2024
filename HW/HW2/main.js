// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr1 =[1,2,3,4,5,6,7,8,9,10];
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[4]);
console.log(arr1[5]);
console.log(arr1[6]);
console.log(arr1[7]);
console.log(arr1[8]);
console.log(arr1[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title, pageCount, genre.
let book1 = {
    title: 'book-1',
    pageCount: 456,
    genre: 'cartoon'
}
let book2 = {
    title: 'book-2',
    pageCount: 136,
    genre: 'comedy'
}
let book3 = {
    title: 'book-3',
    pageCount: 276,
    genre: 'action'
}
console.log(book1,book2,book3);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title: 'book-1',
    pageCount: 456,
    genre: 'cartoon',
    authors: ['Piter',23]
}
let book5 = {
    title: 'book-2',
    pageCount: 136,
    genre: 'comedy',
    authors: ['Angel',17]
}
let book6 = {
    title: 'book-3',
    pageCount: 276,
    genre: 'action',
    authors: ['Bond',43]
}
console.log(book4,book5,book6);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username, password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'user1',username: 'userName1',password: 'pass1'},
    {name: 'user2',username: 'userName2',password: 'pass2'},
    {name: 'user3',username: 'userName3',password: 'pass3'},
    {name: 'user4',username: 'userName4',password: 'pass4'},
    {name: 'user5',username: 'userName5',password: 'pass5'},
    {name: 'user6',username: 'userName6',password: 'pass6'},
    {name: 'user7',username: 'userName7',password: 'pass7'},
    {name: 'user8',username: 'userName8',password: 'pass8'},
    {name: 'user9',username: 'userName9',password: 'pass9'},
    {name: 'user10',username: 'userName10',password: 'pass10'}
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

/*
- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
    Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
    Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
*/
let temp_info = [
    [12,26,17],             //day1
    [13,34,23],             //day2
    [13,33,22],             //day3
    [7,14,5],             //day4
    [9,17,10],             //day5
    [13,28,11],             //day6
    [10,20,13]              //day7
]
console.log(temp_info[3][0]);  //out day 4 morning

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
let x = 23;
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
if(x !== 0){
    console.log('Вірно!');
}else {
    console.log('Не вірно!');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 21;
if(time >= 0 && time < 15){
    console.log('First part');
}else if(time >= 15 && time < 30){
    console.log('Second part');
}else if(time >= 30 && time < 45){
    console.log('Third part');
}else if(time >= 45 && time <= 59){
    console.log('Fourth part');
}else {
    console.log('"Error: part not found!"');
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 21;
if(day >= 1 && day < 11){
    console.log('first');
}else if (day >= 11 && day < 21){
    console.log('second');
}else if (day >= day <= 31){
    console.log('third');
}else {
    console.log('You are stupid! Enter day from 1 to 31.');
}
// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let weekday = 1
switch (weekday){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log("I don't know what you want from me!");
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a = 31;
let b = 107;
if (a > b){
    console.log('More A = ' + a);
}else if (b > a){
    console.log('More B = ' + b);
}else if (a === b){
    console.log('A equals B')
}else {
    console.log('One of tr two values is not a number!')
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let xx;
if (xx !== true){
    xx = 'default';
}

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]
if (coursesAndDurationArray[0].monthDuration > 5)
    console.log('Super!');
if (coursesAndDurationArray[1].monthDuration > 5)
    console.log('Super!');
if (coursesAndDurationArray[2].monthDuration > 5)
    console.log('Super!');
if (coursesAndDurationArray[3].monthDuration > 5)
    console.log('Super!');
if (coursesAndDurationArray[4].monthDuration > 5)
    console.log('Super!');
if (coursesAndDurationArray[5].monthDuration > 5)
    console.log('Super!');

