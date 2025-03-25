// gameData.js
export const gameData = [
    {
        narrative: "Você está em uma floresta escura. Há um caminho à direita e um rio à esquerda. O que você faz?",
        choices: [
            { text: "Seguir pelo caminho escuro", result: 'nextStage', class: 'btn btn-primary' },
            { text: "Tentar atravessar o rio", result: 'loseLife', class: 'btn btn-secondary' }
        ]
    },
    {
        narrative: "Você encontra um guardião que só deixará você passar se resolver seu enigma. O que você faz?",
        choices: [
            { text: "Tentar resolver o enigma", result: 'nextStage', class: 'btn btn-primary' },
            { text: "Tentar enganar o guardião", result: 'loseLife', class: 'btn btn-secondary' }
        ]
    },
    {
        narrative: "Você conseguiu passar! Agora você está em um campo aberto. O que você faz?",
        choices: [
            { text: "Explorar o campo", result: 'nextStage', class: 'btn btn-primary' },
            { text: "Voltar para a floresta", result: 'loseLife', class: 'btn btn-secondary' }
        ]
    },
    {
        narrative: "Você encontra uma caverna misteriosa. O que você faz?",
        choices: [
            { text: "Entrar na caverna", result: 'nextStage', class: 'btn btn-primary' },
            { text: "Ignorar a caverna e seguir em frente", result: 'loseLife', class: 'btn btn-secondary' }
        ]
    },
    {
        narrative: "Dentro da caverna, você vê um tesouro brilhante. O que você faz?",
        choices: [
            { text: "Pegar o tesouro", result: 'loseLife', class: 'btn btn-primary' },
            { text: "Deixar o tesouro e sair", result: 'nextStage', class: 'btn btn-secondary' }
        ]
    },
    {
        narrative: "Você sai da caverna e encontra um dragão. O que você faz?",
        choices: [
            { text: "Tentar conversar com o dragão", result: 'nextStage', class: 'btn btn-primary' },
            { text: "Atacar o dragão", result: 'loseLife', class: 'btn btn-secondary' }
        ]
    },
    {
        narrative: "Você conseguiu convencer o dragão a deixá-lo passar! Você venceu a aventura!",
        choices: [
            { text: "Recomeçar a aventura", result: 'restart', class: 'btn btn-danger' },
            { text: "Sair do jogo", result: 'loseLife', class: 'btn btn-secondary' }
        ]
    }
];