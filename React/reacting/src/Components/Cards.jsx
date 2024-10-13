import React from "react";

// Handling Events
function Cards() {
  const songs = [
    {
      name: "Soni Soni",
      description:
        "Perfectly crafted for Gen Z, this track promises to get you moving and feeling the love. Get ready to vibe and groove to your new favorite hit!",
    },
    {
      name: "Aise Kyun",
      description:
        "Listen to our latest jam, Aise Kyu and witness young love come to life. Catch Praju di and national crush, Rohit Saraf in Mismatched, streaming now only on Netflix.",
    },
    {
      name: "Baby Mandala",
      description:
        "Provided to YouTube by Ditto Music Baby Mandala · Praz Khanal . Experience the magic of Nepalese drill music",
    },
    {
      name: "Malhari",
      description:
        "Watch Ranveer Singh perfectly capture the victorious spirit of Peshwa warrior Bajirao in this high-octane traditional song 'Malhari' from 'Bajirao Mastani'.",
    },
    {
      name: "Gal Ban Gayi",
      description:
        "T- Series Presents Latest Hindi Song GAL BAN GAYI our brand new single by Meet Bros. Originally composed by Sukhbir Singh, Sung by Sukhbir Singh & Neha Kakkar,  & written by Sukhbir and Kumaar.",
    },
  ]

  return (
    <div className="w-full h-full bg-zinc-400 flex flex-col gap-4 justify-center items-center p-4">
      {songs.map((elem, index) =>
        <div className="w-11/12 md:w-1/3 bg-zinc-100 rounded-md" key={index}>
          <h3 className="px-4 py-3 font-bold text-3xl">{elem.name}</h3>
          <p className="px-4 text-xs">{elem.description}</p>
          <button className="m-4 px-4 mt-3 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600" onClick={()=>{alert("Kar du download pakka")}}>
            Download Now
          </button>
        </div>
      )}
    </div>
  );
}

// Creating Component and Conditional Rendering
// const Cards = () => {
//   const dataCard = [
//     {name:"Glossier Cleanser",description:"A nourishing and pH-balanced gel-cream cleanser that plays nicely with all skin types.",img:"https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",inStock : true},
//     {name:"Fancy Mugs",description:"Two blank white mugs on a white table with natural light and shadows. Perfect for branding, design, and marketing.",img:"https://plus.unsplash.com/premium_photo-1719289799376-d3de0ca4ddbc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",inStock : false},
//     {name:"Candies",description:"I took this photo a few years ago, for Valentine’s Day. I think is one of my favorites, I’m not a pro but I think I did a decent job.",img:"https://images.unsplash.com/photo-1501856825340-395fbe304612?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",inStock : true}
//   ]
//   return (
//     <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-300 flex-wrap">
//         {dataCard.map((elem,index)=>
//           <div className= "w-52 bg-zinc-100  rounded-md overflow-hidden">
//         <div className="w-full h-32 bg-zinc-200">
//             <img className='w-full h-full object-cover' src={elem.img} alt={elem.name}/>
//         </div>
//         <div className="w-full px-3 py-4 ">
//             <h2 className="font-bold">{elem.name}</h2>
//             <p className="text-xs mt-5">{elem.description} </p>
//         </div>
//         <div className={`text-xs px-3 mb-3 py-2 ml-3 text-white cursor-pointer  ${elem.inStock == true ? 'bg-blue-800 &&  hover:bg-blue-950' : 'bg-red-700 &&  hover:bg-red-950'} rounded-full w-fit`}>{elem.inStock == true ? "Buy Now" : "Out of stock"}</div>
//       </div>
//         )}
//     </div>
//   )
// }

export default Cards;
