let smartPhone = [ 
    {
      Name : 'Xiaomi portable charger 20000mah',
      Brand : 'Xiaomi',
      Price : 428, 
      Colour: 'White',
      Category : 'Charge',
    },
    {
      Name : 'VSmart Active 1',
      Brand : 'VSmart',
      Price : 5487,
      Colour : 'Black' , 
      Category : 'Phone',
      },
      {
      Name : 'IPhone X',
      Brand : 'Apple',
      Price : 21490 , 
      Colour : 'Gray',
      Category : 'Phone',
      },
      {
      Name : 'Samsung Galaxy A9',
      Brand : 'Samsung',
      Price : 8490,
      Colour : 'Blue',
      Category : 'Phone',
      } ,
  ];
  let i = 0;
  for( i = 0; i <  smartPhone.length; i++)
  {
      console.log((i+1)+ '.'+ smartPhone[i].Name)
      console.log( 'Price: ' + smartPhone[i].Price  );
  }
  let p = prompt('Enter number')  
  console.log(smartPhone[p-1]);