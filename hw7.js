//task1
// function qq(a,b){
//     let q=a.at(-1)
//     return a.slice(0,a.length-1)+q.repeat(b)
// }
// console.log(qq("hello",5));


//task2
// function qq(a){
//     return a.at(0)+a.at(-1)
// }
// console.log(qq("heloo"));


//task3
// function qq(a){
//     if(isNaN(a)){
//         return +a
//     }
//     else{
//         return a.toString()
//     }
// }
// console.log(typeof qq(123));


//task4 +

//task5
// function qq(a){
//     a.split("")
//     let q=""
//     for(let i=a.length-1;i>=0;i--){
//         q+=a[i].toUpperCase()
//     }
//     console.log(q);
// }
// qq("umar")


//task6
// function qq(a,b){
//     let q="Hello",w="Bye"
//     return b==0 ? w.concat(" ",a): q.concat(" ",a)
// }
// console.log(qq("Umar",0));


//task7
// function qq(a){
//     let q=a,w=""
//     a.split("")
//     for(let i=a.length-1;i>=0;i--){
//         w+=a[i]
//     }
//     return w==q
// }
// console.log(qq("ummu"));


//task8
// function qq(a,b){
//     let sum=0
//     b.split("")
//     for(let i in b){
//         if(b[i]==a){
//             sum++
//         }
//     }
//     return sum
// }
// console.log(qq("a","hrll nssasasaasnalnsalaalaasalasaod"));


//task9


//task10
// function qq(a){
//     let q=0
//     for(let i=a;i>0;i=Math.floor(i/10)){
//         q=q*10+i%10
//     }
//     return q.toString().concat(a.toString())
// }
// console.log(qq(123));
