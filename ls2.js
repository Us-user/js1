//task1
// function qq(a,b){
//     let q=a.at(-1)
//     return a.slice(0,a.toString().length-1)+q.repeat(b)
// }
// console.log(qq("Hello",5));


//task2
// function qq(a){
//     return a.at(0)+a.at(-1)
// }
// console.log(qq("banana"));


//task3
// function qq(a){
//     if(typeof a==="number"){
//         return a.toString()
//     }
//     else{
//         return a*1
//     }
// }
// console.log(typeof qq(12));

//task4
// function qq(a){
//     let q=a.at(-1)
//     return q.includes("s")
// }
// console.log(qq("ndknsdna"));


//task5
// function qq(a){
//     return a.toUpperCase()
// }
// console.log(qq("jnsdfvsn"));



//PART2

//task1
// function qq(a){
//     let q=a.split(",")
//     sum=1
//     for(let i=0;i<a.length-1;i++){
//         sum*= q[i]
//     }
//     return sum
// }
// console.log(qq("21,2"));


//task2
// function qq(a){
//     q=a.split('-')
//     return q.length
// }
// console.log(qq("qwwq-qwq-qwq"));


//task3
// function qq(a,b){
//     return b.concat(" ",a)
// }
// console.log(qq("Umar","Sharipov"));


//task4
// function qq(a){
//     return a.includes(" ")
// }
// console.log(qq("mdmds "));


//task5
// let i=(a)=>{
//     let b="hello"
//     return b.concat(" ",a)
// }
// console.log(i("world"));


//task6
// function qq(a){
//     if(a.length%2==0){
//         return a.at(a.length/2-1)+ a.at(a.length/2)
//     }
//     else{
//         return a.at(Math.floor(a.length/2))
//     }
// }
// console.log(qq("qwejrty"));


//task7 --
// function qq(a){
//     for(let i of a.split("")){
//         let q=i
//         return
//     }

// }
// console.log(qq("qweer"));


//task8
// function qq(a){
//     b=a.split(" ")
//     sum=0
//     for(let i in b){
//         sum++
//         if(b[i]=="Nemo"){
//             console.log(`I found Nemo at ${sum}!`);
//         }
//     }
// }
// qq("hello Nemo how are you!")


//task9
// function qq(a){
//     w=a.split("")
//     let q=""
//     for(let i=w.length-1;i>=0;i--){
//         q+=w[i]
//     }
//     return q
// }
// console.log(qq("hello my name is ramU"));


// //task10 --
// function qq(a){
//     q=a.split(/[aeyuio]/i)
//     let w=""
//     for(let i of q){
        
//     }
//     return w

// }
// console.log(qq("Carpe Diem"));


//task11
// function qq(a){
//     let q=""
//     for(let i=1;i<=a;i++){
//         q+=i
//     }
//     w=q.split("")
//     z=""
//     for(let e=0;e<w.length;e++){
//         z+=w[e]
//         if(w.length-1>e){
//             z+='-'
//         }
//     }
//     return z
// }
// console.log(qq(18));


//task12
// function qq(a){
//     e=a.split("")
//     q=""
//     for(let i=e.length-1;i>=0;i--){
//         q+=e[i]
//     }
//     return q==a
// }
// console.log(qq("mome"));


//task13
// function qq(a,b){
//     sum=0
//     q=b.split("")
//     for(let i of b){
//         if(i==a){
//             sum++
//         }
//     }
//     return sum
// }
// console.log(qq("a","fcuasinuaaasia"));


//task14--


//task15
// function qq(a){
//     let q=0
//     for(let i=a;i>0;i=Math.floor(i/10)){
//         q=q*10+i%10
//     }
//     let w=""
//     w+=q
//     w+=a
//     return +w
// }
// console.log(qq(123));

