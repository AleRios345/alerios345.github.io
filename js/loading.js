const containerLoading = document.querySelector('.main_container');
const loaderSpinners = document.querySelectorAll('.spinner-grow');
const primaryURl = location.href;
let contador = 0;


document.addEventListener('DOMContentLoaded', ()=>{
    loaderSpinners[0].classList.remove('not-visible');

    setInterval(()=>{
        loaderSpinners[0].classList.add('not-visible');
        loaderSpinners[1].classList.remove('not-visible');
    }
    ,500);

    let urlAux = primaryURl.split("/p");

    setInterval(()=>{
        loaderSpinners[1].classList.add('not-visible');
        loaderSpinners[0].classList.remove('not-visible');
        contador++;
        if(contador == 7){
            location.href = urlAux[0] + "/pages/flores.html";
        }
    }
    ,1000);

});


