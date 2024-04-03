require('dotenv').config();
const http = require('http');
const numCPUs = require('os').availableParallelism();

//  ================== use home.html =====================
// const fs = require('fs');
// const path = require('path');
// ======================================================

const { getFolderPath } = require('./controllers/dirController');
const { getFilesList } = require('./controllers/fileListController');
const { getFileName } = require('./controllers/fileNameController');
const { getCpusInfo } = require('./controllers/cpuController');
const { getHomePage } = require('./controllers/homePageController');
const { getNotFoundPage } = require('./controllers/notFoundPageController');
const { getPassword } = require('./controllers/passwordController');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/dir_name') {
        getFolderPath(req, res);
        return;
    }
    if (req.method === 'GET' && req.url === '/file_list') {
        getFilesList(req, res);
        return;
    }
    if (req.method === 'GET' && req.url === '/file_name') {
        getFileName(req, res, __filename);
        return;
    }
    if (req.method === 'GET' && req.url === '/cpus') {
        getCpusInfo(req, res);
        return;
    }
    if (req.method === 'GET' && req.url === '/number_of_cores') {
        console.log(numCPUs);
        return;
    }
    if (req.url === '/home.html') {
        getHomePage(req, res);
        return;
    }
    if (req.method === 'POST') {
        getPassword(req, res);
        return;
    }

    // =================== use home.html ==========================

    // const filePath = path.join(__dirname, req.url.substring());

    // fs.access(filePath, (err) => {
    //     if (err) {
    //         res.statusCode = 404;
    //         res.end('Page not found!');
    //     }
    //     fs.createReadStream(filePath).pipe(res);
    // });
    // ==============================================================

    getNotFoundPage(req, res);
});

server.listen(process.env.APP_PORT, () => {
    console.log(
        `Server started http://${process.env.APP_HOST}:${process.env.APP_PORT}`
    );
});
