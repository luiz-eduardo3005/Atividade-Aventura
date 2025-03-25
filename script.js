// script.js
import { gameData } from './gameData.js';

let lives = 3;
let currentStage = 0;

const narrativeElement = document.getElementById('narrative');
const choicesElement = document.getElementById('choices');
const livesElement = document.getElementById('lives');
const restartButton = document.getElementById('restart');

function updateDisplay() {
    narrativeElement.textContent = gameData[currentStage].narrative;
    choicesElement.innerHTML = '';
    gameData[currentStage].choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.className = choice.class; // Adiciona a classe do botão
        button.onclick = () => handleChoice(index);
        choicesElement.appendChild(button);
    });
    livesElement.textContent = lives;
}

function handleChoice(choiceIndex) {
    const result = gameData[currentStage].choices[choiceIndex].result;
    if (result === 'loseLife') {
        lives--;
        if (lives <= 0) {
            endGame();
            return;
        }
    } else if (result === 'nextStage') {
        currentStage++;
        if (currentStage >= gameData.length) {
            endGame(true);
            return;
        }
    }
    updateDisplay();
}

function endGame(victory = false) {
    if (victory) {
        narrativeElement.textContent = "Você venceu! Parabéns!";
    } else {
        narrativeElement.textContent = "Fim da jornada... tente novamente!";
    }
    choicesElement.innerHTML = '';
    restartButton.style.display = 'block';
}

restartButton.onclick = () => {
    lives = 3;
    currentStage = 0;
    restartButton.style.display = 'none';
    updateDisplay();
};

updateDisplay();