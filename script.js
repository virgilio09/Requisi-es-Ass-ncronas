

function requesicao(url, destino){

	var myRequest;
	
	if(window.XMLHttpRequest)
		myRequest  = new XMLHttpRequest();
	else if(window.ActiveXObject)
		try{
			myRequest = new ActiveXObject("Msxml2.XMLHTTP");
		}catch(e){
			try{
				myRequest = new ActiveXObject("Microsoft.XMLHTTP");
			}catch{
				alert("Erro ao intanciar Objeto XMLHttpRequest nesta versão de navegador");
			}
		}

	if(!myRequest){
		alert("Erro ao tentar criar intanciar do Objeto XMLHttpRequest");
		return false;
	}


	myRequest.onreadystatechange = function(){
		if(myRequest.readyState == 4){
			if(myRequest.status == 200)
				document.getElementById('conteudo').innerHTML =  myRequest.responseText;
	
		}

	}

	myRequest.open('GET', url);
	myRequest.send();
}