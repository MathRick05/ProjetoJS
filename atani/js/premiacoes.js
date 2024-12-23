const url = "https://hj654jmq.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27premiacoes%27%5D%7B%0A++++title%2C%0A++++image%0A%7D";

window.addEventListener("load", () => carregarInfos());

function carregarInfos() {
    premiacoes()
};

async function premiacoes() {
    const result = await fetch(url, {
        method: "GET",
    });
    const json = await result.json()
    const container = document.querySelector("section.Premiações");

    for (let index = 0; index < json.result.length; index++) {
        const premiacao = json.result[index];
        const div = document.createElement("div");
        div.innerHTML = `
            <article class="queijos">
              <br>
              <p>${premiacao.title}</p>
              <article class="alinhar">
                <img src="${premiacao.image}" alt="${premiacao.title}">
                <img src="${premiacao.image}" alt="${premiacao.title}">
              </article>
            </article>
        `;
        container.appendChild(div);
    }
};