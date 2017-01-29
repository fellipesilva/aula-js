function isBissexto(ano){
	if (((ano % 4 == 0) && (ano % 100 != 0)) || (ano % 400 == 0))
		return true;
	else
		return false;
}

function buscaBinaria(array, valor) {
	var min = 0;
	var max = array.length - 1;
	var aux = 0;

	while (min <= max) {
		aux = Math.floor((min+max)/2);
		if (array[aux] === valor)
			return aux;
		else if (array[aux] < valor)
			min = aux + 1;
		else if (array[aux] > valor)
			max = aux - 1;
	}

	return -1;
}

function bubbleSort(array) {
	var condicao = true;

	while (condicao) {
		condicao = false;
		for (var i = 0; i < array.length - 1; i++) {
			if (array[i] > array[i + 1]) {
				var temp = array[i];
				array[i] = array[i + 1];
				array[i + 1] = temp;
				condicao = true;
			}
		}
	}

	return array;
}

function ocorrenciaString(string1, string2) {
	if (string1.indexOf(string2) != -1)
		return true;
	else
		return false;
}

function executeJSConvencional() {
        console.log("###### Utilizando JS Convencional ########");
        console.log("======> Ano Bissexto");
        var ano = 2017
        console.log(" Ano: "+ano);
        console.log(isBissexto(ano));

        console.log("======> Busca Binaria");
        var array = [];
        for(i = 0; i < 20; i++)
            array[i] = i * 10 + i;

        var numero = 55;
        console.log(" Exibindo Lita: "+array);
        console.log(" Busca número "+numero);
        console.log(" Posição: " + buscaBinaria(array,numero));       

        console.log("======> Pilha LIFO");
        //var pilha = new Pilha(new Array());
        var pilha = new Array();
        for(index = 0; index < 20; index++)
            pilha.push(index * 10 + index);//Sempre coloca como primeiro

        console.log(" Exibindo Lista: " + pilha);
        console.log(" Executando Função Pop: " + pilha.pop());//sempre retira o ultimo
        console.log(" Exibindo Lista: " + pilha);

        console.log("======> BubbleSort");
        var arrayBubble = [34, 203, 3, 746, 200, 984, 198, 764, 9];
        console.log(" Exibindo Lista: " + arrayBubble);
        console.log(" Executando função BubbleSort: " + bubbleSort(arrayBubble));

        console.log("======> Ocorrencia String");
        var string1 = "teste para ocorrência de string";
        var string2 = "rrência";
        console.log(" String1: "+string1);
        console.log(" String2: "+string2);
        console.log(" Executando Função ocorrenciaString: " + ocorrenciaString(string1,string2));	
}