var floatingInputs = document.querySelectorAll('[data-floating]')
console.log(floatingInputs)
floatingInputs.forEach(input => {
    input.addEventListener('input',()=>{
        console.log(input.value)
        if (input.value.trim()!=""){
            input.classList.add('filled')
            return
        }
        input.classList.remove('filled')
    })
});