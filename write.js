canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var car1_width = 120;
var car1_height = 70;
var car1_image = "https://i.postimg.cc/YqdnnNX1/car1.png";
var car1_x = 10;
var car1_y = 10;

var car2_width = 120;
var car2_height = 70;
var car2_image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5YenVd4uiZGmPRP9nGrPer_dDR9lkIME0vaWvvD4K4ggfXhOes7_IBFNHhX985TH1E34&usqp=CAUg";
var car2_x = 10;
var car2_y = 100;

var background_image = "https://i.postimg.cc/bv5d35nK/racing.jpg";

function add(){
    background_imgTAG = new Image();
    background_imgTAG.onload = upload_background;
    background_imgTAG.src = background_image;

    car1_imgTAG = new Image();
    car1_imagTAG.onload = upload_car1;
    car1_imageTAG.src = car1_image;

    car2_imgTAG = new Image();
    car2_imagTAG.onload = upload_car2;
    car2_imageTAG.src = car2_image;
}

function upload_background(){
    ctx.drawImage(background_imgTAG, 0, 0, canvas.width, canvas.height);
}

function upload_car1(){
    ctx.drawImage(car1_imgTAG, car1_x, car1_y, car1_width, car1_height);
}

function upload_car2(){
    ctx.drawImage(car2_imgTAG, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        car1_up();
        console.log("Up Arrow Key");
    }

    if(keyPressed == '40')
    {
        car1_down();
        console.log("Down Arrow Key");
    }
    
    if(keyPressed == '37')
    {
        car1_left();
        console.log("Left Arrow Key");
    }

    if(keyPressed == '39')
    {
        car1_right();
        console.log("Right Arrow Key");
    }

    if(keyPressed == '87')
    {
        car2_up();
        console.log("W");
    }
    
    if(keyPressed == '83')
    {
        car2_down();
        console.log("S");
    }

    if(keyPressed == '65')
    {
        car2_left();
        console.log("A");
    }

    if(keyPressed == '68')
    {
        car2_rigjt();
        console.log("D");
    }
}