function generateUsername() {
  let selectedWords = [
    "Bark",
    "Coder",
    "Kitty",
    "Clover",
    "Robot",
    "Dog",
    "Cat",
    "Miner",
    "Cool",
    "Funny",
    "Hamster",
    "Hat",
    "Rapster",
    "Cereal",
    "Car",
    "Backpacking",
    "Corgi",
    "Party",
    "Toast",
    "Apple",
    "Lemon",
    "Bowtie",
    "Writing",
    "Chess",
    "Snail",
    "Craft",
    "Nice",
    "God",
    "Fish"
  ]
  let name = selectedWords[Math.floor(Math.random() * selectedWords.length)] + selectedWords[Math.floor(Math.random() * selectedWords.length)] + Math.floor(Math.random() * 99);
  return name;
}

let generatedName = generateUsername();

const newbtn = document.createElement('button');
newbtn.addEventListener("click", () => document.getElementById('username').value = generatedName);
newbtn.innerText = `How about ${generatedName}?`;
newbtn.classList.add('buttonFrBx');
newbtn.innerHTML += '<br /><br />';

// document.getElementById('userGen').appendChild(newbtn);
