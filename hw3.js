//task1
// function qq(a,b){
//     return a==10 || b==10 || a+b==10 ? true : false
// }
// console.log(qq(11,9));


//task2
// function qq(a,b){
//     let c=a+b,q=0;
//     for(let i=2;i<c;i++){
//         if(c%i==0){
//             q++
//         }
//     }
//     return q==0 ? true : false
// }
// console.log(qq(5,7));

//task3
// function qq(q){
//     let a=1,b=1,c
//     for(let i=3;i<=q;i++){
//         c=a+b
//         a=b
//         b=c
//     }
//     return c
// }
// console.log(qq(5));


//task4
// function qq(a,b){
//     return Math.pow(a,b)
// }
// console.log(qq(5,5));


//task5
// function qq(a){
//     let c=0
//     for(let i=a;i>0;i=Math.floor(i/10)){
//         c=c*10+i%10
//     }
//     return a>c
// }
// console.log(qq(43));


//task6
// function qq(a,b){
//     for(var i=a;i<b;i++){
//         let w=0
//         for(let q=2;q<i;q++){
//             if(i%q==0){
//                 w++
//             }
//         }
//         if(w==0){
//             return true
//         }
//     }
//     return false
// }
// console.log(qq(11,15));


//task7
// function qq(a){
//     var q=0
//     for(var i=1;i<=a;i++){
//         q+=i**2
//     }
//     return q
// }
// console.log(qq(4));


//task 8
// function qq(a,b){
//     var q=0
//     for(var i=b;i>a;i=Math.floor(i/a)){
//         if(b/a!=1){
//             q++
//         }
//     }
//     return q+1
// }
// console.log(qq(2,1024));


//task9
// function qq(a,b){
//     var q=0
//     var c=Math.max(a,b)
//     for(var i=1;i<c;i++){
//         if(a%i==0 && b%i==0){
//             q=i
//         }
//     }
//     return q
// }
// console.log(qq(14,28));

//task10
// function qq(a){
//     for(let i=2;i<a;i++){
//         var e=0
//         for(let q=1;q<a;q+=i){
//             e+=q;
//         }
//         if(e==a){
//             return true
//         }
//     }
//     return false
// }
// console.log(qq(1248));


//task11
// function qq(a){
//     var q=1
//     for(var i=1;i<=a;i++){
//         q*=i
//     }
//     return q
// }
// console.log(qq(4));


//task12
// function qq(a){
//     var q=0
//     for(var i=a;i>0;i=Math.floor(i/10)){
//         q+=i%10
//     }
//     return q
// }
// console.log(qq(4359));


//task13
// function qq(a){
//     for(let i=1;i<=10;i++){
//         console.log(a*i+1);
//     }
// }
// qq(7)

//tasл14
// function qq(a){
//     var q=0;w=0
//     for(let i=a;i>0;i=Math.floor(i/10)){
//         q=q*10+i%10
//     }
//     for(let z=2;z<a;z++){
//         if(a%z==0){
//             w++
//         }
//     }
//     return q==a && w==0 ? true : false
// }
// console.log(qq(122));


//task15
// function qq(a){
//     return a*10
// }
// console.log(qq(23));



//PART2

//task1
// function qq(a,b,c,d){
//     var q=a*100+b
//     var w=c*100+d
//     return Math.floor(w/q)
// }
// console.log(qq(1,70,3,80));


//task2
// function qq(a,b,c){
//     if(a<b && b<c){
//         console.log(a*2,b*2,c*2);
//     }
//     else if(a>b && b>c){
//         console.log(a*2,b*2,c*2);
//     }
//     else{
//         console.log(-1*a,-1*b,-1*c);

//     }
// }
// qq(-3,8,5)


//task3
// function qq(a) {
//     if (a % 2 == 0) {
//         console.log("next=", a + 2, " prev=", a - 2);

//     }
//     else {
//         console.log("next=", a + 1, " prev=", a - 1);
//     }
// }
// qq(4)

//task4
// function qq(a){
//     return a>0 ? a-2: a<0 ? a+1: 10
// }
// console.log(qq(0));


//task5
// function qq(a,b){
//     for(let i=1;i<99999;i++){
//         if(i%a==0 && i%b==0){
//             return i
//         }
//     }
// }
// console.log(qq(3,8));


//task6
// function qq(a){
//     var q=0
//     for(var i=1;i<=a;i++){
//         if(a%i==0){
//             q+=i
//         }
//     }
//     return a=q ? true : flase
// }
// console.log(qq(28));


//task7
// function qq(a){
//     var b=0
//     for(let i=a;i>0;i=Math.floor(i/10)){
//         let q=i%10
//         for(let w=a;w>0;w=Math.floor(w/10)){
//             let r=w%10
//             if(r==q){
//                 b++
//             }
//         }
//         if(b==1){
//             return true
//         }
//     }
//     return false
// }
// console.log(qq(1231));


//task8
// function qq(a,b){
//     var n=0
//     for(let i=a;i<=b;i++){
//         var p=0
//         for(let w=2;w<i;w++){
//             if(i%w==0){
//                 p++
//             }
//         }
//         if(p==0){
//             n+=i
//         }
//     }
//     return n
// }
// console.log(qq(10,50));

//task9n

//task10
// function qq(a){
//     let q=1,w=0
//     for(let i=1;i<=a;i++){
//         q*=i
//     }
//     for(let c=q;c>0;c=Math.floor(c/10)){
//         w=w*10+c%10
//     }
//     return w
// }
// console.log(qq(4));

