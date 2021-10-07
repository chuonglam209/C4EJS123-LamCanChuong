let str = prompt('Enter a squence of number ,separated by commas:');
let mySheep = str.split(',').map(Number);
let biggestNubmer = Math.max(...mySheep);
mySheep[mySheep.indexOf(biggestNubmer)] = 8;
console.log("After shearing, here my flock")
console.log(...mySheep);
