module.exports = {
    // Checking the test server connection
    testRequest: function testRequest(req, res) {
        res.status(200).send({ hi: 'there' });
    }
};