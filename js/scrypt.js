// Nessa function sempre que pressionar a tecla, dispara a função jump 
// e dps remove a função quando ocorre a animação do pulo.

//Criou uma variavel e busca o selector no css
// selector = .
// id = #
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');
    }, 500);
     
}

// Criação do loop, onde sempre vai verificar se o usuario tocou
// ou não no cano

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition)
    // Condição minima para o mario passar do tubo
    if(pipePosition <= 110 && pipePosition > 0 && marioPosition < 85 ){

        pipe.style.animation = 'none'; //pega o style que foi configurado para o pipe
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none'; //pega o style que foi configurado para o pipe
        mario.style.left = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }

}, 10)

document.addEventListener('keydown', jump);