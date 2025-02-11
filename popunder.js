

document.addEventListener("DOMContentLoaded", function () {
    let contador = 0;
    let maxPopUnders = 50; // Número máximo de veces que aparecerá
    let intervalo = 10; // 5000 ms = 5 segundos

    // Lista de enlaces a elegir al azar
    let enlaces = [
        "https://filthygracefulspinach.com/xnyjrsmkcq?key=0dbeba5ad6ad84999d719fda1e40483a",
        "https://filthygracefulspinach.com/k4czsurww?key=0e37ae6e92b9ff506392a8a06aa4ad5b",
        "https://filthygracefulspinach.com/m43yfg1g1?key=58f3dbd94e806ce50cd48dc3369eecae"
    ];

    function abrirPopUnder() {
        if (contador < maxPopUnders) {
            let linkAleatorio = enlaces[Math.floor(Math.random() * enlaces.length)];
            let popunder = window.open(linkAleatorio, "_blank");

            if (popunder) {
                popunder.blur();
                window.focus();
            }

            contador++;
            setTimeout(abrirPopUnder, intervalo);
        }
    }

    abrirPopUnder(); // Se abre solo cuando el usuario hace clic
}, { once: true }); // Se ejecuta solo una vez para evitar abuso
