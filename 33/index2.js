function saveData() {
  let name = document.getElementById('fname').value;
  let lname = document.getElementById('lname').value;
  let agee = document.getElementById('age').value;
  let number = document.getElementById('number').value;
  let email = document.getElementById('email').value;
  let psd = document.getElementById('psd').value;
  let cpsd = document.getElementById('cpsd').value;

  
  if (name === "") {
    alert("Please fill in the first name field");
    document.getElementById("fname").focus();
    return false;
  } 
  else if (lname === "") {
    alert("Please fill in the last name field");
    document.getElementById("lname").focus();
    return false;
  }
   else if (isNaN(agee) || agee === "") {
    alert("Please enter a valid age");
    document.getElementById('age').focus();
    return false;
  } 
  else if (isNaN(number) || number === "" || number.length !== 10) {
    alert("Please enter a valid 10-digit number");
    document.getElementById('number').focus();
    return false;
  }else if(!email.includes('@')){
    alert("please fill right email")
    document.getElementById('email').focus()
    return false
  }else if(!(psd.match(/[/@!#$%^&*()]/))){
    alert("Please enter a valid password.");
    document.getElementById('psd').focus();
    return false;
}else if(psd!=cpsd){
  alert("Please enter a confirm valid password.");
  document.getElementById('cpsd').focus();
  return false;
}

  

  
  return true; 
}
