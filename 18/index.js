let obj = {
    name: "shanideval",
    age: 45
}
let obj1 = {
    laction: "Bhopal"
}
Object.assign(obj, obj1)
console.log(obj)
delete obj.age;
console.log(obj)

obj.designation="manager";
console.log(obj);


