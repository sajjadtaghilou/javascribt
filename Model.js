

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