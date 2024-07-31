let k = document.getElementById("bulb")
let b = document.getElementById("btn")
let v = 0

function fun() {


    if (v == 0) {
        v++
        k.style.backgroundColor = "yellow"
        b.innerHTML = "Off"
    }else{
        v--
              k.style.backgroundColor = "transparent"
        b.innerHTML = "On"
    }

}