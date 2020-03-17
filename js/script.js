const getBeerBtnElement = document.getElementById("getBeers");
const getDrinksBtnElement = document.getElementById("getDrinks");
const getGamesBtnElement = document.getElementById("getGames");

getBeerBtnElement.addEventListener("click", getBeers);
getDrinksBtnElement.addEventListener("click", getDrinks);
getGamesBtnElement.addEventListener("click", getGames);

function getBeers() {
    fetch('https://api.myjson.com/bins/1ed5tm')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2 class="display-4 mb-4">Øl priser</h2>';
            data.forEach(function (beer) {
                output += `
              <ul class="list-group mb-3">
                <li class="list-group-item"><strong>Produkt:</strong> ${beer.product}</li>
                <li class="list-group-item"><img class="img-fluid img" width="50%" src=${beer.image} alt="basement"></li>
                <li class="list-group-item"><strong>Liter:</strong> ${beer.litre}</li>
                <li class="list-group-item"><strong>Pris:</strong> ${beer.prices}</li>
              </ul>
            `;
            })
            document.getElementById('output').innerHTML = output;
        })
}

function getDrinks() {
    fetch('https://api.myjson.com/bins/17c8vu')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2 class="display-4 mb-4">Drinks priser</h2>';
            data.forEach(function (drinks) {
                output += `
              <ul class="list-group mb-3">
                <li class="list-group-item"><strong>Produkt:</strong> ${drinks.product}</li>
                <li class="list-group-item"><img class="img-fluid img" width="50%" src=${drinks.image} alt="basement"></li>
                <li class="list-group-item"><strong>Pris:</strong> ${drinks.prices}</li>
                <li class="list-group-item"><strong>2 for:</strong> ${drinks.for}</li>
              </ul>
            `;
            })
            document.getElementById('output').innerHTML = output;
        })
}

function getGames() {
    fetch('https://api.myjson.com/bins/17c8vu')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2 class="display-4 mb-4">Brætspil</h2>';
            data.forEach(function (drinks) {
                output += `
              <ul class="list-group mb-3">
                <li class="list-group-item"><strong>Produkt:</strong> ${drinks.product}</li>
                <li class="list-group-item"><img class="img-fluid img" width="50%" src=${drinks.image} alt="basement"></li>
                <li class="list-group-item"><strong>Pris:</strong> ${drinks.prices}</li>
                <li class="list-group-item"><strong>2 for:</strong> ${drinks.for}</li>
              </ul>
            `;
            })
            document.getElementById('output').innerHTML = output;
        })
}