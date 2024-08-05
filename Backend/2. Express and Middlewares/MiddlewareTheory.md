## Middleware

ek aisa koi bhi function jinke parameter me in 3 chijo ka access mile i.e., (req,res,next) toh unko hum middleware kehte hai

jab bhi aap browser se koi request backend pe bhejte hain toh wo apne route par jati hai and agar aap chahte hai route par jane se phle wo request mein aap kuch check krna chahte hai ya fir aap kuch jodna chahte hain toh un sare cases me middleware use hota hai

kisi bhi function ko as a middleware treat krwane ke liye us function ko `app.use` ke andar likhna hai

## Express Session Middleware

`cookie` hota hai browser pe data save krne ke liye
`session` hota hai server pe data save krne ke liye
Install express session in terminal --> 
### _Syntax_

```
npm i express-session
const expressSession = require('express-session');
app.use(expressSession({
    secret:"your-secret-key",
    resave:false,
    saveUninitialized:false,
}));

```

## Flash Middleware
hum kisi bhi route pe data set karke use `kisi or route pe use` kar paye isliye hum flash middleware use krte hai

`redirect` krte waqt set data use nhi ho pata tha isliye FLASH aaya 

To use `connect flash` we need to require `express session` first

### _Syntax_

```
npm i connect-flash
const flash = require('connect-flash');
app.use(flash());

```
## CORS Middleware

`Cross Origin Resource Sharing`
browser me ek security feature hota hai jiske karan hum kisi ek web domain ka data kisi dusre domain pe access nhi kar skte hai , if we want the browser to allow us to access data on another domain then hame us website ke server ke through `cors` enable krna parega

### _Syntax_

```
npm i cors
const cors = require('cors');
allow data sharing of all routes--> app.use(cors());
allow data sharing of any specific route--> app.get("/share",cors(),function(req,res,next){

});

```

## Cookie Parser Middleware
`cookie` is a data that is saved on browser

server se ,kisi route pe jane pe, kuch data browser pe save krna hai

save krne ke liye koi package nhi chahiye but agar hum browser ke cookie ko agar read krna chahte hai then `cookie-parser` lgta hai

## Morgan Middleware