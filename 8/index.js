

// let i = parseInt(prompt("Enter numbr "));
// let k=10;
// do {

//     // console.log(i*k);
//     document.write(i*k+"<br>" );
//     k--;
// } while (k >= 1);

// let i = parseInt(prompt("Enter numbr "));
// let k=1;
// while(k<=10){

//     // console.log(i*k);
//     // document.write(i+"<br>" );
//     document.write(k+"<br>" );
//     k++;
// } 

//wap to print odd number 1-20
// let i = parseInt(prompt("Enter numbr "));

// let k=1;
// while(k<=20){

//    if(k%2!=0)
//     {

//         document.write(k+"<br>" );
//     }
//     k++;
// } 

// wap to print square of number between 15-1

// let k = 15;
// while (k >= 1) {
//     document.write("Square of "+ k +" = "+ k * k + "<br>");
//     k--;
// }

// for(iniliazation;condition;increment/decrement)
//     {

//     }

//wap to print table
let a = parseInt(prompt("Enter Number"));
let s = 0;
// for (let i = 0; i <= a; i++) {

// }

while(a>0)
    {
        let digit=a%10;
        s=s+digit;
        a/=10;

    }
    document.write(s+"<br>" );
