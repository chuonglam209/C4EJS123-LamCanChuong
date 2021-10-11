let mindX = [
    {
      Name :'TrieuDinh' ,
      Age : 32,
      salary:20000000,
      office:'lecturers',

    },
    {
        Name :'TongThanh' ,
      Age : 30,
      salary:10000000,
      office:'lecturers',

    },
    {
        Name :'Oanh' ,
      Age : 25,
      salary:10000000,
      office:'supervisor',
    }


];
let addName ;
let addAge;
let addSalary;
let addOffice;
let options = ['R', 'C', 'U', 'D'];
let command = prompt(' What do you want???(C, R, U, D)?');
while(true){
    while(!options.includes(command)){
    alert('This command is not supported!');
    command = prompt('Please re enter your command');
}
if (command == 'C'){
    addName = prompt('Enter name: ');
    mindX.push.Name = addName;
    addAge = prompt('Enter age: ');
    mindX.push.Age = addAge;
    addSalary = prompt('Enter Salary:');
    mindX.push.salary = addSalary;
    addOfice = prompt('Enter office');
    mindX.push.office = addOfice;
    
    command = prompt('Please re-enter your command');

}else if(command == 'U'){
   
    command = prompt('Please re-enter your command');
}else if(command == 'D'){
    
} else if(command == 'R'){
    console.log('The items list are:');
    for (let x in mindX){
        console.log(mindX[x]);
}
break;
}
}