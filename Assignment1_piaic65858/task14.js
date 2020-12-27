var a = 2 ; // 1
var b = 1 ; // 0 // 1 // 0
var result = --a - --b + ++b + b-- ;
// --a=1
//--a - --b =1
//--a - --b + ++b =2
// --a - --b + ++b + b-- =3


document.write("a is " + a);
document.write("<br>");
document.write("b is " + b);
document.write("<br>");
document.write("result is " + result);