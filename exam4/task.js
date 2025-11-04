//task1
// function qq(arr){
//     arr=arr.split("-")
//     let cnt=0
//     for(let i=arr[0];i<=arr[1];i++){
//         if(i%4==0){
//             cnt++
//         }
//     }
//     return cnt
// }
// console.log(qq("1980-1984"));


//task2
// let obj={
//     0:31,
//     1:28,
//     2:31,
//     3:30,
//     4:31,
//     5:30,
//     6:31,
//     7:31,
//     8:30,
//     9:31,
//     10:30,
//     11:31
// }
// function qq(a){
//     let sum=0
//     let qw=a.getMonth()
//     let qwq=a.getFullYear()
//     for(let i=0;i<qw;i++){
//         sum+=obj[i]
//     }
//     sum+=a.getDate()+1
//     return qwq%4==0 ? 366-sum: 365-sum
// }
// console.log(qq(new Date("2024-12-31")));



function qq(a){
    let q=a.getFullYear()+1
    let qwq=new Date(`${q}`)
    return (qwq.getTime()-a.getTime())/1000/60/60/24
}
console.log(qq(new Date("2024-12-31")));














//task3
// let qwq={
//     1:"Monday",
//     2:"Tuesday",
//     3:"Wednesday",
//     4:"Thursday",
//     5:"Friday",
//     6:"Saturday",
//     7: "Sunday"
// }
// let wqw={
//     0:"January",
//     1:"February",
//     2:"March",
//     3:"April",
//     4:"May",
//     5:"June",
//     6:"July",
//     7:"August",
//     8:"September",
//     9:"October",
//     10:"November",
//     11:"December"
// }
// function qq(a){
//     let q=a.getDate()
//     let w=qwq[a.getDay()]
//     let end= q==1 ? "st":q==2 ? "nd": q==3 ? "rd": "th" 
//     let mon=wqw[a.getMonth()]
//     let ye=a.getFullYear()
    
//     return `It is ${w} ${q}${end}, ${mon} ${ye}`

// }
// console.log(qq(new Date("2024-10-05")));


// task4                    
// function qq(arr){
//     let sum=0
//     for(let i of arr){
//         sum+=i[1]
//     }
//     return sum
// }
// console.log(qq(new Map([["a", 1], ["b", 2], ["c", 12]])));


//task5
// function qq(arr,a){
//     arr.delete(a)
//     return arr
// }
// console.log(qq(new Set([1,2,3]),2));


//task6
// function qq(obj){
//     let q=Object.keys(obj)
//     let qwq={}
//     for(let i of q){
//         if(obj[i]%2==0){
//             qwq[i]=obj[i]
//         }
//     }
//     return qwq
// }
// console.log(qq({a: 1, b: 2, c: 3, d: 4}));


//task7
// function filterTruthy(obj){
//     for(let i in obj){
//         if(obj[i]==0 || obj[i]==false || obj[i]==null || obj[i]==undefined){
//             delete obj[i]
//         }
//     }
//     return obj
// }
// console.log(filterTruthy({a: 1, b: 0, c: false, d: "hello"}));


//task8
// function sortKeysByValues(obj){
//     let q={}
//     for(let i in obj){
//         q[obj[i]]=i
//     }
//     let qwq={}
//     for(let i in q){
//         qwq[q[i]]=i
//     }
//     return qwq
// }
// console.log(sortKeysByValues({a: 3, b: 1, c: 2}));


//task9
// function mostOrdered(arr){
//     let jk={}
//     let max=0
//     let name=""
//     for(let i of arr){
//         let sum=0
//         let q=i.products
//         for(let i of q){
//             let qw=Object.entries(i)[1][1]
//             sum+=qw
//         }
//         if(sum>max){
//             max=sum
//             name=i.name
//         }
//     }
//     jk.name=name
//     jk.totalPrice=max
//     return jk
// }
// console.log(mostOrdered([
// { name: "Ali", products: [{ name: "Phone", price: 1100 }, { name: "Laptop", price: 28500 }] },
// { name: "Bob", products: [{ name: "Tablet", price: 1500 },{ name: "Laptop", price: 2500 }] }
// ])
// );


//task10
// function mostBooks(arr){
//     let obj={}
//     let name=""
//     let q=[]
//     for(let i of arr){
//         q.push(i.author)
//     }
//     q.sort()
//     let dfd=0
//     for(let i of q){
//         let qwq=i
//         let sum=0
//         for(let e of q){
//             if(e==qwq){
//                 sum++
//             }
//         }
//         if(sum>dfd){
//             dfd=sum
//             name=i
//         }
//     }
//     obj.author=name
//     obj.count=dfd
//     return obj
    
// }
// console.log(mostBooks([
// { title: "history", author: "John" },
// { title: "math", author: "Bob" },
// { title: "english", author: "Ali" },
// { title: "literature", author: "John" },
// { title: "russian", author: "Smith" }
// ]));