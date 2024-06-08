const router = require("express").Router()
const todoController = require("./../controller/todo.controller")

router
    .get("/", todoController.getTodo)
    .post("/", todoController.addTodo)
    .put("/", todoController.updateTodo)
    .delete("/", todoController.deleteTodo)

module.exports = router