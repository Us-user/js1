// function qq(a){
//     if(a==0){
//         return 1
//     }
//     return a*qq(a-1);
// }
// console.log(qq(18));


// function qq(a){
//     if(a==0){
//         return 0
//     }
//     return a%10+qq(Math.floor(a/10))
// }
// console.log(qq(123456789));



// function qq(){
//     let cnt = 0
//     return () => {
//         cnt++
//         return cnt
//     }
// }
// let we=qq()
// console.log(we());
// console.log(we());
// console.log(we());
// console.log(we());
// console.log(we());
// console.log(we());


//task1
// function qq(a){
//     if(a==0){
//         return 1
//     }
//     return a*qq(a-1)

// }
// console.log(qq(5));


//task2
// function qq(a){
//     if(a==0){
//         return 0
//     }
//     return a+qq(a-1)

// }
// console.log(qq(10));


//task3
// function qq(a,b){
//     if(b==0){
//         return 1
//     }
//     b--
//     return a*qq(a,b)
// }
// console.log(qq(5,3));


//task4
// function qq(){
//     let cnt = 0
//     return function qw(){
//         cnt++
//         return cnt
//     }
// }
// let ee=qq()
// console.log(ee());
// console.log(ee());
// console.log(ee());


//task5
// function qq(a){
//     return (b) =>{
//         return a+b
//     }
// }
// console.log(qq(5)(77));
