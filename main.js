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

/*Essa constante junta em uma array(lista) todas as teclas que vão ser utilizada no jogo e no código
Arrow siginifica as setinhas do teclado, e up, down, rigth e left é cima, baixo, direita e esquerda*/
const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
/*Essa constante junta em uma array(lista) todas as direções que o benequinho vai se movimentar, para usalas no código*/
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"];

/*Essa função vai alertar quando uma tecla for apertada, vai ser responsável por fazer o personagem andar*/
window.addEventListener("keydown", (event) => {
    //Essa constante vai armazenar qual a tecla que foi apertada
    const key = event.key;

    /*Essa constante vai verificar se a tecla pressionada pertence ao array keysAvaible*/
    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => {
        //Caso pertença o currenKey vai armazenar a tecla que apertou (key)
        return currentKey === key;
    })

    //Caso não, não irá acontecer nada
    if(!keyPressedAvaiable) return;

    //Aqui é a função responsável por fazer o personagem mudar de direção
    //Vai percorrer o array directions
    directions.forEach((direction) => {
        //Aqui é uma condinional que se existir a característica, vai remover a direção que estava antes
        if(character.classList.contains(direction)) character.classList.remove(direction);
    })

    /*Início das condicionantes que estão relacionadas ao pressionamento de tecla
    Início da limitação de tela (colisões)
    Vão condionar duas características a uma consequência
    Características: qual tecla foi apertada e se o personagem está na limitação da tela
    Consequênica: Mudar a direção da imagem do personagem e ganhar ou perder velocidade me determinado eixo*/

    /*Se a tecla que foi apertada é: setinha para cima
    E a posição do y é maior que 0 (pois se não tiver essa condição ele passa direto)*/
    if(key === "ArrowUp" && yPosition > 0){
        //O Personagem vai ter a característica de subida
        character.classList.add("turnUp");
        //A posição no eixo y vai perder 10 (VELOCTY), fazendo ele subir pois quanto mais perto da margem superior menor o y
        yPosition -= VELOCITY;
    }

    /*Se a tecla que foi apertada é: setinha para baixo
    E a posição do y é menor que a altura da tela - 180
    Estou diminuindo 180 para corrigir e ele ficar certinho na margem, 100 do tamanho do personagem mais 80 de correção*/
    if(key === "ArrowDown" &&  yPosition < (SCREEN_HEIGHT - 180)){
        //O Personagem vai ter a característica de subida
        character.classList.add("turnDown");
        //A posição no eixo y vai ganhar 10 (VELOCTY), fazendo ele descer pois quanto maior o y mais perto da margem inferior
        yPosition += VELOCITY;
    }

    /*Se a tecla que foi apertada é: setinha para a esquerda
    E a posição do x é maior que 0*/
    if(key === "ArrowLeft" &&  xPosition >= 0){
        //O Personagem vai ter a característica "indo para esquerda"
        character.classList.add("turnLeft");
        //A posição no eixo x vai perder 10 (VELOCTY), fazendo ele ir para esquerda, pois quanto menor o x, mais próximo da margem esuqerda
        xPosition -= VELOCITY;
    }

    /*Se a tecla que foi apertada é: setinha para a esquerda
    E a posição do x é menor que a largura da tela - 100
    Estou diminuindo 100 para corrigir e ele ficar certinho na margem, 100 do tamanho do personagem*/
    if(key === "ArrowRight" && xPosition < (SCREEN_WIDTH - 100)){
        //O Personagem vai ter a característica de "indo para direita"
        character.classList.add("turnRight");
        //A posição no eixo x vai ganhar 10 (VELOCTY), fazendo ele ir para direito pois quanto maior o x, mais perto da margem direita"
        xPosition += VELOCITY;
    }

    //Vai determinar o quanto ele vai estar distante de cima e da esquerda(que suas margens representam x=0 e y=0), a apartir das coordenadas x,y
    containerCharacter.style.top = `${yPosition}px`;
    containerCharacter.style.left = `${xPosition}px`;
});
