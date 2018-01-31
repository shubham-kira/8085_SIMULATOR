function display(v){
	if(v==33)
		v="3E";
	imp.io.value=v+" ";
	document.getElementById("main").focus();
}
function newdisplay(){
	imp.io.placeholder="STUDENT_8085";
	document.getElementById("main").focus();
}
function mainfun(){
	if(imp.io.value=='$')
		imp.io.value='';
}