function ejer1(){
	var num1=prompt("Introduce un numero.", "1");
	var str1='<table class="table table-striped table-dark"><thead><tr><th scope="col">n</th><th scope="col">n²</th><th scope="col">n³</th></tr></thead><tbody>';
	var cont1=1;
	for(cont1=1;cont1<=num1;cont1++){
		str1+='<tr><th scope="row">'+cont1+'</th><td>'+Math.pow(cont1, 2)+'</td><td>'+Math.pow(cont1, 3)+'</td></tr>';}
	str1+='</tbody></table>';
	document.getElementById("res1").innerHTML=str1;}

function ejer2(){
	var num2_1=Math.floor(Math.random() * 100);
	var num2_2=Math.floor(Math.random() * 100);
	var now2=Date.now();
	var res2=prompt('Introduce la resultado de la suma\n'+num2_1+' + '+num2_2+' =');
	var Total2=(Date.now()-now2)/1000;
	var str2='El resultado es ';
	if (res2==num2_1+num2_2){
		str2+='Correcto';}
	else{
		str2+='Incorrecto';}
	str2+='.<br>El tiempo transcurido fue: '+Total2+' segundos';
	document.getElementById("res2").innerHTML=str2;}

function ejer3(){
	var arr3=prompt('Introdice numeros separados con un espacio').split(' ');
	var neg, pos, zero;
	neg=pos=zero=0;
	arr3.forEach(function (value){
		value=parseInt(value, 10);
		if(value<0){
			neg++;}
		else if(0<value){
			pos++;}
		else{
			zero++;}});
	document.getElementById("res3").innerHTML='Numeros: '+arr3+'<br>Numeros Negativos= '+neg+'<br>Ceros= '+zero+'<br>Numeros Positivos= '+pos;}

function ejer4(){
	var arr4=prompt('Escribe un arreglos de numeros, separa cada arreglo con un ; y cada valor de cada arreglo con un espacio.').split(';');
	var Tsum=[];
	var Tsize=[];
	arr4.forEach(function (value){
		value=value.split(' ');
		var sum=0;
		value.forEach(function (element){
			sum+=parseInt(element, 10);});
		Tsum.push(sum);
		Tsize.push(value.length);});
	var str4='';
	var cont4;
	for(cont4=0;cont4<Tsum.length;cont4++){
		str4+='El promedio del arreglo '+(cont4+1)+' es '+Tsum[cont4]/Tsize[cont4]+'<br>';}
	document.getElementById("res4").innerHTML=str4;}

function ejer5(){
	var num5=prompt('Introdice un numero.');
	num5=num5.toString();
	var res5='';
	var cont5;
	for(cont5=num5.length-1;0<=cont5;cont5--){
		res5+=num5[cont5];}
	document.getElementById("res5").innerHTML=res5;}

function ejer6(){
	var [n, m, a]=prompt('Introduce 3 numeros separados por un espacio:\nEl tamaño n.\nEl tamaño m.\nEl tamaño a.').split(' ');
	var l=parseInt(n/a, 10);
	if(n%a!=0){
		l++}
	var w=parseInt(m/a, 10);
	if(m%a!=0){
		w++}
	document.getElementById("res6").innerHTML='n= '+n+'<br>m ='+m+'<br>a= '+a+'<br>El numero de baldosas es= '+w*l;}
