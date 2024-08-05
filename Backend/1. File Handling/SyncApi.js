const fs = require('fs');

// sync wale functions rarely use hote hai as inka blocking nature hota hai i.e., jab tak ye complete nhi hoga tab tak aage ke bhi code execute nhi honge

// inke syntax me callback nhi aata

fs.writeFileSync("normal.txt","this file is created using writeFileSync()");
console.log("file created");


let data = fs.readFileSync("normal.txt","utf-8");
console.log(data);
console.log("file read");