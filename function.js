function zero (){
    console.log("Alok kumar")
}
zero()


function TotalSum(a, b) {
   let sum = a + b;
    console.log(`Sum of ${a}, ${b} is ${sum}`);
  }
  
 
  TotalSum(3, 4);
  

const answer = (addition) =>{
    return addition + addition
}

const final_answer=answer(10)
console.log(`the Addition will be ${final_answer}`)


var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};



// var x = 21;
// a();
// b();
// console.log(x)

//   function a() {
    
//    x = 20;
//   console.log(x);
// };
//  function b() {
    
//     x = 40;
//    console.log(x);
// };


function factorial(n){
    if( n===0){
        return 1
    }
    else{
        return n * factorial(n - 1);
    }
}
factorial(5)




// function FindSum(a, b){
//     return a + b;
// }

// function DisplayData(data, batch){
//     console.log(`i am from ${data} and My batch is EA${batch}`)
// }

// DisplayData("PrepBytes", FindSum(10, 9));

// let n=5;

// function fact(n){
//     let ans=1;
//     for(let i=2; i<=n; i++){
//         ans=ans*i
//     }
//     return ans
// }
// console.log(fact(n))

//recursion method
function fun(n){
    if (n==0 || n==1){
        return 1
    }
    else{
        return n*fun(n-1)
    }
}
console.log(fun(n))


// // Abc();
// // var Abc = function(){
// //     let value = 20;
// //     console.log(value);
// // }



// var a = 10;
// (function (){
//     console.log(a);
//     var a = 20;
// })();



// var a = 10;
// (function (){
//     console.log(a);
//     var a = 20;
// })();


