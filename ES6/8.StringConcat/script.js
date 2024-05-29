

let myName = "John";

console.log("Hi! Mr. " + myName)



    let karachiweather = () =>{
        let res = "Your City Weather Is 30 to 40";
        let p = document.getElementById("res").innerHTML=res;
    }
    let errorMessage = () =>{
        alert("No Data Found")
    }


    
    const checkWeather = (event)=>{
        event.preventDefault()
        let userInput = document.getElementById("userInput").value;

        userInput = userInput.toLowerCase()

        console.log("Your City IS" + userInput)

        if (userInput === "karachi") {

            karachiweather()
            
            return;
            
        }else{
            errorMessage()
        }

        
}

