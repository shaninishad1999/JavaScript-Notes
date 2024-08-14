let x=`helol complex
i am here
now you can talk`

// console.log(x);
let y="heelo"+" "+
"hello2"+"My name is shanideval"+" "
"I am here";
// console.log(y);

let z=x.concat(y)
let m=x.concat(" ","everyone")
console.log(z);
console.log(m);

console.log(x[2])
console.log(x.at(0))
console.log(x.charAt(0))
console.log(x.charCodeAt(0))


let a="Shanideval"
let newString=a.slice(5)
console.log(newString)
let nString=a.slice(-5,-1)
console.log(nString)

let kString=a.substring(5,10)
console.log(kString)

// function display(){
//     n=5;
//     for(let i=1;i<=10;i++){
//        document.write(i*n+"<br>");
        
//     }
// }

function display(){
    let data=document.getElementById("demo");
    data.innerHTML=`
   
<div class="container">
  <h2>Contact Us</h2>
  <form action="#" method="post">
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
    </div>
    <div class="form-group">
      <label for="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
    </div>
    <button type="submit">Submit</button>
  </form>
</div>
    `
}

