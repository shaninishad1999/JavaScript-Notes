

// object 

// let obj={id:101,name:"Qasim",age:51};
// console.log(obj.name);
// console.log(obj.age);

//for print keys

// let emp={name:"Shani",id:101,age:22,sal:10050};

// for(let k in emp){
    
//     console.log(emp[k]);
// }


// let emp={name:"Shani",id:101,age:22,sal:10050};

// let k=Object.keys(emp)
//     console.log(k);

// let emp={name:"Shani",id:101,age:22,sal:10050};

// let k=Object.keys(emp)
//     console.log(k[0]);



// let emp={name:"Shani",id:101,age:22,sal:10050};

// let k=Object.values(emp)
//     console.log(k[0]);

// let emp ={
//     id:1,
//     name:"Harish",
//     age:32,
//     designation:"Manager",
//     package:"10 lpa",
//     account:{
//         bank_name:"Union Bank",
//         accd_no:12451245,
//         acc_bal:1200
//     }


// }
// console.log(emp.account.accd_no);
// console.log(emp);




// let emp ={
//     id:1,
//     name:"Harish",
//     age:32,
//     designation:"Manager",
//     package:"10 lpa",
//     arr:[1,2,3,4,5],
//     fun:function(){
//         alert("functin calling")
//     },
//     account:{
//         bank_name:"Union Bank",
//         accd_no:12451245,
//         acc_bal:1200
//     }


// }
// // console.log(emp.arr[2]);
// // console.log(emp.fun());
// emp.fun();




let emp ={
    id:parseInt(prompt("Enter id")),
    name:prompt("Enter Name"),
    age:parseInt(prompt("Enter age")),
    designation:prompt("Enter Designation"),
    package:parseInt(prompt("Enter package")),
    
}
console.log(emp);



