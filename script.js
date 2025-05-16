ANSWERS = {
    1: "matematica",
    2: "DIFERENTE",
    3: "10120017724",
    4: "Entre zero e um, mora o absoluto",
    // 5: "",
}

NEXT_PATH = {
    1: "desafio_x/challenge_2.html",
    2: "desafio_x/challenge_3.html",
    3: "desafio_x/challenge_4.html",
    4: "desafio_x/final.html",
}


const inputHTML = document.querySelector(".answer input")

function checkAnswer(stage){
    inputValue = inputHTML.value

    if (inputValue == ANSWERS[stage]){
        rightAnswer(stage)
    } else {
        wrongAnswer()
    }
}

function rightAnswer(stage){
    window.location.pathname = NEXT_PATH[stage]
}
//  ! sim
function wrongAnswer(){
    alert("Resposta incorreta")
    inputHTML.value = ''
}