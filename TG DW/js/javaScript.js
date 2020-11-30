function clickStar() {
  var y = document.getElementById("star");
      if (y.style.display === "block") {
      y.style.display = "none";
      } else {
      y.style.display = "block";
  }
  
}

function clickStar1() {
  var y = document.getElementById("star1");
      if (y.style.display === "block") {
      y.style.display = "none";
      } else {
      y.style.display = "block";
  }
  
}

function clickStar2() {
  var y = document.getElementById("star2");
      if (y.style.display === "block") {
      y.style.display = "none";
      } else {
      y.style.display = "block";
  }
  
}

function clickStar3() {
  var y = document.getElementById("star3");
      if (y.style.display === "block") {
      y.style.display = "none";
      } else {
      y.style.display = "block";
  }
  
}

function clickStar4() {
  var y = document.getElementById("star4");
      if (y.style.display === "block") {
      y.style.display = "none";
      } else {
      y.style.display = "block";
  }
  
}



function validaUser(){
  const par = document.getElementById("loginResultado");
  const nome = document.getElementById("nome");
  if (nome.value == "Diogo"){
    const pass = document.getElementById("pass");
    if (pass.value == "3000"){
      par.textContent = "Login bem sucedido";
      var x = document.getElementById("panel");
      if (x.style.display === "block") {
      x.style.display = "none";
      } else {
      x.style.display = "block";
  }
      return;
      
    }
  }
  if (nome.value == "Pedro") {
    const pass = document.getElementById("pass");
    if (pass.value == "1234"){
      par.textContent = "Login bem sucedido";
      var x = document.getElementById("panel");
      if (x.style.display === "block") {
      x.style.display = "none";
      } else {
      x.style.display = "block";
      window.open("PagAdministrador.html");
  }
      return;
      
    }
  }
  par.textContent = "Login falhou!";
}

function registaUser(){
  const reg = document.getElementById("RegResultado");
  reg.textContent = "O registo foi bem sucedido";
}

function atualizaUser(){
  const reg = document.getElementById("AtuaUser");
  reg.textContent = "A atualização foi bem sucedido";
}

function AdicionarFilme(){
  const reg = document.getElementById("AdiFilme");
  reg.textContent = "A adição foi bem sucedida";
}

function RemoverFilme(){
  const reg = document.getElementById("removFilme");
  reg.textContent = "Foi removido com sucesso";
}