const clock = document.getElementById('clock')
// const clock = document.querySelector('clock')  u can write this also


setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString()
    
},1000)