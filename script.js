
const guts = document.querySelector('.guts');
const grafite = document.querySelector('.grafite');
const vitoria = document.querySelector('.vitoria');
let score = 0;

const pulo =() => {
    guts.classList.add('pulo');

    setTimeout(() => {
        guts.classList.remove('pulo');
        
    }, 500);

}

let grafiteCrossed = false;

const loop = setInterval(() => {
    const grafitePosition = grafite.offsetLeft;
    const gutsPosition = +window.getComputedStyle(guts).bottom.replace('px', '');
    


    if (grafitePosition <= 120 && grafitePosition>= 0 && gutsPosition < 100) {
        grafite.style.animation = 'none';
        grafite.style.left = `${grafitePosition}px`

        guts.style.animation = 'none';
        guts.style.bottom = `${gutsPosition}px`

        guts.src = 'img/perdeu.png';
        guts.style.width = '120px';
        guts.style.marginLeft = '20px';


        setTimeout(() => {
            vitoria.src = 'img/derrota.png';
            vitoria.style.left = 0;
            vitoria.style.marginTop = '50px';
            vitoria.style.marginLeft = '280px';
            vitoria.style.width = '500px';
        }, 500);
       
        clearInterval(loop);
    }else if (grafitePosition < 0 && !grafiteCrossed) {
        score++;
        grafiteCrossed = true;
        document.getElementById('score').textContent = `Score: ${score}`;
        grafite.style.animation = 'grafite-animation 2s infinite linear';

        
        if(score === 216){
            clearInterval(loop);
            setTimeout(() => {
                vitoria.style.left = 0;
                vitoria.style.marginTop = '50px';
                vitoria.style.marginLeft = '280px';
                vitoria.style.width = '500px';
                grafite.style.display = 'none';
               
            }, 500);
        }
    } else if (grafitePosition > 120) {
        grafiteCrossed = false; 
    }
}, 10)

document.addEventListener('keydown' , pulo);