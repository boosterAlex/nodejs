const getPassword = (req, res) => {
    const postData = [];
    req.on('data', (chunk) => {
        postData.push(chunk);
    });

    req.on('end', () => {
        // const parsedData = querystring.parse(postData);
        const parsedData = JSON.parse(postData);
        let logIn = {
            isValid: false,
        };
        if (parsedData.password === 'super-secure-password')
            logIn.isValid = true;

        res.end(JSON.stringify(logIn));
    });
};

module.exports = {
    getPassword,
};
