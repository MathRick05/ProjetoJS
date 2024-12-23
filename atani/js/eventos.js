const url = "https://hj654jmq.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27eventos%27%5D%7B%0A++++title%2C%0A++++description%2C%0A++++image%2C%0A++++location%2C%0A++++date%0A%7D";

window.addEventListener("load", () => carregarEventos())

function carregarEventos() {
    eventos();
};

async function eventos() {

    const result = await fetch(url, {
        method: "GET",
    });
    const json = await result.json()
    const container = document.querySelector("section.agendamentos");

    for (let index = 0; index < json.result.length; index++) {
        const evento = json.result[index];
        const div = document.createElement("div");
        div.classList.add("info");
        div.innerHTML = `
                <div>
                    <div class="mais-info">
                        <h1>${evento.title}</h1>
                        <p>
                            ${evento.description};
                        </p>
                    </div>
                    <br>
                    <div id="btn"> 
                        <a href="https://www.toledo.pr.gov.br/turistow/" class="btn">Confira a propriedade</a>
                    </div>
                    <div class="images">
                        <img src="${evento.image}" class="${evento.title}">
                    </div>
                </div>
        `;
        container.appendChild(div);
    }

};