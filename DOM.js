 var titulo = document.getElementById("titulo");
 console.log(titulo.tagName + ":" + titulo.innerHTML );

 var array = document.getElementsByName("categoria");
 for(var i=0;i<array.length;i++) {
 console.log(array[i].tagName + ":" + array[i].id);
 
	 if ((i+1) % 2 ==0){
		array[i].checked=true;
	 }
	 
 }

 array = document.getElementsByTagName("label");
 for(var i=0;i<array.length;i++) {
 console.log(array[i].tagName + ":" + array[i].getAttribute("for"));
 }

 array = document.getElementsByClassName("centralizado");
 for (var i=0;i<array.length;i++){
 console.log(array[i].tagName + ":" + array[i].id);
 }

 var formulario = document.querySelector("body>Form>input");
 console.log(formulario.tagName + ":" + formulario.getAttribute("action"));

 array = document.querySelectorAll("label");
 for(var i=0;i<array.length;i++) {
 console.log (array[i].tagName + ":" + array[i].getAttribute("for"));
 }