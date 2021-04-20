//FOR EXPRESS
const express = require('express');
//FOR ROUTER
const router = express.Router();



router.get("/", (req, res) => {
    let pageTitle = "JSS Connect";
    let cssName = "css/login.css";
    let username = "Guest";
    let picture = "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png"; let email = "";
    if (req.isAuthenticated()) {
      username = req.user.name;
      picture = req.user.picture;
      email = req.user.email;
    }
    res.render("login", { pageTitle: pageTitle, cssName: cssName, username, picture, email });
  });


//EXPORT
module.exports = router;