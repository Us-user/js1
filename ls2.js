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


//task7
// function qq(a){
//     e=a.split("")
//     for(let i=0;i<e.length;i++){
//         if(e[i]==e[i+1])
//             return true
        
//     }
//     return false
// }
// console.log(qq("qwer"));


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


//task9--
// function qq(a){
    // w=a.split("")
    // let q=""
    // for(let i=w.length-1;i>=0;i--){
    //     q+=w[i]
    // }
    // return q

//     let l=""
//     for(let i of a.split(" ")){
//         if(i.length>=5){
//             let rev=""
//             for(let j=i.length-1;j>=0;j--){
//                 rev+=i[j]
//             }
//             l+=rev+" "
//         }
//         else{
//             l+=i+" "
//         }
//     }
//     return l
// }
// console.log(qq("hi my name is ramuubA"));


// //task10
// function qq(a){
    // q=a.split("")
    // let w=""
    // for(let i=0;i<q.length;i++){
    //     w+=q[i]
    //     if(q[i+1]=='e' || q[i+1]=='u' || q[i+1]=='i' || q[i+1]=='o' || q[i+1]=='a'){
    //         w+='-'
    //     }
    //     if(q[i]=='e' || q[i]=='u' || q[i]=='i' || q[i]=='o' || q[i]=='a'){
    //         w+='-'
    //     }
    // }
    // r=w.split("")
    // let p=""
    // for(let i=0;i<=r.length-1;i++){
    //     if(r[i]==r[i+1]){
    //         continue
    //     }
    //     else{
    //         p+=r[i]
    //     }
    // }
    // return p


//     return a.replaceAll("a","-a-").replaceAll("A","-A-").replaceAll("e","-e-").replaceAll("E","-E-").replaceAll("u","-u-").replaceAll("U","-U-").replaceAll("i","-i-").replaceAll("I","-I-").replaceAll("o","-o-").replaceAll("O","-O-")

// }
// console.log(qq("Fight for your right to party!"));


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


// task14
// function qq(a){
//     q=a.split("")
//     let up=""
//     for(let i=0;i<=q.length-1;i++){
//         let w=q[i].toUpperCase()
//         if(q[i]==w){
//             up+=q[i]
//         }
//     }
//     for(let i=0;i<=q.length-1;i++){
//         let w=q[i].toLowerCase()
//         if(q[i]==w){
//             up+=q[i]
//         }
//     }
//     return up

// }
// console.log(qq("UmaR"));



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







//task1
// function qq(a,b){
//     if(b==0){
//         return a
//     }
//     b--
//     return 2*qq(a,b)
// }
// console.log(qq(10,3));


//task2
// function qq(a){
//     let q=+ "a.toString()"
//     let sum=""
//     sum+='"'+a+'"'
//     sum+=" is string and "
//     return (b)=>{
//         let js= +b
//         sum+= js
//         sum+=" is number"
        
//         return sum
//     }
// }
// console.log(qq(12)("15"));


//task3
// function qq(a){
//     return (b)=>{
//         return a+b
//     }
// }
// console.log(qq(10)(12));
// console.log(qq(10)(14));
// console.log(qq(10)(16));


//task4
// function qq(a){
//     if(a==0 || a==1 || a==2){
//         return 1
//     }
//     return qq(a-1)+qq(a-2)
// }
// console.log(qq(6));


//task5
// function qq(a){
//     return (b)=>{
//         return a*b
//     }
// }
// console.log(qq(5)(10));
// console.log(qq(5)(12));
// console.log(qq(5)(13));
// console.log(qq(5)(14));


//task6
// function qq(a,b, small=a>b ? b:a){
//     if(a%small==0 && b%small==0){
//         return small
//     }
//     return qq(a,b,small-1)
// }
// console.log(qq(48,18));



//task7
// function qq(){
//     return (a)=>{
//         return typeof a=="number" ? a*10: 10
//     }
// }
// console.log(qq()(99));


//task8
// function qq(a,b,cnt=0){
//     if(cnt==b){
//         return 0
//     }
//     cnt++
//     return a+qq(a,b,cnt)
// }
// console.log(qq("hi",3));


//task9
// function qq(q1,q2){
//     return (w1,w2)=>{
//         return (e1,e2)=>{
//             return q1*w1*e1+q2*w2*e2
//         }
//     }
// }
// console.log(qq(10,2)(5,0)(2,3));


// //task10
// function qq(a){
//     if(a.length==0){
//         return ""
//     }
//     return a.at(-1)+qq(a.slice(0,-1))
// }
// console.log(qq("Hello"));



// function qq(a,rew=0){
//     if(a==0){
//         return rew
//     }
//     return qq(Math.floor(a/10),rew*10+a%10)
// }
// console.log(qq(1234));
