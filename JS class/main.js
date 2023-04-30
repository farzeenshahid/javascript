var date = new Date();
console.log(date);
var birthDate = new Date("Dec 14,2001");
console.log(birthDate);
// calculating time in miliseconds
var msDate = date.getTime();
var msbDate = birthDate.getTime();
// calculating the difference of this time 
var msDiff = msDate - msbDate;
console.log("Difference: ",msDiff);
// converting miliseconds to days
var dDiff = msDiff / (1000*60*60*24);
console.log("Days: ",dDiff);
// converting miliseconds to year 
var yDiff = msDiff / (1000*60*60*24*365);
console.log("Years: ",yDiff);
console.log("Months: ",((38/100)*12));
// rounding down years in float to whole numbers 
yDiff = Math.floor(yDiff);
console.log("Difference in years: ",yDiff);
// rounding down months in float to whole numbers
var mDiff = ((38/100)*12)
mDiff = Math.floor(mDiff);
console.log("Difference in months: ",mDiff);
// rounding down days in float to whole numbers 
dDiff = Math.floor(dDiff);
console.log("Number of days: ",dDiff);
// condensing everything
var msDiff = new Date().getTime() - new Date("Dec 14, 2001").getTime();
console.log(msDiff);
var dDiff = Math.floor(msDiff / (1000 * 60 * 60 * 24 * 365));
console.log(dDiff);
// specifying time along with date 
var d = new Date("April 30, 2023 10:14:00");
console.log(d);
//Setting years and months
date.setFullYear(2025);
console.log(date);
date.setMonth(06);
console.log(date);
date.setDate(14);
console.log(date);