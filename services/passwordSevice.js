const { pbkdf2Sync } = require('node:crypto');

const generateHash = (pass) =>
    pbkdf2Sync(pass, 'salt', 100000, 64, 'sha512').toString('hex');
const isEqualPassword = (pass) =>
    pass === generateHash('super-secure-password');

module.exports = {
    generateHash,
    isEqualPassword,
};
