// function get(arr){
//     let qw=[]
//     arr.forEach((element,index,array)=>{
//         if(array.indexOf(element)==index){
//             qw.push(element)
//         }  
//     })
//     return qw
// }
// console.log(get([1,2,5,1,4,2,6,8,0,9,5,2,3,4,5]));     //крутиться для каждого элемента


// function qq(arr){
//     return arr.map((elem)=>{
//         return elem%2==0 ? "Even": "Odd"
//     })
// }
// console.log(qq([1,2,3,4,5])); заменяет элемент и выводит результат


// function qq(arr){
//     return arr.filter((elem)=>{
//         return elem%2==0
//     })
// }
// console.log(qq([1,2,3,4,5])); //если условие выйдет true то оно покажеться, иначе же проигнорируеться


// function qq(arr){
//     return arr.find((elem)=>{
//         return elem>3
//     })
// }
// console.log(qq([1,2,4,53,3]));  //как только условие выйдет True он его покажет и закончится


// function qq(arr){
//     return arr.toSorted((a,b)=>{
//         return a-b
//     })
// }
// console.log(qq([1,53,7,3,6,8,4])); //Если использовать sort то массив меняеться полностью, а с toSorted не меняет родителя


// function qq(arr){
//     return arr.reduce((a,b)=>{
//         return a*b
//     },1)

// }
// console.log(qq([3,5,2,5,2,4,2,3,342,2,3,32]));


// function qq(arr){
//     return arr.every((a)=>{
//         return a%2==0
//     })
// }
// console.log(qq([3,5,2,4]));
