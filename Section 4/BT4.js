//4.1 Write a script to simulate the lookup of the dictionary initialized in the previous example

let dicTionary = {
    debug : 'The process of figuring out why your program has a certain error and how to fix it',
    done : 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed',
    defect : "The formal word for 'error'",
    pm : 'The short version  of Project Manager, the person in charge of the final result of a project',
    ui : 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
}
alert("Hi there ,this is dev dictionary");
let options =['debug', 'done', 'defect', 'pm', 'ui'];
let choose = prompt("Enter a keyword ");
let explanation;
while(true){
    if(!options.includes(choose)){
        alert("We could not find your word: " + choose );
        options.push(choose);
        explanation = prompt('Leave your explanation');
        dicTionary[choose] = explanation;
        console.log(dicTionary);
        choose = prompt("Enter a keyword ");

    }
    else if(choose == 'debug' ){
        alert('debug \n'+ dicTionary.debug);
        choose = prompt("Enter a keyword next ");
    }
    else if(choose == 'done'){
        alert(choose +'\n' + dicTionary.done);
        choose = prompt("Enter a keyword next ");
    }
    else if(choose == 'defect'){
        alert(choose + '\n' + dicTionary.defect);
        choose = prompt("Enter a keyword next ");
    }
    else if(choose == 'pm'){
        alert(choose + '\n' + dicTionary.pm);
        choose = prompt("Enter a keyword next ");
    }
    else if(choose == 'ui'){
        alert(choose + '\n' + dicTionary.ui);
        choose = prompt("Enter a keyword next ");
        
    }
    
}
