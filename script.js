const adicionarPE = document.querySelector("#adicionar");
const removerPE = document.querySelector("#remover")
let index = 0;
let index2 = 0;

function onoff(){
    let hidden = document.querySelector(".formulario");
    if (index == 1){
        hidden.classList.add("hidden");

        index = 0;

    }else if(index == 0){      
        hidden.classList.remove('hidden');

        index =  1;

    }else {
        console.log("error");
    }
};

function onoff2(){

    let hidden = document.querySelector("#formulario");

    if (index2 == 1){
        hidden.classList.add("hidden");

        index2 = 0;

    }else if(index2 == 0){      
        hidden.classList.remove('hidden');

        index2 =  1;

    }else {
        console.log("error");
    }
};

//PE == Primeira Etapa
adicionarPE.addEventListener ("click", function PE(e){
    e.preventDefault();

    if (index2 == 1){
        onoff2();
        onoff();
    }else{
        onoff();
    }

    })


removerPE.addEventListener ("click", function PE2(e){
    e.preventDefault();

    if (index == 1){
        onoff();
        onoff2();
    }else{
        onoff2();
    }

});
