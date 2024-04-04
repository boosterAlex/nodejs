require('dotenv').config();
const http = require('http');
const numCPUs = require('os').availableParallelism();
const path = require('path');

const { getFolderPath } = require('./controllers/dirController');
const { getFilesList } = require('./controllers/fileListController');
const { getFileName } = require('./controllers/fileNameController');
const { getCpusInfo } = require('./controllers/cpuController');
const { getHomePage } = require('./controllers/homePageController');
const { getNotFoundPage } = require('./controllers/notFoundPageController');
const { getPassword } = require('./controllers/passwordController');

const { getFileContent } = require('./controllers/streamController');

const server = http.createServer((req, res) => {
    switch (true) {
        case req.method === 'GET' && req.url === '/dir_name':
            getFolderPath(req, res);
            break;
        case req.method === 'GET' && req.url === '/file_list':
            getFilesList(req, res);
            break;
        case req.method === 'GET' && req.url === '/file_name':
            getFileName(req, res, __filename);
            break;
        case req.method === 'GET' && req.url === '/cpus':
            getCpusInfo(req, res);
            break;
        case req.method === 'GET' && req.url === '/number_of_cores':
            console.log(numCPUs);
            break;
        case req.url === '/home.html' && req.method === 'GET':
            getHomePage(req, res);
            break;
        case req.url === '/large_file' && req.method === 'GET':
            getFileContent(req, res, path.join(__dirname, '/files/large.txt'));
            break;
        case req.method === 'POST':
            getPassword(req, res);
            break;
        default:
            getNotFoundPage(req, res);
            break;
    }
});

server.listen(process.env.APP_PORT, () => {
    console.log(
        `Server started http://${process.env.APP_HOST}:${process.env.APP_PORT}`
    );
});
