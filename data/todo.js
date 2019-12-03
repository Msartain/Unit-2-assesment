const todos = [];

module.exports = {
    getAll,
    create,
    deleteOne
}

function deleteOne(id){
    todos.splice(id, 1)
}

function create(todo){
    todos.push(todo);
}

function getAll(){
    return todos;
}