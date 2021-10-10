let str = prompt('Enter a squence of number ,separated by commas:');
let mySheep = str.split(',').map(Number);
console.log(...mySheep);
for(let i = 0 ; i < mySheep.length; i++)
{
    mySheep[i] = mySheep[i] + 50;
}
console.log("One month has, passed,my Sheep have grown, here a their sizes: ");
console.log(...mySheep);

for(let i = 0 ; i < mySheep.length; i++)
{
    mySheep[i] = mySheep[i] + 20;
}
console.log("MONTH 3")
console.log("One month has, passed,my Sheep have grown, here a their sizes: ");
console.log(...mySheep);

    let sum = 0;
    for(let i = 0; i < mySheep.length; i++)
{
    sum = sum + mySheep[i];
}
console.log('My flock has size in total:' + sum);
console.log(' i would get: '+(sum*20) );

 
