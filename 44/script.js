// let ch=document.getElementById("change").value;
function change(){
    document.getElementById("city").value="indore";
    
}

let data;
function start(){
    function print(){
        document.getElementById("demo").innerHTML+="Bhopal";
    }
    data=setInterval(print,1000)
}
function stop(){
    clearInterval(data);
}



    