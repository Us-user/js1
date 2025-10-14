//task1
// function qq(a){
//     let q=0
//     for(let i=a;i>0;i=Math.floor(i/10)){
//         q+=i%10
//     }
//     return q
// }
// console.log(qq(12345));


//task2
// function qq(a){
//     let q=1
//     for(let i=1;i<=a;i++){
//         q*=i
//     }
//     return q
// }
// console.log(qq(4));


//task3
// function qq(t){
//     let a=1,b=1,c
//     for(let i=3;i<=t;i++){
//         c=a+b
//         a=b
//         b=c
//     }
//     return c
// }
// console.log(qq(6));


//task4
// function qq(a){
//     let q=0
//     for(let i=a;i>0;i=Math.floor(i/10)){
//         if((i%10)%2==0){
//             q+=i%10
//         }
//     }
//     return q
// }
// console.log(qq(123456));


//task5
// function qq(a){
//     for(let i=a;i>0;i=Math.floor(i/10)){
//         if(i%10==5){
//             return "Hello five"
//         }
//     }
//     return "no five"
// }
// console.log(qq(227));


//task6
// function qq(a){
//     let q=0
//     for(let i=1;i<=a;i++){
//         q+=i**2
//     }
//     return q
// }
// console.log(qq(4));


//task7
// function qq(a){
//     let q=0
//     for(let i=2;i<a;i++){
//         if(a%i==0){
//             q++
//         }
//     }
//     return q==0 ? "Prime": "Not Prime"
// }
// console.log(qq(4));


//task8
// function qq(a){
//     let q=0
//     for(let i=a;i>0;i=Math.floor(i/10)){
//         q=q*10+i%10
//     }
//     return q==a ? true : false
// }
// console.log(qq(1221));


//task9
// function qq(a){
//     let q=0
//     for(let i=a;i>0;i=Math.floor(i/10)){
//         if(i%10>q){
//             q=i%10;
//         }
//     }
//     return q
// }
// console.log(qq(394));


//task10
// function qq(a,b){
//     let q=10,w=10
//     for(let i=a;i>0;i=Math.floor(i/10)){
//         if(i%10<q){
//             q=i%10
//         }
//     }
//     for(let i=b;i>0;i=Math.floor(i/10)){
//         if(i%10<w){
//             w=i%10
//         }
//     }
//     return q+w
// }
// console.log(qq(142,485));


//taask11
// function qq(a,b,c){
//     return Math.max((Math.max(a,b)),c)
// }
// console.log(qq(10,32,14));


//task12
// function qq(a){
//     let q=0;
//     for(let i=a;i>0;i=Math.floor(i/10)){
//         q=q*10+i%10
//     }
//     return q
// }
// console.log(qq(1234));


//tesk13
// function qq(t){
//     let a=0;
//     for(let i=t;i>0;i=Math.floor(i/10)){
//         a+=i
//     }
//     let w=a.toString()
//     let e=w.lenght
//     return Math.round(a/e)
// }
// console.log(qq(12345));
