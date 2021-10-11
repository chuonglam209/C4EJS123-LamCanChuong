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



  for(let x in smartPhone )
  {
      console.log( 'Name: ' + smartPhone[x].Name  );
      console.log(  'Price ' + smartPhone[x].Price  );
  }

    