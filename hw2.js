//task1
// function far(a,b,c){
//     var q=a*3600;
//     var w=b*60;
//     return q>w && q>c ? a: w>q && w>c ? b: c

// }
// console.log(far(1,101,3798));


//task2
// function same(a){
//     var q=a%10,w=Math.floor(a/10)%10,e=Math.floor(a/100)%10;
//     return q==w || q==e ? true: w==q || w==e ? true: e==q || e==w ? true: false
// }
// console.log(same(123));


//task3
// function mor(a){
//     let b=0
//     for(let i=a;i>0;i=Math.floor(i/=10)){
//         b=b*10+i%10;
//     }
//     return a>b
// }
// console.log(mor(41));

//task4
// function sum(a){
//     var q=0
//     for(var i=1;i<=a;i++){
//         q+=i
//     }
//     return q
// }
// console.log(sum(10));

//task5
// function imp(a,b,c){
//     return a==b ? 3: b==c ? 1: 2
// }
// console.log(imp(10,100,10));

//task6
// function sum(a,b){
//     var c=b
//     if(a>b){
//         b=a;
//         a=c;
//     }
//     var q=0
//     for(var i=a;i<=b;i++){
//         if(i%2==0){
//             q+=i;
//         }
//     }
//     return q;
// }
// console.log(sum(-14,-18));


//task7
// function mor(a){
//     var q=-99999
//     for(var i=a;i>0;i=Math.floor(i/=10)){
//         if(i%10>q){
//             q=i%10
//         }
//     }
//     return q
// }
// console.log(mor(897));


//task8
// function mnmx(a){
//     var q=99999,w=-9999999
//     for(var i=a;i>0;i=Math.floor(i/=10)){
//         if(i%10>w){
//             w=i%10
//         }
//         if(i%10<q){
//             q=i%10
//         }
//     }
//     return 'min=' + q + ' ' + 'max=' + w
// }
// console.log(mnmx(5752));

//task9
// function sum(a){
//     var q=0
//     for(var i=1;i<=a;i++){
//         q+=i
//     }
//     return q
// }
// console.log(sum(5));


//task10
// function all(a){
//     var q=1
//     for(var i=a;i>0;i=Math.floor(i/=10)){
//         q*=i%10
//     }
//     return q
// }
// console.log(all(713));


//task11
// function pol(a){
//     var q=0
//     for(var i=a;i>0;i=Math.floor(i/=10)){
//         q=q*10+i%10
//     }
//     return a==q
// }
// console.log(pol(129));


//task12
function qq(a){
    if(a<10){
        return a;
    }
    var q=0
    for(var i=a;i>0;i=Math.floor(i/=10)){
        q+=i%10
    }
}


//task13
// function qq(a){
//     var q=0
//     for(var i=2;i<a;i++){
//         if(a%i==0){
//             q++
//         }
//     }
//     return q==0
// }
// console.log(qq(6));


//task14
// function qq(a){
//     var q=1
//     for(var i=1;i<=a;i++){
//         q*=i
//     }
// }
// console.log(qq(5));
