const getDrinksBtnElement = document.getElementById("drinks");
const getBeersBtnElement = document.getElementById("beers");
const getGamesBtnElement = document.getElementById("games");

getDrinksBtnElement.addEventListener("click", drinks);
getBeersBtnElement.addEventListener("click", beers);
getGamesBtnElement.addEventListener("click", games);  

function beers() {
    fetch('sample.txt')
    .then((res) => res.text() )
    .then((data) => {
        document.getElementById("output").innerHTML = data; 
    })
}

function drinks() {
    fetch('json/drinks.json')
    .then((res) => res.json() )
    .then((data) => {
        let output = '<h2 id="menu">MENU</h2>';
        data.forEach(function(user) {
            output += `
            <ol class="list-group mb-3"> 
                    <li class="list-group-item">1: ${user.First}</li>
                    <li class="list-group-item">2: ${user.Second}</li>
                    <li class="list-group-item">3: ${user.Third}</li>
                </ol>
            `;
        })
        document.getElementById("output").innerHTML = output;
    })
}