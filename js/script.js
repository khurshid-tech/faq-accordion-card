let question  = document.querySelectorAll('.question');
console.log(question);
question.forEach(element => {
    element.addEventListener('click', function() {
        element.classList.toggle('active')
        element.nextElementSibling.classList.toggle('visible')
    })
})