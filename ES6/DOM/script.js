let parent = document.getElementById('body');
parent.style="margin:0;background-color:red;"

let newElement = document.createElement('p');
let newElement2 = document.createElement('p');

let textContent = document.createTextNode('This is a new paragraph');
let textContent2 = document.createTextNode('This is a new paragraph');

newElement.appendChild(textContent);
newElement2.appendChild(textContent2);

parent.appendChild(newElement);
parent.appendChild(newElement2);

// textContent2.remove()
parent.removeChild(parent.children[1])