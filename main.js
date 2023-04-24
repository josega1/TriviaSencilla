let primeraPantalla = document.getElementById("primera-pantalla");
primeraPantalla.style.display = "flex";
let segundaPatalla = document.getElementById("segunda-pantalla");
segundaPatalla.style.display = "none";
let terceraPantalla = document.getElementById("tercera-pantalla");
terceraPantalla.style.display = "none";
let cuartaPantalla = document.getElementById("cuarta-pantalla");
cuartaPantalla.style.display = "none";
let quintaPantalla = document.getElementById("quinta-pantalla");
quintaPantalla.style.display = "none";
let acc = 0;

let inputName = document.getElementById("name");
let botonStart = document.getElementById("boton-start");
let spanUserName = document.getElementById("user-name");

botonStart.addEventListener("click", () => {
  if (inputName.value.trim()) {
    primeraPantalla.style.display = "none";
    segundaPatalla.style.display = "flex";
    spanUserName.innerText = inputName.value;
  } else {
    alert("Please write your name");
  }
});

let inputSofia = document.getElementById("sofia");
let inputTimbu = document.getElementById("timbu");
let inputSkopje = document.getElementById("skopje");
let spanElection1 = document.getElementById("election1");
let spanCorrecta1 = document.getElementById("correcta1");

let form1 = document.getElementById("form1");
form1.addEventListener("submit", (event1) => {
  if (document.querySelector('input[name="respuesta1"]:checked')) {
    if (
      document.querySelector('input[name="respuesta1"]:checked').value === "Timbu") {
      acc += 1;
      spanCorrecta1.innerText = 'Correct'
    } else {
      spanCorrecta1.innerText = 'Incorrect'
      acc += 0;
    }
    segundaPatalla.style.display = "none";
    terceraPantalla.style.display = "flex";
  } else {
    alert("Selecciona alguna respuesta");
  }
  event1.preventDefault();
});



let inputBuenosAires = document.getElementById("buenos-aires");
let inputBogota = document.getElementById("bogota");
let inputDusambe = document.getElementById("dusambe");
let spanElection2 = document.getElementById("election2");
let spanCorrecta2 = document.getElementById("correcta2");

let form2 = document.getElementById('form2');
form2.addEventListener("submit", (event2) => {
  if (document.querySelector('input[name="respuesta2"]:checked')) {
    if (document.querySelector('input[name="respuesta2"]:checked').value === "Dusambe") {
      acc += 1;
      spanCorrecta2.innerText = 'Correct'
    } else {
      spanCorrecta2.innerText = 'Incorrect'
      acc += 0;
    }
    terceraPantalla.style.display = "none";
    cuartaPantalla.style.display = "flex";
    
  }else{
    alert("Selecciona alguna respuesta");
  }
  event2.preventDefault();
});

let inputVenezia = document.getElementById("venezia");
let inputCaracas = document.getElementById("caracas");
let inputRoma = document.getElementById("roma");
let spanElection3 = document.getElementById("election3");
let spanCorrecta3 = document.getElementById("correcta3");

let form3 = document.getElementById('form3');
form3.addEventListener("submit", (event3) => {
  if (document.querySelector('input[name="respuesta3"]:checked')) {
    if (document.querySelector('input[name="respuesta3"]:checked').value === "Roma") {
      acc += 1;
      spanCorrecta3.innerText = 'Correct' 
    } else {
      spanCorrecta3.innerText = 'Incorrect'
      acc += 0;
    }
    cuartaPantalla.style.display = "none";
    quintaPantalla.style.display = "flex";
  }else{
    alert("Selecciona alguna respuesta");
  }
  event3.preventDefault();
  let spanScore  = document.getElementById('score')
    spanScore.innerHTML = acc
});
let inputRestart = document.getElementById("boton-restart");

inputRestart.addEventListener("click", () => {
 
  location.reload();
});

