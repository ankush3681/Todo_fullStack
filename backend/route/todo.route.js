const express = require("express");
const { TodoModel } = require("../model/todo.model");

const TodoRoute = express.Router();

// create

TodoRoute.post("/add",async (req, res) => {
try {
    const todo = new TodoModel(req.body);
    await todo.save();
    res.status(200).send({"msg":"New Task Created Successfully."})
} catch (err) {
    res.status(400).send({"err":err.message});
}
})

// read

TodoRoute.get("/",async(req,res)=>{
try {
    const todo =await TodoModel.find();
    res.status(200).send(todo);
} catch (err) {
    res.status(400).send({"err":err.message});
}
})

// update

TodoRoute.patch("/update/:taskId",async(req,res)=>{
   const {taskId} = req.params;
   try {
     await TodoModel.findByIdAndUpdate({_id:taskId},req.body);
     res.status(200).send({"msg":`Task with Id ${taskId} is updated Successfully.`})
   } catch (err) {
    res.status(400).send({"err":err.message});
   }
})

// delete

TodoRoute.delete("/delete/:taskId",async(req,res)=>{
   const {taskId } = req.params;
   try {
      await TodoModel.findByIdAndDelete({_id:taskId});
      res.status(200).send({"msg":`Task with Id ${taskId} is Delted Successfully.`})
   } catch (err) {
    res.status(400).send({"err":err.message});
   }
})

module.exports={
    TodoRoute
}