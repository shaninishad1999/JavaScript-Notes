// function fun(){

//     // let k=document.getElementById('head')
//     alert("Hello")
// }



let v = 0;
let k = document.getElementById('n')
function p() {
    v++;
    k.innerHTML = v
    
}
function m() {
    k.innerHTML = v
    v--;
    if (v <= 0) {
        v = 0;
       
    }



}


