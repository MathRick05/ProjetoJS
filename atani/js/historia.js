const url = "https://hj654jmq.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27history%27%5D%7B%0A++%22imagem%22%3A+%0A++++imagem.asset-%3Eurl%2C%0A++++title%2C%0A++++descricao%0A%7D";

window.addEventListener("load", () => carregarInfos());

function carregarInfos() {
    historia();
};

async function historia() {
    const result = await fetch(url, {
        method: "GET",
    });

    const json = await result.json();
    const container = document.querySelector("section.historia");

    for (let index = 0; index < json.result.length; index++) {
        const history = json.result[index];
        const div = document.createElement("div");
        div.setAttribute("class", "sobre");
        div.innerHTML = `
            <div class="small-container">
                <div class="fileira">
                    <div class="col-1">
                    <img src="${history.imagem}" alt="" id="cirlei-img"/>
                    </div>
                    <div class="col-1">
                    <h1>${history.title}</h1>
                    <br><br>
                        <small>${history.descricao}</small>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(div);
    };
};