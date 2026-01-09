const db = require("../db");

exports.userProfile = async (req, res) => {
    const user = req.session.user;
    res.render("profile", {
        user: user
    })
}

exports.updateUserForm = async (req, res) => {
    res.render("update_user");
}

exports.updateUser = async (req, res) => {
    const newUsername = req.body.username;
    const userId = req.session.user.id;

    const updatedUser = await db.users.updateUser(userId, newUsername);

    // sync session
    req.session.user.username = updatedUser.username;

    console.log("Username Updated");
    res.redirect("/user/profile");
};


exports.deleteUser = async (req, res) => {
    const userId = req.session.user.id;

    await db.users.deleteUser(userId);
    
    res.redirect("/auth/logout");

}