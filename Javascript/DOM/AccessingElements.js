// Accessing Elements : document.querySelector()

//ways to select an element
document.getElementById     //to select ID
document.getElementsByClassName     //to select any Class
document.getElementsByTagName   //to select any tag
//these above tags select only specific but document.querySelector can select everything id,class,tag
document.querySelector("jo_select_karna_hai")

//**********************************

// select and save

//id
let abcd = document.querySelector("#hone")
//hone named id ko select karke abcd name ke variable me store kara diya

//class
let pqrs = document.querySelector(".htwo")
//htwo named class ko select karke pqrs name ke variable me store kara diya

//tag
let uvwx = document.querySelector("h3");
//h3 tag ko select karke uvwx name ke variable me store kara diya

// agar hmare paas boht sare h3 hai and hum select karte hai toh sirf pahla h3 select hoga

// agar hame sara h3 select krna hain toh we need to use document.querySelectorAll("h3");

var hthree = document.querySelectorAll("h3")
//html me jitna h3 tha sabhi ko select kakrke hthree name ke variable me store kara diya