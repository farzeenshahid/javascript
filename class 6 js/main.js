//functions
function print(name,age,gender){
    let details = name+" "+gender+" "+age;
    return details;
}
let std1 = print("Aijaz",25,"Male");
console.log(std1);
let std2 = print("Aimen",22,"Femle");
console.log(std2);
let std3 = print("Shayan",28,"Male");
console.log(std3);
//switch statements
var grades = prompt("Enter grade: ");
switch(grades) {
    case "A" :
        alert("Outstanding");
        break;
    case "B" :
        alert("Good");
        break;
    case "C" :
        alert("Average");
        break;
    default :
        alert("Grade missing");
    
}
let x = 0;
switch(true){
    case x<0 :
        console.log("NUm is less than 0");
        break;
    case x==0:
        console.log("Num is 0");
        break;
    default :
        console.log("Correct");
        break;
    
}
//while
var i=1;
var number = prompt("Enter number that you want table for?");
while(i<=10){
    console.log(number+" x "+i+" = "+(number*i));
    i++;
}
//do while
var i = 0;
do {
    alert(i);
    i++;
} while (i < 0);
//let std4 = print("Aijaz",25,"Male");
//let std5 = print("Aimen",22,"Femle");
function popup(message){
    alert(message);
} 