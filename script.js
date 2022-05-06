const ValorInicial = $("#valor-investid")
const Tempo = $("#temp")
const Resultado = $("#res")

function OcultarRes(){
    Resultado.style.display = "none"
}
OcultarRes()
function Calcular(){
    const Valor = Number(ValorInicial.value)
    const tempo = Number(Tempo.value)
    const juros = 1.9/100
    if(Valor >= 1000 && tempo >= 12){
        Resultado.style.display = "block"
        const montante = Valor *(1 + juros)** tempo
        Resultado.innerHTML = `<p> Investindo 
        ${Valor.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}
        com o prazo de ${tempo} meses, no total você terá 
        ${montante.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}. </p>`
    } else{
        window.alert('ERRO! Preencha os dados Corretamente!')
        OcultarRes()
    }
    $("#valor-investid").value = ''
    $("#valor-investid").focus()
    $("#temp").value = ''
}