let str = prompt('Enter a squence of number ,separated by commas:');
let mySheep = str.split(',');
console.log(...mySheep);
let biggestNubmer = Math.max(...mySheep);
alert('The biggest number is  '+ biggestNubmer);
