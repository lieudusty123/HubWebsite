let stars = document.querySelector('#stars')
let moon = document.querySelector('#moon')
let mountains_behind = document.querySelector('#mountains_behind')
let mountains_front = document.querySelector('#mountains_front')
let text = document.querySelector('#text')
let btn = document.querySelector('#btn')
let header = document.querySelector('header')

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px'
    moon.style.top = value * 0.85 + 'px'
    mountains_behind.style.top = value * 0.8 + 'px'
    mountains_front.style.top = value * 0.5 + 'px';
    text.style.marginRight = value * 3 + 'px';
    text.style.marginTop = value * 1 + 'px';
    btn.style.marginTop = value * 1.8 + 'px';
    header.style.top = value * 0.5 + 'px';
})

const headerUl = header.querySelector('ul')
const allHeaderButtons = headerUl.querySelectorAll('a')

allHeaderButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        if (event.target.className !== 'active') {
            allHeaderButtons.forEach(innerButton => {
                if (innerButton.className === 'active') {
                    innerButton.classList.remove('active');
                }
            });
            event.target.classList.add('active')
        }
    })
});

const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'Bootstrap', 'ReactJS',
    'React Router', 'Redux', 'git',
    'ES6', 'SASS',
];

var tagCloud = TagCloud('.content', myTags, {

    radius: 160,
    maxSpeed: 'slow',
    initSpeed: 'slow',
    direction: 135,
    keep: true

});
mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

mybutton.addEventListener('click', () => {
    topFunction()
})

