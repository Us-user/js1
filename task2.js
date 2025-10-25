//task1
// function qq(arr){
//     let sum=0
//     for(let i of arr){
//         sum+=i
//     }
//     return sum
// }
// console.log(qq([1,2,3,4,5]));


//task2
// function qq(arr){
//     mx=-999
//     for(let i of arr){
//         if(i>mx){
//             mx=i
//         }
//     }
//     return mx
// }
// console.log(qq([1,2,4,5,534,23,3424]));


//task3
// function qq(arr){
//     let even=0
//     for(let i of arr){
//         if(i%2==0){
//             even++
//         }
//     }
//     return even
// }
// console.log(qq([1,321,5322,234554,3254]));


//task4
// function qq(arr,a){
//     for(let i of arr){
//         if(i==a){
//             return true
//         }
//     }
//     return false
// }
// console.log(qq([1324,1234,12314,2,42,13,],42));


//task5
// function qq(arr){
//     let sum=0
//     let cnt=0
//     for(let i of arr){
//         sum+=i
//         cnt++
//     }
//     return sum/cnt
// }
// console.log(qq([1,2,3,4,5,6,7,8,9]));





//task1
// function qq(arr){
//     return arr[0]
// }
// console.log(qq([17,2,3,4,5]));


//task2
// function qq(...arr){
//     return arr
// }
// console.log(qq(1,2,4));


//task3
// function qq(arr){
//     return arr.toReversed()
// }
// console.log(qq([1,2,3,4]));


//task4
// function qq(arr){
//     return arr.map((elem)=>{
//         return elem+1
//     })
// }
// console.log(qq([0,1,2,3,4]));


//task5
// let qq=(arr)=>{
//     return arr.at(arr.length-1)
// }
// console.log(qq([1,2,3,4]));


//task6
// function qq(arr){
//     return arr.join("")
// }
// console.log(qq([1,2,3,4,5]));


//task7
// function qq(arr,a){
//     return arr.some((elem)=>{
//         return elem==a
//     })
// }
// console.log(qq([1,2,23,4,5],4));


//task8
// function qq(arr,a){
//     arr.forEach((elem,ind,array)=>{
//         return array.includes(a) ? ind: 0
//     })
// }
// console.log(qq([4,2,1,4],1));


//task9
// function qq(arr1,arr2){
//     return arr1.concat(arr2)
// }
// console.log(qq([1,2,3],[4,5,6]));


//task10
// function qq(arr){
//     return arr.map((elem)=>{
//         return +elem
//     })
// }
// console.log(qq(["1","2"]));



//task1
// function qq(a,b){
//     let q=[]
//     for(let i=a;i<=b;i++){
//         q.push(i)
//     }
//     return q
// }
// console.log(qq(1,20));


//task2
// function  qq(arr){
//     let c=[]
//     let q=0,w=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             q+=arr[i]
//         }
//         else{
//             w+=arr[i]
//         }
//     }
//     c.push(q)
//     c.push(w)
//     return c
// }
// console.log(qq([1,2,3,4,5,6]));


//task3
// function qq(arr){
//     return arr.reduce((a,b)=>{
//         return a*b
//     },1)
// }
// console.log(qq([1,2,3,4,5,6,7,8,9]));


//task4
// function qq(arr){
//     let c=[]
//     c = arr.toSorted((a, b)=>{
//         return a-b
//     })
//     return c[arr.length-1]+", "+c[0]
// }
// console.log(qq([1,465,2,12,65,32,986,12,42]));


//task5
// function qq(arr){
//     qwe=0
//     arr.forEach((elem)=>{
//         cnt=0
//         for(let i=2;i<elem;i++){
//             if(elem%i==0){
//                 cnt++
//             }
//         }
//         if(cnt==0){
//             qwe++
//         }
//         cnt=0
//     })
//     return qwe
// }
// console.log(qq([7, 13, 2, 6, 4]));


//task6
// function qq(arr){
//     return arr.toSorted((a,b)=>{
//         return a-b
//     })
// }
// console.log(qq([13,64223,6,23,76,33]));


// //task7
// function qq(arr,a){
//     let arr2=arr.join("")
//     for(let i of arr2){
//         if(i==a){
//             return "Boom"
//         }
//     }
//     return "there is no 7 in the array"
// }
// console.log(qq([3,2,3,4,5,6,37],7));


//task8 -
// function qq(arr){
//     let arr2=a.join("")
//     let q=0
//     arr2.forEach((elem)=>{


//     })
// }
// console.log(qq([32,53,1,3,6,8,3,2,4,64,2,1,3,5,7,9,7,5,6,7,44]));


//task9
// function qq(arr){
//     let qw=[]
//     for(let i=0;i<arr.length;i++){
//         let re=1
//         for(let q=1;q<=arr[i];q++){
//             re*=q
//         }
//         qw.push(re)
//     }
//     return qw
// }
// console.log(qq([1,2,3,4,5]));


//task10-
// function qq(arr){
//     return arr.every((elem)=>{
//         let qwq=0
//         for(let i=2;i<elem;i++){
//             if(elem%2==0)[
//                 qwq++
//             ]
//         }
//         return qwq=0
//     })
// }
// console.log(qq([1,19]));


//task11
// function qq(arr){
//     let mx=Math.max(...arr)
//     let mn=Math.min(...arr)
//     return mx-mn
// }
// console.log(qq([1,2,3,4,5]));


//task12
// function qq(arr){
//     return arr.forEach((elem,ind)=>{
//     })
// }
// console.log(qq([0,1,2,3,4,5]));
