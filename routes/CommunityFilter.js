
//FOR EXPRESS
const express = require('express');
//FOR ROUTER
const router = express.Router();

//FOR MONGO
const communityUser = require('../models/communityUser');
const User = require("../models/user");


router.post("/", (req, res) => {
    let myYear = req.body.year;
    let myDepartment = req.body.department;
    var myCommunity = "";
    let commData = [];
  
    User.find({}, (error, found) => {
      if (error) {
        console.log(error);
        console.log("myImg");
      } else {
        // console.log(found[0].picture);
        for (var j = 0; j < found.length; j++) {
          var dataToPush = { picture: found[j].picture, email: found[j].email };
          commData.push(dataToPush);
        }
      }
    });
  
    communityUser.find(
      { year: myYear, department: myDepartment },
      (err, data) => {
        if (err) {
          console.log(err);
          res.writeHead(404, { "Content-Type": "text/html" });
          res.write(
            '<img src="https://cdn.dribbble.com/users/1963449/screenshots/5915645/404_not_found.png" alt="not found">'
          );
          res.send();
        } else {
          let username = "Guest";
          let picture = "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png"; let email = "";
          if (req.isAuthenticated()) {
            let username = req.user.name;
            let picture = req.user.picture;
            email = req.user.email;
          }
  
          console.log(data);
          console.log(commData);
          res.render("community", {
            data: data,
            commData: commData,
            username, picture, email
          });
        }
      }
    );
  });

  //EXPORT
module.exports = router;