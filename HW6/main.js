// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let arrStr = ['hello world', 'lorem ipsum', 'javascript is cool'];
for (const string of arrStr) {
    console.log(string.length);
}

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
for (const string of arrStr) {
    console.log(string.toUpperCase());
}

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let arrUpper = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
for (const string of arrUpper) {
    console.log(string.toLowerCase());
}

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let trim = ' dirty string   ';
console.log(trim.trim());

//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str1 = 'Ревуть воли як ясла повні';
let strings = str1.split(' ');
console.log(strings);

//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10,8,-7,55,987,-1011,0,1050,0];
let strings1 = numbers.map((number) => number.toString());
console.log(strings1);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
let sortNums = (arr,direction) => {
    let sort
    if (direction === 'ascending'){
        sort = arr.sort((a, b) => a - b);
    }else if (direction === 'descending'){
        sort = arr.sort((a, b) => b - a);
    }
    return sort;
}
console.log(sortNums(nums,'ascending'));
console.log(sortNums(nums,'descending'));

//
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sort1 = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sort1);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filter);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let map = coursesAndDurationArray.map((course, index) => ({id: index + 1, ...course}));
console.log(map);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
let suit = ['spade', 'diamond','heart', 'clubs'];
let cardRank = ['6', '7', '8', '9', '10','jack','queen','king','ace'];
let createDeck =  (suit, cardRank) => {
    let deck = [];
    for (const suitVal of suit) {
        for (const rank of cardRank) {
            if (suitVal === 'spade' || suitVal === 'clubs'){
                deck.push({cardSuit: suitVal, valueCard: rank, color: 'black'})
            }else {
                deck.push({cardSuit: suitVal, valueCard: rank, color: 'red'})
            }
        }
    }
    return deck;
}
let deck = createDeck(suit,cardRank);
console.log(deck);

// - знайти піковий туз
let filterAceSpade = deck.filter(value => value.cardSuit === 'spade' && value.valueCard === 'ace');
console.log(filterAceSpade);

// - всі шістки
let filterSix = deck.filter(value => value.valueCard === '6');
console.log(filterSix);

// - всі червоні карти
let filterRed = deck.filter(value => value.color === 'red');
console.log(filterRed);

// - всі буби
let filterDiamond = deck.filter(value => value.cardSuit === 'diamond');
console.log(filterDiamond);

// - всі трефи від 9 та більше
let filterClubs9 = deck.filter(value => value.cardSuit === 'clubs' && ['9', '10','jack','queen','king','ace'].includes(value.valueCard));
console.log(filterClubs9);



// =========================
//

//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let reduce = deck.reduce((accum, card) => {
    if (card.color === 'red'){
        if (card.cardSuit === 'diamond'){
            accum[0][0].push(card);
        }else {
            accum[0][1].push(card);
        }
    }else if (card.color === 'black'){
        if (card.cardSuit === 'clubs'){
            accum[1][0].push(card);
        }else {
            accum[1][1].push(card);
        }
    }
    return accum;
},[[[],[]],[[],[]]]);
console.log(reduce);

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
let sassFilter = coursesArray.filter(value => value.modules.includes('sass'));
console.log(sassFilter);
// --написати пошук всіх об'єктів, в який в modules є docker
let dockerFilter = coursesArray.filter(value => value.modules.includes('docker'));
console.log(dockerFilter);


