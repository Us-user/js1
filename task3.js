// task1
// function qq(arr){
//     return arr.map((elem)=>{
//         return elem**2
//     })
// }
// console.log(qq([1,2,3]));


//task2
// function qq(arr){
//     return arr.toSorted((a,b)=>{
//         return b-a
//     })
// }
// console.log(qq([4,1,6,8,4,2,4,7,6,9]));


//task3
// function qq(arr){
//     return Math.min(...arr)
// }
// console.log(qq([1,5,7,3,1,-1]));


//task4
// function qq(arr){
//     let q=[]
//     for(let i of arr){
//         let w=i.length
//         q.push(w)
//     }
//     let qw=Math.min(...q)
//     for(let i of arr){
//         if(i.length==qw){
//             return i
//         }
//     }
// }
// console.log(qq(["femkfnvkjdnf","kwmekd","kfms"]));


//task5
// function qq(arr){
//     let a=arr[Math.floor(arr.length/2)]
//     return arr.find((elem)=>{
//         return elem==a
//     })
// }
// console.log(qq([1,2,3,4,5]));


//task6
// function qq(arr){
//     return arr.filter((elem)=>{
//         return elem<0
//     })
// }
// console.log(qq([1,2,-4,-3,2]));


//task7
// function qq(arr){
//     let q=Math.max(...arr)
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==q){
//             return i
//         }
//     }
// }
// console.log(qq([1,2,3,4,5]));


//task8
// function qq(arr){
//     return arr.reverse()
// }
// console.log(qq([1,2,3,4,5]));


//task9
// function qq(arr){
//     return arr.filter((elem)=>{
//         return elem%2==0
//     }).reduce((a,b)=>{
//         return a +b*b
//     },0)
// }
// console.log(qq([1,2,3,4,5]));


//task10
// function qq(arr){
//     return Math.max(...arr)-Math.min(...arr)
// }
// console.log(qq([1,2,3,4,5]));











//task1
// let person={
//     name: "John",
//     age:30,
//     location:"Dushanbe",
//     about: ()=>{
//         return `${person.name} is ${person.age} years old and lives in ${person.location}`
//     }
// }
// console.log(person.about());

// function qw(obj){
//     return `${person.name} is ${person.age} years old and lives in ${person.location}`
// }
// console.log(qw({ name: "John", age: 30, location: "New York" }));



//task2
// function qq(obj){
//     let {upvotes:a1}=obj
//     let {downvotes:a2}=obj
//     return a1-a2
// }
// console.log(qq({upvotes: 13, downvotes: 56}));


//task3
// function qq(obj){
//     let cnt=0
//     for(let i of obj){
//         cnt+= i.price
//     }
//     return cnt
// }
// console.log(qq([{ name: "Shoes", price: 50 }, { name: "Shirt", price: 20 },{ name: "Hat", price: 15 }]));


//task4
// function qq(obj){
//     let {birthYear:age}=obj
//     return 2024-age
// }
// console.log(qq({ firstName: "John", lastName: "Doe", birthYear: 2000 }));



//task5
// function qq(obj){
//     cnt=0
//     for(let i=0;i<5;i++){
//         cnt+=obj.ratings[i]
//     }
//     return `${obj.title} by ${obj.author} has an average rating of ${cnt/5}` 
// }
// console.log(qq({title: "The Great Gatsby", author: "F. Scott Fitzgerald",ratings: [5, 4, 5, 3, 4] }));



//PART2
//task1
// function qq(obj){
//     cnt=0
//     for(let i in obj){
//         cnt++
//     }
//     return cnt
// }
// console.log(qq({name: "John", age: 30}));


//task2 
// function qq(obj,a){
//     return obj[a]
// }
// console.log(qq({name: "Alice", age: 25},"age"));


//task3 
// function qq(obj){
//     let key=Object.keys(obj).sort()
//     let obj2={}
//     for(let i of key){
//         obj2[i]=obj[i]
//     }
//     return obj2
// }
// console.log(qq({b: 2, a: 1, c: 3}));


//task4
// function qq(obj,a){
//     delete obj[a]
//     return obj
// }
// console.log(qq({a: 1, b: 2, c: 3},"b"));


//task5
// function obj(arr){
//     let obj2={}
//     for(let i in arr){
//         obj2[i.toUpperCase()]=arr[i]
//     }
//     return obj2
// }
// console.log(obj({name: "Alice", age: 25}));



//PART3
//task1
// function qq(obj){
//     let qw=[]
//     for(let i in obj){
//         qw.push(obj[i])
//     }
//     return qw
// }
// console.log(qq({a: 1, b: 2}));


//task2
// function qq(obj1,obj2){
//     let arr1=Object.entries(obj1)
//     let arr2=Object.entries(obj2)
//     for(let i=0;i<arr1.length;i++){
//         if(arr1[i][0]!==arr2[i][0] || arr1[i][1]!==arr2[i][1])
//             return false
//     }
//     return true
// }
// console.log(qq({a:1, b:2}, {a:1, b:"2"}));


//task3 
// function qq(a){
//     let res=a.replaceAll(" ","").replaceAll(/[^a-zA-Z0-9]/g, "")
//     let b=0,c=0
//     for(let i of res){
//         if(isNaN(i)==false){
//             c++
//         }
//         else{
//             b++
//         }
//     }
//     let qw=[["letters",`${b}`],["numbers",`${c}`]]
//     return Object.fromEntries(qw)
// }
// console.log(qq("Hello, World"));


//task4
function qq(obj){
    let obj2={}
    for(let i in obj){
        obj2[obj[i]]=i
    }
    return obj2
}
console.log(qq({a:1, b:2}));


//task5
// function qq(arr){
//     let q=arr[0],w=arr[1]
//     let {age:age1}=q
//     let {age:age2}=w
//     return age1>age2 ? q:w
// }
// console.log(qq([{name:"John", age:52},{name: "Johnson", age: 39}]));


//task6
// function qq(obj){
//     let qw=Object.values(obj)
//     return qw.includes("undifned")
// }
// console.log(qq({name: "undifne", age: 11}));


//task9
// function qq(person){
//     let {year:qw}=person
//     person.age=2024-qw
//     person.start=1992+7
//     person.end=1992+7+11
//     return person
// }
// console.log(qq({name: "John", year: 1992}));


//task10
// function qq(obj){
//     let qq=Object.values(obj)
//     let cnt=0
//     for(let i of qq){
//         if(typeof i=="number"){
//             cnt+=i
//         }
//     }
//     return cnt
// }
// console.log(qq({a: "dsadsa", b: 123, c: 345,qww:32}));


//task11
// function qq(obj){
//     let cnt=0
//     for(let i in obj){
//         cnt++
//     }
//     return cnt
// }
// console.log(qq({a: "dsadsa", b: 123,}));


//task12
//also11


//task13
// function qq(obj){
//     let qq=Object.values(obj)
//     let qw=""
//     for(let i of qq){
//         if(isNaN(i)==true){
//             qw+=i
//         }
//     }
//     return qw
// }
// console.log(qq({a: "dsadsa", b: 123, c: "abc"}));


//task14
