const table= document.querySelector("tbody");
	function carregarJson(){
		const requerir= new XMLHttpRequest();
		requerir.open("GET","var/registro.json");
		requerir.onload= function(){
			try{
				const json= JSON.parse(requerir.responseText);
				inserirDados(json);
				//console.log(json);
					
			}catch(e){
				console.warn("os dados não foram carregados foda-se! "+ e);
			}
		}
		requerir.send();
	}
	

	function inserirDados(json){
		
		//insert new data in the table
		var linha= new Array();
		var celula= new Array();
		var i=0;
		var j=0;
		var vetor =json.map(indice=>[indice.nome, indice.cpf,indice.endereco,indice.item]);
		for(i=0; i<vetor.length; i++){
			linha[i]= vetor[i];
			
			const tr= document.createElement("tr");
			
			for(j=0; j<vetor.length; j++){
				console.log("Executou "+j+ "Vezes na interação"+i);
				const td= document.createElement("td");
				td.textContent=celula[j]= linha[i][j];
				//console.log("Tô aqui porra!");
				//console.log(linha[i][j]);
				//celula[j]= linha[i][j];
				tr.appendChild(td);
				//console.log(celula[j]);
			}
			
			table.appendChild(tr);	
			
		}
	}