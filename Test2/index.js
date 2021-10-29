const fetchPro = fetch('https://tobitheme.net/data/characters.json');
    fetchPro.then(connection =>{
        console.log('Connected');
        //console.log(connection);
      
        return  connection.json();
    }).then(data =>{

        console.log(data.data);
    //     let name = document.getElementsByClassName('characters__name');
    //     let house = document.getElementsByClassName('characters__house');
    //     let image = document.getElementsByClassName('characters__image');
    //     for (let i = 0; i < data['data'].length;i++){
    //         name[i].textContent = `${data['data'][i].name}`
    //         house[i].textContent = `House: ${data['data'][i].house}`
    //         image[i].src = data['data'][i].image;
    // }
    })
       





    

   




        























    // const fetchPro = fetch('https://tobitheme.net/data/characters.json');
    // fetchPro.then(connection =>{
    //     console.log('Connected');
    //     //console.log(connection);
      
    //     return  connection.json();
    // }).then(data =>{

    //     console.log(data.data);
    // })