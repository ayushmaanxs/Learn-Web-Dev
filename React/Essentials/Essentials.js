// array objects destructing import and export
// map filter arrow fn (implicit return) spread operator

// array JAVASCRIPT me ek aisa data structure hai joki ek se jyda elements rakh skta hai of different data types
// [1,2,4.5,"apple","khushi",function()]

//Immutable vs Mutable

var arr = [1, 2, 3, 4];
var arr2 = arr;
arr2.pop(); // arr and arr2 dono se last element pop ho gaya

// react js mein apko ek state name ki cheej milegi us bande ko aap mutate nhi kar skte matlab ki directly uski value ko change ya hata nhi skte

var state = [1, 2, 3];
state.pop(); // this is not allowed
// state is immutable --> we can't change this directly using state.pop()

// then how to update state in immutable way ?
var state = [1, 2, 3, 4];
state = [1, 2, 3]; // we can update/change by assiging a new array to state

var state = [1,2,3,4,5];
var copy  = [...state];
copy.pop();
