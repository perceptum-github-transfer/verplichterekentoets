if(window.jQuery){
	console.log("ya");
}
else{
	console.log("no")
}

function formSubmit(){
	console.log("entered");
 	$("#form1").append("<br><div id='confirm'>Je reactie is ontvangen!</div>");
}

function formSubmitDown(){
	console.log("entered2");
	$("#form2").append("<br><div id='confirmDown'>Je reactie is ontvangen!</div>");
}