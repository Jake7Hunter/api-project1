// Variables
const jokeButton = document.getElementById(`jokeButton`);
const currentJoke = document.getElementById(`currentJoke`);
const getRandomColorChannel = function(options=256) {
    return Math.floor( Math.random() * options )
};

// Background Maker
function setNewColour(){
    
    let redColour = getRandomColorChannel() 
    let greenColour = getRandomColorChannel() 
    let blueColour = getRandomColorChannel() 

    console.log(`your numbers are ${redColour}, ${greenColour}, ${blueColour} `);
    let backGround = document.querySelector(`body`)

    backGround.style.backgroundColor = `rgb(${redColour},${blueColour},${greenColour})`
}

// Joke Maker
jokeButton.addEventListener(`click`, function(){
    getNewJoke();
    setNewColour();
})

function getNewJoke(){
    fetch("https://geek-jokes.p.rapidapi.com/api?format=json", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "geek-jokes.p.rapidapi.com",
		"x-rapidapi-key": "b835837c2cmsh399aeb7d5ef62e2p100b8djsne36a83022141"
	}
}) 
    .then((response) => response.json())
    .then((obj) => {
        console.log(`obj`, obj);
        createNewJoke(obj);
    })
    .catch(err => {
        console.error(err);
    })
}

function createNewJoke(response){
    currentJoke.innerHTML = `<p>${response.joke}</p>`;
}

