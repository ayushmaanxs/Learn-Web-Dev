## EJS
Install ejs from npm :- 
    npm i ejs
app.set('view engine','ejs');

create a `views` folder
create an `index.ejs` inside `views` folder
load the html in the ejs page
and use `res.render` in place of the `res.send` to render any page from views folder
`res-render` usi ko krte hai jo views folder me available ho

EJS is like html with superpowers

EJS is dynamic that is we can do calculation inside it 
syntax:-

<%= %>

e.g.:-
<%= 2+2 %>
<%= 33+46 %>

How it works?
hum ejs me code likhte hai but browser ko wo smjh nhi aata, toh jitna bhi dynamic part ka hai un sbme calculation perform krke ek new static html file ceate krta hai hmara server and then it sends the html file to the browser


server ejs ko html banake browser ke paas bhejta hai use hi hum server side rendering kehte hai
server pe hmare tempelating engine ka code likha hota hai unhe hi server pdhke html me convert krta hai

form jab bhi submit kroge toh 1st ye dekhe ki sari fields ke paas `name` property hain ya nhi 
form ke paas `action` hai yaa nhi
backend ke paas route hai yaa nhi
wo route kaa type sahi hai yaa nhi 
route ke andar apko data unke hisab se hi milega
    `GET` - req.query
    `POST` - req.body

GET type form me data url me show hota hai
POST type form me data url pe nhi dikhta hai