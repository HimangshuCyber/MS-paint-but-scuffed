//Declare vars

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var mouse_event = "empty";
var last_position_of_x;
var last_position_of_y;
color = "black"
width_of_line = 5;

//event_listener

canvas.addEventListener("mousedown", mousedown);

function mousedown(e){
    mouse_event = "mousedown";
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
}



canvas.addEventListener("mousemove", mouse_draw);

function mouse_draw(e){
    current_position_of_mouseX = e.clientX - canvas.offsetLeft;
    current_position_of_mouseY = e.clientY - canvas.offsetTop;

    if(mouse_event=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        //Final goodbye to my computer
        //Sorry I will not be able to join your furnel

        console.log('Last position of x and y values = \n' + last_position_of_x, last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log('Current position of x and y values = \n' + current_position_of_mouseX, current_position_of_mouseY);
        ctx.lineTo(current_position_of_mouseX, current_position_of_mouseY);

        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouseX;
    last_position_of_y = current_position_of_mouseY;
}

canvas.addEventListener("mouseup", ByeBye);

function ByeBye(e){
    mouse_event = "mouseup";
}

function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

canvas.addEventListener("mouseleave", goodbye); //Canvas stop if i see you one more time I will give you the death sentence

function mouseleave(e){
    mouse_event = "mouseleave";
}
