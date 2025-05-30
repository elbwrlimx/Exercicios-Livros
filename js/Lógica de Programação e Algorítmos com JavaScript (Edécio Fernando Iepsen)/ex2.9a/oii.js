document.addEventListener("DOMContentLoaded", () => {
    console.log('ok')
    let formulario = document.getElementById("form1");
    formulario.addEventListener("submit", (event) => {
        event.preventDefault()
        const input1 = document.getElementById("input1").value;
        console.log('ok')
        console.log(input1)
        const input2 = document.getElementById("input2").value
        console.log(input2)
        console.log(converteMinutosEmHoras(input2));
    })
})

function converteMinutosEmHoras(tempoEmMinutos) {
    const horas = Math.floor(tempoEmMinutos / 60);
    const minutos = tempoEmMinutos % 60;
    return `${horas}h ${minutos}min`;
}