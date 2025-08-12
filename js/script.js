function executar() {
    let resultado = "";

    for(let contador = 1; contador <= 3; contador++) {

    let nome = document.getElementById("nome" + contador).value;
    let telefone = document.getElementById("telefone" + contador).value;
                
        if(telefone.startsWith("11")) {
            resultado += nome + "<br>";
        }
    }
            
    if(resultado === "") {

        document.getElementById("resultado").innerHTML = "Nenhum usuário com DDD 11 encontrado.";
    } else {

        document.getElementById("resultado").innerHTML = "Usuários com DDD 11:<br>" + resultado;

    }
}