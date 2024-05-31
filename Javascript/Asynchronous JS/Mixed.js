// Callbacks vs Promises vs Async/Await
//ek url se data lekar aao and usey console pey show karo

/*
//SOLVING USING CALLBACK
function dataFetcher(url,callback){
    fetch(url)
    .then(raw => raw.json())
    .then(result => {
        callback(result);
    })
}

dataFetcher("https://randomuser.me/api/",function(result){
    console.log(result);
})
*/

//SOLVING USING PROMISE

function dataFetcher(url){
    const parchi = new Promise(function(resolve,reject){
        fetch(url)
        .then (raw => raw.json())
        .then (result => {
            resolve(result);
        })
    })
    return parchi;
}

dataFetcher(`https://randomuser.me/api/`)
.then(function(result){
    console.log(result);
})

//SOLVING USING ASYNC /AWAIT
