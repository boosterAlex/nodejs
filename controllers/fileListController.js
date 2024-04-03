const { getFileList } = require('../services/fileListService');

const getFilesList = async (req, res) => {
    try {
        const filesList = await getFileList();
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(JSON.stringify(filesList));
    } catch (error) {
        res.writeHead(500, { 'Content-type': 'application/json' });
        res.end(
            JSON.stringify({
                message: error?.message || "Can't read files list",
            })
        );
    }
};

module.exports = {
    getFilesList,
};
