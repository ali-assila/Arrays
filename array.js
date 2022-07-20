let ages = [5, 25, 50, 10, 7, 58];
//  sort the numbers
// ages.sort((a,b) =>{
//     if(a<b){
//         return -1 
//     }else if (b<a){
//         return 1
//     }else{
//         return0
//     }
// });

// ages.sort((a,b) => a-b);
// console.log(ages);

//  sorting the strings
// let persons =['Ali', 'Walid', 'Ahmed', 'Mohamed', 'Ameni']
// persons.sort();
// console.log(persons)

// let result = ages.reduce((acc , age) =>{
//     return acc + age;
// }, 0)
// console.log(result)

// let result= ages.find(age =>{
//     return age > 30
// })

// console.log(result)



// let filtredAges=  ages.filter(age => {
//     return age >= 25
// } )

// ou bien 
// let filtredAges=  ages.filter(age => age >= 25 )

// console.log(filtredAges)

// let users = [
//     {name: "Ali", active: true},
//     {name: "Aya", active: false},
//     {name: "Chawki", active: true},
//     {name: "Hedi", active: false},
//     {name: "Sameh", active: true},
// ];

// let result = users.find(user => user.name.includes('Ay') )

// console.log(result)


// result = users.map( user => {
//     if(user.active){
//         return{
//             name : user.name.toLocaleUpperCase(),
//             active: user.active
//         }
//     }else{
//         return user
//     }
// })

// console.log(result)
// result = users.filter( user => user.active == true)

// console.log(result)

// let ages = [5, 25, 50, 10, 7, 58];

// let result= ages.map(age =>{
//     return age +10;
// })

// console.log(result)

// Enchainer les tableaux et les méthodes

// let users = [
//     {name: "Ali", active: true, note: 20},
//     {name: "Aya", active: false, note: 19},
//     {name: "Chawki", active: true, note: 9},
//     {name: "Hedi", active: false, note: 14},
//     {name: "Sameh", active: true, note: 15},
// ];

// let myUsers= users.sort((a,b) => b.note - a.note)
//                 .filter(user => user.active)
//                 .map(user =>user.name).sort()
// console.log(myUsers)