function quantumPosition(tag){
    tag.style.top = `${getRandomPercentage()}%`
    tag.style.left = `${getRandomPercentage()}%`
    tag.style.transform = `rotateZ(${getRandomDegree()}deg)`
    console.log(tag.style)
}


function getRandomPercentage(){
    return Math.floor(Math.random()*80)
}

function getRandomDegree(){
    return Math.floor(Math.random()*360)
}


const quantumList = document.querySelectorAll(".quantum_links")

for(let element of quantumList){
    quantumPosition(element)
}