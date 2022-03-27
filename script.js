let valor = document.getElementById('valorinv')
let prazo = document.getElementById('prazoinv');
let res = document.getElementById('res');
let rentabilidade = 1.8;

function simular(){
     let val = Number (valor.value);
     let praz = Number (prazo.value);
     let juros = Number(rentabilidade/100);

     if(val >= 1000 && praz >= 12 ){
         let montante = val*(1 + juros)**praz
         res.innerHTML = `<p> Investindo ${val.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} no prazo de ${praz} meses
            você estará com ${montante.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}.</p>`;
     } else{
            window.alert('ERRO!!');
        }
valorinv.value = ''
valorinv.focus()
 prazoinv.value = ''
prazoinv.focus()
 }