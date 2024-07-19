

// let c=parseInt(prompt(" 10/tea for enter 1, 5/Samosa for enter 2, 20/piza  for enter 3"))
// let q=parseInt(prompt("Enter Quantity"))

// switch(c){
//     case 1:
//     document.write("Bill Tea ="+(10*q));
//     break;
//     case 2:
//     document.write("Bill Samosa ="+(5*q));
//     break;
//     case 1:
//     document.write("Bill Piza ="+(20*q));
//     break;
// }


// var arr=[2,2.5,'q',"shani"];
// console.log(arr);
// document.write(arr);
// document.write("<br>"+arr[3]);
// document.write("<br>"+arr[0]);
// document.write("<br>"+arr[1]);
// document.write("<br>"+arr[2]);
// document.write("<br>"+arr[3]);

// var arr=[1,2,3,4,5];
//  for(let i=0;i<arr.length;i++)
//     {
//         console.log(i);
//         console.log(arr[i]);
//     }



let n = parseInt(prompt("Enter array size"))
var arr = [n];
alert("Enter array elemet")
for (let i = 0; i < n; i++) {
    arr[i] = parseInt(prompt("Enter Element " + i))
}
alert("Store element")
for (let i = 0; i < n; i++) {
    document.write("<br>" + arr[i]);
}












