// Задание 1
const songName = "I'm a barbie girl";
console.log("Now playing: " + songName);

// Задание 2
const catMood = "angry";
console.log("Your cat is " + catMood);

// Задание 3
const isImpostor = true;
console.log("Red is impostor? " + isImpostor);

// Задание 4
const wow = "wow";
const soJS = "so JavaScript";
const muchCode = "much code";
console.log(wow, soJS, muchCode);

// Задание 5
const likes = 77;
const verified = false;
console.log(typeof likes, typeof verified);

// Задание 6
const isOnion = true;
console.log(typeof isOnion);

// Задание 7
const year = 2077;
const hero = "V";
const isBuggy = true;
console.log(typeof year, typeof hero, typeof isBuggy);

// Задание 8
const prize = 1000000;
console.log(typeof prize);

// Задание 9
const situation = "fire";
const reaction = "this is fine";
console.log(typeof situation, typeof reaction);

// Задание 10
const nickname = prompt("What's your Minecraft nickname?");
alert(`Welcome to the server, ${nickname}`);

// Задание 11
const show = prompt("What's your favourite TV show?");
alert(`Tonight we binge: ${nickname}`);

// Задание 12
const ok = confirm("Do you want a link to cool JS docs?");
if (ok) alert("Never gonna give you up");

// Задание 13
const hours = prompt("How many hours did you scroll today?");
alert(`Bruh, that's ${hours} hours... touch grass`);

// Задание 14
const bitcoinPrice = prompt("What's the current Bitcoin price?");
console.log(Number(bitcoinPrice) + 1000);

// Задание 15
const n = prompt("Enter the number");
console.log(`Skibidi * ${Number(n)}`);

// Задание 16
const coffeesCount = prompt("How many coffees today?");
console.log(Number(coffeesCount) + 1);

// Задание 17
const karma = prompt("What's your karma?");
console.log("Total karma is " + (Number(karma) + 10));

// Задание 18
const likesCount = prompt("How many likes did your post get?");
console.log(Number(likesCount) + 420);

// Задание 19
const money = 1000;
console.log(money + 250);

// Задание 20
const coins = 350;
const boosters = 5;
console.log("Total score: " + (coins + boosters * 100));

// Задание 21
const pikachuHP = 100;
const attack = 35;
console.log(pikachuHP - attack);

// Задание 22
const players = 456;
const eliminated = 100;
console.log(players - eliminated);

// Задание 23
const a = 10;
const b  = 3;
console.log(a / b, a % b);

// Задание 24
console.log('Length: ', 2 * Math.PI * 10);

// Задание 25
console.log('Square 1: ', Math.pow(15, 2));

// Задание 26
console.log('Square 2: ', 8 * 12);

// Задание 27
console.log('Perimeter: ', 7 + 9 + 13);

// Задание 28
console.log('Sqrt: ', Math.sqrt(81));

// Задание 29
const isPrime = (n) => {
	if (n < 2) return undefined;
	if (n === 2) return true;

	let i = 2;
	while (i <= Math.sqrt(n)) {
		if (n % i === 0) return false;
		i++;
	}
	return true;
};
console.log('Is prime? ', isPrime(17));

// Задание 30
console.log('Max: ', Math.max(45, 12, 78));

// Задание 31
let array = [];
let current = '';
while (current !== 'stop') {
	current = prompt('Enter a number; to stop enter "stop"');
	array.push(Number(current));
}
console.log('Min: ', Math.min(...array));

// Задание 32
console.log('Random 1: ', Math.random() * 101);

// Задание 33
console.log('Random 2: ', Math.random() * 7);

// Задание 34
const factorialize = (n) => {
	if (n < 0) return -1;
	else if (n === 0) return 1;
	else return n * factorialize(n - 1);
};
console.log('Factorial: ', factorialize(6));

// Задание 35
console.log('Array sum: ', [...Array(101).keys()].reduce((a, b) => a + b));

// Задание 36
let array2 = [];
let currentEnter = '';
while (currentEnter !== 'stop') {
	currentEnter = prompt('Enter a number; to stop enter "stop"');
	array2.push(Number(current));
}
console.log('Avg: ', array2.reduce((a, b) => a + b) / array2.length);

// Задание 37
console.log('Length: ', Math.abs(123456789).toString().length);

// Задание 38
const isPalindrome = (n) => {
	return n.toString() === n.toString().split('').reverse().join('');
}
console.log('Is palindrome? ', isPalindrome(121));

// Задание 39
for (let i = 1; i <= 10; i++) {
	console.log(`7 * ${i} = ${7 * i}`);
}

// Задание 40
const gcd = (a, b) => {
	while (b !== 0) [a, b] = [b, a % b];
	return Math.abs(a);
}
console.log('GCD: ', gcd(56, 98))

// Задание 41
const lcm = (a, b) => {
	return Math.abs(a * b) / gcd(a, b);
}
console.log('LCM: ', lcm(12, 18));

// Задание 42
const fib = (n) => {
	if (n <= 1) return n;
	return fib(n - 1) + fib(n - 2);
}
console.log('10nth Fibonacci number: ', fib(10));
