let hoursElm = document.getElementById("hours")
let minsElm = document.getElementById("min")
let secsElm = document.getElementById("sec")



setInterval(()=>{
    let time = new Date();


let hours = new Date().getHours()
let minutes = new Date().getMinutes()
let seconds = time.getSeconds()

console.log(time)



hoursElm.innerHTML = hours

minsElm.innerHTML = minutes
secsElm.innerHTML = seconds
},1000)