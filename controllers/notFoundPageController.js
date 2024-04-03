const getNotFoundPage = (req, res) => {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('Page not found');
};

module.exports = {
    getNotFoundPage,
};
