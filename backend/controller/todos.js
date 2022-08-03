const Todos = require("../models/todosModel");
const mongoose = require("mongoose");

//todos by id
const todoById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.json({ message: "There is no such Todo" });
  }
  try {
    const todos = await Todos.findById(id);

    if (!todos) {
      return res.staus(200).json({ message: "There is no such Todo" });
    }
    res.json(todos);
  } catch (err) {
    console.log(err.message);
  }
};

//all todos
const allTodos = async (req, res) => {
  try {
    const todos = await Todos.find({}).sort({ createdAt: -1 });
    res.status(200).json(todos);
  } catch (err) {
    console.log(err.message);
  }
};
// create todos
const createTodos = async (req, res) => {
  const { tittle, description } = req.body;
  try {
    const todos = await Todos.create({ tittle, description });
    res.status(200).json(todos);
  } catch (err) {
    console.log(err.message);
  }
};

// delete todos

const deleteById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.json({ message: "There is no such Todo" });
  }
  try {
    const todos = await Todos.findByIdAndDelete({ _id: id });

    if (!todos) {
      return res.staus(200).json({ message: "There is no such Todo" });
    }
    res.json(todos);
  } catch (err) {
    console.log(err.message);
  }
};

//update todos
const updateById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.json({ message: "There is no such Todo" });
  }
  try {
    const todos = await Todos.findByIdAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );

    if (!todos) {
      return res.staus(200).json({ message: "There is no such Todo" });
    }
    res.json(todos);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  createTodos,
  allTodos,
  todoById,
  updateById,
  deleteById,
};
