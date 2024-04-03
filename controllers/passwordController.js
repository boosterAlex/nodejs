const { generateHash, isEqualPassword } = require('../services/passwordSevice');

const getPassword = (req, res) => {
    const postData = [];

    req.on('data', (chunk) => {
        postData.push(chunk);
    });

    req.on('end', () => {
        const parsedData = JSON.parse(postData);

        const logIn = {
            isValid: isEqualPassword(generateHash(parsedData.password)),
        };

        res.end(JSON.stringify(logIn));
    });
};

module.exports = {
    getPassword,
};
