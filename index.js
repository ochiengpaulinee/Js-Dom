document.getElementById('body').style.backgroundColor='silver';
document.getElementById('title').style.color = 'green';

document.getElementById('fruitvegetables').style.textTransform='uppercase'
document.getElementById('vegies').style.textTransform='uppercase'

let fruits = document.getElementById('fruLIst')
let newFruit=document.createElement('li').textContent='Kiwi'
fruits.append(newFruit)


let vegetables = document.getElementById('vegList')
let newVegetable=document.createElement('li').textContent='Cabbage'
vegetables.append(newVegetable)

var image=document.getElementById('fruitImage')
var images=document.createElement('img')
images.src = "/images/fruit.jpeg";
image.appendChild(images)

