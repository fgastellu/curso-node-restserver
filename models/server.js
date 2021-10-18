require('dotenv').config();

const express = require('express');
const cors = require('cors');

class Server{

    constructor()
    {
        this.usuarioPath = '/api/usuarios';

        this.port = process.env.PORT;
        this.app = express();
        this.app.use(cors());

        this.middleware();

        this.routes();
    }

    middleware(){
        //CORS
        this.app.use(cors());

        //Lectura y parseo del body => JSON
        this.app.use(express.json());

        //Directorio Público        
        this.app.use(express.static('public'));
    }
    
    routes(){
        this.app.use(this.usuarioPath, require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Estamos escuchando en el puerto: ${ this.port }`);
        })
    }
}




module.exports = Server;

 