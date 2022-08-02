const express = require("express");
const router = express.Router();

//GET ALL
router.get("/", (req, res) => {
  res.json({ message: "GET all TODOS" });
});

//GET ONE
router.get("/:id", (req, res) => {
  res.json({ message: "GET TODOS by id" });
});

//POST
router.post("/", (req, res) => {
  res.json({ message: "post all TODOS" });
});
//UPDATE
router.patch("/:id", (req, res) => {
  res.json({ message: "update all TODOS" });
});
//DELETE
router.delete("/:id", (req, res) => {
  res.json({ message: "delete all TODOS" });
});

module.exports = router;
