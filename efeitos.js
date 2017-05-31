window.onload = init;

function init() {

  var senha     = document.getElementById('senha');
  senha.onkeyup = validarSenha;	
}

function validarSenha() {

  var spanSenha       = document.getElementById('ExibeSenha');
  var spanValidaTamanho    = document.getElementById('ValidaTamanho');
  var spanValidaMinusculo    = document.getElementById('ValidaMinusculo');
  
  spanSenha.innerHTML = "Senha digitada: " + this.value;
  
  var tamanho = this.value.length;
  var cor     = "red";
  var minusculo = this.value.length;
  
  if (tamanho >= 8)
    cor = "green";  
  
  if ((spanValidaMinusculo.charCodeAt >= 97) && (spanValidaMinusculo.charCodeAt <= 122))
   minusculo = spanValidaMinusculo;
  
  spanValidaTamanho.innerHTML = "Quantidade de caracteres total: " + tamanho;
  spanValidaTamanho.style     = "color:" + cor;
  spanValidaTamanho = "Quantidade de caracteres minúsculos: " + minusculo;
  
}