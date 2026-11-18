function calcularSoma() {
    const v1 = document.getElementById("valor1").value;
    const v2 = document.getElementById("valor2").value;

    fetch("/api/soma", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ valor1: v1, valor2: v2 })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("resultado").innerText = "Resultado: " + data.resultado;
    });
}

function calcularSubtracao() {
    const v1 = document.getElementById("valor1").value;
    const v2 = document.getElementById("valor2").value;

    fetch("/api/subtracao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ valor1: v1, valor2: v2 })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("resultado").innerText = "Resultado: " + data.resultado;
    });
}

function calcularMultiplicacao() {
    const v1 = document.getElementById("valor1").value;
    const v2 = document.getElementById("valor2").value;
    const resultado = document.getElementById("resultado");

    if (v1 === "" || v2 === "") {
        resultado.innerText = "Digite os dois valores.";
        return;
    }

    fetch("/api/multiplicacao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ valor1: v1, valor2: v2 })
    })
    .then(res => res.json())
    .then(data => {
        resultado.innerText = data.erro || "Resultado: " + data.resultado;
    })
    .catch(() => {
        resultado.innerText = "Não foi possível calcular. Tente novamente.";
    });
}

function calcularDivisao() {
    const v1 = document.getElementById("valor1").value;
    const v2 = document.getElementById("valor2").value;
    const resultado = document.getElementById("resultado");

    if (v1 === "" || v2 === "") {
        resultado.innerText = "Digite os dois valores.";
        return;
    }

    fetch("/api/divisao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ valor1: v1, valor2: v2 })
    })
    .then(res => res.json())
    .then(data => {
        resultado.innerText = data.erro || "Resultado: " + data.resultado;
    })
    .catch(() => {
        resultado.innerText = "Não foi possível calcular. Tente novamente.";
    });
}
