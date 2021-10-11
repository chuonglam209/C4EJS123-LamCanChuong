let array = [1,2,3,4,5,6,5,7,8,9,6,4,1,2];
// for(let i = 0; i < array.length - 1; i++)
// {
//     for (let j = 1; i < array.length;j++)
//     if(array[i] == array[j])
//     array.splice(j, 1);
//     j = i +1;
//     // for(let x in array )
//     // console.log(x);
// }
let arrFix = array.reduce(
    (accumulator, currentItem) => accumulator.includes(currentItem) ? accumulator : [...accumulator, currentItem],
    []
);
    console.log(arrFix);
