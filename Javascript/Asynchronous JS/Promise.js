// What are promises ?
// kuch code socho man mein , joki async code ho , matlab ki ye side stack me jayega aur baad mein chalega main stack ke, ab ye socho ki aapne is code ko likha hain toh iska answer kabhi aayega aur aisa bhi ho skta hai ki iska answer aaye hi naa ,
//Promises kya hai --> aisa smjho ki aap promise ke andar koi bhi async code likhdo jo man me aaye or promise aapko ek parchi de deta hai or wo parchi par by default likha hota hai PENDING, parchi par 2 events hote hai mainly ek event ka name hai 'then' aur ek event kaa naam hai 'catch' , agar apka data aa gya toh parchi pe RESOLVED likh jayega PENDING ke jagah and 'then' chalega or agar data me dikkat aayi toh 'catch' chalega and waiting ke jagah REJECTED likh jayega

// jakr ek user laao and agar wo male hua toh RESOLVED (hara button daba) and nahi toh Rejected (laal button daba)

const parchi = new Promise(function (resolve, reject) {
  fetch(`https://randomuser.me/api/`)
    .then(raw => raw.json())
    .then(result => {
    //   console.log(result.results[0].gender);
      if (result.results[0].gender === "male") resolve();
      else reject();
    });
});

// parchi name ke variable me save kraa tha promise ko
// parchi ke name ke just baad .then and uske just baad .catch aata hai --> maintaining  this order is necessary

parchi
.then(function(){
    console.log("Resolved Hara button Daba");
})
.catch(function(){
    console.log("Rejected Laal button Daba");
})

// console.log(parchi);    // ye synchronous code hai toh sbse pahle chalega ye wala line so ye PENDING State pe hain abhi
