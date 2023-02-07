const express=require("express")
const app=express();
const { Sequelize } = require('sequelize');
const db=require("./config/database")
const cors=require("cors");






app.use(cors());
app.use(express.json())

//handlebars





//conncect
  db.authenticate().then(()=>{
    console.log("Database connected")
  }).catch(err=>{
    console.log(err)
  })


  //routes


app.use("/todo",require("./routes/todo.route"))


const PORT=process.env.PORT || 3000;

app.listen(PORT,console.log(`Server started on port ${PORT}`))

