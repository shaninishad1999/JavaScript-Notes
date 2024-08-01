function saveData(){
  let name=document.getElementById('fname').value
  if(name==""){
    alert("Please fill name field")
    document.getElementById("fname").focus()
    return false;
  }

  let lname=document.getElementById('lname').value
  if(lname==""){
    alert("Please fill lname field")
    document.getElementById("lname").focus()
    return false;
  }
}
