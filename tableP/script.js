
function display(){
    let k=document.getElementById("demo");
    k.innerHTML=`
    <h1>Table</h1>
    <table id="table">
     <tr id="row">
        <th>Name</th>
        <th>Roll_NO</th>
        <th>City</th>
        <th>State</th>
     </tr>
     <tr id="td">
         <td >Shanideval</td>
         <td>101</td>
         <td>Azamgarh</td>
         <td>UP</td>
     </tr>
      <tr id="odd1">
         <td>Shanideval</td>
         <td>101</td>
         <td>Azamgarh</td>
         <td>UP</td>
     </tr>
      <tr id="td2" >
         <td>Shanideval</td>
         <td>101</td>
         <td>Azamgarh</td>
         <td>UP</td>
     </tr>
      <tr id="odd2">
         <td>Shanideval</td>
         <td>101</td>
         <td>Azamgarh</td>
         <td>UP</td>
     </tr>
      <tr id="td4">
         <td>Shanideval</td>
         <td>101</td>
         <td>Azamgarh</td>
         <td>UP</td>
     </tr>


    </table>
  
  
    `
k.style.border="1px solid red"
k.style.textAlign="center"
k.style.gap="50px"
k.style.background="green"
let x=document.getElementById("row").style.backgroundColor="red"
let y=document.getElementById("table").style.marginLeft="35%"
let m=document.getElementById("td").style.backgroundColor="white"
let n=document.getElementById("td2").style.backgroundColor="white"
let o=document.getElementById("td4").style.backgroundColor="white"
let p=document.getElementById("odd1").style.backgroundColor="yellow"
let e=document.getElementById("odd2").style.backgroundColor="yellow"
}