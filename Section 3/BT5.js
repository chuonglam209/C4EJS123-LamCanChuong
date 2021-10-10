let str = prompt('Enter a squence of number ,separated by commas:');
let myArr = str.split(",");
console.log(myArr);
let sum = 0;
for(let i = 0 ; i < myArr.length ; i++)
{
    sum += parseInt(myArr[i]);
}
console.log(sum);