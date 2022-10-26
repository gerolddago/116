const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let startBackgroundColor = "white";
ctx.lineWidth = 7;
let brushColor = "black";
let brushWidth = 7;
let painting = false;

window.addEventListener("load",()=> {
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
});


function change_color(e){
    brushColor = e.style.background;
}


function startPosition(e){
    painting = true;
    ctx.Width = brushWidth;
    draw(e);
}
function finishedPosition(){
    painting = false;
    ctx.beginPath();
}
function draw(e){
    if(!painting)return;
    ctx.Width = brushWidth;
    ctx.lineCap = "round";

    ctx.lineTo((e.offsetX),(e.offsetY));
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo((e.offsetX),(e.offsetY));

    /*ctx.lineTo((e.clientX)-390,(e.clientY)-180);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo((e.clientX)-390,(e.clientY)-180);*/
}

/*
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let isDrawing = false;
let brushWidth = 7;

window.addEventListener("load", () => {
    // parametrer le canvas en longeur et largeur
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
});

const startDraw = () => {
    isDrawing = true;
    ctx.beginPath(); // creer un nouveau chemin
    ctx.lineWidth = brushWidth;
}

const drawing = (e) => {
    if(!isDrawing) return; // s'il ne dessine pas il retourne
    ctx.lineCap = "round";
    ctx.lineTo(e.offsetX, e.offsetY); // creer des lignes en fonction de la position de la souris
    ctx.stroke(); // dessine/rempli les lignes avec de la couleur
}

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => isDrawing = faslse);
*/



















function onSave(){
canvas.toBlob((blob)=>{
    const timestamp = Date.now().toString();
    const a = document.createElement('a');
    document.body.append(a);
    a.download = `CREATION.png`;
    a.href = URL.createObjectURL(blob);
    console.log(URL.createObjectURL(blob));
    a.click();
    a.remove();
})
}
document.querySelector('#download').addEventListener('click',onSave);



//EventListeners
canvas.addEventListener("mousedown",startPosition);
canvas.addEventListener("mousemove",draw);
canvas.addEventListener("mouseup",finishedPosition);

function clear_canvas(){
ctx.fillStyle = startBackgroundColor;
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.fillRect(0,0,canvas.width,canvas.height);
}
function undo_last(){

}






//MAIL
function SendMail(){
var params = {
    from_name : document.querySelector("#name").value,
    email_id : document.querySelector("#email").value,
    painted_by : document.querySelector("#paintedby").value,
    message : (document.querySelector("#code").value + " ;  Painted by : " + document.querySelector("#paintedby").value)
}
emailjs.send("service_2xg7v2f","template_wtabctp",params).then(function(res){alert("Success!"+ res.status);})
}