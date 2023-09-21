const express = require('express');
const app =  require('../app');
const config = require('./config/app');

const startServer = () =>{
    const app = express();
    app.listen(config.port, err=>{
        if(err){
            process.exit(1)
            return;
        }
    })
    console.log('server started')
    return app;
}


startServer();