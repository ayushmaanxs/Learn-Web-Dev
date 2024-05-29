// Fetch API --> ye kisi aur url par jaa kar kucch data laayega ya data hamare paas se us url pe lekar jayega

// kyuki ye internet par jayega aur fir data ko lekar ayega to ismein time lagta hai toh by default js mein fetch ko async banaya gayya hai kyuki fetch ka kaam hai data laana wo bhi kisi url se ab aisa ho skta hai us url ki websie slow ho, toh data lane mein time lage, aur agar fetch synchronous hota toh uske baad ka code tab tak nhi chalta jab tak uska data nhi aa jata , which is a big problem pura code atak skta tha

// jab fetch se data aa jayega toh .then chalega

fetch(`https://randomuser.me/api/`) 
// .then(raw => console.log(raw)) // computer readableformat
// fetch hokar data hamesa raw format me aata hai so we need to convert that to json to make it readable

.then(raw => raw.json()) // our readable format
.then(readable => console.log(readable))
// .then (readable => console.log(readable.results[0].gender))

// fetch me hum 2 bar then() ka use krte hai first wala json me convert krne ke liye raw data ko and 2nd wale me actual response aata hai


// AXIOS :- ye bhi wahi karega jo fetch karta hai bas ye thoda developer friendly hai

// AXIOS me only 1 baar then() lgta hai
// Rather than converting raw data to json hum cdn use krte hai axios ka apne html file me

axios.get(`https://randomuser.me/api/`)
.then(result => console.log(result.data.results[0]));

// result object ke andar data ke andar result array ke 0th index wala