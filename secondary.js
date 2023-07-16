// first way to export 
function sum(a,b) {
    console.log(a+b);
}
exports.sum = sum;

// second way to export
exports.diff=(a,b)=>{
    console.log(a-b)
}

// Third way to export
function divide(a,b) {
    console.log(a/b);
}
export default divide;

