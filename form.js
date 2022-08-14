// sends form with formspree API

var form = document.getElementById("my-form");
async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form"
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", handleSubmit)




// Handles moving stars and mountains in contact section

const contactSection = document.querySelector('#contact')
window.addEventListener('scroll', () => {

    const elDistanceStars = window.pageYOffset + contactSection.getBoundingClientRect().top;
    let valueStars = elDistanceStars - window.scrollY;

    const elDistanceMountains = window.pageYOffset + contactSection.getBoundingClientRect().bottom;
    let valueMountains = elDistanceMountains - window.scrollY;
    contactSection.style.backgroundPositionY = `${valueStars}px, ${valueStars / 4}px, 0px`
    contactSection.style.backgroundPositionX = valueMountains >= 0 ? `50vh, -${valueMountains / 2}px, 0px` : `50vh, ${valueMountains / 2}px, 0px`
})