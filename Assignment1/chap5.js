var x= 6;
var y= 5;
var z=x+y;
document.writeln("Sum of "+x+" + "+y+" is "+z);
var a=x-y;
var b=x*y;
var c=x/y;
var d=x%y;
document.writeln("<br>Difference of "+x+" + "+y+" is "+z);
document.writeln("<br>Product of "+x+" + "+y+" is "+z);
document.writeln("<br>Division of "+x+" + "+y+" is "+z);
document.writeln("<br>Modulus of "+x+" + "+y+" is "+z);
var digit;
document.writeln("<br>Value after variable declaration is: "+digit);
digit=10;
document.writeln("<br>Initial Value: "+digit);
digit++;
document.writeln("<br>Value after increment is: "+digit);
digit+7;
document.writeln("<br>Value after addition is: "+digit);
digit--;
document.writeln("<br>Value after decrement is: "+digit);
digit%3;
//Question 4
document.writeln("<br>The remainder is: "+digit);
var movieticketprice=600;
var totalcost=movieticketprice*5;
document.writeln("<br>Total cost of buying 5 tickets to a movie is "+totalcost+"PKR");
//Question 5
var question = prompt("Enter the number for table generation: ");
if (question!=0) {
    document.writeln("<br>Table of"+question);
    for(i=1;i<=10;i++){
        document.writeln("<br>"+question+" * "+i+" = "+question*i);
    }
} else {
    alert("Table of 0 is not possible.")
}
//Question 6
var Celsius = 30;
var Fahrenheit = 96;
var c=(Fahrenheit-32)*5/9;
var f=(Celsius*9/5)+32;
document.writeln("<br>"+Celsius+"C is "+f+"F");
document.writeln("<br>"+Fahrenheit+"F is "+c+"C");
//Question 7
var Price_Item1=750;
var Price_Item2=2500;
var Quantity_Item1=4;
var Quantity_Item2=2;
var Shipping_Charges=100;
var total_cost=(Price_Item1*Quantity_Item1)+(Price_Item2*Quantity_Item2)+Shipping_Charges;
document.writeln("<br>Shopping Cart");
document.writeln("<br>Price of item 1 is "+Price_Item1+"<br>Quantity of item 1 is"+Quantity_Item1+"<br>Price of item 2 is "+Price_Item2+"<br>Quantity of item 2 is "+Quantity_Item2);
document.writeln("<br>Total cost of your order is "+total_cost);
//Question 8
var total_marks=1100;
var marks_obt=760;
var percentage=(marks_obt/total_marks)*100;
document.writeln("<br>Marksheet");
document.writeln("<br>Total marks: "+total_marks+"<br>Marks obtained: "+marks_obt+"<br>Percenatge: "+percentage+"%");
//Question 9
document.writeln("<br>Currency in PKR");
var exc_currency=(10*104.80)+(25*28);
document.writeln("<br>Total currency in PKR: "+exc_currency);
//Question 10
var current_year=2023;
var birthyear= prompt("Enter your birth year: ");
var age=current_year-birthyear;
document.writeln("<br>Age Calculator");
document.writeln("<br>Current year: "+current_year+"<br>Birth year: "+birthyear+"<br>Your age is: "+age);
//Question 12
var radius=5;
var circumference=2*3.14*radius;
var area=3.14*radius**2;
document.writeln("<br>The Geometrizer"+"<br>Radius of a circle: "+radius+"<br>The circumference is: "+circumference+"<br>The area is: "+area);
//Question 13
var fav_snack="Catty Chins";
var myage=15;
var max_age=65;
var est_per_day=3;
var tot_restlife=(max_age-myage)*est_per_day;
document.writeln("<br>Favourite snack: "+fav_snack+"<br>Current age: "+myage+"<br>Estimated max age: "+max_age+"<br>Amount of snacks per day: "+est_per_day);
document.writeln("<br>You will need "+tot_restlife+"to last you until the ripe old age of "+max_age);
