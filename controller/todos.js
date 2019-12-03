let Todo = require('../data/todo')

module.exports = {
    create,
    index,
    delete: deleteTodo
}

function deleteTodo(req, res){
    Todo.deleteOne(req.params.id)
    res.redirect('/')
}

function index(req, res){
    res.render('index',{
        todos: Todo.getAll()
    })
}

function create(req, res){
    req.body.done = false;
    Todo.create(req.body)
    res.redirect('/')
}