const expressLoader = require('./express');
const mongooseLoader = require('./mongoose');

exports.init = () => {
    mongooseLoader();
    expressLoader();
}