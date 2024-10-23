const switchess = document.querySelectorAll('.switches')
const body = document.querySelector('body')

switchess.forEach(function(switches){
    console.log(switches)
    switches.addEventListener('click',function(x){
        console.log(x)
        console.log(x.target)
        if(x.target.id === 'red'){
            body.style.backgroundColor = 'red'
        }
        if(x.target.id === 'blue'){
            body.style.backgroundColor = 'blue'
        }
        if(x.target.id === 'yellow'){
            body.style.backgroundColor = 'yellow'
        }
        if(x.target.id === 'purple'){
            body.style.backgroundColor = 'purple'
        }
        if(x.target.id === 'black'){
            body.style.backgroundColor = 'black'
        }
        if(x.target.id === 'green'){
            body.style.backgroundColor = 'green'
        }
    })

})