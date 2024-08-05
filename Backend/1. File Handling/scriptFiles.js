const fs = require('fs');

// use "node scriptFiles.js" to run these scripts

// WRITE FILE
// Syntax to write file 
// const_name.writeFile("file name/path","content inside file",callback);

fs.writeFile("abcd.txt","Hello Ayushmaan",function(err){
    if(err) console.log(err);
    else console.log("file created");
})

// READ FILE
// Syntax to read file
// const_name.readFile("file to be read/path",'utf-8',callback)
//  read krte time hame ek extra parameter milta hai err ke baad 

fs.readFile("abcd.txt","utf-8",function(err,data){
    if(err) console.log(err);
    else console.log(data);
})

// without utf-8 we will be getting our read data in hexadecimal format

// APPEND FILE
// Syntax to append file
// const_name.appendFile("file where we hae to add data","data to be added",callback)

fs.appendFile("abcd.txt"," Appended data",function(err){
    if(err) console.log(err);
    else console.log("appended data");
});

// RENAME FILE
// Syntax to rename file
// const_name.rename("old file name / path","new file name / path",callback)

fs.rename("abcd.txt","new.txt",function(err){
    if(err) console.log(err);
    else console.log("file successfully renamed");
})

// DELETE FILE
// Syntax to delete file
// const_name.unlink("file to be deleted",callback)

fs.unlink("hey.txt",function(err){
    if(err) console.log(err);
    else console.log("file successfully deleted");
})
