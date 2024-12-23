const url = "https://hj654jmq.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27avaliacoes%27%5D%7B%0A++++nome%2C%0A++++comentario%2C%0A++++nota%0A%7D";

window.addEventListener("load", () => carregarInfos());

function carregarInfos() {
    avaliacao();
};

async function avaliacao() {
    const result = await fetch(url, {
        method: "GET",
    });

    const json = await result.json();
    const container = document.querySelector("div.reviews-carousel");

    for(let index = 0; index < json.result.length; index++){
        const avaliacao = json.result[index];
        const div = document.createElement("div");
        div.setAttribute("class", "reviews");
        div.innerHTML = `
            <div class="review-card">
                <div class="user-info">
                    <div class="user-details">
                        <h3>${avaliacao.nome || "Cliente Anônimo"}</h3>
                        <p>Nota: ${avaliacao.nota || "Não avaliado"}</p>
                    </div>
                </div>
                <p class="review-text">${avaliacao.comentario || "Nenhum comentário disponível."}</p>
            </div>
        `;

        console.log(container);
        container.appendChild(div);
    };
    
}


