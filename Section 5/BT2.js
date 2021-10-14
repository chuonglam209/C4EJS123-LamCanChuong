//2.1 
array = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];

let counts = {};

for (let i = 0; i < array.length; i++) {
  let num = array[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}
for(let x in counts){
  console.log( x +':'+ counts[x] );

}







//2.2
const inventory = [
  {
      name: 'HP Envy 13aq',
      price: 21000,
      brand: 'HP',
      quantity: 5,
  },
  {
      name: 'Dell XPS 9370',
      price: 30000,
      brand: 'Dell',
      quantity: 1,
  },
  {
      name: 'Dell Inspiron 3567',
      price: 9300,
      brand: 'Dell',
      quantity: 12,
  },
  {
      name: 'Dell Latitude E5450',
      price: 8600,
      brand: 'Dell',
      quantity: 2,
  },
  {
      name: 'Asus Zenbook',
      brand: 'Asus',
      price: 20000,
      quantity: 4,
  },
  {
      name: 'HP Pavilion',
      brand: 'HP',
      price: 14000,
      quantity: 7,
  },
]
 


let brandMenu = [];

for (let j of inventory){
    if(!brandMenu.includes(j.brand))
    {
        brandMenu.push(j.brand);
    }
}


let inventoryByBrand ={};
for (let x of brandMenu)
{
    inventoryByBrand[x] = [];
}

for(let i = 0; i < inventory.length;i++){
    let lap = inventory[i];
    inventoryByBrand[lap.brand].push(lap);
}

console.log(inventoryByBrand);































// let a      = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
// result = { };
// for(let  i = 0; i < a.length; ++i) {
//     if(!result[a[i]])
//         result[a[i]] = 0;
//     ++result[a[i]];
// }

// }





// var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
// var counts = {};

// for (var i = 0; i < arr.length; i++) {
//   var num = arr[i];
//   counts[num] = counts[num] ? counts[num] + 1 : 1;
// }

// console.log (counts.key());





// arrayFix = [];

// let count = 1;
// for(let i = 0; i < array.lenght; i++){
//     if(!arrayFix.includes(array[i]))
//     {
//          arrayFix.push(array[i]);
//          console.log( i +count);
//     }
    
//     else{
//         count++;
//         console.log(count);
//     }
// }
// console.log(count);
// let array = [1,2,3,4,5,6,5,7,8,9,6,4,1,2,6,5,7,8,];
// let arrayFix = [];

// for(let i = 0 ; i < array.length; i++)
// {
//     if(!arrayFix.includes(array[i]))
//     {
//          arrayFix.push(array[i]);
//     }
// }
//  console.log(...arrayFix)