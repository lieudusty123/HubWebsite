const allWorksLi = document.querySelectorAll('.work-li')
const workSection = document.querySelector('#work')
let liArray = [...allWorksLi]

const changeImgBtns = document.querySelectorAll('.change-image')
changeImgBtns.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id == 'left') {
            moveImagesForwards()
        }
        else {
            moveImagesBackwards()
        }
    })
});




function moveImagesForwards() {
    let alreadyMoved = false
    liArray.forEach(li => {
        if (!alreadyMoved) {
            if (liArray.indexOf(li) == 2 && li.classList.contains('active')) {
                li.classList.remove('active')
                liArray[0].classList.add('active')
                let newBg = `./sprites/${liArray[0].children[0].children[0].className}.png`
                workSection.style.backgroundImage = `url(${newBg})`
                alreadyMoved = !alreadyMoved
            }
            else if (li.classList.contains('active')) {
                li.classList.remove('active')
                liArray[liArray.indexOf(li) + 1].classList.add('active')
                let newBg = `./sprites/${liArray[liArray.indexOf(li) + 1].children[0].children[0].className}.png`
                workSection.style.backgroundImage = `url(${newBg})`
                alreadyMoved = !alreadyMoved
            }
        }
    });
}

function moveImagesBackwards() {
    let alreadyMoved = false
    liArray.forEach(li => {
        if (!alreadyMoved) {
            if (liArray.indexOf(li) == 0 && li.classList.contains('active')) {
                li.classList.remove('active')
                liArray[2].classList.add('active')
                alreadyMoved = !alreadyMoved
            }
            else if (li.classList.contains('active')) {
                li.classList.remove('active')
                liArray[liArray.indexOf(li) - 1].classList.add('active')
                alreadyMoved = !alreadyMoved
            }
        }
    });
}