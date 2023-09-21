const express = require('express')
const cors = require('cors');
const apiRouter = require('../app/routes/v1/api')
const config = require('../app/config/app');


const startServer = () =>{
    const application = express();
    application.listen(config.port, err=>{
        if(err){
            process.exit(1)
            return;
        }
    })
    console.log('server started')
    return application;
}

module.exports = () =>{
    const app = startServer()   
     //global middleware
    app.use(express.json());
    app.use(config.api.prefix, apiRouter);
    return app;
}