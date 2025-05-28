const adicionarPE = document.querySelector("#adicionar");


//PE == Primeira Etapa
adicionarPE.addEventListener ("click", function PE(e){
    e.preventDefault();

    let hidden = document.querySelector(".hidden");
    hidden.classList.remove('hidden');
});