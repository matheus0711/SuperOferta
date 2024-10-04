// JavaScript para a página de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    // Obtém os valores dos campos
    const name = document.getElementById('name').value;
    const cpf = document.getElementById('cpf').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;
    const shift = document.getElementById('shift').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Cria a mensagem de feedback
    const feedbackMessage = `
        <p>Dados salvos com sucesso!</p>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>CPF:</strong> ${cpf}</p>
        <p><strong>Data de Nascimento:</strong> ${dob}</p>
        <p><strong>Endereço:</strong> ${address}</p>
        <p><strong>Turno de Trabalho:</strong> ${shift}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Número de Telefone:</strong> ${phone}</p>
    `;

    // Exibe a mensagem de feedback
    const feedbackElement = document.getElementById('feedbackMessage');
    feedbackElement.innerHTML = feedbackMessage;
    feedbackElement.style.display = 'block'; // Mostra a mensagem
    
    // Limpa o formulário
    document.getElementById('loginForm').reset();

    // Redireciona para a página de pagamento após 3 segundos
    setTimeout(function() {
        window.location.href = 'pagamento.html'; // Página de pagamento
    }, 3000); // Aguarda 3 segundos para mostrar a mensagem antes de redirecionar

});


