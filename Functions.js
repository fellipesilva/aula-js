class Functions {
	constructor() {

	}

	static isBissexto(year){
		var resultado = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    	return resultado;
	}

	static buscaBinaria(array, targetValue){
		var min = 0;
		  var max = array.length - 1;
		  var guess = 0;
		  while (min <= max) {
		      guess = Math.floor((min+max) / 2);
		      if (array[guess] === targetValue) {
		          return guess;
		      } else if (array[guess] < targetValue) {
		          min = guess+1;
		      } else if (array[guess] > targetValue) {
		          max = guess-1;
		      }
		  }
		return -1;		
	}

	static bubbleSort(array){
	    var swapped;
	    do {
	        swapped = false;
	        for (var i=0; i < array.length-1; i++) {
	            if (array[i] > array[i+1]) {
	                var temp = array[i];
	                array[i] = array[i+1];
	                array[i+1] = temp;
	                swapped = true;
	            }
	        }
	    } while (swapped);

	    return array;
	}

	static executeES6() {
        console.log("###### Utilizando ES6 ########");
        console.log("======> Ano Bissexto");
        var ano = 2017
        console.log(" Ano: "+ano);
        console.log(Functions.isBissexto(ano));

 
        console.log("======> Busca Binaria");
        var array = [];
        for(i = 0; i < 20; i++)
            array[i] = i * 10 + i;

        var numero = 55;
        console.log(" Exibindo Lita: "+array);
        console.log(" Busca número "+numero);
        console.log(" Posição: " + Functions.buscaBinaria(array,numero));

        console.log("======> Pilha LIFO");
        var pilha = new Pilha(new Array());
        for(index = 0; index < 20; index++)
            pilha.inserir(index * 10 + index);

        console.log(" Exibindo Lista: " + pilha.lista);
        console.log(" Executando Função RemoverUltimo: " + pilha.removerUltimo());
        console.log(" Exibindo Lista: " + pilha.lista);
        console.log(" Executando Função Pop: " + pilha.lista.pop());
        console.log(" Exibindo Lista: " + pilha.lista);

        console.log("======> BubbleSort");
        var arrayBubbleSort = [34, 203, 3, 746, 200, 984, 198, 764, 9];
        console.log(" Exibindo Lista: "+arrayBubbleSort);
        console.log(" Executando função BubbleSort: "+Functions.bubbleSort(arrayBubbleSort));

        console.log("======> Ocorrência de String");
        var string1 = "teste para ocorrência de string";
        var string2 = "rrência";
        console.log(" String1: "+string1);
        console.log(" String2: "+string2);
        if (string1.indexOf(string2) != -1)
            console.log(true);
        else
            console.log(false);		
	}

}