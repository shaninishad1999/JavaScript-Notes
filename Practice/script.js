let arr=[10,20,30,40,50,60,];

console.log(arr);
arr.push(100,200,300);
arr.pop()
arr.pop()
arr.pop()

arr.unshift(1000,2000,3000,4000)
arr.shift()
arr.shift()
arr.shift()
arr.shift()
console.log(arr)

let result = arr.map((e) => {
    return e;
  });
  console.log(result);
  
  let res =arr.filter((e)=>{
    return e>30;
  });
  console.log(res);
  
  const numbers = [1, 2, 3];
  const moreNumbers = [4, 5, 6];
  
  // Combine arrays
  const combined = [...numbers, ...moreNumbers];
  console.log(combined); // Output: [1, 2, 3, 4, 5, 6]


  
console.log("Length = "+arr.length)


// i = 1
// let f = setInterval(() => {
//     if (i == 10) {
//         clearInterval(f)
        
//     }
//     document.write(i++); 

// }, 200)

let k=1
let r=setInterval(()=>{
  if(k==50){
    clearInterval(r)
  }
  document.write(k++);
},200)