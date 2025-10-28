//task1
// function multipleOfOdd(...arr){
//     let sum=0,qw=1,as=[]
//     for(let i=0;i<arr.length;i++){
//         as=arr[i]
//         for(let r of as){
//             if(r%2!=0){
//                 qw*=r
//             }
//         }
//         sum+=qw
//         qw=1
//     }
//     return sum
// }
// console.log(multipleOfOdd([1, 2, 3, 4, 5],[1, 2, 3, 4, 5]));


//task2
// function isUnique(arr){
//     let qw=arr.sort()
//     for(let i=0;i<qw.length;i++){
//         if(qw[i]==qw[i+1]){
//             return false
//         }
//     }
//     return true
// }
// console.log(isUnique([5, 1, 3, 4, 6]));


//task3
// function sumOfEven(obj){
//     let sum=0
//     let qw=Object.values(obj)
//     for(let i of qw){
//         if(i%2==0){
//             sum+=i
//         }
//     }
//     return sum
// }
// console.log(sumOfEven({ a: 1, b: 5, c: 7, d: 3 }));


//task4
// function longest(obj){
//     let qw=Object.values(obj)
//     let qq=0
//     for(let i of qw){
//         if(i.length>qq){
//             qq=i.length
//         }
//     }
//     for(let i of qw){
//         if(i.length==qq){
//             return i
//         }
//     }
// }
// console.log(longest({ name: 'Mr.Smith', city: 'Korea', profession:"none" }));


//task5
// function convert(obj){
//     let rev={}
//     for(let i in obj){
//         rev[obj[i]]=i
//     }
//     return rev
// }
// console.log(convert({ a: 'apple', b: 'banana', c: 'cherry' }));


//task6
// function average(obj){
//     let ave={}
//     let max=0,min=101
//     for(let i of obj){
//         if(Object.entries(i)[1][1]>max){
//             max=Object.entries(i)[1][1]
//         }
//         if(Object.entries(i)[1][1]<min){
//             min=Object.entries(i)[1][1]
//         }
//     }
//     ave.highest=max
//     ave.lowest=min
//     ave.average=(max+min)/2
//     return ave
// }
// console.log(average([{ name: 'Alex', score: 80 }, { name: 'Emily', score: 95 },{ name: 'Charlie', score: 88 }]));


//task7
// function subjectAverage(arr){
//     let all={}
//     let mat=0,eng=0,his=0
//     for(let i of arr){
//         let q1=Object.entries(i)[1][1]
//         let ave=Object.values(q1)
//         for(let i=0;i<ave.length;i++){
//             i==0 ? mat+=ave[i]: i==1 ? eng+=ave[i]:his+=ave[i]
//         }
//     }
//     let q1=Object.entries(arr[0])[1][1]
//     let q11=Object.values(q1)
//     all.math=mat/arr.length
//     all.english=eng/arr.length
//     all.history=his/arr.length
//     return all
// }
// console.log(subjectAverage([{ name: 'Alex', scores: { math: 80, english: 75, history:90 } }, {name:'Emily', scores: { math: 95, english: 88,history: 92 } }, {name: 'Charlie', scores: {math: 88, english: 92, history: 85 }}]));


//task8
// function combine(obj1,obj2){
//     let com={...obj1}
//     let qw=Object.keys(obj2)
//     let qw2=Object.keys(obj1)
//     for(let i in obj2){
//         if(qw.includes(i)){
//             com[i]=obj2[i]
//         }
//         if(qw2.includes(i)==false){
//             com[i]=obj2[i]
//         }
//     }
//     return com
// }
// console.log(combine({ a: 1, b: 2, c: 3 },{ b: 4, d: 5, e: 6 }));



//task9
// function capMe(arr){
//     let qw=[]
//     for(let i of arr){
//         let qq=i.at(0).toUpperCase()+i.slice(1).toLowerCase()
//         qw.push(qq)
//     }
//     return qw
// }
// console.log(capMe([`maNis`,`senaida`,`letty`]));


//task10
// function squarePatch(a){
//     let qq=[]
//     for(let i=0;i<a;i++){
//         let qw=[]
//         for(let i=0;i<a;i++){
//             qw.push(a)
//         }
//         qq.push(qw)
//         qw=[]
//     }
//     return qq
// }
// console.log(squarePatch(2));

