const users = `[
    {
    "index": 0,
    "isActive": true,
    "balance": "$2,226.60",
    "name": "Eugenia Sawyer",
    "gender": "female",
    "phone": "+1 (840) 583-3207",
    "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
    "index": 1,
    "isActive": true,
    "balance": "$2,613.77",
    "name": "Pauline Gallegos",
    "gender": "female",
    "phone": "+1 (985) 593-3328",
    "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
    "index": 2,
    "isActive": false,
    "balance": "$3,976.41",
    "name": "Middleton Chaney",
    "gender": "male",
    "phone": "+1 (995) 591-2478",
    "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
    "index": 3,
    "isActive": true,
    "balance": "$1,934.58",
    "name": "Burns Poole",
    "gender": "male",
    "phone": "+1 (885) 559-3422",
    "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
    "index": 4,
    "isActive": true,
    "balance": "$3,261.65",
    "name": "Mcfadden Horne",
    "gender": "male",
    "phone": "+1 (942) 565-3988",
    "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
    "index": 5,
    "isActive": false,
    "balance": "$1,790.56",
    "name": "Suzette Lewis",
    "gender": "female",
    "phone": "+1 (837) 586-3283",
    "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    }
]`;

const USERS_JS = JSON.parse(users);
console.log(USERS_JS);

// тут я сначала избавляюсь от группы символов "$" и ",", чтобы получить сумму в Number
// потом уже фильтрую по условию Number(balance) > 2000
// перебираю объекты массива USERS_JS на phone
const phoneNumbers = USERS_JS
    .filter((user) => user.balance.replace(/[$,]/g, '') >= 2000)
    .map((user) => user.phone);

const phoneNumbersList = document.querySelector('.numbers__list');

function getPhoneNumbersItem(arr){
    arr.forEach(element => {
        let number = document.createElement('li');
        number.classList.add('numbers__item');
        number.innerText = element;
        phoneNumbersList.appendChild(number);
    });
}

getPhoneNumbersItem(phoneNumbers);

// без parseFloat выдает что-то страшное
// тут я использовал обычный метод редюс с аккумулятором и айтемом в виде объекта user
// аккумулируем все ключи balance, которые мы предварительно избавили от символов регуляркой
const totalBalance = USERS_JS
    .reduce((acc, user) => acc += parseFloat(user.balance.replace(/[$,]/g, '')), 0);

const totalBalanceHTML = document.querySelector('.balance__total');
totalBalanceHTML.innerText = `Общий баланс всех пользователей: $${totalBalance.toFixed(2)}`;