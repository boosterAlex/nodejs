const { getFilesName } = require('../services/fileListService');

const getFileName = (req, res, fileName) => {
    try {
        const filesName = getFilesName(fileName);
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(JSON.stringify(filesName));
    } catch (error) {
        res.writeHead(500, { 'Content-type': 'application/json' });
        res.end(
            JSON.stringify({
                message: error?.message || "Can't read files name",
            })
        );
    }
};

module.exports = {
    getFileName,
};
