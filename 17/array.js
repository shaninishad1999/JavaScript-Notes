



// let emp ={
//     id:parseInt(prompt("Enter id")),
//     name:prompt("Enter Name"),
//     age:parseInt(prompt("Enter age")),
//     designation:prompt("Enter Designation"),
//     package:parseInt(prompt("Enter package")),
    
// }
// console.log(emp);



let emp = { name: "Shani", id: 101, age: 22, sal: 10050 };

for (let key in emp) {
  console.log(key, emp[key]);
}
