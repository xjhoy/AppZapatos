(function(){
	
	/** Obtener los valores de los inputs de cada par*/
	var p35 = document.getElementById("inp35"),
		p36 = document.getElementById("inp36"),	
		p37 = document.getElementById("inp37"),	
		p38 = document.getElementById("inp38"),	
		p39 = document.getElementById("inp39"),	
		p40 = document.getElementById("inp40"),	
		p41 = document.getElementById("inp41");
	
	/** Obtener el numero de vueltas del input*/
	var vueltas = document.getElementById("inpVueltas");
	
	var horma = document.getElementById("horma");

	/** Obtenemos la tabla*/
	var tabla = document.getElementById("tabla");

	/** Agregamos el evento click al boton calcular*/
	var btn = document.getElementById("btn-calcular");
	btn.addEventListener("click",function(){
	
			/* Creamos las variables para guardar el resultado de la funcion calcularVueltas**/
			var a35,a36,a37,a38,a39,a40,a41;
			var mVueltas = parseInt(vueltas.value);

			/** Llamamos a todas las funciones y guardamos el arreglo que devuelve en una variable*/
			a35 = calcularVueltas(parseInt(p35.value));
			a36 = calcularVueltas(parseInt(p36.value));		
			a37 = calcularVueltas(parseInt(p37.value));		
			a38 = calcularVueltas(parseInt(p38.value));		
			a39 = calcularVueltas(parseInt(p39.value));		
			a40 = calcularVueltas(parseInt(p40.value));		
			a41 = calcularVueltas(parseInt(p41.value));
			
			var cont = 1;

			for (var i = 0; i < mVueltas; i++) {
				var tRow = document.createElement("tr");
				
				var tDato = document.createElement("td");
				tDato.textContent = horma.value;
				tRow.appendChild(tDato);

				tDato= document.createElement("td");
				tDato.textContent = cont++;
				tRow.appendChild(tDato);

				tDato = document.createElement("td");
				tDato.textContent = a35[i];
				tRow.appendChild(tDato);
				
				tDato = document.createElement("td");
				tDato.textContent = a36[i];
				tRow.appendChild(tDato);
				
				tDato = document.createElement("td");
				tDato.textContent = a37[i];
				tRow.appendChild(tDato);
				
				tDato = document.createElement("td");
				tDato.textContent = a38[i];
				tRow.appendChild(tDato);
				
				tDato = document.createElement("td");
				tDato.textContent = a39[i];
				tRow.appendChild(tDato);
				
				tDato = document.createElement("td");
				tDato.textContent = a40[i];
				tRow.appendChild(tDato);
				
				tDato = document.createElement("td");
				tDato.textContent = a41[i];
				tRow.appendChild(tDato);
					

				tabla.appendChild(tRow);
			};

	});// Fin funcion click boton

	function calcularVueltas(Pares){
		var arreglo = new Array(mVueltas);
		var cont = 0;
		var dato;
		var mVueltas = parseInt(vueltas.value);
		var pares = Pares;
		var temp;
		var unidad = 1;
		for (var i = 0; i < Pares; i++) {
			if(cont < mVueltas){
				if(arreglo[cont] == null){
					arreglo[cont] = 0;
				}
				temp = arreglo[cont];
				arreglo[cont] = temp + unidad;
				cont++;
				
			}else{
				cont = 0;
				temp = arreglo[cont];
				arreglo[cont] = temp + unidad;
				cont++;
			}	
		}
		return arreglo;		
	}// fin calcularVueltas
}());