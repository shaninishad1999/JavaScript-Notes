
let x;

x=Math.random()*10;
x=Math.floor(Math.random()*40);

function randomnum(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);

}
let result=randomnum(30,120);

console.log(result);

// console.log(result)

// const arr=["ram","Sham","hari","Mohan"];
const arr=[1,2,3,4,5,6,7];
const stringArr=arr.toString();
console.log(stringArr);
const myarray=arr.join(' * ');
console.log(myarray);

