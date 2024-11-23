function redirecionar(select) {
    var url = select.value;
    if (url) {
        window.location.href = url;
    }
    select.selectedIndex = 0;
}

function mostrarFormulario(atual, proximo) {
    document.getElementById(atual).style.display = 'none';
    document.getElementById(proximo).style.display = 'flex';
}



function cadastrar() {
    var nome = document.getElementById("nome_input").value;
    var email = document.getElementById("email_input").value;
    var senha = document.getElementById("senha_input").value;

    if (nome === "" || email === "" || senha === "") {
        alert("Preencha todos os campos!");
        return;
    }

    var listaEspecialidadesSelecionadas = [];
    var checkboxes = document.querySelectorAll(".especialidades input[type=checkbox]:checked");

    for (var i = 0; i < checkboxes.length; i++) {
        listaEspecialidadesSelecionadas.push(checkboxes[i].id);
    }

    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Senha:", senha);
    console.log("Especialidades Selecionadas:", listaEspecialidadesSelecionadas);

    alert("Cadastro realizado com sucesso!");
}

document.addEventListener("DOMContentLoaded", criarEspecialidades);
