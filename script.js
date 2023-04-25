function calcular() {
	var contratos = document.getElementById("contratos").value;
	var tipo = document.getElementById("tipo").value;
	var pontos = document.getElementById("pontos").value;

	var valorContrato = 0;
	var valorPonto = 0;

	if (tipo === "indice") {
		valorContrato = 1;
		valorPonto = 5;
	} else if (tipo === "dolar") {
		valorContrato = 5;
		valorPonto = 0.5;
	}

	var valor = 0;

	if (contratos > 0 && pontos > 0) {
		var pontosCalculo = Math.floor(pontos / valorPonto) * valorPonto;
		valor = pontosCalculo * contratos * valorContrato / valorPonto;
	}

	var resultado = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

	document.getElementById("resultado").value = resultado;
}
