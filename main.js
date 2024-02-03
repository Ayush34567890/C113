function preload()
{}

function setup() {
canvas = createCanvas(600, 500)
canvas.position(110,250)
video = createCapture(VIDEO)
video.hide()
tint_color = ""
}

function draw() {
    image(video, 50, 50, 500, 400);
    fill("red")
    rect(50 ,50, 500, 20)
    rect(50, 450, 500, 20)
    rect(50, 50, 20, 400)
    rect(550, 50, 20, 400)
    fill("green")
    circle(60 ,50, 100)
    circle(540, 50, 100)
    circle(60, 450, 100)
    circle(540, 450, 100)
    tint(tint_color);
}

function take_snapshot(){
    save('student.png')
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;}