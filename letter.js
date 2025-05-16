function openLetter(letter_id){
    let letter = ''
    switch(letter_id){
        case 1:
            letter = ".letter-one"
            break
        case 2:
            letter = ".letter-two"
            break
        case 3:
            letter = ".letter-three"
            break
        case 4:
            letter = ".letter-four"
            break
        default:
            return
    }
    const letterHTML = document.querySelector(letter)
    letterHTML.classList.toggle("active")
}