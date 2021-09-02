 const mdLinks = require('./index.js');
 const fetch = require('fetch');
 const fetchUrl = fetch.fetchUrl;

const path = process.argv[2]; // la segunda posicion es la ruta 
// const options = process.argv[3]; // la tercera posicion es lo que el usuario pone como opcion  en el comando de la terminalc
mdLinks(path).then(urlArray => {
    console.log(urlArray)
    urlArray.forEach(url => {
        fetchUrl(url, (err, meta, body)=>{
            if (err) console.log(err);
            if (meta) console.log(url, ':', meta.status)
        })
        
    });


    })


// mdLinks(path, options)
// .then((file) => console.log(file))
// .catch(err => console.log('Error al ejecutar', err));