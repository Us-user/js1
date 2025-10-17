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
//         return 0
//     }
//     return a%10+ qq(Math.floor(a/10))
// }
// console.log(qq(111));


//task2
// function qq(a,b){
//     if(b==0){
//         return 0
//     }
//     return b*a+qq(a,b-1)
// }
// console.log(qq(6,10));


//task3 -
// function qq(a,b){
//     let mx=Math.max(a,b)
//     if(a%mx==0 && b%mx==0){
//         return mx
//     }
//     return  
// }


//task4
// function qq(a){
//     if(a<0){
//         a*=-1
//     }
//     if(a==0){
//         return true
//     }
//     if(a==1){
//         return false 
//     }
    
//     return qq(a-2)
// }
// console.log(qq(-124));


//task5
// function qq(a){
//     return (b)=>{
//         return b+a
//     }
// }
// console.log(qq("ly")("homeless"));


//task6
// function qq(q=0){
//     let a=0
//     a+=q
//     return (w=0)=>{
//         a+=w
//         return (e=0)=>{
//             a+=e
//             return (r=0)=>{
//                 a+=r
//                 return (t=0)=>{
//                     a+=t
//                     return (y=0)=>{
//                         a+=y
//                         return a
//                     }
//                 }
//             }
//         }   
//     }
// }
// console.log(qq(2)(3)(4)()()(2));



//task7
// function qq(a,b){
//     let zz=a
//     return ()=>{
//         zz+=b
//         return zz
//     }


// }
// let qw=qq(5,10)
// console.log(qw());
// console.log(qw());
// console.log(qw());
// console.log(qw());
// console.log(qw());


//task8
// function qq(a){
//     if(a==0 ||a<0){
//         return 1
//     }
//     return a*qq(a-2)
// }
// console.log(qq(9));


//task9
// function qq(a){
//     let cnt=0
//     return ()=>{
//         cnt++
//         if(cnt>=a){
//             return "вызов не происходит"
//         }
//         return cnt
//     }
// }
// let qw=qq(5)
// console.log(qw());
// console.log(qw());
// console.log(qw());
// console.log(qw());
// console.log(qw());
// console.log(qw());


//task10
// function qq(a,b){
//     if(b==0){
//         return 1
//     }
//     b--
//     return a*qq(a,b)
// }
// console.log(qq(2,4));



console.log(Math.floor(Math.random()*(100-50+1)+50));
