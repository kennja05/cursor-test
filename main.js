document.addEventListener("DOMContentLoaded", function(){
    draw()
    let circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
    circle.setAttribute('fill', 'rgba(0, 0, 0, 0.5')
    circle.setAttribute('stroke', '#000')
    circle.setAttribute('r', '10px')
    circle.setAttribute('cx', '25px')
    circle.setAttribute('cy', '25px')
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

function onMouseMove(e) {
    const circle = document.getElementById('svg');
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
}