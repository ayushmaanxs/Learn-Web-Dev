import React, { useState } from "react";
// import Navbar from './Components/Navbar';
// import Hero from './Components/Hero';
// import SecondPage from './Components/SecondPage';
import Cards from "./Components/Cards";

//Understanding useState
// function App() {
//   // const ans = useState({name:"Ayushmaan"}); // useState returns an array in which 1st index contains value and 2nd contains function to update the value
//   // console.log(ans[0]);  //to access value inside useState --> use 0th index
//   // console.log(ans[1]);  // to access function inside useState --> use 1st index --> function to update the value

//   // Industry standard to use useState --> directly receive array inside an array

//   // const [score, setScore] = useState(96500);
//   // console.log(score);
//   // return (
//   //   <div>
//   //     <h1>{score}</h1>
//   //   </div>
//   // );

//   // Problem 1 : -> change ban status on button click
//   // const [banned,setBanned] = useState(false);
//   // return(
//   //   <div className="p-4">
//   //     <h1 className="p-4 font-bold text-2xl">Banned Status : {banned.toString()}</h1>
//   //     {/* banned.toString() converts boolean value to string */}
//   //     <button onClick={()=>setBanned(!banned)}className="m-2 px-6 py-2 font-semibold bg-blue-600 text-white rounded-full hover:bg-blue-900">Ban Me</button>
//   //   </div>
//   // )

//   // Problem 2 :-> Create a counter which increases on button click
//   // const [count, setCount] = useState(20);
//   // return (
//   //   <fragment>
//   //     <div className="p-4 font-bold text-5xl">{count}</div>
//   //     <button
//   //       onClick={()=> setCount((previousValue)=>previousValue+1)}
//   //       // another callback inside setCount recieves previousValue in parameter we can name it anything
//   //       className="m-2 px-6 py-2 font-semibold bg-blue-600 text-white rounded-full hover:bg-blue-900"
//   //     >
//   //       Increase
//   //     </button>

//   //     <button
//   //       onClick={()=> setCount((previousValue)=>previousValue-1)}
//   //       className="m-2 px-6 py-2 font-semibold bg-blue-600 text-white rounded-full hover:bg-blue-900"
//   //     >
//   //       Decrease
//   //     </button>
//   //   </fragment>
//   // );

//   //Problem 3 --> Make changes inside an object when useState has recieved an object
//   const [details,setDetails] = useState({name:"Ayushmaan" , isBanned:false});
//   return (
//       <>
//         <div className="pt-2 pl-4 font-bold text-2xl">Name : {details.name}</div>
//         <div className="pt-2 pl-4 font-bold text-2xl">Ban Status : {details.isBanned.toString()}</div>
//         {/* ek naya original object ka copied object pass krke in setDetails using spread operator ... then hum kisi propetry ko update krenge .objects and arrays ke case me state ko direct change krna allowed nhi hai */}
//         <button onClick={()=>setDetails({...details, isBanned: (!details.isBanned)})} className="m-4 px-6 font-semibold bg-blue-600 pt-2 pb-2 p-4 rounded-full hover:bg-blue-900 text-white">Ban Me</button>
//       </>
//   )
// }

//Mastering useState

// function App() {
//   //Problem 4 --> Make changes inside an object when useState has recieved an object and also change the button click on object change

//   // const [val, setVal] = useState({ name: "Ayushmaan", isBanned: true });
//   // return (
//   //   <div className="bg-zinc-400 w-full h-screen">
//   //     <div className="pl-4 pt-3 font-bold text-2xl ">Name : {val.name}</div>
//   //     <div className="pl-4 pt-3 pb-2 font-bold text-2xl">Banned status : {val.isBanned.toString()}</div>
//   //     <button className={`ml-4 mt-3 rounded-full font-semibold text-white p-6 pt-1 pb-1 ${val.isBanned ? "bg-blue-700 && hover:bg-blue-900" : "bg-red-700 && hover:bg-red-900"}`}  onClick={()=>setVal({...val,isBanned : !(val.isBanned)})}> Ban Me</button>
//   //   </div>
//   // )

//   // Problem 5 - useState ke andar ek array hai and us array ko hume update krna hai i., reduce array by 1 on button click

//   // const [val, setVal] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//   // return (
//   //   <div className="p-5 ">
//   //     {val.map((value, index) => (
//   //       <h1 className="font-bold">{value}</h1>
//   //     ))}
//   //     <button className="mt-3 px-5 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-900" onClick={()=>setVal(()=>val.filter((value,index)=>index!=val.length-1))}>Delete Last</button>

//   //     hum react me arrays ko directly nhi badal skate so we will update the array using setVal . val.filter always returns an array --> jab tak ki index val.length-1 ke equal nahi hai hai tab tak new array return krte raho val.filter ko and then ye new array setVal me set ho jayega or value fir update ho jayega
//   //   </div>
//   // );

//   // Problem 6 - useState ke andar ek array hai and us array ko hume update krna hai i., reduce array by some on button click --> remove 3rd (2nd index) elemnt from the array and unko bhi jo jo 2 se divide ho jate ho

//   // const [val, setVal] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//   // return (
//   //   <div className="p-5 ">
//   //     {val.map((value, index) => (
//   //       <h1 className="font-bold">{value}</h1>
//   //     ))}
//   //     <button className="mt-3 px-5 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-900" onClick={()=>setVal(()=>val.filter((value,index)=> index!=2 && value % 2 ))} > Delete 3rd</button>

//   //   </div>
//   // );

//   // Problem 7 - Add 1 element in array

//   // const [val, setVal] = useState([1, 2, 3, 4, 5,]);
//   // return (
//   //   <div className="p-5 ">
//   //     {val.map((item)=><h1>{item}</h1>)}
//   //     <button className="mt-3 px-5 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-900" onClick={()=>setVal([...val,7])}>Add one element</button>

//   //   </div>
//   // )

//   // Problem 8 - Add 1 key value pair to an object
//   // function App() {
//   //   const [people, setPeople] = useState([
//   //     { name: "Ayushmaan", age: 19 },
//   //     { name: "Khushi", age: 18 },
//   //     { name: "Rohan", age: 20 },
//   //   ]);
//   //   console.log(people);
//   //   return (
//   //     <div className="p-5 ">
//   //       {people.map((value) => (
//   //         <h1 className="font-bold">
//   //           {value.name} - {value.age}
//   //         </h1>
//   //       ))}
//   //       <button
//   //         className="mt-3 px-5 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-900"
//   //         onClick={() =>
//   //           setPeople(
//   //             people.map((value) =>
//   //               value.name === "Rohan" ? { name: "Dwivedi", age: 19 } : value
//   //             )
//   //           )
//   //         }
//   //       >
//   //         Add object
//   //       </button>
//   //     </div>
//   //   );
//   // }
// }

//Hooks useState


// function App() {
//   //   const data = [1,2,3,4,5,6,7,8,9,10];
//   //   return(
//   //     <div>
//   //       {/* <Navbar></Navbar>
//   //       <Hero/>
//   //       <SecondPage/>
//   //       <h3>Hello</h3> */}
//   //       {data.map((value,index)=><h1 key = {index}>ASXKB</h1>)}
//   //     </div>
//   //   );
//   // }
//   // Understanding components reusability
//   // function App() {
//   //   const data = ["Ayushmaan", "Khushi", "Dwivedi", "Shandilya", "Bhardwaj"];
//   //   return (
//   //     <div>
//   //       {data.map((value, index) => (
//   //         <div className="px-3 py-4 bg-zinc-300 rounded md w-1/3" key={index}>
//   //           {value}
//   //         </div>
//   //       ))}
//   //     </div>
//   //   );
// }

export default App;
