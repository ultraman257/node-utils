module.exports = function(req, res, permission) {

    let permissions = req.user.permissions;

    if(permissions.indexOf("*") === -1 && permissions.indexOf(permission) === -1) {
        return res.status(403).json({ error: true, status: 403, message: "You do not have permission to access this resource"})
    } else {
        return true;
    }


}
