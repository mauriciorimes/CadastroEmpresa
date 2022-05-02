let fornecedores = [];

let btnIncluir = document.querySelector("#btnIncluir");
let bodyFornecedor = document.querySelector("#bodyFornecedor");
let inpRazaoSocial = document.querySelector("#inpRazaoSocial");
let inpEmail = document.querySelector("#inpEmail");
let inpPrazoDeEntrega = document.querySelector("#inpPrazoDeEntrega");

function limpar() {
    inpRazaoSocial.value = "";
    inpEmail.value = "";
    inpPrazoDeEntrega.value = "";
}

function exibir() {
    bodyFornecedor.innerHTML = "";

    for (let i = 0; i < fornecedores.length; i++) {
        let tr = document.createElement("tr");
        let tdId = document.createElement("td");
        let tdRazaoSocial = document.createElement("td");
        let tdEmail = document.createElement("td");
        let tdPrazoDeEntrega = document.createElement("td");
        let tdMargemPrazoEntrega = document.createElement("td");

        let f = fornecedores[i];

        tdId.innerText = f.id;
        tdRazaoSocial.innerText = f.razaoSocial;
        tdEmail.innerText = f.email;
        tdPrazoDeEntrega.innerText = f.prazoDeEntrega;
        tdMargemPrazoEntrega.innerText = f.MargemPrazoEntrega();

        tr.appendChild(tdId);
        tr.appendChild(tdRazaoSocial);
        tr.appendChild(tdEmail);
        tr.appendChild(tdPrazoDeEntrega);
        tr.appendChild(tdMargemPrazoEntrega);

        bodyFornecedor.appendChild(tr);

    }
}


btnIncluir.addEventListener("click", function() {
    let f = new Fornecedor();
    f.id = fornecedores.length + 1;
    f.razaoSocial = inpRazaoSocial.value;
    f.email = inpEmail.value;
    f.prazoDeEntrega = inpPrazoDeEntrega.value;

    fornecedores.push(f);
    exibir();
    limpar();
    inpRazaoSocial.focus();
});