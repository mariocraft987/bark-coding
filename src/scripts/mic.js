fetch("src/scripts/user.json")
    .then(response => response.json())
    .then(value => console.log(value))