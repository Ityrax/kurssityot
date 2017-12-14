var mysql = require('mysql');  
var connection = mysql.createPool({  
host: 'localhost',  
user: 'b16jrustari',  
password: 'b16jrustari',  
database: 'skb16jrustari'  
});  
module.exports = connection;

var express = require('express');  
var router = express.Router();  
var Task = require('../models/Task');  
router.get('/:id?', function(req, res, next) {  
if (req.params.id) {  
Task.getTaskById(req.params.id, function(err, rows) {  
if (err) {  
res.json(err);  
} else {  
res.json(rows);  
}  
});  
} else {  
Task.getAllTasks(function(err, rows) {  
if (err) {  
res.json(err);  
} else {  
res.json(rows);  
}  
});  
}  
});  

router.post('/', function(req, res, next) {  
Task.addTask(req.body, function(err, count) {  
if (err) {  
res.json(err);  
} else {  
res.json(req.body); //or return count for 1 & 0  
}  
});  
});  

router.delete('/:id', function(req, res, next) {  
Task.deleteTask(req.params.id, function(err, count) {  
if (err) {  
res.json(err);  
} else {  
res.json(count);  
}  
});  
});  

router.put('/:id', function(req, res, next) {  
Task.updateTask(req.params.id, req.body, function(err, rows) {  
if (err) {  
res.json(err);  
} else {  
res.json(rows);  
}  
});  
});  
module.exports = router;

addTask: function(Task, callback) { 
return db.query("Insert into task (Id,Title,Status) values(NULL,?,?)", [Task.Title, Task.Status], callback); 
},