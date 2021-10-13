// let array = [1,2,3,4,5,6,5,7,8,9,6,4,1,2,6,5,7,8,];
// let arrayFix = [];

// for(let i = 0 ; i < array.length; i++)
// {
//     if(!arrayFix.includes(array[i]))
//     {
//          arrayFix.push(array[i]);
//     }
    

// }
// console.log(...arrayFix)

// // let arrFix = array.reduce(
// //     (accumulator, currentItem) => accumulator.includes(currentItem) ? accumulator : [...accumulator, currentItem],
// //     []
// // );
//     // console.log(arrFix);
{
    const arr = [8,5,5,5,9,4,3,1,2,6,0,7,1,1,0,5,9,9,6,0,3,2,0];
    const newarr = [... new Set(arr)] 
    console.log(newarr);

}