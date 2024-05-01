var hone = document.querySelector("h1")

// syntax
// selection_store_variable.style.css_property_name = 'value';
// style : to change css
// write css_property_name in camelcase
hone.style.color = 'red';   // always write the value in inverted comma
hone.style.fontSize = "16px";

//classList  
// to apply properties of any class on any element,id,class
var htwo = document.querySelector("h2");
htwo.classList.add('makeitYG'); // don't use dot while writing class name inside ()
htwo.classList.remove("makeitYG");
