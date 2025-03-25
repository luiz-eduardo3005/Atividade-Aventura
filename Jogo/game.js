const narrativeElement = document.getElementById('narrative');
const choicesElement = document.getElementById('choices');
const livesElement = document.getElementById('lives');
const restartButton = document.getElementById('restart');

let lives = 3;
let currentStage = 0;

const stages = [
    {
        text: "Em uma pequena aldeia cercada por montanhas, um jovem chamado Leo sempre sonhou em se tornar um grande aventureiro. Certa dia, enquanto explorava a floresta próxima, ele encontrou uma entrada misteriosa coberta por trepadeiras e sombras densas. Uma lenda antiga dizia que ali se encontrava a Dungeon do Destino, um local onde muitos aventureiros entraram, mas poucos retornaram. O que ele faria agora?",
        choices: [
            { text: "Entrar na dungeon sem hesitar.", nextStage: 1 },
            { text: "Voltar para a aldeia e buscar ajuda.", nextStage: 2 }
        ]
    },
    {
        text: "Tomando coragem, Leo entrou na dungeon. A escuridão o engoliu imediatamente, e a temperatura caiu bruscamente. Tateando as paredes frias e úmidas, encontrou uma tocha presa à rocha. Ao acendê-la, um corredor se revelou à sua frente, mas logo se dividiu em dois caminhos: O caminho à esquerda era iluminado por uma luz suave e esverdeada, como se cristais mágicos brilhassem ao fundo. O caminho à direita era sombrio e carregado de ecos, como se vozes distantes murmurassem segredos proibidos. O que ele faria agora?",
        choices: [
            { text: "Seguir pela luz à esquerda.", nextStage: 3 },
            { text: "Explorar o corredor escuro à direita.", nextStage: 4 }
        ]
    },
    {
        text: "Leo hesitou e decidiu que seria mais sensato buscar ajuda. No entanto, ao se afastar da entrada, sentiu uma estranha força puxando-o de volta. Era como se a dungeon estivesse viva, chamando-o. O que ele faria agora?",
        choices: [
            { text: "Retornar à dungeon e entrar.", nextStage: 1 },
            { text: "Pedir ajuda a um amigo da aldeia.", nextStage: 5 }
        ]
    },
    {
        text: "O caminho o levou a uma sala espaçosa e ornamentada por cristais brilhantes. No centro da sala, um guardião imponente com uma armadura dourada aguardava. 'Para avançar, você deve provar sua inteligência!' proclamou o guardião. 'Responda corretamente ao meu enigma, e poderá seguir em frente. Falhe, e pagará o preço.'",
        choices: [
            { text: "Tentar resolver o enigma.", nextStage: 6 },
            { text: "Tentar enganar o guardião.", nextStage: 7 }
        ]
    },
    {
        text: "Leo caminhou pelo corredor sombrio, onde sombras dançavam e sussurros ecoavam em sua mente. Subitamente, uma criatura monstruosa emergiu das trevas, bloqueando seu caminho. 'Você não pode passar sem enfrentar meu desafio!' rugiu a criatura, com olhos brilhando no escuro. Leo percebeu que precisava ser astuto para sair dessa situação.",
        choices: [
            { text: "Enfrentar a criatura em combate.", nextStage: 8 },
            { text: "Tentar negociar com a criatura.", nextStage: 9 }
        ]
    },
    {
        text: "Leo pediu ajuda, mas seu amigo não acreditou nele. Ele nunca se tornará um aventureiro. Fim da jornada... tente novamente!",
        choices: []
    },
    {
        text: "Com raciocínio rápido, Leo pensou na resposta e, para sua sorte, acertou. O guardião assentiu em aprovação. 'Você é mais inteligente do que parece. Avance e prove seu valor!'",
        choices: [
            { text: "Continuar pela dungeon.", nextStage: 10 },
            { text: "Voltar e explorar o corredor escuro.", nextStage: 4 }
        ]
    },
    {
        text: "Leo tentou ludibriar o guardião com um truque, mas sua estratégia falhou. O guardião percebeu sua tentativa e, furioso, lançou um golpe energético contra ele. Leo perdeu uma vida. 'Você não pode me enganar!' rugiu o guardião.",
        choices: [
            { text: "Tentar resolver o enigma novamente.", nextStage: 6 },
            { text: "Fugir e explorar o corredor escuro.", nextStage: 4 }
        ]
    },
    {
        text: "Com bravura, Leo desembainhou sua espada e duelou contra a criatura. Após um combate árduo, conseguiu derrotá-la, mas sofreu ferimentos. Leo perdeu uma vida, mas avançou na dungeon.",
        choices: [
            { text: "Continuar pela dungeon.", nextStage: 10 },
            { text: "Tentar negociar com a criatura.", nextStage: 9 }
        ]
    },
    {
        text: "Leo tentou dialogar, mas a criatura não estava disposta a ouvir. 'Sem desafio, você não pode passar!' gritou a criatura. Leo perdeu uma vida e foi forçado a lutar.",
        choices: [
            { text: "Enfrentar a criatura em combate.", nextStage: 8 },
            { text: "Tentar negociar novamente.", nextStage: 9 }
        ]
    },
    {
        text: "Com coragem e inteligência, Leo venceu cada obstáculo e se aprofundou na dungeon. No final, encontrou tesouros inimagináveis e um conhecimento que mudaria sua vida. Seu nome foi gravado na história como um dos maiores aventureiros da aldeia. Sua jornada estava apenas começando!",
        choices: []
    }
];

function updateStage() {
    const stage = stages[currentStage];
    narrativeElement.textContent = stage.text;
    choicesElement.innerHTML = '';

    if (stage.choices.length > 0) {
        stage.choices.forEach(choice => {
            const button = document.createElement('button');
            button.textContent = choice.text;
            button.onclick = () => handleChoice(choice.nextStage);
            choicesElement.appendChild(button);
        });
    } else {
        showRestartButton();
    }

    livesElement.textContent = lives;
}

function handleChoice(nextStage) {
    if (nextStage === 6 || nextStage === 8) {
        currentStage = nextStage;
        updateStage();
    } else if (nextStage === 7 || nextStage === 9) {
        lives--;
        if (lives <= 0) {
            alert("Você perdeu todas as suas vidas! Fim da jornada...");
            showRestartButton();
        } else {
            currentStage = nextStage;
            updateStage();
        }
    } else {
        currentStage = nextStage;
        updateStage();
    }
}

function showRestartButton() {
    choicesElement.innerHTML = '';
    restartButton.style.display = 'block';
}

function restartGame() {
    lives = 3;
    currentStage = 0;
    restartButton.style.display = 'none';
    updateStage();
}

restartButton.onclick = restartGame;
updateStage();