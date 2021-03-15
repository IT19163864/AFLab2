//Question 1 part 1 & 2
// function f(value){
//     console.log(value);
// }
//
// function getValue(callback){
//     let value = 0;
//     setTimeout(function (){
//         value = 10
//         callback(value);
//     },2000);
//     return value;
// }
//
// console.log(getValue(f));
//-------------------------------------------------------------


//Question 1 part 3 and 4
function getValue(){
    let value = 0;
    return new Promise(function (resolve, reject) {
        setTimeout(function (){
            value = 10;
            resolve(value);
        },2000)
    });
}

getValue().then(function (param) {
    console.log(param);
    param = param + 100
    return param;
}).then(function (param) {
    console.log(param);
    param = param + 100
    return param;
}).then(function (param) {
    console.log(param);
})
console.log("Hello");