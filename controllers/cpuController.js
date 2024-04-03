const { cpuInfo } = require('../services/cpuService');

const getCpusInfo = (req, res) => {
    try {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(JSON.stringify(cpuInfo()));
    } catch (error) {
        res.writeHead(500, { 'Content-type': 'application/json' });
        res.end(
            JSON.stringify({
                message: error?.message || "Can't read system info",
            })
        );
    }
};

module.exports = {
    getCpusInfo,
};
