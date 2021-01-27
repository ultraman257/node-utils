module.exports = function(permission) {
    return function(req, res, next) {

        let permissions = req.user.permissions;

        if(permissions.indexOf("*") !== -1 || permissions.indexOf(permission) !== -1) {
            next();
        } else {
            return res.status(403).json({ error: true, status: 403, message: "You do not have permission to access this resource"});
        }

    }
}
