const getHomePage = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('This is home page');
};

module.exports = {
    getHomePage,
};
