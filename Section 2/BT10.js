let weight = Number(prompt("Your weight in kg : "));
let height = Number(prompt("Your height in m : "));


BMI = weight/(height*height);
if( BMI < 16  )
{
    alert("BMI: "+ BMI + " Severely underweight");
}
else if ( BMI <= 18.5)
{
    alert("BMI: "+ BMI + " Underweight");
}

else if ( BMI <= 25)
{
    alert("BMI: "+BMI + " Normal");
}
else if ( BMI <= 30)
{
    alert("BMI: "+BMI + " Overweight");
}
else  
{
    alert("BMI: "+BMI + " Obese");
}
