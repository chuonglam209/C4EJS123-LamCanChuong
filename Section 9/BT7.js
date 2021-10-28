const fetchPro = fetch('http://quotes.rest/qod.json');
    fetchPro.then(connection =>{
        console.log('Connected');
        //console.log(connection);
      
        return  connection.json();
    }).then(data =>{
        document.getElementById('quote_contents').innerHTML = data['contents']['quotes'][0]['quote'];
        document.getElementById('author').innerHTML = data['contents']['quotes'][0]['author'];
    } )