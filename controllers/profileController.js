

exports.userProfile = async (req, res) => {
    const user = req.session.user;
    res.render("profile", {
        user: user
    })
}