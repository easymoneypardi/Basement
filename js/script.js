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
    fetch('https://api.myjson.com/bins/nycqe')
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2 class="display-4 mb-4">Brætspil</h2>';
            data.forEach(function (games) {
                output += `
              <ul class="list-group mb-3">
                <li class="list-group-item"><strong>Brætspil:</strong> ${games.product}</li>
                <li class="list-group-item"><img class="img-fluid img" width="50%" src=${games.image} alt="basement"></li>
                <li class="list-group-item"><strong>Antal spillere:</strong> ${games.litre}</li>
                <li class="list-group-item"><strong>Tid:</strong> ${games.prices}</li>
              </ul>
            `;
            })
            document.getElementById('output').innerHTML = output;
        })
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = -2; // For Safari
  document.documentElement.scrollTop = -2; // For Chrome, Firefox, IE and Opera
}