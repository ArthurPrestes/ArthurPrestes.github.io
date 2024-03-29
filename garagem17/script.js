//adiciona um novo campo de item a pagina.
function addItemOrcamento() {
    const orcamentos = document.getElementById("orcamentos");
    const orcamento = document.querySelector(".orcamento").cloneNode(true);
    const inputs = orcamento.querySelectorAll("input");
    
    inputs.forEach(input => {
      input.value = "";
    });
    ;
    orcamentos.appendChild(orcamento);

  }

//funcao para testar se os inputs estão sendo carregados corretamente
  function showInputs() {
    let nome = document.getElementById("nome-cliente").value;
    let placa = document.getElementById("placa-carro").value;
    let modelo = document.getElementById("modelo-carro").value;
    let cor = document.getElementById("cor-carro").value;
    let telefone = document.getElementById("telefone").value;
    let itens = [];
   
    let inputs = document.querySelectorAll(".orcamento");
    inputs.forEach(input => {
      let descricao = input.querySelector("#descricao").value;
      let valor = input.querySelector("#valor").value;
      
      itens.push({ descricao, valor });
      //Esvazia os novos campos criados
      descricao = input.querySelector("#descricao").value;
      valor = input.querySelector("#valor").value;
});

    //alert para testar se as informacoes são carregadas no array
    alert(`Nome: ${nome}\nPlaca: ${placa}\nModelo: ${modelo}\nCor: ${cor}\nTelefone: ${telefone}\nItens: ${JSON.stringify(itens)}`);
  }

  //Responsavel por fazer o footer aparecer apenas quando a barra de rolagem for até em baixo
  var footer = document.getElementById("myFooter");
    window.onscroll = function() {
      if (document.body.scrollTop > document.body.clientHeight || document.documentElement.scrollTop > document.documentElement.clientHeight) {
        footer.style.display = "block";
      } else {
        footer.style.display = "none";
      }
  };

  function calcular(){
    const orcamentos = document.getElementById("orcamentos");
    const inputs = orcamentos.querySelectorAll("input");
    let totalValor = document.getElementById('valor');
    let calcular = 0;
    let resultado = document.getElementById('valorTotal');
    
    inputs.forEach(input => {
      let valor = totalValor.value;
      calcular = parseFloat(calcular) + parseFloat(valor);
      resultado.innerHTML = "Total: " + parseFloat(calcular);
    
      input.value = "";
    });
  }