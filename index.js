/* P.S.: The "notes.txt" contain, the early draft - my thought process - or something like that,
to the point that I'm writing in both english and portuguese. Sorry about that! */

const inputEl = document.getElementById("input_el")
const buttonEl = document.getElementById("button_el")
const lengthEl = document.getElementById("length_el")
const volumEl = document.getElementById("volume_el")
const massEl = document.getElementById("mass_el")

buttonEl.addEventListener("click", function(){
    // 2 - The challenge asked to generate all the conversions at once, on click (DONE).
    // 3 - The challenge asked to round the numbers down to 3 decimal places (DONE).

    lengthEl.innerHTML = `${inputEl.value} meters = ${(inputEl.value * 3.281).toFixed(3)} feet! | ${inputEl.value} feet = ${(inputEl.value / 3.281).toFixed(3)} meters!` 
    
    volumEl.innerHTML = `${inputEl.value} liters = ${(inputEl.value * 0.264).toFixed(3)} gallons! | ${inputEl.value} gallons = ${(inputEl.value / 0.264).toFixed(3)} liters!` 
    
    massEl.innerHTML = `${inputEl.value} kilograms = ${(inputEl.value * 2.204).toFixed(3)} pounds! | ${inputEl.value} pounds = ${(inputEl.value / 2.204).toFixed(3)} kilograms!`
})

