const Todo=require("../model/todo.model")
const {Sequelize} =require("sequelize")
exports.getTodo=(req,res)=>{
    Todo.findAll({
        order:[
            ['id','ASC']
        ]
    })
    .then(todo=>{
    res.status(200).send(JSON.stringify(todo,undefined,4))
}).catch(err=>{
    console.log(err)
})
}
exports.createTodo=(req,res)=>{
    const {description}=req.body;
    Todo.create({
        description:description
    })
    .then(todo=>{res.send("success")})   
    .catch(err=>{console.log(err.original)})
}

exports.searchTodo=async(req,res)=>{
    const {search}=req.params;
    const todo= await Todo.findAll({
        where:{
            description:{[Sequelize.Op.iLike]:`%${search}%`}
        }
    })
    console.log(todo)
    
        res.send(todo)
}

exports.updateTodo=(req,res)=>{
    Todo.update({
        description:req.body.description
    },{where:{
        id:req.params.id
    }}).then(()=>{res.send("success")})
    .catch(err=>{console.log(err)})
}
exports.deleteTodo=(req,res)=>{
    Todo.destroy({
        where:{
            id:req.params.id
        }
    }).then(()=>{res.send("success")})
    .catch(err=>{console.log(err)})
}