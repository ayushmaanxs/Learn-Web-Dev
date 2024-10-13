React is a library --> Not a language, not a framework, not a technology -->Facebook created this in 2013 and it was open sourced in 2015

## Repaint --> 
jab website ke upar khoob sare changes hote hain to khoob sara repaint hota hai wo bhi wo elements kaa bhi jo actually me badle bhi nhi , aur ye website ko slow down kar deta hai , is chij se bhi bachne ke liye facebook ne react bnaya

## Virtual DOM
vdom sirf wo part repaint krta hai jo change hua ho , ya jaha par change karne ki need ho

## extensions 
tabnine , pretteir , node , vite vs cra

## jsx -->
it is actually a very similar looking structure like html
<h1>hey 2 + 2</h1>    // this is html   ---> hey 2+2
<h1>hey {2+2}</h1>    // this is jsx    --> hey 4
jsx sirf dikhta hai HTML ke tarah but hota nahi hai 
ye baad me React.createElement me convert hota hai
to write logic along with html we use jsx.

## making components --> 
component is a function which returns some jsx
first letter of component name is always capitalized

1. import React and create a component
2. write function and return some jsx
3. export the component

we can't return multiple tags so write all code inside a parent div tag in components

## using map function-->
similar to for Each loop.forEach loop do not returns anything but map returns a value so we use map function.
map function will run a callback function for each element inside the array

const data = ["1","2","3","4","5","6","7","8","9","Khushi","Ayushmaan"]

{data.map((value,index)=><h1 key="index">hello {value}</h1>)};

to print arrays in react we use `map`
to 


## conditional rendering
if else --> write logics in curly brackets`   
{elem.inStock == true ? "Buy Now" : "Out of stock"}

to use this on className --> write the className in back ticks first i.e.,   

className={`text-xs px-3 mb-3 py-2 ml-3 text-white cursor-pointer  ${elem.inStock == true ? 'bg-blue-800 &&  hover:bg-blue-950' : 'bg-red-700 &&  hover:bg-red-950'} rounded-full w-fit`}

## useState()

state ek data hota hai, react is data ka khayal rakhta hai , jab bhi ye data change hota hai toh react page ko update krta hai

state koi bhi data ho skta hai

maan lete hai aapke game mein score by default 0 se suru hota hain and future mein wo score badhega by 10 aur apko page pe show bhi karna hai jab score badhe , to us case me apka score variable ko ek state mein rakhna jaruri hain , kyuki react sirf use change karta hai jo state mein hota hain

... ---> spread operator --> to copy objects
useState ke andar diye gye object ke values me direct changes nhi kr skte hai so first we need to copy the object then update the state

details wale object ka copy bnaya using --->  ...details then uske andar ke ek field ko update kraaa
```
onClick={()=>setDetails({...details, isBanned: (!details.isBanned)})}

```

useState state ko immediately update nhi karta , function completion ke baad state update hota hai to fix performance issues.

phle pura function chalega then react compare krega useState ki purani value se iske basis pe react will decide ki dubara render karna hai ya nhi i.e, asynchoronusly update hota hai


## map and filter

map filter dono hi array pe chalte hai , aur dono kaa kaam hai array par kuch perform karna and `ek naya array return krna`.

`map` -> har element pe kuch perform kro and naye array me rkho
`map` ke andar return krna jaruri hai

`map` ke andar aata hai function or uske andar aata hai value

const state = [1,2,3,4,5,6]
const ans = state.map(val=>{val*2});
state = ans ; 

har bar `val` mein  joki map ke andar callback function ke andar ka parameter hai usmein `state` wale array ka har ek element ek ek krke aayega and pura  ek naya array return hoke ans me save ho jayega jise hum baad me state me assign krke array ko update kr dengey

`map` ke andar return krne ke wajah se hi elements new array me place hote hai

`map` and `filter` me ek hi farq hai , map sare bande lautata hai matlab ki element count kam nhi hoga , filter bando ko kam kr skta hain i.e, kisi kisi specific element pe hi opertaion perform krna ho then `filter` use krenge

example to use filter --> ek array mein sabhi nums jo ki 5 se bade hain usmein 10 add kro 

`var arr = [1,2,3,4,5,6];`

jab conditon true hota hai tbhi filter array ka elemnt return krta hai
`const and = arr.filter(elem => true);`
`jo element 4 se bara hai usko return kro  only i.e, jiske liye elem>4 wali conditon true hoga usko return krega bs
`const ans = arr.filter(elem => elem>4);`