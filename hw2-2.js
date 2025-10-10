//task1
// function plo(a){
//     var b=Math.round(3.14*a*a)
//     return "The area of a circle with radius "+a+ " is "+b
// }
// console.log(plo(8));

//task2
// function sum(a){
//     var q=0
//     for(var i=a;i>0;i=Math.floor(i/=10)){
//         q+=Math.floor(i%10)
//     }
//     return q
// }
// console.log(sum(123));


//task3
// function chet(a){
//     return a%2==0 ? a+1: a-2
// }
// console.log(chet(22));


//task4
function qq(a){
    var q=0;
    for(var i=a;i>0;i=Math.floor(i/=10)){
        q=q*10+i%10
    }
    var rev="";
    for(var i=q;i>0;i=Math.floor(i/=10)){
        rev += i%10*2 
    }
    return +rev    
}
console.log(qq(7132));



//task5
// function qq(a,b){
//     var c=a+b
//     return c<100
// }
// console.log(qq(22,15));


//task6
// function qq(a){
//     return a*4
// }
// console.log(qq(7));


//task7
// function qq(a){
//     return a*a
// }
// console.log(qq(11));


//task8
// function qq(a,b){
//     return (a+b)/2
// }
// console.log(qq(10,20));



//task9
// function qq(a){
//     return a%2==0 ? 3: 4
// }
// console.log(qq(13));


//task10
// function qq(a){
//     return 17*(a*a)-6*a+13
// }
// console.log(qq(2));
