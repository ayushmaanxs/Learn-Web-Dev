//Error Handling like PRO

function divide(a, b) {
  try {
    if (b === 0) {
      throw Error("Koi Gadbad Hui"); 
    }
    console.log(a / b);
  } catch (err) {
    // console.log(err);
    console.error(err);
  }
}

divide(13, 0);

///we can't divide anything by 0 so jab b===0 hua toh --> throw Error("koi gadbad hui") ---> jobhi throw Error ke andar likha hoga wo jayega 'catch' ke 'err' parameter ke jagah

//jaise hi throw error cahlega wo dirctly catch ke paas jayega
