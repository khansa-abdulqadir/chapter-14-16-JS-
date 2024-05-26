// 01**********
let empty = [];
// 02***********
let student = {
  name: "",
  class: "",
  age: "",
};
// 03*********
let movies = ["Moana", "raya and the lost dragon", "Elemental", "Wish"];
// 04**********
let numbers = [45, 90, 87, 99];
// 05*********
let booleans = [true, "", " ", null, undefined, 0, false];
// 06*********
let mixedList = [true, "jiya", null, 99, 0, undefined];
// 07**********
let qualifications = ["HSC", "SSC", "M.phill", "MBA", "BCOM", "BSC", "AWS"];
document.write(
  "<h1>Qualifications Karachi Offers</h1>" +
    " 01- " +
    qualifications[0] +
    "</br>" +
    " 02- " +
    qualifications[1] +
    "</br>" +
    " 03- " +
    qualifications[2] +
    "</br>" +
    " 04- " +
    qualifications[3] +
    "</br>" +
    " 05- " +
    qualifications[4] +
    "</br>" +
    " 06- " +
    qualifications[5] +
    "</br>" +
    " 07- " +
    qualifications[6]
);
// 08**********
let stdname = ["Jiya", "Tayyaba", "Saadia"];
let score = [450, 320, 430];
let percentage1 = score[0] / 500 * 100 + "%";
let percentage2 = score[1] / 500 * 100 + "%";
let percentage3 = score[2] / 500 * 100 + "%";

document.write(
  " </br> </br> Score of " +
    stdname[0] +
    " is " +
    score[0] +
    " and percentage is " +
    percentage1 +
    "</br> " +
    "Score of " +
    stdname[1] +
    " is " +
    score[1] +
    " and percentage is " +
    percentage2 +
    "</br> " +
    "Score of " +
    stdname[2] +
    " is " +
    score[2] +
    " and percentage is " +
    percentage3
);
// 09*************
let colors = [];
let ask = prompt("Which color you want to add in this array");
// a
let newColor = prompt("Enter your desire color to be added in the beginning of the array");
colors.unshift(userColor);
// b
var dltColor = prompt("Enter your desired color to be added at the end  of the array");
colors.push(dltColor);
document.write('Updated array :'+userColorend+'<br>');
// c
let addColor1 = prompt("Add first color to the beginning of the array");
let addColor2 = prompt("Add second color to the beginning of the array");
colors.unshift(addColor1,addColor2);
document.write("Updated array: " + colors + "<br/>");
// d
colors.shift();
document.write('Updated array :'+ colors+'<br>');
// e
colors.pop();
document.write("Updated array :'+ colors+'<br>");
// f
let indexNum = +prompt("At which index no you want to add color");
let colorName = prompt('And which color ?');
colors.splice(index,0,colorName);
document.write('Updated array :'+ colors+'<br>');
// g
index = +prompt(" At which index you want to delete color" );
let deleteCounter = +prompt("How many colors do you want to delete?");
colors.splice(index,deleteCounter);
document.write('Updated array :'+ colors +'<br>');

// 10*********************
let scoring = [123 ,107 , 160 ,143];
document.write("Scores of Students : '+score+'<br>");   
document.write("Ordered Scores of Students : '+score.sort()+'<br>");

// 11**************************
let cityNames = ["Karachi" , "islamabad" , "KPK" , "Lahore" , "Gilgit"];
document.write("Cities List :" + cityNames+"<br>"+"<br>")
let selectCities = citynames.slice(2,5);
document.write('Selectedcities List :'+selectCities+'<br>');

// 12**********************
let array = ['This','is','my','cat'];
document.write('Array : '+'<br>'+array+'<br>');
let string=array.join(' ');
document.write('String : '+'<br>'+string);

// 13********************
let devices = ['keyboard', 'mouse', 'printer', 'monitor'];
let store;
document.write('Devices :' +devices+ '<br>');
store = devices.shift();
document.write('Out' + '<br>' + store + '<br>');

store = devices.shift();
document.write('Out' + '<br>' + store + '<br>');
store = devices.shift();
document.write('Out' + '<br>' + store + '<br>');
store = devices.shift();
document.write('Out' + '<br>' + store + '<br>');






