const fs = require('fs');

const getFileContent = (req, res, filePath) => {
    fs.access(filePath, fs.constants.R_OK, (err) => {
        if (err) {
            res.statusCode = 404;
            res.end('Page not found!');
        }
        fs.createReadStream(filePath).pipe(res);
    });
};

module.exports = {
    getFileContent,
};
