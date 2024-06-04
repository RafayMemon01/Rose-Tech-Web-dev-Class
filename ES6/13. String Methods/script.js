let a = {}

console.log(typeof(a))


let text = "Hello World War II";


for (var i = 0 /*1*/; i < text.length; i++) {
 if (text.slice(i, i + 12) === "World War II") {
 text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
 }
 }


console.log(text)




let paragraph = "Amanullah is boy. Amanullah Learned Html Css Js from rose tech"

let newPara = paragraph.replace(/Amanullah/g ,"Ziyan")
console.log(newPara)


let num1 = "2"
console.log("num1", typeof(num1))

let num2 = Number(num1)
console.log("num2", typeof(num2))