function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa");
    let valorPesquisa = document.getElementById
    ("campo-pesquisa").value;

     // se valorPesquisa for uma string sem nada
     if (!valorPesquisa) {
        let mensagemErro = document.createElement('p');
        mensagemErro.textContent = "Você precisa digitar um nome de tecnologia da programação";
        mensagemErro.classList.add('mensagem-erro'); // Adiciona a classe para estilizar
        section.appendChild(mensagemErro);
        return;
    }

    // Inicializa uma string vazia para armazenar os resultados formatados em HTML
    let resultados = "";
    // Converter o valor da pesquisa para minúsculo
  valorPesquisa = valorPesquisa.toLowerCase();

    // Itera sobre cada item (dado) na lista de dados
    for (let dado of dados) {
        //se titulo inclubes campoPesquisa
         if (dado.titulo.toLowerCase().includes(valorPesquisa) ) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
        `;
         } 
    }

    // Atribui o HTML construído à seção, atualizando a página com os resultados
    section.innerHTML = resultados;

}



