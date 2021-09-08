 const mdLinks = require('./index.js');
 const fetch = require('fetch');
 const fetchUrl = fetch.fetchUrl;

const path = process.argv[2]; // la segunda posicion es la ruta 
const firstOption = process.argv[3];
const secondOption = process.argv[4]; // la tercera posicion es lo que el usuario pone como opcion  en el comando de la terminalc

let options = {
    validate : false,
    stats: false,
};

if (
    (firstOption === "--validate" && secondOption === "--stats") ||
    (firstOption === "--stats" && secondOption === "--validate")
) {
    options.validate = true;
    options.stats = true;
} else if (firstOption === "--validate") {
    options.validate = true;
    options.stats = false;
} else if (firstOption === "--stats") {
    options.validate = false;
    options.stats = true;
} else {
    options.validate = false;
    options.stats = false;
}

let status = '';

mdLinks(path, options).then(urlArray => {
    urlArray.forEach(url => {
        fetchUrl(url, (err, meta, body)=>{
            if (err) console.log(err);
            if (meta.status == '200'){
                status = 'OK';
            }else {
                status = 'FAIL';
            }
            if (options.validate == true){
                console.log(url, ':', meta.status, status)
            } 
            
        })
        
    });


    })


