const $ = document.querySelector.bind(document)

function TabNavigation(){

    const html = {
        links: [...$('.tab-links').children, ...$('.tab-links1').children, ...$('.tab-links2').children],
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