// callback kuch khas nahi balki sirf ek function hota hai, bas thoda special jo hai wo ye hai ki ise paas kiya jata hai as an argument jab particular async code chal jaye

// callback kuch bhi nhi bus ek function hai jise pass kiya gya ho kisi aur function mein aur jab wo function chale toh aap us pass kiye gaye callback function ko chala payenge

function abcd(a, b) {
  b();
}
abcd(1, function () {
  console.log("Callback Chala");
});

// aisa koi bhi function jise hum paas krte hai kisi or function me call krte waqt toh use hum callback function kehte hain

function doSomeAsyncTask(url, callback) {
  fetch(url)
    .then(raw => raw.json())
    .then(result => {
      callback();
    });
}

doSomeAsyncTask("some url", function () {});

// first url se data aayega uske baad andar ka function chalega because humne mention kiya hai ki jab data aa jaye toh callback chalao

function getData(url, callback) {
  fetch(url)
    .then(raw => raw.json())
    .then(result => {
      callback(result);
    });
}

getData("https://randomuser.me/api/", function (result) {
  console.log(
    result.results[0].gender,
    result.results[0].email,
    result.results[0].name.first
  );
});

// first url se data aayega uske baad andar ka function me us data ka result as an argument pass hua or function call hua and then hamara output aaya
