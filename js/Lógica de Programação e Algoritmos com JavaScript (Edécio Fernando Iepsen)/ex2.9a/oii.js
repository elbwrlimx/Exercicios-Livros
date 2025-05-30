document.addEventListener("DOMContentLoaded", () => {
    const divResultado = document.getElementById("resultado");
    const formulario = document.getElementById("form1");

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const titulo = document.getElementById("input1").value;
        const duracaoMinutos = parseInt(document.getElementById("input2").value);
        const resultado = converteMinutosEmHoras(duracaoMinutos);
        
        divResultado.innerHTML = `
            <p><strong>Título:</strong> ${titulo}</p>
            <p><strong>Duração:</strong> ${resultado}</p>
        `;
    });
});

function converteMinutosEmHoras(tempoEmMinutos) {
    const horas = Math.floor(tempoEmMinutos / 60);
    const minutos = tempoEmMinutos % 60;
    return `${horas}h ${minutos}min`;
} 