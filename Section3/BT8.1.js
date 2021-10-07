let str = prompt('Enter a squence of number ,separated by commas:');
let mySheep = str.split(',').map(Number);
    console.log('Hello , my name is Test and here is my sheep size : ');
    console.log(...mySheep);
   
