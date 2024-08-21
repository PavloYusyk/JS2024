// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [];
users.push(new User(1,'Pavlo','Yusyk','my.millo@gom','0939393993'));
users.push(new User(2,'Oleg','Molfar','molfar@com.ua','0930011101'));
users.push(new User(3,'Sergiy','Nebo','nebos@omar.com','0678797077'));
users.push(new User(4,'Ivas','Vishnya','sadok.vishneviy@colo.hata','0982654489'));
users.push(new User(5,'Marta','Konduk','kondukM@jara.in.ua','0938794513'));
users.push(new User(6,'Olena','Pen','napishi@mno.yu','0674324545'));
users.push(new User(7,'Taras','Makintosh','m@t.com','0935436456'));
users.push(new User(8,'Oksana','Plashch','plashch@palto','0939324536'));
users.push(new User(9,'Syava','Woda','drink@my','0939393223'));
users.push(new User(10,'Ira','Vesela','who@am.i','0939314563'));

console.log(users);

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filter = users.filter(value => value.id % 2 === 0);
console.log(filter);

//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// роблю по спаданню так як в мене по дeфолту за зростянням
let sort = users.sort((a, b) => b.id - a.id);
console.log(sort);

//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let client = [];
client.push(new Client(1, 'Pavlo', 'Yusyk', 'my.millo@gom', '0939393993', ['milk', 'beer', 'chips']));
client.push(new Client(2, 'Oleg', 'Molfar', 'molfar@com.ua', '0930011101', ['bread', 'cheese', 'sausage']));
client.push(new Client(3, 'Ivas', 'Vishnya', 'sadok.vishneviy@colo.hata', '0982654489', ['sugar', 'tea']));
client.push(new Client(4, 'Marta', 'Konduk', 'kondukM@jara.in.ua', '0938794513', ['coffee']));
client.push(new Client(5, 'Sergiy', 'Nebo', 'nebos@omar.com', '0678797077', ['milk', 'coffee', 'sugar', 'tea']));
client.push(new Client(6, 'Olena', 'Pen', 'napishi@mno.yu', '0674324545', ['cookie', 'milk']));
client.push(new Client(7, 'Taras', 'Makintosh', 'm@t.com', '0935436456', ['cookie', 'milk', 'coffee', 'sugar', 'tea']));
client.push(new Client(8,'Oksana','Plashch','plashch@palto','0939324536', ['beer','tequila','lime','salt']));
client.push(new Client(9,'Syava','Woda','drink@my','0939393223','whisky','cola','ice','apple'));
client.push(new Client(10,'Ira','Vesela','who@am.i','0939314563',['bubble gum']));
console.log(client);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sort1 = client.sort((a, b) => a.order.length - b.order.length);
console.log(sort1);

//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, producer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function () {
        for (const argumentsKey in this) {
            console.log(argumentsKey, this[argumentsKey]);
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    }
    this.changerYear = function (newValue) {
        this.year = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }

}
let car1 = new Car('A6','AUDI',2012,220,2.7);
console.log(car1);
car1.drive();
car1.info();
car1.increaseMaxSpeed(245);
car1.changerYear(2018);
car1.addDriver(users[4]);
console.log(car1);

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class SportCar {
    constructor(model, producer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info() {
        for (const argumentsKey in this) {
            console.log(argumentsKey, this[argumentsKey]);
        }
    }
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
    }
    changerYear(newValue) {
        this.year = newValue;
    }
    addDriver(driver) {
        this.driver = driver;
    }
}
let sportCar = new SportCar('Veyron','Bugatti',2020,390,6.0);
console.log(sportCar);
sportCar.drive();
sportCar.info();
sportCar.increaseMaxSpeed(410);
sportCar.changerYear(2023);
sportCar.addDriver(users[4]);
console.log(sportCar);

//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Popel{
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let popels = [];
popels.push(new Popel('Popel1',23,41));
popels.push(new Popel('Popel2',18,40));
popels.push(new Popel('Popel3',21,38));
popels.push(new Popel('Popel4',32,37));
popels.push(new Popel('Popel5',25,42));
popels.push(new Popel('Popel6',24,45));
popels.push(new Popel('Popel7',22,36));
popels.push(new Popel('Popel8',19,39));
popels.push(new Popel('Popel9',18,38));
popels.push(new Popel('Popel0',41,42));
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince{
    constructor(name, age, bootsSize) {
        this.name = name;
        this.age = age;
        this.bootsSize = bootsSize;
    }
}
let prince = new Prince('Artur',29,37);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const popel of popels) {
    if (popel.footSize === prince.bootsSize){
        console.log(popel)
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let find = popels.find(value => value.footSize === prince.bootsSize);

//
// Через Array.prototype. створити власний foreach, filter, map
Array.prototype.newForEach = function (callback){
    let arr = this;
    for (const arrElement of arr) {
        callback(arrElement);
    }
}
popels.newForEach(value => console.log(value));

Array.prototype.myFilter = function (predicate){
    let arr = [];
    for (const item of this) {
        if (predicate(item)){
            arr.push(item);
        }
    }
    return arr;
}

let myFilter = popels.myFilter(value => value.age < 25);
console.log(myFilter);

Array.prototype.myMap = function (callback){
    let arr =[];
    for (const arrElement of this) {
        if (callback(arrElement) > 40) {
            arr.push(arrElement);
        }
    }
    return arr;
}
let myMap = popels.myMap(value => value.age * 2);
console.log(myMap);
