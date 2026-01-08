const db = require("../db/queries");
const bcrypt = require("bcrypt");

exports.userLoginForm = async (req, res) => {
    res.render("login", { error: NaN });
}


exports.userLogin = async (req, res) => {
    const { username, password } = req.body;
    const user = await db.getUserByUsername(username);

    if (!user) {
        return res.status(404).render("login", {
            error: "Invaid Username or Password!"
        });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        return res.status(401).render("login", {
            error: "Invalid Username or password"
        });
    }

    req.session.user = {
        id: user.id,
        username: user.username,
    }

    res.redirect("/");
}


exports.logout = async (req,res) => {
    req.session.destroy(() => {
        res.redirect("/auth/login");
    })
}
