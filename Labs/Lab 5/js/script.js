var input=document.getElementById("password");
var lower=/[a-z]/g;
var upper=/[A-Z]/g;
var num=/[0-9]/g;

input.onfocus=function(){
	document.getElementById("ver").classList.remove("invisible");}
input.onblur=function(){
	document.getElementById("ver").classList.add("invisible");}

input.onkeyup=function(){
	let total=0;
	let field=document.getElementById("min");
	if(input.value.match(lower)){
		field.classList.remove("invalid");
		field.classList.add("valid");
		total++;}
	else{
		field.classList.remove("valid");
		field.classList.add("invalid");}
	field=document.getElementById("may");
	if(input.value.match(upper)){
		field.classList.remove("invalid");
		field.classList.add("valid");
		total++;}
	else{
		field.classList.remove("valid");
		field.classList.add("invalid");}
	field=document.getElementById("num");
	if(input.value.match(num)){
		field.classList.remove("invalid");
		field.classList.add("valid");
		total++;}
	else{
		field.classList.remove("valid");
		field.classList.add("invalid");}
	field=document.getElementById("lon");
	if(7<input.value.length){
		field.classList.remove("invalid");
		field.classList.add("valid");
		total++;}
	else{
		field.classList.remove("valid");
		field.classList.add("invalid");}
	if(total==4){
		document.getElementById("ButListo").removeAttribute("disabled"); }
	else{
		document.getElementById("ButListo").setAttribute("disabled",""); }}