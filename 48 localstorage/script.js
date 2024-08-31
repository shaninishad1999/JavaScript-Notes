let person={
    name:"Shanideval",
    age:"25"
}

let jsonPerson=JSON.stringify(person);

localStorage.setItem("person",jsonPerson);

let data=localStorage.getItem("person");

let newData=JSON.parse(data);
// localStorage.getItem(person)
alert(newData.name+ " "+newData.age);
