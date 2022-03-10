const firstDiv = document.querySelector(".first-step");
const secondDiv = document.querySelector(".second-step");
const finalDiv = document.querySelector(".final-step");

const go = (currentStep, nextStep)=>{
    let dNone, dBlock;
    if(currentStep == 1){
        dNone = firstDiv;
    } else if(currentStep == 2){
        dNone = secondDiv;
    } else{
        dNone = finalDiv;
    }
    dNone.style.display = 'none';
    if(nextStep == 1){
        dBlock = firstDiv;
    } else if(nextStep == 2){
        dBlock = secondDiv;
    } else{
        dBlock = finalDiv;
    }
    dBlock.style.display = 'block';
}

const validate = () =>{
    let numero = document.getElementById('num');
    let quantidade = document.getElementById('qtd');
    let type = document.querySelector('input[name="tipo"]:checked').value;
    if(!numero.value || !quantidade.value){
        if(!numero.value && !quantidade.value){
            console.log("Não temos nem numero nem quantidade")
            numero.style.border = '1px solid red';
            quantidade.style.border = '1px solid red';
            console.log(type);
        }
        else if(!numero.value){
            console.log("Não temos numero")
            numero.style.border = '1px solid red';
        }
        else if(!quantidade.value){
            console.log("Não temos quantidade")
            quantidade.style.border = '1px solid red';
        }
    } else{
        go(2,3);
        numero.style.border = 'none';
        quantidade.style.border = 'none';
        const result = document.querySelector('.resultado')
        if(type=='Pares'){
            let myListPares = '<ul>';
            result.innerHTML = `Os ${quantidade.value} números pares consecutivos de ${numero.value} são:`;
            for(let i = 0; i <= parseInt(quantidade.value)*2; i++)
            {
                if(i % 2 == 0 && numero.value % 2 == 0){
                    myListPares += '<li>' + (parseInt(i) + parseInt(numero.value)) + '</li>'; 
                    //result.innerHTML = (i + parseInt(numero.value));
                } else if(i % 2 == 0 && numero.value % 2 != 0){
                    myListPares += '<li>' + (parseInt(i) + parseInt(numero.value) + parseInt(1)) + '</li>';
                    //result.innerHTML = (i + parseInt(numero.value) + 1);
                }
            }
            myListPares += '</ul>'
            result.innerHTML = `Os ${quantidade.value} números pares consecutivos de ${numero.value} são: ${myListPares} PRONTO!`;
            console.log("PRONTO!")
        }
        else if(type=='Impares'){
            let myListImpares = '<ul>';
            for(let i = 0; i <= parseInt(quantidade.value)*2; i++)
            {
                if(i % 2 != 0 && numero.value % 2 == 0){
                    myListImpares += '<li>' + (parseInt(i) + parseInt(numero.value)) + '</li>';
                } else if(i % 2 != 0 && numero.value % 2 != 0){
                    myListImpares += '<li>' + (parseInt(i) + parseInt(numero.value) + parseInt(1)) + '</li>';
                }
            }
            myListImpares += '</ul>';
            result.innerHTML = `Os ${quantidade.value} números ímpares consecutivos de ${numero.value} são: ${myListImpares} PRONTO!`;
        }  
    }
}
