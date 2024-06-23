function generateUsername() {
  let selectedWords = [
    "Kitty",
    "Clover",
    "Robot",
    "Dog",
    "Cat",
    "Coder"
  ]
  let name = selectedWords[Math.floor(Math.random() * selectedWords.length)]} + selectedWords[Math.floor(Math.random() * selectedWords.length)]} + Math.floor(Math.random() * 99);
  return name;
}
