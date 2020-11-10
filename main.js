document.addEventListener("DOMContentLoaded", function(){
    draw()
    let circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
    circle.setAttribute('fill', '#000')
    circle.setAttribute('r', '10px')
    circle.setAttribute('cx', '10px')
    circle.setAttribute('cy', '10px')
    document.getElementById('svg').appendChild(circle);
    document.addEventListener('mousemove', function(e){
        positionMouse(e)
    })
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

function mouseX(event){
    return event.mouseX
}

function mouseY(event){
    return event.mouseY
}

function positionMouse(event){
    let mouse = {
        x: mouseX(event),
        y: mouseY(event)
    }
    console.log('hiii')
    let svg = document.getElementById('svg')
    svg.style.top = `${mouse.y} px`
    svg.style.left =`${mouse.x} px`
}