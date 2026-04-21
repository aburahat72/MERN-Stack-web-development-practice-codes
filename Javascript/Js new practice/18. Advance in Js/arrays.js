let a = 5;
let b = 7;
let c = 9;
function addNumbers() {
    return a + b + c;
}
console.log(addNumbers()); // Output: 21



// second methods
function add(a, b, c) {
    return a + b + c;
}
console.log(add(5, 7, 9)); // Output: 21

// 3rd methods
function add(a, b, c) {
    return a + b + c;
}
let arr = [2, 3, 6];
console.log(add(arr[0], arr[1], arr[2])); // Output: 11


// 4th methods
// very simplier
function add(a, b, c) {
    return a + b + c;
}
console.log(add(...[2, 3, 6])); // Output: 11
