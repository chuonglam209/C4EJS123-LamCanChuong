let n = Number(prompt("Enter a number n: "));
let factorial = 1;
for(let i = 1; i <= n; i++)
{
    factorial = factorial*i;

}
console.log("The factorial of "+ n + " is " + factorial);