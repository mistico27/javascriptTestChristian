let s = [3, 2, 3, 4, 5];
function Gfg() {
 
    // Storing the first item in a variable
    let f = s[0];
 
    // Storing the last item
    let L = s[s.length - 1];
 
    // Printing output to screen
    console.log("First element is " + f);
    console.log("Last element is " + L);
}
Gfg(); // Calling the function     

const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// Expected output: "array1:" Array ["three", "two", "one"]
