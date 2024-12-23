const urlProdutos = "https://hj654jmq.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27produtos%27%5D%7B%0A++%22imagem%22%3A+imagem.asset-%3Eurl%2C%0A++nome%2C%0A++++descricao%0A%7D";

window.addEventListener("load", () => carregarInfos())

function carregarInfos() {
    produto()
    sobreProdutos()
}

async function produto() {
    const result = await fetch(urlProdutos, {
        method: "GET",
    });
    const json = await result.json()
    const container = document.querySelector("div.fileira");

    for (let index = 0; index < json.result.length; index++) {
        const produto = json.result[index];
        const div = document.createElement("div");
        div.classList.add("col-3");
        div.innerHTML = `
            <br><br>
            <p>${produto.nome}</p>
            <br>
                <div id="img-nonna">
                <img src="${produto.imagem}" alt="${produto.nome}">
                </div>
            <br>
                <a href="#${produto.nome}" class="btn-saiba-mais">Saiba Mais</a>
        `;
        container.appendChild(div);
    }
}

async function sobreProdutos(){
    const result = await fetch(urlProdutos, {
        method: "GET",
    });
    
    const json = await result.json()
    const container = document.querySelector("section.sobreProd");
    for (let index = 0; index < json.result.length; index++) {
        const produto = json.result[index];
        const div = document.createElement("div");
        div.setAttribute("class", "sobre");
        
        div.innerHTML = `
            <hr color="#E9AC34">
            <br><br><br>
            <div class="small-container">
                <div class="fileira">
                    <div class="col-1">
                    <img src="${produto.imagem}" alt="${produto.nome}"/>
                    </div>
                    <div class="col-1">
                    <h1 id="mobier-h1">${produto.nome}</h1>
                    <br>
                        <small>              
                            <p>${produto.descricao}</p>
                        </small>
                        <ul>
                            <li>${produto.leite}</li>
                            <li>${produto.classificacao}</li>
                            <li>${produto.origem}</li>
                            <li>${produto.produtor}</li>
                            <li>${produto.tecnologia}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(div);
    }
}