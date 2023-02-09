const express = require("express");

const router = express.Router();
const db = require("../config/database");
const Todo = require("../model/todo.model");
const { Sequelize } = require("sequelize");
const {
  createTodo,
  searchTodo,
  updateTodo,
  deleteTodo,
  getTodo,
} = require("../controller/index.controller");


/**
 * @swagger
 * /todos:
 *   get:
 *     description: Retrieve a list of todos
 *     responses:
 *       200:
 *         description: An array of todos
 */
router.get("/", getTodo);

/**
 * @swagger
 * /todos:
 *  post:create a todo 
 * responses:
 * 200
 *                 description: success
 */
//create
router.post("/add", createTodo);

/**
 * @swagger
 * /todos/{id}:
 *  get:
 *   description: Retrieve a todo
 *  parameters:
 * - name: id
 *  
 */
//search
router.get("/:search", searchTodo);
//update
router.put("/:id", updateTodo);
//delete
router.delete("/:id", deleteTodo);

module.exports = router;
