const $ = document.querySelector.bind(document)

function TabNavigation(){

    const html = {
        links: [...$('.tab-links').children, ...$('.tab-links1').children, ...$('.tab-links2').children, ...$('.tab-links3').children],
        contents: [...$('.tab-content').children],
        openTab: $('[data-open]')
    }

    function RemoverTodosContents(){
        html.contents.forEach( section =>{
            section.style.display = "none"
        })
    }

    function RemoverClassesAtivas(){
        html.links.forEach(tab => {
            tab.className = tab.className.replace(" active", "")
        })
    }

    function MostrarTabClicada(id){
        RemoverTodosContents()
        RemoverClassesAtivas()

        const TabConteúdo = $('#' + id)
        TabConteúdo.style.display = "block"
    }

    function SelecionarTab(event){
        const Alvo = event.currentTarget
        MostrarTabClicada(Alvo.dataset.id)

        Alvo.className += " active"
    }

    function OuvindoAsMudanças(){
        html.links.forEach(tab =>{
            tab.addEventListener('click', SelecionarTab)
        })
    }

    function init(){
        RemoverTodosContents()
        OuvindoAsMudanças()

        html.openTab.click()
    }

    return{
        init
    }

}

window.addEventListener('load', () =>{
    const tabNavigation = TabNavigation()
    tabNavigation.init()
})

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