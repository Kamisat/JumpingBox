var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, arestas;
var music;
var parede1,parede2,parede3;

function preload(){
    // carregue o som aqui
    music = loadSound("music.mp3");
}

function setup(){
    tela = createCanvas(800,600);
  //tela = creatTela(800,600);

    bloco1 = createSprite(80,580,200,30);
    bloco1.shapeColor = "blue";

  

    bloco2 = createSprite(295,580,200,30);
    bloco2.shapeColor = "orange";

    bloco3 = createSprite(510,580,200,30);
    bloco3.shapeColor = "purple";

    bloco4 = createSprite(725,580,200,30);
    bloco4.shapeColor = "red";


    //crie aqui mais dois blocos, ou seja, bloco3 e bloco4

    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);
    bola.velocityX = -6;
    bola.velocityY = random(-6, 6);
    //bola.bounceOff();
    //escreva o código para adicionar velocityX e velocityY

    parede1 = createSprite(0,300,1,600);
    parede2 = createSprite(800,300,1,600);
    parede3 = createSprite(400,0,800,1);
   

    

}

function draw() {
    background(rgb(169,169,169));
   //arestas=createArestasprites();
   //bola.bounceOff(arestas);

    
    //escreva o código de ricochete de bola para bloco1 
    if(bloco1.isTouching(bola) && bola.bounceOff(bloco1)){
        bola.shapeColor = "blue";
        music.play();
    }

   




    if(bloco2.isTouching(bola)){
        bola.shapeColor = "orange";
        bola.velocityX = 0;
        bola.velocityY = 0;
        music.stop();
        //escreva o código para definir velocityX e velocityY da bola como 0

        //escreva o código para parar a música
    }
    if(bloco3.isTouching(bola) && bola.bounceOff(bloco3)){
        bola.shapeColor = "purple";
        music.play();
    }

    if(bloco4.isTouching(bola) && bola.bounceOff(bloco4)){
        bola.shapeColor = "red";
        music.play();
    }

    //escreva o código de ricochete de bola para bloco3

    bola.bounceOff(parede1);
    bola.bounceOff(parede2);
    bola.bounceOff(parede3);


    //escreva o código de ricochete de bola para bloco4

    drawSprites();
}