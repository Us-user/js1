//task1
// function qq(a,q=0){
//     if(a%10>q){
//         q=a%10
//     }
//     if(a==0){
//         return q
//     }
//     return qq(Math.floor(a/10),q)
// }
// console.log(qq(438523979));


//task2
// function qq(a,q=10){
//     if(a==0){
//         return q
//     }
//     if(a%10<q){
//         q=a%10
//     }
//     return qq(Math.floor(a/10),q)
// }
// console.log(qq(438523979));


//task3
// function qq(a,b){
//     if(a==b){
//         return a
//     }
//     let q=""
//     return q+=a+','+qq(a+1,b)
// }
// console.log(qq(2,7));


//task5
// function qq(a){
//     if(a==1 || a==2 || a==0){
//         return 1
//     }
//     return qq(a-1)+qq(a-2)
// }
// console.log(qq(5));


//task6
// function qq(a,q=a.toString().length,w=a.toString().length){
//     if(w==Math.round(q/2)){
//         return a.toString().split("").at(Math.floor(q/2))
//     }
//     return qq(Math.floor(a/10),q,w-1)

// }
// console.log(qq(12341));


//task7
// function qq(a){
//     let cnt=0
//     return (b)=>{
//         cnt++
//         return cnt==1 ? a+b: cnt==2 ? a-b: cnt==3 ? a*b: cnt==4 ? a/b: a%b
//     }
// }
// let qw=qq(2)
// console.log(qw(1));
// console.log(qw(1));
// console.log(qw(1));
// console.log(qw(1));
// console.log(qw(1));


//task8
// function qq(a){
//     let sum=a
//     return (b)=>{
//         return sum+=b
//     }
// }
// let qw=qq(10)
// console.log(qw(5));
// console.log(qw(10));
// console.log(qw(20));


//task9
// function qq(){
//     let cnt=0
//     return ()=>{
//         cnt++
//         return cnt
//     }
// }
// let qw=qq()
// console.log(qw());
// console.log(qw());
// console.log(qw());
// console.log(qw());


//tassk10
// function qq(a){
//     let q=a.toString()
//     return ()=>{
//         let as=+q
//         q=q.slice(1)
//         return as
//     }
// } 
// let qw=qq(23412)
// console.log(qw());
// console.log(qw());
// console.log(qw());
// console.log(qw());
// console.log(qw());
// console.log(qw());
