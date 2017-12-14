exports.task_details = function(req,res,next) { 
    var task; 
    if (req.params.id) {  
        Task.getTaskById(req.params.id, function(err, rows, fields) {  
            if (err) {  
            return next(err); } 
            if(rows.length==1) { 
                task = { 
                    'id':rows[0].Id, 
                    'title':rows[0].Title, 
                    'status':rows[0].Status 
                } 
                res.render('details', {title:'TODO',task: task}); 
            }  
            else { 
                res.status(404).json({"status_code":404, "status_message": "Not found"}); 
            } 
        }); 
    } 
};   

// Handle Task create on GET  
exports.task_create_get = function(req, res, next) {       
    res.render('task_form', { title: 'Luo tehtävä' }); 
}; 




// Handle Task create on POST  
exports.task_create_post = function(req, res, next) { 
     
     
    //Check that the Title field is not empty 
    req.checkBody('title', 'Title is required').notEmpty();  
     
    //Trim and escape the name field.  
    req.sanitize('title').escape(); 
    req.sanitize('title').trim(); 
     
     
     
    //Run the validators 
    var errors = req.validationErrors(); 
     
    var task =  
      { Id:'',  
        Title: req.body.title,  
        Status:'pending' 
       }; 
     
    if (errors) { 
        //If there are errors render the form again, passing the previously entered values and errors 
        res.render('task_form', { title: 'Luo tehtävä', task: task, errors: errors}); 
    return; 
    }  
    else { 

        Task.addTask(task,function(err){ 
            if(err) {return next(err);} 
            res.redirect("/Tasks"); 
        }); 
         
    } 
};

exports.task_delete_get = function(req, res, next) { 
    if (req.params.id) {  
    
           Task.deleteTask(req.params.id, function deleteTask(err) { 
                if (err) { return next(err); } 
                //Success - got to task list 
                res.redirect("/Tasks"); 
            }); 

        } 

};