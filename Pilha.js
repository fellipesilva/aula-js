class Pilha {

	constructor(lista) {
		this._lista = lista;
	}

	inserir(obj) {
	    this._lista[this._lista.length] = obj;		
	}

	removerUltimo() {
	    if(this._lista.length > 0){
	        var obj = this._lista[this._lista.length - 1];
	        this._lista.splice(this._lista.length - 1,1);
	        return obj;     
	    }else{
	        alert("Não há objetos na pilha.")
	    }
	}

	lerUltimo() {
	    if(this._lista.length > 0){
	        return this._lista[this._lista.length - 1];
	    }else{
	        alert("Não há objetos na pilha.")
	    }		
	}

	get lista() {
		return this._lista;
	}	 
	/*this.lista = new Array();
	 
	    this.Inserir = function(obj){
	        this.lista[this.lista.length] = obj;        
	    }
	 
	    this.RemoverUltimo = function(){
	        if(this.lista.length > 0){
	            var obj = this.lista[this.lista.length - 1];
	            this.lista.splice(this.lista.length - 1,1);
	            return obj;     
	        }else{
	            alert("Não há objetos na pilha.")
	        }
	    }
	 
	    this.LerUltimo = function(){
	        if(this.lista.length > 0){
	            return this.lista[this.lista.length - 1];
	        }else{
	            alert("Não há objetos na pilha.")
	        }
	    }
	    */   	
}