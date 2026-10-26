// Seleciona os elementos principais
const formulario = document.getElementById("form-contato");
const resumoErros = document.getElementById("resumo-erros");

// Campos que possuem validação
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const cpf = document.getElementById("cpf");
const nascimento = document.getElementById("nascimento");
const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmar-senha");
const aceite = document.getElementById("aceite");

// Mostra mensagens de erro
function mostrarErro(campo, mensagem) {
    const erro = document.getElementById(`erro-${campo.id}`);

    campo.setAttribute("aria-invalid", "true");
    erro.textContent = mensagem;
    erro.setAttribute("role", "alert");
}

// Limpa mensagens de erro
function limparErro(campo) {
    const erro = document.getElementById(`erro-${campo.id}`);

    campo.removeAttribute("aria-invalid");
    erro.textContent = "";
    erro.removeAttribute("role");
}

// Verifica se o nome e sobrenome foram preenchidos
function validarNome() {
    const partes = nome.value.trim().split(/\s+/);

    if (nome.value.trim().length < 3 || partes.length < 2) {
        mostrarErro(nome, "Informe seu nome completo.");
        return false;
    }

    limparErro(nome);
    return true;
}

// Verifica o formato do e-mail
function validarEmail() {
    if (email.value.trim() === "") {
        mostrarErro(email, "Preencha o campo de e-mail.");
        return false;
    }

    if (!email.validity.valid) {
        mostrarErro(email, "Digite um e-mail válido.");
        return false;
    }

    limparErro(email);
    return true;
}

// Verifica os dígitos do CPF
function validarCPF() {
    const numeros = cpf.value.replace(/\D/g, "");

    if (numeros.length !== 11 || /^(\d)\1{10}$/.test(numeros)) {
        mostrarErro(cpf, "Digite um CPF válido com 11 números.");
        return false;
    }

    function calcularDigito(base, peso) {
        let soma = 0;

        for (let i = 0; i < base.length; i++) {
            soma += Number(base[i]) * (peso - i);
        }

        const resultado = (soma * 10) % 11;
        return resultado === 10 ? 0 : resultado;
    }

    const primeiro = calcularDigito(numeros.slice(0, 9), 10);
    const segundo = calcularDigito(numeros.slice(0, 10), 11);

    if (
        primeiro !== Number(numeros[9]) ||
        segundo !== Number(numeros[10])
    ) {
        mostrarErro(cpf, "O CPF informado não passou na validação.");
        return false;
    }

    limparErro(cpf);
    return true;
}

// Verifica a data de nascimento
function validarNascimento() {
    const valor = nascimento.value;

    if (!valor || !nascimento.validity.valid) {
        mostrarErro(nascimento, "Informe sua data de nascimento.");
        return false;
    }

    const data = new Date(`${valor}T00:00:00`);
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    if (data > hoje) {
        mostrarErro(nascimento, "A data não pode ser futura.");
        return false;
    }

    limparErro(nascimento);
    return true;
}

// Verifica o tamanho da senha
function validarSenha() {
    if (senha.value.length < 8) {
        mostrarErro(senha, "A senha precisa ter pelo menos 8 caracteres.");
        return false;
    }

    limparErro(senha);
    return true;
}

// Confere se as senhas são iguais
function validarConfirmacao() {
    if (confirmarSenha.value === "") {
        mostrarErro(confirmarSenha, "Repita sua senha.");
        return false;
    }

    if (confirmarSenha.value !== senha.value) {
        mostrarErro(confirmarSenha, "As senhas não correspondem.");
        return false;
    }

    limparErro(confirmarSenha);
    return true;
}

// Verifica o aceite dos termos
function validarTermos() {
    if (!aceite.checked) {
        mostrarErro(aceite, "Aceite os termos de uso para continuar.");
        return false;
    }

    limparErro(aceite);
    return true;
}

// Valida o telefone, caso tenha sido informado
function validarTelefone() {
    const telefone = document.getElementById("telefone");
    const numeros = telefone.value.replace(/\D/g, "");

    if (
        telefone.value.trim() !== "" &&
        numeros.length !== 10 &&
        numeros.length !== 11
    ) {
        mostrarErro(telefone, "Confira o telefone e o DDD.");
        return false;
    }

    limparErro(telefone);
    return true;
}

// Cria uma lista com os erros encontrados
function mostrarResumo(erros) {
    resumoErros.replaceChildren();

    const titulo = document.createElement("h2");
    titulo.textContent = "Confira os campos que precisam de atenção:";

    const lista = document.createElement("ul");

    erros.forEach(function (item) {
        const linha = document.createElement("li");
        const link = document.createElement("a");

        link.href = `#${item.campo.id}`;
        link.textContent = item.mensagem;

        linha.appendChild(link);
        lista.appendChild(linha);
    });

    resumoErros.append(titulo, lista);
    resumoErros.hidden = false;
    resumoErros.focus();
}

// Valida novamente a senha de confirmação quando necessário
senha.addEventListener("input", function () {
    if (confirmarSenha.value !== "") {
        validarConfirmacao();
    }
});

// Validação ao sair dos campos
nome.addEventListener("blur", validarNome);
email.addEventListener("blur", validarEmail);
cpf.addEventListener("blur", validarCPF);
nascimento.addEventListener("blur", validarNascimento);
senha.addEventListener("blur", validarSenha);
confirmarSenha.addEventListener("blur", validarConfirmacao);
aceite.addEventListener("change", validarTermos);

// Validação do formulário completo
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const website = document.getElementById("website");

    // Interrompe o processamento se o campo antispam estiver preenchido.
    if (website.value.trim() !== "") {
        return;
    }

    const validacoes = [
        [validarNome, nome],
        [validarEmail, email],
        [validarCPF, cpf],
        [validarNascimento, nascimento],
        [validarTelefone, document.getElementById("telefone")],
        [validarSenha, senha],
        [validarConfirmacao, confirmarSenha],
        [validarTermos, aceite]
    ];

    const erros = [];

    validacoes.forEach(function ([validar, campo]) {
        if (!validar()) {
            const elementoErro = document.getElementById(`erro-${campo.id}`);

            erros.push({
                campo: campo,
                mensagem: elementoErro.textContent
            });
        }
    });

    if (erros.length > 0) {
        mostrarResumo(erros);
        return;
    }

    resumoErros.hidden = true;
    resumoErros.replaceChildren();

    alert("Formulário validado com sucesso!");
});

// Permite navegar do resumo diretamente ao campo correspondente
resumoErros.addEventListener("click", function (evento) {
    const link = evento.target.closest("a");

    if (!link || !resumoErros.contains(link)) {
        return;
    }

    const campo = document.querySelector(link.getAttribute("href"));

    if (campo) {
        evento.preventDefault();
        campo.focus();
    }
});