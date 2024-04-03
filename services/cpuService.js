const os = require('os');

const cpuInfo = () => {
    return os.cpus();
};

module.exports = {
    cpuInfo,
};
