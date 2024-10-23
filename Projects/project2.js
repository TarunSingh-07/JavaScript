const form = document.querySelector('form')
const body = document.querySelector('body')

// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    e.preventDefault()

const height = parseInt(document.querySelector('#height').value)   /*parseInt = Convert String to Int */
const weight = parseInt(document.querySelector('#weight').value)
const result = document.querySelector('#results')

if(height === '' || height < 0 || isNaN(height)){
    result.innerHTML = `Please give a valid height ${height}`
}
else if(weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML = `Please give a valid weight ${weight}`
}
else{
    const bmi = (weight / ((height*height)/10000).toFixed(2))
    // show the results
    result.innerHTML = `<span>${bmi}</span>`
}

})
