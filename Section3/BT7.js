let str = (prompt('Enter a squence of number ,separated by commas:'));
let myArray = str.split(',').map(Number);
let  num ;
while(true)
{
    num = Number(prompt('Enter number'));

    if(num){
        break;
       }
    else 
    {
        alert("Number are not vaild");
    }

}
// for(let i = 0; i < myArray.length; i++)
// {
//     // console.log(myArray[i]);
//     if(num == Number((myArray[i])))
//     {
//     alert(num + 'is Found in my array at index ' + i);
//     break;
//     }
    
// }
if( myArray.includes(num))
{
    alert(num + ' is FOUND in my array at index ' +myArray.indexOf(num));
}
else{
    
    alert("is NOT found in my array");
}
