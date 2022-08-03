const express = require("express");
const controller = require("../controller/todos");
const router = express.Router();

//GET ALL
router.get("/", controller.allTodos);

//GET ONE
router.get("/:id", controller.todoById);

//POST
router.post("/", controller.createTodos);
//UPDATE
router.patch("/:id", controller.updateById);
//DELETE
router.delete("/:id", controller.deleteById);

module.exports = router;
