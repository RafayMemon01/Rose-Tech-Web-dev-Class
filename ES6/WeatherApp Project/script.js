const form = document.getElementById("userInputForm")

let API_Key = "42aa278d2af2b62fcaea35ae8a5b9060"


form.addEventListener("submit", async(e)=>{
    e.preventDefault()
    let userInput = document.getElementById("userInput").value
    console.log(userInput)
    
    console.log("Submit");

    try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${API_Key}&units=metric`)
    
        console.log(res)

        let temp = document.getElementById("temp")
        temp.innerHTML = `${res.data.main.temp}°C`
        let description = document.getElementById("description")
        description.innerHTML = res.data.weather[0].description;

        if(res.data.weather[0].description === "haze"){
            let weatherIcon = document.getElementById("weatherIcon")
            weatherIcon.src = "./download.png"
        } else if(res.data.weather[0].description === "overcast clouds"){
let weatherIcon = document.getElementById("weatherIcon")
            weatherIcon.src = "./images.png"
        }
        else {
            let weatherIcon = document.getElementById("weatherIcon")
            weatherIcon.src = ""
        }
        
    } catch (error) {
        console.log(error)

    }

})