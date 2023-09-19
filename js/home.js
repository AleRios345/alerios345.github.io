document.addEventListener("DOMContentLoaded", () => {
    const btnLoading = document.querySelector(".main_container");
    const primaryURl = location.href;
    const stickers = document.querySelectorAll(".carousel-item");
    let contador = 0;

    btnLoading.addEventListener("click", () => {
        let urlAux = primaryURl.split("/i");
        setTimeout(() => {
            location.href = urlAux[0] + "/pages/loading.html";
        }, 100);
    });

    setInterval(() => {
        switch (contador) {
            case 0:
                stickers[0].classList.add('active');
                contador++;
                break;
            case 1:
                stickers[0].classList.remove('active');
                stickers[1].classList.add('active');
                contador++
                break;
            case 2:
                stickers[1].classList.remove('active');
                stickers[2].classList.add('active');
                contador++
                break;
            case 3:
                stickers[2].classList.remove('active');
                stickers[3].classList.add('active');
                contador++
                break;
            case 4:
                stickers[3].classList.remove('active');
                stickers[4].classList.add('active');
                contador++
                break;
            case 5:
                stickers[4].classList.remove('active');
                stickers[5].classList.add('active');
                break;
        }
        
    }, 3000);
    contador = 0 ;
});
