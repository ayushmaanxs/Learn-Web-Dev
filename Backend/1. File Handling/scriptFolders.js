const fs = require('fs');

// CREATING a folder
// Syntax to create a folder
// const_name.mkdir("folder_name/path",callback)

    fs.mkdir("naya",function(err){
        if(err) console.log(err);
        else console.log("created new folder");
    })

// READING a folder 
// Syntax to read a folder
// const_name.readdir("folder_name/path",callback)
//  read krte time hame ek extra parameter milta hai err ke baad

fs.readdir("naya",{withFileTypes:true},function(err,files){
    if(err) console.log(err);
    else console.log(files);
})

// symbol type jinka 1 hai wo files hai or jinka 2 hai wo folders hai
// {withFileTypes:true} --> to differentiate between files and folder

// DELETING a folder 
// Syntax to delete a folder
// const_name.rm("folder_name/path",callback)
//  use object {recursive:true} when we are deleting a folder which contains many other folders inside

fs.rm("naya",{recursive:true},function(err){
    if(err) console.log(err);
    else console.log("deleted folder");
})