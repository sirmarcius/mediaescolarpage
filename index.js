function calcular() {
  let n1 = parseFloat(document.getElementById("nt1").value);
  let n2 = parseFloat(document.getElementById("nt2").value);
  let n3 = parseFloat(document.getElementById("nt3").value);
  let n4 = parseFloat(document.getElementById("nt4").value);

  //Converte o que foi pego do formulario pra number
  let resultado = Number((n1 + n2 + n3 + n4) / 4);
  //valida o conteudo que foi pegado no input
  if (resultado.toString() === "NaN") return;
  //sai da função caso o calculo de errado
  document.querySelector(".result").innerText =
    "\n\nA média é: " + resultado.toFixed(1);
}
function limpar() {
  document.getElementById("nt1").value = null;
  document.getElementById("nt2").value = null;
  document.getElementById("nt3").value = null;
  document.getElementById("nt4").value = null;
  let resultado = "";
  document.querySelector(".result").innerText = "\n\n" + resultado;
}
