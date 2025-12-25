document.addEventListener("submit", getData);

var nam = document.getElementById("nome");
var age = document.getElementById("idade");

// Validar dados de entrada
function getData(event){
    event.preventDefault();

    if(nam.value.length < 1 || !age.value){
        alert("Por favor, preencha os campos corretamente.");
    }else{
        nome = nam.value;
        idade = age.value;

        showData(nome, idade);
    }   
}

function showData(nome, idade){
    alert(`Nome: ${nome}\nIdade: ${idade}`);
}