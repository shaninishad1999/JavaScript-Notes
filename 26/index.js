//callback function
// function demo( function argument){

// }
// demo()

// set interval function
// syntax
// setInterval(function,timer)

// setInterval(()=>{document.write("राम ");},200)
// setInterval(() => {
//     for (let i = 1; i <= 1000; i++) {
//         document.write(i+" ")

//     }
// }, 200)

// function d() {

//     for (let i = 1; i <= 1000; i++) {
//         document.write(i)
//         // if(i%2==0){
//         //     document.write("राम ")
//         // }else{
//         //     document.write(" सीताराम")
//         // }
//     }
// }

// setInterval(() => { d(); }, 2000)

i = 1
let f = setInterval(() => {
    if (i == 10) {
        clearInterval(f)
        
    }
    document.write(i++); 

}, 200)