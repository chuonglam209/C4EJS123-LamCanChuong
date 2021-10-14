//1.1  let ranDom = Math.random().toFixed(2);
//     console.log(ranDom);
 


// 1.2 let myArray = [2,3,4,6,5,7,8,9];
// let rand0m = myArray[Math.floor(Math.random() * myArray.length) ];
// console.log(rand0m);


//1.3

let quiZ = [
{
    quesTion :"where is Spiderman from?",
    choice1 : "Brooklyn",
    choice2 :"The Bronx ",
    choice1 :"Manhattan",
    rightChoice : "Queens",
},
{
    quesTion :"Who is Tony Stark's father?",
    choice1 : "Adam Stark.",
    choice2 :" Roger Stark",
    choice1 :"John Stark",
    rightChoice : "Howard Stark",
    
},
{
    quesTion :"What is the name of Thor's hammer?",
    choice1 : "Mithril",
    choice2 :" Javelin ",
    choice1 :"Vladimir",
    rightChoice : "Mjolnir",
},
];


let  rand0m = quiZ[~~(Math.random() * quiZ.length)];






