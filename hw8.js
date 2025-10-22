//task1 -
// function qq(...arr){
//     return arr.join(",")
// }
// console.log(qq([1,2],[3,4],[5,3,2,4]));


//task2 
// function qq(arr,a){
    // for (let i=0;i<arr.length;i++){
    //     if(arr[i]==a){
    //         return i
    //     }
    // }

    // return arr.forEach((elem,ind)=>{
    //     if(elem==a){
    //         return ind
    //     }
    // })
// }
// console.log(qq([1,2,3,4,5,6],5));


//task3
// function qq(arr){
//     let qw=[]
//     arr.forEach((elem,ind,array)=>{
//         if(array.indexOf(elem)==ind){
//             qw.push(elem)
//         }
//     })
//     return qw
// }
// console.log(qq([1,2,3,4,3,2,4,5]));


//task4
// function qq(arr){
//     return arr.filter((elem)=>{
//         return elem>0
//     })
// }
// console.log(qq([3,5,2,-4,-32,-5,32,42]));


//task5
// function qq(arr){
//     let q=arr.length
//     arr.reduce((a,b)=>{
//         return c=a+b
//     },0)
//     return c/q
// }
// console.log(qq([1,2,3,4,5,6,7,8,9]));


//task6
// function qq(arr){
//     let arr2=arr.reverse()
//     return arr2==arr
// }
// console.log(qq([1,2,3,2,1]));


//task7
// function qq(a,b,arr){
//     return arr.filter((elem)=>{
//         return elem>a && elem<b
//     })
// }
// console.log(qq(3,13,[2,4,1,54,23,53,1,54,6,11,12,43,134]));


//task8
// function qq(arr){
//     return arr.reduce((a,b)=>{
//         return a+b
//     },0)
// }
// console.log(qq([2,5,2,4,1]));


//task9
// function qq(arr){
//     let qq=[]
//     arr.forEach((elem)=>{
//         qq.push(typeof elem)
//     })
//     return qq
// }
// console.log(qq([true,32,"jcn",false,"kwmd",42,34.43]));


//task10
// function qq(arr){
//     let qw=[]
//     arr.forEach((elem)=>{
//         qw.push(elem.length)
//     })
//     return qw
// }
// console.log(qq(["Halloween", "Thanksgiving", "Christmas"]));


//task11 -
function qq(arr){
    for(let i=0;i<1;i++){
        return Math.sqrt(arr[i])==Math.pow(Math.sqrt(arr[i]),3)
    }
}
console.log(qq([4,8]));


//task12
// function qq(arr){
//     let qw=[]
//     arr.forEach((elem)=>{
//         qw.push(elem*-1)
//     })
//     return qw

// }
// console.log(qq([1,-2,3,4,5]));


//task13
// function qq(arr){
//     return arr.map((elem)=>{
//         return elem*2
//     })
// }
// console.log(qq([1,2,3,4,5,6,7]));


//task14
// function qq(arr){
//     if(arr.length>5){
//         return arr.reduce((a,b)=>{
//             return a+b
//         },0)
//     }
//     else{
//         return 0
//     }
// }
// console.log(qq([1,2,3,4,5,6,7,8,9]));


//task15
// function qq(arr){
//     return arr.filter((elem)=>{
//         return typeof elem=="number"
//     })
// }
// console.log(qq(["A", 0, "Edabit", 1729, "Python", "1729"]));
