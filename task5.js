//task1
// function qq(a){
//     return a.at(0)
// }
// console.log(qq([1,2,3]));


//task2
// function qq(...arr){
//     return arr
// }
// console.log(qq(1,2));


//task3
// function qq(arr){
//     return arr.reverse()
// }
// console.log(qq([1,2,3,4,5]));


//task4
// function qq(arr){
//     return arr.map((elem)=>elem+1)
// }
// console.log(qq([1,2,3,4,5]));


//task5
// function qq(aa){
//     return aa.at(-1)
// }
// console.log(qq([1,2,3,4,5]));


//task6
// function qq(aa){
//     return aa.join("")
// }
// console.log(qq([1,2,3,4,5]));


//task7
// function qq(aa,b){
//     for(let i in aa){
//         if(aa[i]==b){
//             return i
//         }
//     }
//     return -1
// }
// console.log(qq([1,2,3,4,5],4));


//task8
// function qq(arr,b){
//     for(let i in arr){
//         if(arr[i]==b){
//             return i
//         }
//     }
// }
// console.log(qq([1,2,3,4,"f"],"f"));


//task9
// function qq(arr,arr1){
//     return arr.concat(arr1)
// }
// console.log(qq([1,2,3],[4,5,6]));


//task10
// function qq(arr){
//     return arr.map((elem)=>elem=+elem)
// }
// console.log(qq(["9.4", "4.2"]));


//task11
// function qq(arr,a){
//     return arr.at(a)
// }
// console.log(qq([1, 2, 3, 4, 5, 6], 5/2));


//task12
// function qq(arr,a){
//     return arr.includes(a)
// }
// console.log(qq([1,2,3,4,5],8));


//task13
// function qq(arr){
//     return arr.reduce((a,b)=>{
//         return a+b
//     },0)
// }
// console.log(qq([1,2,3,4,5]));


//task14
// function qq(arr){
//     return arr.map((elem)=>elem=elem.toString())
// }
// console.log(qq([1, 2, "a", "b"]));


//task15
// function qq(a,b,arr){
//     return arr.filter((elem)=>elem>a && elem<b)
// }
// console.log(qq(3, 8, [1, 5, 95, 0, 4, 7]));


//task16
// function qq(arr){
//     return arr.map((elem)=>typeof elem)
// }
// console.log(qq([1, 2, "null", []]));


///task17
// function qq(arr){
//     return arr.map((elem)=>elem.length)
// }
// console.log(qq((["hello", "world"])));


//task18
// function qq(arr){
//     let q=Math.sqrt(arr[0])
//     return Math.pow(q,3)==arr[1]
// }
// console.log(qq([4,8]));


//task19
// function qq(str){
//     cnt=0
//     for(let i of str){
//         cnt++
//     }
//     return cnt
// }
// console.log(qq("Hello World"));


//task20
// function qq(str){
//     return str.split("/").at(-1)
// }
// console.log(qq("C:/Projects/pil_tests/ascii/edabit.txt"));


//task21
// function qq(a){
//     let qwq=[]
//     for(let i=2;i<=8;i*=2){
//         qwq.push(a/i)
//     }
//     return qwq
// }
// console.log(qq(6));


//task22
// function qq(arr){
//     return arr.map((elem)=>elem*-1)
// }
// console.log(qq([1,2,3,4]));


//task23
// function qq(arr){
//     return arr.map((elem)=>elem*2)
// }
// console.log(qq([1,2,3,4]));


//task24
// function qq(arr){
//     return arr.reduce((a,b)=>{return a+b},0)
// }
// console.log(qq([1,2,3,4,5,6,7,8,9]));


//task25
// function qq(a,arr){
//     for(let i of arr){
//         if(i.includes(a)){
//             return false
//         }
//     }
//     return true
// }
// console.log(qq("r", ["rock", "paper", "scissors"]));


//task26
// function qq(arr){
//     let qwq=[]
//     qwq.push(arr.at(-1))
//     for(let i=0;i<arr.length-1;i++){
//         qwq.push(arr[i])
//     }
//     return qwq
// }
// console.log(qq([1, 2, 3, 4, 5]) );


//task27
// function qq(arr){
//     let qwq=arr.filter((elem)=>elem>5)
//     return qwq.reduce((a,b)=>{return a+b},0)
// }
// console.log(qq([1, 5, 20, 30, 4, 9, 18]));


//task28
// function qq(str){
//     return str.split("").map((elem)=>elem=elem+" ").toString().replaceAll(",","")
// }
// console.log(qq("spa ce"));


//task29
// function qq(arr){
//     return arr.filter((elem)=>typeof elem=="number")
// }
// console.log(qq([1, 2, 3, "a", "b", 4]))


//task30
// function qq(arr){
//     let sum=arr.reduce((a,b)=>{return a+b},0)
//     return sum%2==0 ? "even" : "odd"
// }
// console.log(qq([0, 1, 5]));


//task31
// function qq(a,b){
//     let q=[]
//     for(let i=a+1;i<b;i++){
//         q.push(i)
//     }
//     return q
// }
// console.log(qq(2,7));


//task32
// function qq(arr){
//     return arr.filter((elem)=>elem!="cola" && elem!="fanta")
// }
// console.log(qq(["fanta", "cola", "water"]));


//task33
// function qq(arr){
//     return arr.map((elem,ind)=>elem=elem+ind)
// }
// console.log(qq([0, 0, 0, 0, 0]));


//task34
// function qq(str){
//     return str.split("").map((elem)=>elem==1 ? true:false)
// }
// console.log(qq("1011001"));


//task35
// function qq(arr){
//     let qwq=[[],[]]
//     for(let i of arr){
//         if(+i%2==0){
//             qwq[0].push(+i)
//         }
//         else{
//             qwq[1].push(+i)
//         }
//     }
//     return qwq
// }
// console.log(qq(["7","4","8"]));


//task36
// function qq(a,arr){
//     return arr.sort().reverse().slice(0,a).reverse()
// }
// console.log(qq(2, [4, 3, 2, 1]));


//task37
// function qq(a){
//     let qwq=[]
//     for(let i=1;i<=a;i++){
//         if(a%i==0){
//             qwq.push(i)
//         }
//     }
//     return qwq
// }
// console.log(qq(20));


//task38
// function qq(arr){
//     arr=arr.sort().slice(2,arr.length)
//     return arr.reduce((a,b)=>{return a+b},0)/arr.length
// }
// console.log(qq([4, 5, 7, 100]));


//task39
// function qq(arr){
//     return arr.reduce((a,b)=>{return a+b},0)<100 ? true:false
// }
// console.log(qq([2,49]));


//task40
// function qq(arr){
//     return arr.toString().at(-1)
// }
// console.log(qq(("The quick brown fox jumped over the lazy dog")));


//task41
// function qq(arr){
//     return arr.find((elem)=>elem%2!=0)
// }
// console.log(qq([2, 3, 4]));


// let q={
//     name:"Umar"
// }
// function qq(a,b){
//     return this.name+" "+a+b

// }
// console.log(qq.apply(q,["hi","!"]));


//task42

if(true){
    console.log(x);
    let x=3
}