let input=document.getElementById('textarea')
let total_character=document.getElementById('total-counter')
// console.log(total_character)
let remaining_counter=document.getElementById('remaining-counter')
// console.log(remaining_counter)



input.addEventListener('keyup',()=>{
        total_character.innerText=input.value.length
        remaining_counter.innerText=input.getAttribute("maxlength")-input.value.length
})