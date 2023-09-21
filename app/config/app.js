const dotenv = require('dotenv');
process.env.NODE_ENV = process.env.NODE_ENV || 'development'
const envFound = dotenv.config();

module.exports = {
    port: process.env.PORT || 8080,
    api: {
        prefix: process.env.API_PREFIX || '/api/v1'
    }
}

