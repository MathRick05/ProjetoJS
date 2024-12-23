const url = "https://hj654jmq.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27parceiros%27%5D%7B%0A++++nome%2C%0A++++endereco%2C%0A++++imagem%0A%7D";

window.addEventListener("load", () => carregarInfos())
function carregarInfos() {
    parceiro()
};

async function parceiro() {
    const result = await fetch(url, {
        method: "GET",
    });
    const json = await result.json();
    const container = document.querySelector("section.parceiros");
    
    for(index = 0; index < json.result.length; index++){
        const parceiro = json.result[index];
        const div = document.createElement("div");
        div.setAttribute("class", "parceiro-row");
        div.innerHTML = `
            <div class="parceiro">
                <img src="${parceiro.imagem}" alt="${parceiro.nome}">
                <h2>${parceiro.nome}</h2>
                <br>
                <p>${parceiro.endereco}</p>
            </div>
        `;
        container.appendChild(div);
    }
}