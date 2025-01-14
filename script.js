document.getElementById('continueButton').addEventListener('click', function (event) {
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário

    let isValid = true; // Inicializa a validação como verdadeira
    let errorMessages = []; // Array para armazenar mensagens de erro

    // Obtém os valores dos campos
    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const number = document.getElementById('number').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');

    // Valida o campo Primeiro Nome
    if (!firstname) {
        isValid = false;
        errorMessages.push('Por favor, preencha o primeiro nome.');
    }

    // Valida o campo Sobrenome
    if (!lastname) {
        isValid = false;
        errorMessages.push('Por favor, preencha o sobrenome.');
    }

    // Valida o campo Email
    if (!email) {
        isValid = false;
        errorMessages.push('Por favor, preencha o email.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        isValid = false;
        errorMessages.push('Por favor, insira um email válido.');
    }

    // Valida o campo Celular
    if (!number) {
        isValid = false;
        errorMessages.push('Por favor, preencha o celular.');
    }

    // Valida o campo Senha
    if (!password) {
        isValid = false;
        errorMessages.push('Por favor, preencha a senha.');
    }

    // Valida o campo Confirmar Senha
    if (!confirmPassword) {
        isValid = false;
        errorMessages.push('Por favor, confirme sua senha.');
    } else if (password !== confirmPassword) {
        isValid = false;
        errorMessages.push('As senhas não coincidem.');
    }

    // Valida o campo Gênero
    if (!gender) {
        isValid = false;
        errorMessages.push('Por favor, selecione um gênero.');
    }

    // Mostra mensagens de erro, se existirem
    if (!isValid) {
        alert(errorMessages.join('\n'));
    } else {
        // Redireciona para a página de confirmação se todos os campos forem válidos
        window.location.href = 'confirmacao.html';
    }
});
