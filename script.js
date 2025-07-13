function abrirModal(botao) {
      // Pega os dados do botão clicado
      const imagem = botao.getAttribute('data-img');
      const titulo = botao.getAttribute('data-title');
      const descricao = botao.getAttribute('data-desc');

      // Insere no modal
      document.getElementById('modal-img').src = imagem;
      document.getElementById('modal-title').innerText = titulo;
      document.getElementById('modal-desc').innerText = descricao;

      // Exibe o modal
      document.getElementById('modal').style.display = 'block';
    }

    function fecharModal() {
      document.getElementById('modal').style.display = 'none';
    }

    // Fecha o modal ao clicar fora
    window.onclick = function(event) {
      const modal = document.getElementById('modal');
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }


    