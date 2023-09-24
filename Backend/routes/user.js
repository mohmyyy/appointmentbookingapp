const express = require("express");

const router = express.Router();

const userController = require("../controllers/user");

router.post("/add-user", userController.addUser);
router.get("/get-user", userController.getUser);
router.post("/edit-user", userController.editUser);
router.post("/delete-user", userController.deleteUser);

module.exports = router;