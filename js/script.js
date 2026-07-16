

/** Novo */





let listaProdutos = [];
let btn = document.getElementById('btn');
let tbody = document.getElementById("tbody");
let id = 1;

window.addEventListener("DOMContentLoaded", () => {
carregarProdutos();

});

function carregarProdutos() {
 let maiorId = 0
    
    listaProdutos = JSON.parse(localStorage.getItem('listaProdutos') || '[]');

    listaProdutos.forEach((produto) => {
        if(produto.id > maiorId) {
            maiorId = produto.id
        }
    });
    id = maiorId + 1
    renderizarTabela()
}

btn.onclick = (event) => {
    event.preventDefault()
    adicionarProduto()
}

function adicionarProduto() {
    let digitaProduto = document.getElementById('produto').value;
    let valorProduto = document.getElementById('valor').value;

    let produtos = {
        id: id,
        nome: digitaProduto,
        valor: valorProduto
    }

    listaProdutos.push(produtos);
    id++;

     renderizarTabela();
    salvarLocalStorage();
}

function renderizarTabela(){
    tbody.innerHTML = "";
    listaProdutos.forEach((produto) => {
        console.log(produto.nome);
        console.log(produto.valor);

        let img = document.createElement('img');
        img.src = 'img/editar.png';
        let imgDelete = document.createElement('img');
        imgDelete.src = 'img/perto.png';
        imgDelete.setAttribute("onclick", "deletar("+ produto.id + ")");

        let tr = tbody.insertRow();
        let td_id = tr.insertCell();
        let td_produto = tr.insertCell();
        let td_valor = tr.insertCell();
        let td_acoes = tr.insertCell();

        td_id.textContent = produto.id
        td_produto.textContent = produto.nome;
        td_valor.textContent = produto.valor;
        
        td_id.classList.add('center');
        td_acoes.appendChild(img);
        td_acoes.appendChild(imgDelete);
        
    })
}


function salvarLocalStorage(){
    localStorage.getItem('listaProdutos') || '[]';

    localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));
    console.log(listaProdutos)
}

function deletar(id) {

    for(let i = 0; i < listaProdutos.length; i++) {
       if(listaProdutos[i].id == id) {
         listaProdutos.splice(i, 1);
         renderizarTabela()
         salvarLocalStorage();
       }
    }
}


