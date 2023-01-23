const p1 = {
    score: 0,
    button: document.querySelector('#btn1'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#btn2'),
    display: document.querySelector('#p2Display')
}


const resetBtn = document.querySelector('#btn3');
const playTo = document.querySelector('#playTo');


let winningScore = 7;
let isGameOver = false;

function updateScore(player, opponent){
    if(!isGameOver){
        player.score += 1;
        if(player.score === winningScore){
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score
    }
}


p1.button.addEventListener('click', function(){
    updateScore(p1,p2);
})

p2.button.addEventListener('click', function(){
    updateScore(p2,p1);
})


function reset(){
    isGameOver = false;
    for(let p of [p1,p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger')
        p.button.disabled = false;
    }
};
resetBtn.addEventListener('click', reset);

playTo.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
});