// Inseriamo in pagina l’immagine della lampadina 
// spenta che trovate in allegato e accanto un 
// bottone con la scritta “Accendi”.

// Al click del bottone, la lampadina dovrà accendersi 
// (dovremo quindi utilizzare l’immagine della lampadina accesa, 
// sempre in allegato)

const btnElem = document.querySelector("button");
const img = document.querySelector("img");
let acceso = false;
btnElem.addEventListener("click", function(){
    
    if(acceso === true){
        img.src = "./img (3)/img/white_lamp.png";
        btnElem.innerText = "Accendi";
        acceso = false;
    } else{
        img.src = "./img (3)/img/yellow_lamp.png";
        btnElem.innerText = "Spengi";
        acceso = true;
    }
})