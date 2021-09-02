const fs = require('fs');

const markdownLinkExtractor = require('markdown-link-extractor');


module.exports =(ruta) => {
    return readMyFile(ruta);
};
let myLink =[];

const readMyFile= (ruta) => {
    return new Promise((resolve, reject) => {
        fs.readFile(ruta, 'utf8', (err, data) => {
            if (err) reject(err);
            myLink = markdownLinkExtractor(data);
            myLink = myLink.filter(link => ~link.indexOf("http"));
                  resolve(myLink);
        })
    })        
};

// fs.readFile('README.MD', 'utf8' , (err, data) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     console.log(data)
//   })

// fs.readdir(ruta, (err, archivos) => {
//     archivos.forEach(archivo => {
//         console.log('archivos', archivo)
//     })
// })
