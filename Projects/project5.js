const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}
// console.log(randomColor())

let intervalId

const startchangingColor = function(){
    function changeBgcolor(){
        document.body.style.backgroundColor = randomColor()
    }
    if(!intervalId){
        intervalId =  setInterval(changeBgcolor,1000)
    }
  
}

const stopchangingColor = function(){
    clearInterval(intervalId)
    intervalId = null
}

document.querySelector('#start').
addEventListener('click', startchangingColor)

document.querySelector('#stop').
addEventListener('click', stopchangingColor)
