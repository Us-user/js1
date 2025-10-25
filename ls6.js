// let person={
//     name: "Umar",
//     age: 17,
//     surname: "Sharipov",
//     location: "Dushanbe",
//     phone: {
//         tcell: "000111222",
//         bab: "333444555"
//     },
//     about: ()=>{
//         return `${person.name} is ${person.age} years old. I lives in ${person.location}`
//     }
// }



// delete person.surname

// console.log(person);
// console.log(person.name);
// console.log(person.phone.tcell);
// console.log(person.about());




// let person ={
//     name: "John",
//     age: 30,
//     location:"Dushanbe"
// }

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// let qw=[["name","Umar"],["age",17]]
// console.log(Object.fromEntries(qw));



// let person={
//     name:"John",
//     age:12,
//     location:"Dushan",
//     phone:{
//         bab:223,
//         tee:333
//     }
// }
// let {phone:{bab:first}}=person
// console.log(first);

// let person2={...person}
// person2.qw="hi"
// console.log(person);





let person={
    name:"John",
    age:12,
    location:"Dushan",
    about: function(){
        return this.name
    }
}
console.log(person.about());
