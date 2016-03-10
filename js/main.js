alert ('It works!');
var studentsFor = ["Singh", "Jenny", "Sean", "Adam", "David"];
var studentsWhile = ["Ilya", "Matt", "Lisa", "Erik", "Evan"];

for (var i=0; i<studentsFor.length; i++){
	console.log("A student named " + studentsFor[i] + " is in my class.");
}

var index = 0;
while (index<studentsWhile.length){
	console.log("A student named " + studentsWhile[index] + " is also in my class.");
	index++;
}