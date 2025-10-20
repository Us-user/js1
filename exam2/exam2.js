//task1 +
// function doubleChar(a){
//     if(typeof a=="number"){
//         return "Not a string"
//     }
//     let q=""
//     let e=a.split("")
//     for(let i=0;i<a.length;i++){
//         q+=e[i]
//         q+=e[i]
//     }
//     return q
// }
// console.log(doubleChar("Hello"));


//task2
// function sevenBoom(a){
//     let q=a.replaceAll(",","")
//     for(let i=0;i<q.length;i++){
//         if(q[i]==7){
//             return "Boom!"
//         }
//     }
//     return "Not!"
// }
// console.log(sevenBoom("1,32,1,75567,2,37"));


//task3
// function removesNumbers(a){
//     let q=""
//     for(let i=0;i<a.length;i++){
//         if(a[i]==1 || a[i]==2 || a[i]==3 || a[i]==4 || a[i]==5 || a[i]==6 || a[i]==7 || a[i]==8 || a[i]==9){
//             continue
//         }
//         else{
//             q+=a[i]
//         }
//     }
//     return q
// }
// console.log(removesNumbers("hel23lo wo42r32l23d"));


//task4
// function reverse(a){
//     let q=""
//     for(let i=a.length-1;i>=0;i--){
//         let w=a[i].toUpperCase()
//         if(w==a[i]){
//             q+=a[i].toLowerCase()
//         }
//         else{
//             q+=a[i].toUpperCase()
//         }
//     }
//     return q
// }
// console.log(reverse("Hello World"));


//task5
// function unrepeated(a){
//     let qw=""
//     for(let i=0;i<a.length;i++){
//         let qq=0
//         for(let s=0;s<qw.length;s++){
//             if(qw[s]==a[i]){
//                 qq++
//             }
//         }
//         if(qq==0)[
//             qw+=a[i]
//         ]
//         qq=0
//     }
//     return qw
// }
// console.log(unrepeated("WWE!!!”"));



//task6
// function createCounter(){
//     let cnt=0
//     return ()=>{
//         cnt++
//         return cnt
//     }
// }
// let counter1=createCounter()
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());



//task7 
// function sumOfDigit(a){
//     return function qw(a){
//         if(a==0){
//             return 0
//         }
//         sum=a%10
//         return sum+qw(Math.floor(a/10),sum)
//     }
// }
// let getSumOfDigit =sumOfDigit()
// console.log(getSumOfDigit (12345));
// console.log(getSumOfDigit (98765));


//task8
// function sumCubes(a){
//     if(a==0){
//         return 0
//     }
//     return a**3+sumCubes(a-1)
// }
// console.log(sumCubes(3));


//task9
// function factFact(a){
//     if(a==0){
//         return 1
//     }
//     return fact(a)*factFact(a-1)
// }
// function fact(a){
//         if(a==0){
//             return 1
//         }
//         return qw=a* fact(a-1)
//     }
// console.log(factFact(3));



//task10
// function longestWord(a){
//     let q=a.split(" ")
//     let qw=0
//     for(let i=0;i<q.length;i++){
//         if(q[i].length>qw){
//             qw=q[i].length
//         }
//     }
//     for(let i=0;i<q.length;i++){
//         if(q[i].length==qw){
//             return q[i]
//         }
//     }
// }
// console.log(longestWord("komd vennkn fvnnnn fdsfdsafdsafdsadfsa"));
