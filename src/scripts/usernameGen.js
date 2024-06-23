function generateUsername() {
  let selectedWords = [
    "Kitty",
    "Clover",
    "Robot",
    "Dog",
    "Cat",
    "Coder",
    "Miner",
    "Cool",
    "Funny",
    "Hampster",
    "Hat",
    "Rapster",
    "Cereal"
  ]
  let name = selectedWords[Math.floor(Math.random() * selectedWords.length)] + selectedWords[Math.floor(Math.random() * selectedWords.length)] + Math.floor(Math.random() * 99);
  return name;
}

document.getElementById('userGen').innerHTML = `<button>How about `+generateUsername()+`?</button><br/><br/>`
