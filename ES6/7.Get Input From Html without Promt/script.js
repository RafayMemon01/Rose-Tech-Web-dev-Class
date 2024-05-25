
const userFunAdd = (e)=>{
    e.preventDefault();
    let userInput = document.getElementById("UserName").value;
    console.log("UserInput: ", userInput);
    let result=document.querySelector(".result");
    result.innerHTML = userInput;
}

const additionFun = (e) =>{
    e.preventDefault()
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)

    let resultBox = document.getElementById("resultnumber").innerHTML=num1+num2;
}




