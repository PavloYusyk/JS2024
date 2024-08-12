// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function squere(a,b){
    return a * b
}
console.log(squere(5,8));

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let Pi = 3.14;
function squereCircle(r){
    return Pi * (r * r);
}

console.log(squereCircle(7));

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function squereCylinder(h,r){
    return 2 * Pi * r * (h + r);
}

console.log(squereCylinder(4,2));

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент\
let newArr = [124,2235,312,42,124,3235];
function iterArr(arr){
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
iterArr(newArr);

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function par(text){
    document.write(`<p>${text}</p>`)
}
par('hello');

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
function ulDisplay(li){
    document.write(`<ul>`);
    document.write(`<li>${li}</li>`);
    document.write(`<li>${li}</li>`);
    document.write(`<li>${li}</li>`);
    document.write(`</ul>`);
}
ulDisplay('I am LI');

// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
function ulNewDisplay(li,count){
    document.write(`<ul>`);
        for (let i = 0; i < count; i++){
            document.write(`<li>${li}</li>`);
        }
    document.write(`</ul>`);
}
ulNewDisplay('I am new LI', 7);

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
let easyArr = ['hello',34,true,'hrhrhrh','bye'];
function ulArr(arr){
    document.write(`<ul>`);
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    }
    document.write(`</ul>`);
}
ulArr(easyArr);

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let userArr = [{
    id: 1,
    name: 'Joan',
    age: 23,
    info: 'JS and React developer, '
},{
    id: 2,
    name: 'Niki',
    age: 34
}];
function blokUser(arr){
    for (const user of arr) {
        document.write(`<div>`);
        for (const key in user) {
            if(key === 'id'){
                document.write(`<h3>ID: ${user[key]}</h3>`);
            }else if(key === 'name'){
                document.write(`<h1>My name is - ${user[key]}</h1>`);
            }else if(key === 'age'){
                document.write(`<h2>My age is - ${user[key]}</h2>`);
            }else {
                document.write(`<p>About my - ${user[key]}</p>`);
            }
        }
        document.write(`<hr>`)
        document.write(`</div>`);
    }
}
blokUser(userArr);

//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
function lowNumber(arr){
    let min = arr[0];
    for (const element of arr) {
        if (element < min){
            min = element;
        }
    }
    return min;
}
console.log(lowNumber(newArr));

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr){
    let sum = 0;
    for (const element of arr) {
        sum = sum + element;
    }
    return sum;
}
console.log(sum(newArr));

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2){
    let newIndex = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = newIndex;
    return arr;
}
console.log(swap(newArr,0,3));

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
function convertor(sumUAH,exchangeCurrency){
    if (exchangeCurrency.toUpperCase() === 'EUR'){
        return sumUAH / 40;
    }else if (exchangeCurrency.toUpperCase() === 'USD') {
        return sumUAH / 38;
    }
}

console.log(convertor(13356, 'usd'));
console.log(convertor(13356, 'eur'));