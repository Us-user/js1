//task1
// let dawe = {
//     0: "Sunday",
//     1: "Monday",
//     2: "Tuesday",
//     3: "Wednesday",
//     4: "Thursday",
//     5: "Friday",
//     6: "Saturday"
// }
// function qq(dat) {
//     let a = new Date(dat)
//     let q = a.getDay()
//     return dawe[q]
// }
// console.log(qq("2024-08-05"));


//task2
// function qq(q1,q2){
//     let qq1=q1.getTime()
//     let qq2=q2.getTime()
//     return (qq2-qq1)/1000/60/60/24
// }
// console.log(qq(new Date("2024-08-05"), new Date("2024-08-10")));


//task3
// function qq(q1){
//     let qq1=q1.getTime()
//     return qq1-new Date(0)
// }
// console.log(qq(new Date("2023-01-01")));


//task4
// function qq(q1){
//     let a=Object.fromEntries(q1)
//     return Object.keys(a)
// }
// console.log(qq(new Map([["a", 1], ["b", 2], ["c", 3]])));


//task5
// function qq(qw){
//     a=Object.fromEntries(qw)
//     return Object.values(a)
// }
// console.log(qq(new Map([["a", 1], ["b", 2], ["c", 3]])));



//part2
//task1
// function qq(obj,arr){
//     for(let i of arr){
//         obj.add(i)
//     }
//     return obj
// }
// console.log(qq(new Set([1, 2, 3]), [4, 5, 6]));


//task2
// function qq(q1,q2){
//     let set=new Set()
//     q1.forEach(element => {
//         if(q2.has(element)){
//             set.add(element)
//         }
//     });
//     return set
// }
// console.log(qq(new Set([1, 2, 3]), new Set([2, 3, 4])));


//task3
// function qq(obj,a){
//     obj.delete(a)
//     return obj
// }
// console.log(qq(new Set([1, 2, 3]), 2));




//task5
// function qq(q1){
//let qw=q1.getFullYear()
//return qw%4==0 ? true:false
// }
// console.log(qq(new Date("2023-08-05")));


//task4
// function qq(dat){
//     let nd=dat.getTime()
//     let ff=dat.getFullYear()+1
//     let nd1=new Date(ff,0,2,0,0,0)
//     return Math.floor((nd1.getTime()-nd)/1000/60/60/24)
// }
// console.log(qq(new Date("2024-08-05")));


//htask
// function qq(...arr){
//     return arr.flat(Infinity).reduce((a,b)=>{
//         return a+b.replaceAll(/[a-zA-Z]/g," ").split(" ").reduce((a,b)=>a+ +b,0)
//     },0)
// }
// console.log(qq([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]]) );


//task1
// function qq(arr) {
//     let qwq=new Set([...arr])
//     let qw=[...qwq]
//     let q = qw.reduce((a, b) => {
//         return a + b
//     }, 0)
//     return 45-q
// }
// console.log(qq([1, 2, 7, 4, 6, 8, 9, 5,4,5,4,6,7,4,4]));


//task2
// function qq(q1,q2){
//     let sum=0
//     if(q1.at(-2)=="A" && q2.at(-2)=="P"){
//         sum+=(12-q1.at(0))
//         sum+=+q2.at(0)
//         return sum
//     }
//     if(q1.at(-2)=="A" && q2.at(-2)=="A" || q1.at(-2)=="P" && q2.at(-2)=="P"){
//         return q2.at(0)-q1.at(0)
//     }
// }
// console.log(qq("3:00 PM","4:00 PM"));


//task3
// function qq(str){
//     let qw=str.split("-")
//     let sum=0
//     for(let i=qw[0];i<=qw[1];i++){
//         if(i%4==0){
//             sum++
//         }
//     }
//     return sum
// }
// console.log(qq("2020-2024"));


//task4
// function qq(arr1,arr2){
//     let qwq=[]
//     for(let i of arr1){
//         if(arr2.includes(i)){
//             qwq.push(i)
//         }
//     }
//     return qwq
// }
// console.log(qq([1,2,3,4,5,8],[4,5,6,7,8,1]));


//task5
// function qq(a){
//     let sum=1,qw=5
//     for(let i=1;i<a;i++){
//         sum+=qw
//         qw+=5
//     }
//     return sum
// }
// console.log(qq(8));


//task6
// function qq(a){
//     let str=""
//     for(let i=0;i<a.length;i++){
//         if(isNaN(a[i+1])==true){
//             for(let e=0;e<a[i];e++){
//                 str+=a[i+1]
//             }
//         }
//     }
//     return str
// }
// console.log(qq("33M12k6l4oe2m"));

//corect version
// function qq(a){ 
//     let n=0
//     let str=""
//     for(let i=0;i<a.length;i++){
//         if(isNaN(a[i])==false && isNaN(a[i+1])==false){
//             continue
//         }
//         if(isNaN(a[i])==false){
//             n=a[i]
//         }
//         for(let e=0;e<n;e++){
//             str+=a[i]
//         }
//     }
//     return str.replaceAll(/[0-9]/g,"")
// }
// console.log(qq("12k3kl5mk3o7p"));



//task1
// function qq(obj,a){
//     let q=Object.keys(obj)
//     return q.includes(a)
// }
// console.log(qq({a: 1, b: 2},"b"));


//task2
// function qq(obj){
//     let newobj={}
//     let qw=Object.keys(obj)
//     for(let i of qw){
//         newobj[obj[i]]=i
//     }
//     return newobj
// }
// console.log(qq({a: 1, b: 2}));


//task3
// function qq(obj,arr){
//     let qwq={}
//     for(let i of arr){
//         qwq[i]=obj[i]
//     }
//     return qwq
// }
// console.log(qq({name: "Alice", age: 25, city: "New York"}, ["name", "city"]));


//task4
// function qq(obj){
//     let qwq={}
//     for(let i in obj){
//         qwq[i]=obj[i]*2
//     }
//     return qwq
// }
// console.log(qq({a: 1, b: 2}));


//task5
// function qq(obj){
//     for(let i in obj){
//         if(obj[i]==0 || obj[i]==false || obj[i]=="" || obj[i]==undefined){
//             delete obj[i]
//         }
//     }
//     return obj
// }
// console.log(qq({a: 1, b: 0, c: false, d: "hello"}));


//task6
// function qq(obj,func){
//     return Object.fromEntries(Object.entries(obj).map((elem)=>[elem[0],func(elem[1])]))
// }
// console.log(qq({a: 1, b: 2}, (x) => x * 10));


//task7
// function qq(obj){
//     let qwq={}
//     for(let i in obj){
//         if(typeof obj[i]=="string"){
//             qwq[i]=obj[i]
//         }
//     }
//     return qwq
// }
// console.log(qq({a: 1, b: "hello", c: true, d: "world"}));


//task8
// function qq(obj,a){
//     let newobj={}
//     for(let i in obj){
//         if(obj[i]>a){
//             newobj[i]=obj[i]
//         }
//     }
//     return newobj
// }
// console.log(qq({a: 1, b: 2, c: 3, d: 4}, 2));


//task9
// function qq(obj){
//     let q=Object.values(obj)
//     let str=""
//     for(let i of q){
//         if(i.length>str.length){
//             str=i
//         }
//     }
//     return str
// }
// console.log(qq({a: "short", b: "longer", c: "longest"}));


//task10
// function qq(obj,a){
//     let qwq=[]
//     for(let i in obj){
//         if(obj[i]==a){
//             qwq.push(i)
//         }
//     }
//     return qwq
// }
// console.log(qq({a: 1, b: 2, c: 1, d: 4}, 1));



//task11
//sdelano


//task12
// function qq(obj){
//     let qw=Object.values(obj)
//     let sum=0
//     for(let i of qw){
//         if(isNaN(i)==false){
//             sum+=i
//         }
//     }
//     return sum
// }
// console.log(qq({key1: 5, key2: 8, key3: "value"}));


//task13
// function qq(obj){
//     let nobj={}
//     for(let i in obj){
//         let qwq=obj[i].toString()
//         nobj[i]=qwq
//     }
//     return nobj
// }
// console.log(qq({a: 1, b: 2, c: 3}));


//task14
// function qq(obj){
//     let q=Object.fromEntries(Object.entries(obj).reverse())
//     return q
// }
// console.log(qq({c: 3, b: 2, a: 1}));


//task15
// function qq(obj){
//     let obj2={}
//     for(let i in obj){
//         obj2[obj[i]]=i
//     }
//     let obj3=Object.fromEntries(Object.entries(obj2).sort())
//     let mobj={}
//     for(let i in obj3){
//         mobj[obj3[i]]=i
//     }
//     return mobj
// }
// console.log(qq({a: 3, b: 1, c: 2}));






//task1
// function qq(obj){
//     for(let i in obj){
//         if(obj[i]%2!=0){
//             delete obj[i]
//         }
//     }
//     return obj
// }
// console.log(qq({a: 1, b: 2, c: 3, d: 4}));


//task2
// function qq(obj){
//     for(let i in obj){
//         if(typeof obj[i]!="object"){
//             delete obj[i]
//         }
//     }
//     return obj
// }
// console.log(qq({a: 1, b: {inner: "object"}, c: 3, d: {another: "object"}}));


//task3
// function qq(obj){
//     for(let i in obj){
//         if(typeof obj[i]!="boolean"){
//             delete obj[i]
//         }
//     }
//     return obj
// }
// console.log(qq({a: true, b: false, c: 3, d: "hello"}));


//task4
// function qq(obj,a,b){
//     obj[a]=b
//     return obj
// }
// console.log(qq({a: 1, b: 2},"c", "jds"));


//task5
// function qq(obj){
//     return Object.fromEntries(Object.entries(obj).map((elem)=>[elem[0].toLowerCase(),elem[1]]))
// }
// console.log(qq({A: 1, B: 2, C: 3}));


//task6
// function qq(obj,a){
//     for(let i in obj){
//         obj[i]=obj[i]*a
//     }
//     return obj
// }
// console.log(qq({a: 1, b: 2, c: 3}, 20));


//task7
// function qq(obj,a){
//     return Object.fromEntries(Object.entries(obj).map((elem)=>[elem[0],elem[1]=elem[1]/a]))
// }
// console.log(qq({a: 4, b: 8, c: 12}, 2));


//task8
// function qq(obj,a){
//     return Object.fromEntries(Object.entries(obj).map((elem)=>[elem[0],elem[1]=elem[1]+a]))
// }
// console.log(qq({a: "hello", b: "world", c: "foo"}, "Umar"));


//task9
// function qq(obj){
//     return Object.fromEntries(Object.entries(obj).map((elem)=>[elem[0],elem[1]<0 ? elem[1]*-1:elem[1]]))
// }
// console.log(qq({a: -1, b: 2, c: -3}));


//task10
// function qq(obj){
//     return Object.fromEntries(Object.entries(obj).map((elem)=>[elem[0],elem[1].split("").reverse().join("")]))
// }
// console.log(qq({a: "hello", b: "world", c: "foo"}));



//task1
// function qq(arr) {
//     let main = []
//     for (let i of arr) {
//         let q = 0
//         let qw = i.split("")
//         for (let i of qw) {
//             if (i == i.toUpperCase()) {
//                 q++
//             }
//         }
//         let q1 = [q, []]
//         if (main.flat().includes(q)) {
//             continue
//         }
//         main.push(q1)
//     }
//     main.sort()
//     for(let i of arr){
//         let m=i.replaceAll(/[a-z]/g,"").length
//         for(let q of main){
//             if(q.includes(m)){
//                 q[1].push(i)
//             }
//         }
//     }
//     return main
// }
// console.log(qq(["haPPy", "mOody", "loop", "SUM","WER"]));


//task rim
// function qq(a){
//     let str=""
//     for(let i=a;i>=50;i-=50){
//         str+="L"
//         a-=50
//     }
//     if(a==9){
//         str+="IX"
//         a-=9
//     }
//     for(let i=a;i>=10;i-=10){
//         str+="X"
//         a-=10
//     }
//     if(a==9){
//         str+="IX"
//         a-=9
//     }
//     for(let i=a;i>=5;i-=5){
//         str+="V"
//         a-=5
//     }
//     if(a==4){
//         str+="IV"
//         a-=4
//     }
//     for(let i=a;i>0;i--){
//         str+="I"
//         a-=1
//     }
//     return str
// }
// console.log(qq(54));


//taskmultiarr
// function qq(arr){
//     let n=[]
//     for(let i of arr){
//         n.push(i.length)
//     }
//     let main=arr.flat(Infinity).sort()
//     let arr2=[]
//     for(let i of n){
//         let qwq=[]
//         for(let a=0;a<i;a++){
//             qwq.push(main[a])
//         }
//         main.splice(0,i)
//         arr2.push(qwq)
//     }
//     return arr2
// }
// console.log(qq([[1,2,3,"a","o","p","x"],[4,5,6,"b","c"],["r","w","q",9,7,0]]));


//taskumar
// function qq(a) {
//     let q = Math.round(a / 2)
//     let arr = []
//     let str = ""
//     for (let i = 1; i <= a; i++) {
//         for (let w = i; w <= q; w++) {
//             str += w
//         }

//         if (a % 2 == 0) {
//             for (let w = q; w > 0; w--) {
//                 str += w
//             }
//         }
//         if (a % 2 != 0) {
//             for (let w = q - 1; w > 0; w--) {
//                 str += w
//             }
//         }
//         arr.push(str)
//         str = ""
//     }
//     return arr
// }
// console.log(qq(5));

