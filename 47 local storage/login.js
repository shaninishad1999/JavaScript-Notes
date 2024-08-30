function display(e){
    e.preventDefault();
    let username=document.getElementById("username").value;
    let password=document.getElementById("passwrod").value;

    let storedusername=localStorage.getItem("username");
    let stroedpasswrod=localStorage.getItem("password");

    if(username===storedusername && password == stroedpasswrod){
        alert(`Login successfull, Welcome ${storedusername}`);
        window.location.href="welcome.html";

    }else{
        alert("Incorret Details")
    }
}