//task1
// function qq(obj){
//     return cnt=Object.values(obj).length

// }
// console.log(qq({ a: "idiot", b: "idiot", c: "idiot" }));


//task2
// let qw={
//     1:"circle",
//     2:"semi-circle",
//     3:"triangle",
//     4:"square",
//     5:"pentagon",
//     6:"hexagon",
//     7:"heptagon",
//     8:"octagon",
//     9:"nonagon",
//     10:"decagon"
// }
// function qq(a){
//     return qw[a]
// }
// console.log(qq(3));


//task3
// function qq(a,obj){
//     if(a>obj.min && a<obj.max){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(qq(9, { min: 0, max: 5 }));


//task4
// function qq(obj){
//     let qw=""
//     for(let i in obj){
//         qw+=obj[i]+" "
//     }
//     qw+=obj[2]
//     return qw
// }
// console.log(qq({ 1: "Mommy", 2: "please", 3: "help" }));


//task5
// function qq(obj,a){
//     for(let i in obj){
//         if(i==a){
//             return true
//         }
//     }
//     return false
// }
// console.log(qq({ pot: 1, tot: 2, nmot: 3 }, "not"));


//task6
// function qq(obj){
//     let qw=Object.values(obj)
//     return Math.min(...qw)
// }
// console.log(qq({cyan: 23,magenta: 12,yellow: 10}));


//task7
// function qq(obj){
//     let qw=Object.entries(obj).length
//     return qw==0 ? true:false
// }
// console.log(qq({}));


//task8
// function qq(obj,a){
//     let cnt=0
//     for(let i in obj){
//         cnt+=obj[i]
//     }
//     return cnt-a
// }
// console.log(qq({"baseball bat": 20 }, 5));


//task10
// function qq(obj,a,b){
//     obj[a]=b
//     return obj
// }
// console.log(qq({ piano: 500, stereo: 300 }, "Caligula", 440));


//task9
function qq(arr){
    cnt=0
    for(let i of arr){
        cnt+= Object.entries(i)[1][1]
    }
    return cnt
}
console.log(qq([
{ tile: "N", score: 1 }, { tile: "K", score: 5 },
{ tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 },
{ tile: "A", score: 1 }, { tile: "E", score: 1 }]));
