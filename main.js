document.addEventListener("DOMContentLoaded", function(){
    draw()
})

function draw(){
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()
    img.onload = function(){
        ctx.drawImage(img, 0, 0, 500, 300)
    }
    img.src = 'cats.jpg'
    console.log(canvas.width, canvas.height)
}