document.addEventListener('DOMContentLoaded', function () {
    // Cria o elemento do popup
    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.background = '#096784ff';
    popup.style.padding = '10px';
    popup.style.boxShadow = '0 5px 10px rgba(0,0,0,0.2)';
    popup.style.zIndex = '1000';
    popup.innerHTML = `
    <h2>Olá, Pescador!</h2>
    <p>Bem-vindo ao mundo da pesca!</p>
    <div>
      <button id="gera-cor1">Começar</button>
      <button id="closePopup">Fechar</button>
    </div>
    `;

    // Adiciona o popup ao body
    document.body.appendChild(popup);

    // Fecha o popup ao clicar no botão
    document.getElementById('closePopup').onclick = function () {
        popup.remove();
    };
    
  function mudarCorPopup() {
    const corAleatoria = '#' + Math.floor(Math.random()*16777215).toString(16);
    popup.style.backgroundColor = corAleatoria;
  }
  document.getElementById('gera-cor1').addEventListener('click', mudarCorPopup);

    document.getElementById('Mudar-cor').addEventListener('click', function() {
  const corAleatoria = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = corAleatoria;
    });

});