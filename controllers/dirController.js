const { getRootPath } = require('../services/dirService');

const getFolderPath = (req, res) => {
    try {
        const dirName = getRootPath();
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(JSON.stringify(dirName));
    } catch (error) {
        res.writeHead(500, { 'Content-type': 'application/json' });
        res.end(
            JSON.stringify({
                message: error?.message || "Can't read dir path",
            })
        );
    }
};

module.exports = {
    getFolderPath,
};
