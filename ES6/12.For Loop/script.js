console.log("Hello World ") 


//for loop

// for (let i = 0; i < 10; i++) {
//     console.log("check")

// }

// let arr = ["Apple","Mango","Orange"];
// let userInput='Banana';

// // for(let i = 0; i<arr.length; i++){
// //     if(userInput===arr[i]){
// //         console.log("Found at Index ", i+1)
// //         console.log(arr[i])
// //         break;
// //     }
// //     console.log("count")
// // }


// let isFound = false

// for(let i = 0; i<arr.length; i++){
//         if(userInput===arr[i]){
//             console.log("Found at Index ", i+1)
//             console.log(arr[i])
//             isFound = true
//             break;
//         }

        
//     }
//     if (isFound){
//         alert("Found")
//     }else{
//         alert(" Not Found")

//     }


const cleanestCities = [
    "yangon",
    "sydney",
    "kabul",
    "bangkok",
    "canberra",
    "auckland",
    "vancouver",
    "portland",
    "shenzhen",
    "denver",
    "salt lake city",
    "lyon",
    "krakow",
    "sofia",
    "hong kong",
    "seattle",
    "minneapolis",
    "krasnoyarsk",
    "astana",
    "munich",
    "vienna",
    "kuching",
    "bern",
    "milano",
    "pristina",
    "budapest",
    "san francisco",
    "zagreb",
    "bratislava",
    "rome",
    "stockholm",
    "bogota",
    "belgrade",
    "new york city",
    "prague",
    "washington, d.c.",
    "warsaw",
    "montreal",
    "sao paulo",
    "madrid",
    "kyiv",
    "taipei",
    "houston",
    "london",
    "chicago",
    "wroclaw",
    "detroit",
    "athens",
    "skopje",
    "nice",
    "moscow",
    "kaohsiung",
    "guangzhou",
    "melbourne",
    "tokyo",
    "tashkent",
    "singapore",
    "paris",
    "santiago",
    "birmingham",
    "oslo",
    "algiers",
    "rotterdam",
    "bucharest",
    "phnom penh",
    "chiang mai",
    "tehran",
    "accra",
    "dublin",
    "brussels",
    "lisbon",
    "nairobi",
    "istanbul",
    "toronto",
    "sarajevo",
    "amsterdam",
    "ulaanbaatar",
    "beijing",
    "berlin",
    "kyoto",
    "kobe",
    "seoul",
    "baghdad",
    "mumbai",
    "incheon",
    "hangzhou",
    "addis ababa",
    "osaka",
    "busan",
    "ho chi minh city",
    "helsinki",
    "wuhan",
    "los angeles",
    "kolkata",
    "kuala lumpur",
    "bishkek",
    "kampala",
    "shanghai",
    "lima",
    "riyadh",
    "doha",
    "cairo city",
    "lahore",
    "chongqing",
    "manama",
    "lima",
    "chengdu",
    "dhaka",
    "dubai",
    "kathmandu",
    "batam",
    "karachi",
    "hanoi",
    "jakarta",
    "kinshasa",
    "delhi"
];


const submitted = (e) =>{
    e.preventDefault()
    let userInput = document.getElementById("city").value;
    userInput.toLowerCase()
    let isFound = false
    for(let i = 0; i<cleanestCities.length; i++){
        if(userInput===cleanestCities[i]){
            let result = "Your City Found At Rank "+ (i+1)
            let result2 = `Your City Found At Rank ${i+1}`
            document.querySelector(".result").innerHTML = result
            isFound = true;
            break;
        }
    }
    if(!isFound){
        document.querySelector(".result").innerHTML = "Your City IS Not On this list"
        
    }
}

