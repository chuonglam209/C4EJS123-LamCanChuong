let strTest = prompt('Nhap vao chuoi bat ky : ');

// if (strTest.length == 1 )
// {
//      strTest.toUpperCase();
// } 
// else {
//     let firstLetter = strTest.split('')[0].toUpperCase();
//     let restOfStr = strTest.substr(1, strTest.length).toLowerCase();
    
// }     

// console.log (firstLetter + restOfStr);
let spaceChr = strTest.split(' ');

let afterStr = ""; 

for(i=0; i<spaceChr.length; i++){
    afterStr += " "+spaceChr[i].toLowerCase().replace(/\b\w/g, l => l.toUpperCase()).trim(); 
    }    

console.log(afterStr) ;
    