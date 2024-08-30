
document.getElementById("btn").addEventListener("click",add);

function add(e){
    e.preventDefault();
    let username=document.getElementById("username").value;
    let email=document.getElementById("email").value;
    let passwrod=document.getElementById("password").value;
    let confirmPasswrod=document.getElementById("psw").value;

    if(username == ""||
        email==""||
        passwrod==""||
        confirmPasswrod==""
    )
    {
        alert("must be")
        return;
    }

    if(passwrod!=confirmPasswrod){
        alert("must be equal")
        return ;
        
        
    }

}