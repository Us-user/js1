//task1 +
// function matchHouses(a){
//     if(a==1){
//         return 6
//     }
//     let w=6
//     for(let i=2;i<=a;i++){
//         w += 5
//     }
//     return w
// }
// console.log(matchHouses(86));



//task2 +
// function rev(a){
//     if(a<10){
//         return "It’s one digit"
//     }
//     let q=0;
//     for(let i=a;i>0;i=Math.floor(i/10)){
//         q=q*10+i%10
//     }
//     return q
// }
// console.log(rev(1));


//task3 +
// function equal(a,b,c){
//     return a==b && b==c ? 3: a!=b && b!=c ? 0: 2
// }
// console.log(equal(3,3,3));


//task4 +
// function findLargestDigit(a){
//     let q=0
//     let y=0
//     let sm=0
//     for(let w=a%10;w>0;w=Math.floor(w/10)){
//         for(let u=a;u>0;u=Math.floor(u/10)){
//             if(u%10==w){
//                 y++
//             }
//             sm++
//         }
//     }
//     if(y==sm){
//         return "All digits are equal"
//     }
//     for(let i=a;i>0;i=Math.floor(i/10)){
//         if(i%10>q){
//             q=i%10
//         }
//     }
//     return "The largest digit in " + a + " is " + q
// }
// console.log(findLargestDigit(222));


//task5 +
// function mean(a){
//     let q=0,w=0
//     for(let i=a;i>0;i=Math.floor(i/10)){
//         q+=i%10
//         w++
//     }
//     return q/w
// }
// console.log(mean(666));


//task6 +
// function isPandigital(a){
//     for(let i=0;i<10;i++){
//         var e=0
//         for(let q=a;q>0;q=Math.floor(q/10)){
//             if(q%10==i){
//                 e++
//             }
//         }
//         if(e==0){
//             return false
//         }
//         e=0
//     }
//     return true
// }
// console.log(isPandigital(123304566778899));


//task7 +
// function fib(q){
//     let a=1,b=1,c 
//     for(let i=3;i<=q;i++){
//         c=a+b
//         a=b
//         b=c
//     }
//     return b
// }
// console.log(fib(8));


//task8 +
// function DoubleFactorial(a){
//     let q=1
//     if(a%2==0){
//         for(let i=1;i<=a;i++){
//             if(i%2==0){
//                 q*=i
//             }
//         }
//     }
//     else if(a%2!=0){
//         for(let i=1;i<=a;i++){
//             if(i%2!=0){
//                 q*=i
//             }
//         }
//     }
//     return q
// }
// console.log(DoubleFactorial(6));


//task9 +
// function is_Natural(a){
//     return a>0 ? true: false
// }
// console.log(is_Natural(-5));



//task10 +
// function LeapYear(a){
//     return a%4==0 ? true: false
// }
// console.log(LeapYear(2020));
