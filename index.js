
function calcular() {
  
  let n1 = parseFloat(document.getElementById("nt1").value);
  let n2 = parseFloat(document.getElementById("nt2").value);
  let n3 = parseFloat(document.getElementById("nt3").value);
  let n4 = parseFloat(document.getElementById("nt4").value);
  
  let resultado = (n1+n2+n3+n4)/4;

  if (!resultado) {

    document.querySelector(".result").innerHTML = "\n\n " + resultado;
  
  }

  else {  

    document.querySelector(".result").innerHTML = "\n\nA média é: " + resultado.toFixed(2);

}
}

function limpar() {
  
  document.getElementById("nt1").value = null;
  document.getElementById("nt2").value = null;
  document.getElementById("nt3").value = null;
  document.getElementById("nt4").value = null; 

  let resultado = "";

  document.querySelector(".result").innerHTML = "\n\n " + resultado;
  
}


