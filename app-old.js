const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Jesus Fernandez',
            email: 'jafdiez@gmail.com',
            telefono: '685424091',
            url: req.url
        }
        res.write(JSON.stringify(salida));
        //res.write(('Hola mundo');
        res.end();

    })
    .listen(8080);

console.log('Escuchando puerto 8080');