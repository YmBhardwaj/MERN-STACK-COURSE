const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://qur15338:Yaman%40123@cluster0.uln1vtn.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title : String,
    description: String,
    completes: Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports={
    todo
}