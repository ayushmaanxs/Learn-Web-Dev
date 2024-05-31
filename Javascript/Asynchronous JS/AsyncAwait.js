//Async/Await - koi bhi function banalo and uske andar jo man mein aaye wo async code likhdo, ab jab aap async likhte ho toh baad waali line pahle chal jaati hai kyuki async side stack pe hota hai aur baad wali line agar async ke basis par hui toh apka code fail ho jayega, wo isliye kyunki aapka code depend karta hai async code par joki baad mein chalega sync code chalne ke baad

// with async await aap async code bhi aise likh skte hai jaise ki hum normal synchronous code likh rhe ho

async function abcd(){
    let a = await fetch (`https://randomuser.me/api/`);
    a = await a.json();
    console.log(a);
}
abcd();

// await jaha lag jata hai that means ki next line tab tak mat chalao jab tak ki current line ka execution complete naa ho jaye
// await  ko work karane ke liye parent function me async lagana jaruri hai