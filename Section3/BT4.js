let menu = ['Shirt', 'Jacket', 'Vest', 'Jean']
let luaChon = prompt("Hi there ,welcome to shop admin panel , what do you want (c, u, r,d)")
let add;
if(luaChon == 'r' )
{
    for(let i = 0; i < menu.length; i++)

    console.log("The curren items are "+ menu[i]);
}
else if(luaChon = 'c')
{
    add = prompt("Enter the name of the new item ")
    menu.push(add);
    alert('Done')
}
    
