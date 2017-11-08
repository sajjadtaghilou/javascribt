

function  sajjad (y) {

	alert("salam " + y);	
}
	sajjad("sara");


function x(one,two,three){

	document.write (one +" behtar hast az " + two +" va hamintor az " + three + "</br>")
}
x ("amir","ali","yadi");
 

 function addnumbers (a,b){
 	var c= a + b;
 	return c;
 }
 document.write(addnumbers(3,6)+"</br>");

 var first = "adel"
 var last="mirzai"


 if((first=="adel") || (last=="mirzai")){
 	document.write ("salam iran"+ "</br>")
 }
  var girl = "sara"
 switch (girl) {
 	case "sara":
 	document.write("heloo sara"+ "</br>")
 	break;
 	case "neda":
 	document.write("heloo neda"+ "</br>")
 	break;
 	default:
 	document.write("heloo sajjad");
 }


for (var i = 0; i < 10; i++) {
	document.write("javascript" + "<br/>")
}

var x=1
while(x<10){
	document.write (x+"<br/>")
	x++;
}

var y=20
do{
	document.write(y +"</br>")
	y++;
}while (y<25);

/*Object*/

function person (name , age){
	this.name = name;
	this.age = age;
}
var ali = new person ("ali mahmoodi" , 27)
var milad = new person("milad mahmoodi", 22)
document.write (ali.name + "</br>")

/*Object Initializer (baraye teadad pain)*/

naghi = {name :"naghi mamoli" , age : 40};
taghi = {name :"taghi mamoli" , age : 45};
document.write(naghi.name + " brother " + taghi.name +"</br>")

/*add Method to Object*/

function people (name , age){
	this.name = name;
	this.age = age;
	this.retire = yearsleft;
}

var hossein = new people ("hossein amiri" , 54) ;

/*Method*/
function yearsleft () {
var numyears = 65 - this.age ;
return numyears;
}
document.write (hossein.retire()+"</br>");

/*Arrays*/

var star = new Array ("reza" , "saeed" , "asghar");

document.write (star [0]+"</br>") ;
document.write (star [1]+"</br>") ;

/*Arrays*/

var things = new Array();

things [0] = "salam";
things[1] = "khobi";
things[2] = "davar";

document.write(things[2]+"</br>");
document.write(things[0]+"</br>");

var boy = new Array ("arman" , "arash" , "ebrahim");
var girl = new Array ("elham" , "elahe" , "mahnaz") ;

//concatinate (talfigh 2 arraye)

var adamha = boy.concat (girl);
document.write (adamha[3]+"</br>");

//join

var film = new Array ("taitanic" , "terminator" , "parker" ,"madar");
 var serial = film.join ("-");
 document.write (serial+"</br>");


//pop
var films = new Array ("taitanic" , "terminator" , "parker" ,"madar");
 document.write (films[3]+"</br>");
 films.pop ();
 document.write (films[3]+"</br>");

