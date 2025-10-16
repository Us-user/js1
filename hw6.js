//task1
// function qq(a,b=1){
//     if(b>=a){
//         return 0
//     }
//     return b+qq(a,b+2)
// }
// console.log(qq(8));


//task2
// function qq(){
//     let mx=-999
//     return (a)=>{
//         if(a>mx){
//             mx=a
//         }
//         return mx
//     }
// }
// let qw=qq()
// console.log(qw(5));
// console.log(qw(5));
// console.log(qw(5));
// console.log(qw(23));


//task3
// function qq(a,c=0){
//     if(a<=0){
//         return 0
//     }
//     return a%10*Math.pow(2,c)+qq(Math.floor(a/10),c+1)
// }
// console.log(qq(1111));


//task4
// function qq(){
//     let i=0
//     return (a)=>{
//         i+=a
//         return i
//     }
// }
// let qw=qq()
// console.log(qw(3));
// console.log(qw(4));
// console.log(qw(3));
// console.log(qw(5));


//task5
// function qq(){
//     let i=0
//     let o=0
//     return (a)=>{
//         i+=a
//         ++o
//         return i/o
//     }
// }
// let qw=qq()
// console.log(qw(10));


//task6
// function qq(a){
//     if(a==1){
//         return 1
//     }
//     return qw(a)+qq(a-1)
// }
// function qw(a){
//     if(a<=2){
//         return 1
//     }
//     return qw(a-1)+qw(a-2)
// }
// console.log(qq(3));



//task7
// function qq(a){
//     let q=a
//     return ()=>{
//         q+=a
//         return q
//     }
// }
// let qw=qq(5)
// console.log(qw());
// console.log(qw());
// console.log(qw());
// console.log(qw());
// console.log(qw());


// task8 -
function qq(a,n=a,sum=0){
    if(a==0){
        return sum==n
    }
    return qq(Math.floor(a/10),n,sum+Math.pow(a%10, n.toString().length))
}
console.log(qq(153));


//task9 
// function qq(a,b,c=0){
//     c=a-b
//     if(c==0){
//         return true
//     }
//     return a-qq(a=a-b,b,c)

// }
// console.log(qq(10,5));


//task10
// function qq(a){
//     return (b)=>{
//         return b%a==0
//     }
// }
// console.log(qq(3)(10));
