const express = require("express");
const controllers = require("../controllers");
const router = express.Router();

router.route("/users").get(controllers.getAllusers).post(controllers.createuser);
router.route("/login").post(controllers.login);
router
 .route("/:id")
 .get(controllers.getuser)
 .put(controllers.updateuser)
 .delete(controllers.deleteuser);
module.exports = router;