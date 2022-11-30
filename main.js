//Constante que representa o personagem
const character = document.getElementsByClassName("character")[0];
//Constante que representa o box em que o personagem está(O espaço que ele vai ocupar)
const containerCharacter = document.getElementsByClassName("container-character")[0];

/*Constante que determina a velocidade do personagem(10), como é uma const essa velocidad é fixa.
Quando o personagem for se mover sempre será adicionado 10 no valor de sua coordenada x ou y*/
const VELOCITY = 10;

/*Duas constantes que carregam o valor do tamanho da tela(largura e altura)
Essas constantes são determinadas pelo tamanho da tela em que o cógio vai ser rodado
Assim, vai manter a proporcionalidade e as colisões vão ficar coerentes com o fim da tela de cada computador*/
//Largura
const SCREEN_WIDTH = screen.width;
//Altura
const SCREEN_HEIGHT = screen.height;

/*Essas variáveis vão determinar o x e o y inicial do personagem, ou seja suas coordenadas na tela
A parte mais a esquerda da tela representa o x=0 e a mais superior y=0
Elas duas trabalham como se fosse um par ordenado*/
//Posição inical da coordenada x
let xPosition = 500;
//Posição inicial da coordenada y
let yPosition = 300;

/*Essa constante junta todas as teclas que vão ser utilizadas no jogo em uma só
Arrow siginifica as setinhas do teclado, e up, down, rigth e left é cima, baixo, direita e esquerda*/
const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
/*Essa constante junta todas as direções que o benequinho vai se movimentar*/
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"];

/* */
window.addEventListener("keydown", (event) => {
    const key  = event.key;

    /**/
    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => {
        return currentKey === key;
    })

    if(!keyPressedAvaiable) return;

    directions.forEach((direction) => {
        if(character.classList.contains(direction)) character.classList.remove(direction);
    })

    /*Início das condicionantes que estão relacionadas ao pressionamento de tecla
    Vão condionar uma ação a uma consequência
    Ação: aperto da tecla
    Consequênica: Mudar a direção da imagem do personagem e ganhar ou perder velocidade me determinado eixo*/

    //"Se a tecla setinha para cima for apertada"
    if(key === "ArrowUp"){
        //Imagem do personagem na forma de subida
        character.classList.add("turnUp");
        //A posição no eixo y vai perder 10 (VELOCTY)
        yPosition -= VELOCITY;
    }

    //"Se a tecla setinha para baixo for apertada"
    if(key === "ArrowDown"){
        //Imagem do personagem na forma de descida
        character.classList.add("turnDown");
        //A posição no eixo y vai ganhar 10 (VELOCTY)
        yPosition += VELOCITY;
    }

    //"Se a tecla setinha para a esquerda for apertada"
    if(key === "ArrowLeft"){
        //Imagem do personagem na forma de "indo para esquerda"
        character.classList.add("turnLeft");
        //A posição no eixo y vai perder 10 (VELOCTY)
        xPosition -= VELOCITY;
    }

    //"Se a tecla setinha para a direita for apertada"
    if(key === "ArrowRight"){
        //Imagem do personagem na forma de "indo para direita"
        character.classList.add("turnRight");
        //A posição no eixo y vai ganhar 10 (VELOCTY)"
        xPosition += VELOCITY;
    }

    /*Início das colições
    Condicionates que vão determinar as colisões do personagem na tela, ou seja, limitar a tela para o personagem não escapar
    Vaão condicionar a posição atual do personagem nos dois eixos e verificar se são iguais as coordenadas da borda
    Borda direita: x = 0
    Borda esquerda: x = SCREEN_WIDTH
    Borda de cima: y = 0
    Borda de baixo: y = SCREEN_HEIGHT
    Nas bordas de baixo e da esquerda eu retirei alguns pixeis para ajustar*/

    //"Se a posição do eixo x for menor ou igual a zero"(O fato de colocar menor ou igual é para evitar algum bug que possa surgir)
    if(xPosition <= 0){
        //x = 0, ou seja, o x nessas condições sempre vai ser atrelado a 0, e ele não vai conseguir passar, criando a colisão
        xPosition = 0;
    }

    //"Se a posição do eixo x for mmaior ou igual a largura da tela - 100"
    if(xPosition >= (SCREEN_WIDTH - 100)){
        //x = SCREEN_WIDTH - 100 (largura da tela -  100)
        xPosition = (SCREEN_WIDTH - 100);
    }
        
    //"Se a posição do eixo y for menor ou igual a 0"
    if(yPosition <= 0){
        //y = 0
        yPosition = 0;
    }

    //"Se a posição do eixo y for maior ou igual a altura da tela menos 100"
    if(yPosition >= (SCREEN_HEIGHT - 180)){
        //x = SCREEN_WIDTH - 100 (altura da tela -  100)
        yPosition = (SCREEN_HEIGHT - 180);
    }

    console.log(SCREEN_HEIGHT)

    containerCharacter.style.top = `${yPosition}px`;
    containerCharacter.style.left = `${xPosition}px`;
});
