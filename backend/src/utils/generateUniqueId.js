const crypto = require('crypto');

let generateUniqueId = ()=>{
    crypto.randomBytes(4).toString('HEX');
};

module.exports = generateUniqueId;