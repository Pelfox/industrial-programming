// Задание №1
const a = 2 * (3 - 1);
const b = 6 - 2;
console.log(a === b);

// Задание №2
const numInput = prompt('Enter a number:');
const num = Number(numInput);
if (numInput.trim() === '' || isNaN(num)) {
	alert('Not a number');
} else if (num > 0) {
	alert(1);
} else if (num < 0) {
	alert(-1);
} else {
	alert(0);
}

// Задание №3
const word = prompt('Enter a word (3-50 characters, English):');
if (word.length < 3 || word.length > 50) {
	console.log('Invalid length');
} else {
	const mid = Math.floor(word.length / 2);
	if (word.length % 2 === 0) {
		console.log(word[mid - 1] + word[mid]);
	} else {
		console.log(word[mid]);
	}
}

// Задание №4
const a4 = Number(prompt('Enter number a:'));
const b4 = Number(prompt('Enter number b:'));
const result4 = (a4 + b4 < 4) ? 'Few' : 'Many';
console.log(result4);

// Задание №5
const login = prompt('Enter login:');
const message = (login === 'Employee') ? 'Hello' :
	(login === 'Director') ? 'Greetings' :
		(login === '') ? 'No login' : '';
console.log(message);

// Задание №6
const user = prompt('Who are you?');
if (user === 'Admin') {
	const pass = prompt('Enter password:');
	if (pass === 'I am the boss') {
		alert('Hello!');
	} else if (pass === '' || pass === null) {
		alert('Canceled');
	} else {
		alert('Wrong password');
	}
} else if (user === '' || user === null) {
	alert('Canceled');
} else {
	alert('I don’t know you');
}

// Задание №7
const n7 = Number(prompt('Enter a number:'));
if ((n7 % 2 === 0 && n7 >= 10 && n7 <= 99) || (n7 % 2 !== 0 && n7 >= 100 && n7 <= 999)) {
	console.log('YES');
} else {
	console.log('NO');
}

// Задание №8
const year = Number(prompt('Enter year:'));
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
	console.log('YES');
} else {
	console.log('NO');
}

// Задание №9
for (let i = 100; i >= 1; i--) {
	console.log(i);
}

// Задание №10
for (let i = 1; i <= 100; i++) {
	if (i % 3 === 0) console.log(i);
}

// Задание №11
let sumEven = 0;
for (let i = 2; i <= 100; i += 2) {
	sumEven += i;
}
console.log(sumEven);

// Задание №12
const str12 = prompt('Enter a string:');
for (let i = str12.length - 1; i >= 0; i--) {
	console.log(str12[i]);
}

// Задание №13
const str13 = prompt('Enter a string in uppercase:');
let result13 = '';
for (let i = 0; i < str13.length; i++) {
	result13 += str13[i] + ' ';
}
console.log(result13.trim());

// Задание №14
const phrase = prompt('Enter a phrase:').toLowerCase();
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let isPangram = true;
for (const ch of alphabet) {
	if (!phrase.includes(ch)) {
		isPangram = false;
		break;
	}
}
console.log(isPangram ? 'yes' : 'no');

// Дополнительное задание №1
const str1 = prompt('Enter a word or phrase:').toLowerCase().replace(/\s/g, '');
const reversed = str1.split('').reverse().join('');
console.log(str1 === reversed ? 'yes' : 'no');

// Дополнительное задание №2
let x = Number(prompt('Enter first positive integer:'));
let y = Number(prompt('Enter second positive integer:'));
while (x !== 0 && y !== 0) {
	if (x > y) {
		x = x - y;
	} else {
		y = y - x;
	}
}
console.log(x + y);

// Дополнительное задание №3
const num3 = Number(prompt('Enter a number:'));
let sumDiv = 0;
for (let i = 1; i < num3; i++) {
	if (num3 % i === 0) sumDiv += i;
}
console.log(sumDiv === num3 ? 'yes' : 'no');

// Дополнительное задание №4
for (let i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log('FizzBuzz');
	} else if (i % 3 === 0) {
		console.log('Fizz');
	} else if (i % 5 === 0) {
		console.log('Buzz');
	} else {
		console.log(i);
	}
}
