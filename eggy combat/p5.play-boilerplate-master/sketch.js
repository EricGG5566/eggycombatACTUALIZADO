const Engine = Matter.Engine;
const World = Matter.World; 
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, bodies;
var egg1;
var head1;
var ligaC, ligaRh, ligaLh, ligaL, ligaL2, ligaW;
var ground;
var leg1, leg2;
var hammer;
//var player1 = new Group();
var rightHand, leftHand;



function setup() {
    
    canvas = createCanvas(1400,600);
    engine = Engine.create();
    world = engine.world
    egg1 = new egg(50,100);
    ground = new block(600,500,1200,50);
    head1 = new head(50,50);
    rightHand = new hand(60,100);
    leftHand = new hand(40,100);
    leg1 = new leg(35,140);
    leg2 = new leg(65,140);
    ligaC = new liga(egg1.body, head1.body);
    ligaRh = new liga(egg1.body, rightHand.body);
    ligaLh = new liga(egg1.body, leftHand.body);
    ligaL = new liga(egg1.body, leg1.body);
    ligaL2 = new liga(egg1.body, leg2.body);
    player1 = [];
    hammer = new weapon(60,70);
    box1 = new box(100,70);
    player1.push(head1);
    player1.push(ligaC);
    player1.push(egg1);
    player1.push(ligaRh);
    player1.push(ligaLh);
    player1.push(ligaL);
    player1.push(ligaL2);
    player1.push(leg1);
    player1.push(leg2);
    console.log(player1.lenght);
}
function draw(){
    background( "blue");
   //Engine.update(engine);
    ground.display();
    egg1.display();
    head1.display();
    leg1.display();
    leg2.display();
    ligaC.display();
    ligaRh.display();
    ligaLh.display(); 
    ligaL.display(); 
    ligaL2.display();
    box1.display();
    
    //randomWeapon();
   

}

/*function randomWeapon(){
    if(box1.isTouching(leg1)){
        ligaW = new liga2(rightHand.body, hammer.body);
        hammer.display();
        
    }
}*/



