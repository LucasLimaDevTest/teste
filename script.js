var noticias = [];
var numNoticias = 0;
function adicionarNoticia(){
	var inNoticia = document.getElementById('inNoticia')
	var noticia = inNoticia.value;
	if(noticia == ''){
		alert('Informe um conteúdo...');
		inNoticia.focus();
		return;
	}
	numNoticias++
	document.getElementById('outWarning').textContent = 'Notícias Cadastradas: ' + numNoticias;
	noticias.push(noticia);
	inNoticia.value = '';
	inNoticia.focus();
	return;

}
function listarNoticias(){
	var quantidadeNoticias = Number(prompt('Digite a quantidade de notícias a ser visualizadas'));
	var noticiasCopia = noticias.slice();
	noticiasCopia.reverse();
	if(quantidadeNoticias > noticiasCopia.length/2){
		alert('Digite um valor menor ou igual a metade de notícias cadastradas');
		return;
	}
	if(noticiasCopia.length == 0){
		alert('Não há notícias cadastradas para Listar');
		return
	}
	var lista = '';
	for(i = 0; i < quantidadeNoticias; i++){
		lista = lista + noticiasCopia.length + '°) ' + noticiasCopia.shift() +'\n';
	}
	document.getElementById('outListar').textContent = quantidadeNoticias + ' Últimas Notícias' +'\n------------------------------------------------\n'+ lista;
	var inNoticia = document.getElementById('inNoticia');
	inNoticia.value =''
	inNoticia.focus();
	return;
}
var btAdicionar = document.getElementById('btAdicionar');
btAdicionar.addEventListener('click', adicionarNoticia);
var btListar = document.getElementById('btListar');
btListar.addEventListener('click', listarNoticias);
/*var candidatos = [];
function adicionarCandidatos(){
	var inCandidato = document.getElementById('inCandidato');
	var inNum = document.getElementById('inNum');
	var aluno = inCandidato.value;
	var num = Number(inNum.value);
	if(aluno == '' || isNaN(num) ){
		alert('Valor invalidado');
		inCandidato.focus();
		return
	}
	candidatos.push({aluno: aluno, num: num});
	candidatos.sort(function (a,b){
		return a.aluno - b.aluno;
	});
	inCandidato.value = '';
	inNum.value = ''
	inCandidato.focus();
	return;
	console.log(candidatos);
}
function listarCandidatos(){
	if(candidatos.length == 0){
		alert('Não candidatos há serem listados');
		return;
	}
	var lista = '';
	for(var i = 0; i < candidatos.length; i++){
		lista = lista + candidatos[i].aluno + ' - ' + candidatos[i].num+' acertos';
		lista = lista + '\n'; 
	}
	document.getElementById('outListar').textContent = lista;
}
function listarAprovados(){
	var notaMaxima = Number(prompt('Número de aceitos para aprovação?: '));
	if(notaMaxima == 0 || isNaN(notaMaxima)){
		alert('Digite um valor númerico que seja maior que zero');
	}
	var candidatosCopia = candidatos.slice();
	candidatosCopia.sort(function(a, b){
		return b.num - a.num;
	})
	var lista = '';
	for(var i = 0 ; i < candidatos.length ; i++){
		if(candidatosCopia[i].num >= notaMaxima){
			lista = lista + candidatosCopia[i].aluno + ' - ' + candidatosCopia[i].num+' acertos'+'\n';
		}
	}
	document.getElementById('outListar').textContent = lista;

}
var btAdicionar = document.getElementById('btAdicionar');
btAdicionar.addEventListener('click', adicionarCandidatos);
var btListar = document.getElementById('btListar');
btListar.addEventListener('click', listarCandidatos);
var btVerificar = document.getElementById('btVerificar');
btVerificar.addEventListener('click', listarAprovados);*/

/*var numeros = [];
function adicionarNumeros(){
	var inNum = document.getElementById('inNum');
	var outNum = document.getElementById('outNum');
	var num = Number(inNum.value);
	if(isNaN(num)){
		alert('Digite um número');
		inNum.focus();
		return
	}
	var valoresAdicionado;
	if(numeros.indexOf(num) >= 0){
		alert('O valor já foi digitado, digite outro valor');
		inNum.focus();
		return;
	}
	else{
		numeros.push(num);
		for(i = 0; i < numeros.length; i++){
		valoresAdicionados = (numeros.join(', '));
		}
		outNum.textContent = 'Numeros: ' + valoresAdicionados;
		inNum.value = '';
		inNum.focus();
		return;
	}
	console.log(valoresAdicionados);
	
}
function ordernarValores(){
	var inNum = document.getElementById('inNum');
	if(numeros.length == 0){
		alert('Nenhum valor foi adicionado');
		inNum.focus();
		return
	}
	var numerosCopia = numeros.slice();
	numerosCopia.sort( function(a, b){
		return a - b;
	});
	if(numeros.join() == numerosCopia.join()){
		document.getElementById('outWarning').textContent = 'Os números estão em ordem decrescente';
	}
	else{
		document.getElementById('outWarning').textContent = 'Atenção... Números não estão em ordem decrescente';	
	}
}
var btAdicionar = document.getElementById('btAdicionar');
btAdicionar.addEventListener('click', adicionarNumeros);
var btVerificar = document.getElementById('btVerificar');
btVerificar.addEventListener('click', ordernarValores);*/
/*var clubes = [];
function adicionarClube(){
	var inClubes = document.getElementById('inClube');
	var clube = inClubes.value;
	if(clube == ''){
		alert('Digite o nome do clube');
		inClubes.focus();
		return
	}
	clubes.push(clube);
	inClubes.value = ''
	inClubes.focus();
	return;
}
function listarClube(){
	if(clubes.length == 0){
		alert('Nenhum Clube foi adicionado ainda');
		return
	}
	var lista = '';
	for(var i = 0 ; i < clubes.length; i++){
		lista = lista + (i + 1) + '. ' + clubes[i] + '\n';
	}
	document.getElementById('outLista').textContent = lista;
}
function montarTabela(){
	if(clubes.length == 0){
		alert('Não há times para montar uma tabela');
		return;
	}
	var lista = '';
	if(clubes.length % 2 != 0){
		alert('Não há clubes o suficiente para montar uma tabela');
	}
	else{
		for(i = 0 ; i < clubes.length; i++){
			var time1 = clubes.shift();
			lista = lista + time1 + ' x ' + clubes.pop()+'\n';
		}
		time1 = clubes.shift();
		lista = lista + time1 + ' x ' + clubes.pop()+'\n';
	}
	document.getElementById('outLista').textContent = lista;
}
var btAdicionar = document.getElementById('btAdicionar');
btAdicionar.addEventListener('click', adicionarClube);
var btListar = document.getElementById('btListar');
btListar.addEventListener('click', listarClube);
var btMontar = document.getElementById('btMontar');
btMontar.addEventListener('click', montarTabela);*/