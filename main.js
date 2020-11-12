document.addEventListener("DOMContentLoaded", function(){
    draw()
    let circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
    circle.setAttribute('fill', '#00000000')
    circle.setAttribute('stroke', '#000')
    circle.setAttribute('r', '10px')
    circle.setAttribute('cx', '11px')
    circle.setAttribute('cy', '11px')
    document.getElementById('svg').appendChild(circle);
    document.addEventListener('mousemove', onMouseMove)
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

let circle = document.getElementById('svg');

const onMouseMove = (e) =>{
  circle.style.left = e.pageX + 'px';
  circle.style.top = e.pageY + 'px';
}
