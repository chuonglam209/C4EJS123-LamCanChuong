let str = prompt('Enter a squence of number ,separated by commas:');
let myArr = str.split(',');
console.log(...myArr);
let smallestNubmer = Math.min(...myArr);
alert('The smallest nubmer is  '+ smallestNubmer);