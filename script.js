document.getElementById("toggleMenu").addEventListener("click", function() {
    var sidebar = document.querySelector(".sidebar");
    var overlay = document.querySelector(".overlay"); // Seleciona a sobreposição
    sidebar.classList.toggle("hidden");
    overlay.classList.toggle("visible"); // Adiciona ou remove a classe visible
});

// Fecha o menu e a sobreposição ao clicar na sobreposição
document.querySelector(".overlay").addEventListener("click", function() {
    var sidebar = document.querySelector(".sidebar");
    var overlay = document.querySelector(".overlay");
    sidebar.classList.add("hidden");
    overlay.classList.remove("visible"); // Remove a classe visible
});

function handleCheckout(url) {
    let mensagem;
    const numeroWhatsApp = "41991385134"; // Substitua pelo número do promotor de vendas
    if (url === 'mensal basico') { 
        mensagem = "Olá, desejo saber mais sobre o site básico mensal.";
    } else if (url === 'anual basico') {
        mensagem = "Olá, desejo saber mais sobre o site básico anual.";
    } else if (url === 'mensal pro') {
        mensagem = "Olá, desejo saber mais sobre o site pro mensal.";
    } else if (url === 'anual pro') {
        mensagem = "Olá, desejo saber mais sobre o site pro anual.";
    } else {
        console.error("URL não reconhecida:", url);
        return; // Sai da função se a URL não for reconhecida
    }

    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    // Redireciona para o WhatsApp
    window.open(urlWhatsApp, "_blank");
}

function handleSelect(url) {
    // Redireciona para a página de plano
    window.location.href = url; // Substitua pelo URL da sua página de plano
}

function handleSelect(url) {
    // Redireciona para a página de compra
    window.location.href = url; // Substitua pelo URL da sua página de compra
}

function updateProducts(plan) {
    const monthlyProducts = document.getElementById('monthlyProducts');
    const annualProducts = document.getElementById('annualProducts');

    if (plan === 'monthly') {
        monthlyProducts.style.display = 'flex';
        annualProducts.style.display = 'none';
    } else { 
        monthlyProducts.style.display = 'none';
        annualProducts.style.display = 'flex';
    }
}
