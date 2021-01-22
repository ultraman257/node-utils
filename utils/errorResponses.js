module.exports = {
    malformed: function (res) {
        return res.status(400).json({
            status: 400,
            error: true,
            message: "The request does not match the required format."
        });
    },
    internalError: function(res) {
        return res.status(500).json({
            status: 500,
            error: true,
            message: "An internal server error occurred when processing your request."
        });
    }
}
