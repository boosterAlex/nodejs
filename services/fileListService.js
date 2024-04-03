const fs = require('fs/promises');
const path = require('path');

const { getRootPath } = require('./dirService');

const getFileList = async () => {
    return await fs.readdir(getRootPath());
};

const getFilesName = (fileName) => {
    return path.resolve(fileName);
};

module.exports = {
    getFileList,
    getFilesName,
};
