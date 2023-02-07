const express=require('express')

const router= express.Router();
const db=require("../config/database")
const Todo=require("../model/todo.model")
const {Sequelize}=require("sequelize")
router.get("/want",(req,res)=>{

    Todo.findAll()
        .then(todo=>{
        res.status(200).send(JSON.stringify(todo,undefined,4))
    }).catch(err=>{
        console.log(err)
    })
})

//create

router.post("/add",(req,res)=>{

const {description}=req.body;
Todo.create({
    description:description
})
.then(todo=>{res.send("success")})   
.catch(err=>{console.log(err.original)})
})

//search


router.get("/:search",async(req,res)=>{
    const {search}=req.params;
const todo= await Todo.findAll({
    where:{
        description:{[Sequelize.Op.iLike]:`%${search}%`}
    }
})
console.log(todo)

    res.send(todo)
})

module.exports=router