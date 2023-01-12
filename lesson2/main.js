// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let tenElements = ['one', 2, 'three', 4, 'five', 6, 'seven', 8, true, false ];
console.log(tenElements[0]);
console.log(tenElements[1]);
console.log(tenElements[2]);
console.log(tenElements[3]);
console.log(tenElements[4]);
console.log(tenElements[5]);
console.log(tenElements[6]);
console.log(tenElements[7]);
console.log(tenElements[8]);
console.log(tenElements[9]);



// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let firstBook = {
    title : 'Romeo and Julieta',
    pageCount : 33266,
    genre : 'Romance',
};


let secondBook = {
    title : 'Hary Potter',
    pageCount : 59996,
    genre : 'Fantasy',
};

let thirdBook = {
    title : 'Sherlok Holms',
    pageCount : 51651,
    genre : 'Detective',
};

console.log(firstBook);
console.log(secondBook);
console.log(thirdBook);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let firstBook2 = {
    title : 'Romeo and Julieta',
    pageCount : 33266,
    genre : 'Romance',
    authors : [
        {name : 'Victor'},
        {age : 18},
    ],
};


let secondBook2 = {
    title : 'Hary Potter',
    pageCount : 59996,
    genre : 'Fantasy',
    authors : [
        {name : 'Allan'},
        {age : 32},
    ],
};

let thirdBook2 = {
    title : 'Sherlok Holms',
    pageCount : 51651,
    genre : 'Detective',
    authors : [
        {name : 'Steven'},
        {age : 66},
                    ],
};

console.log(firstBook2);
console.log(secondBook2);
console.log(thirdBook2);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name : 'Victor' , username : 'Shevchuk', password : 151443316 },
    {name : 'Ivan' , username : 'Adawddaw', password : 28365345353 },
    {name : 'Andriy' , username : 'Sdaswcac', password : 351835836 },
    {name : 'Volodymyr' , username : 'Agsrvsr', password : 4353816 },
    {name : 'Vasyl' , username : 'Ssfsefsf', password : 5518398316 },
    {name : 'Mykola' , username : 'Hefsfd', password : 65138683316 },
    {name : 'Armen' , username : 'Hrsfdsf', password : 75183853316 },
    {name : 'Davyd' , username : 'EWfdsvsf', password : 8518385316 },
    {name : 'Danyl' , username : 'Llmtdmb', password : 95173537736 },
    {name : 'Oleg' , username : 'POOjnvdk', password : 15378773836 }

];
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