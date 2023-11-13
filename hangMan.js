const options = ['Oranges', 'Chocolate', 'Banana', 'Africa', 'Develop', 'Cutlery', 'Piano', 'Eleven', 'Favorite', 'Memories', 'Idea', 'Area', 'India', 'Canada', 'Media', 'Family', 'Energy', 'Memory', 'Fireboard', 'Celebrate', 'Adventure', 'Important', 'Consonant', 'Dangerous', 'Bicycle', 'Syllable', 'Holiday', 'Potato', 'Musical', 'Elephant', 'Tomato', 'Oxygen', 'Strawberry', 'Anteater', 'Buffalo', 'Octopus', 'Tropical', 'Crocodile', 'Dinosaur', 'Withering', 'Serious', 'Imperfect', 'Warrior', 'Curious', 'Genius', 'Graduate', 'Radical', 'Weathering', 'Amazing', 'Bullying', 'Worrying', 'Packaging', 'Provoking', 'Thanksgiving', 'Consuming', 'January', 'Independence', 'Technology', 'Ordinary', 'Alternative', 'Community', 'Relaxation', 'Aberration', 'America', 'Virginia', 'February', 'Eternity', 'Identical', 'Irregular', 'Secretary', 'Alligator', 'Intermittent', 'Intelligence', 'Undemanding', 'Information', 'Preposition', 'Belligerent', 'Literature', 'Watermelon', 'Television', 'Invisible', 'Everyday', 'Education', 'Aquarium', 'Cinderella', 'Caterpillar', 'Macaroni', 'Original', 'Elevator', 'Orangutan', 'Ecosystem', 'Amphibian', 'Avocado', 'Biology', 'Bacteria', 'Peninsula', 'Evolution', 'Pollination', 'Pomegranate', 'Remarkable', 'Promiscuous', 'Victorious', 'Overrated', 'Experienced', 'Dedicated', 'Charismatic', 'Embarrassing', 'Admirable', 'Integrity', 'Adversity', 'Equality', 'Celebrity', 'Necessary', 'Obesity', 'Authority', 'Military', 'Cemetery'];

const Letterinpt = document.getElementById('letter');
const letterSBMT = document.getElementById('letter-sbmt');
const hangman = document.getElementById('hangman');
/* const wordinpt = document.getElementById('word'); */
/* const wordSBMT = document.getElementById('fullwrd-sbmt'); */
let a = 0;
const bank = document.getElementById('bank');
letterSBMT.disabled = true;

function randomize() {
    return Math.floor(Math.random() * options.length);
}


let answer = options[randomize()];
let answerLength = answer.length;
console.log(answer)



for (x = 1; x <= answerLength; x++) {
    document.getElementById(x).classList.add('board');
}

Letterinpt.addEventListener("keyup", function () {
    if (Letterinpt.value.trim() != "") {
        letterSBMT.disabled = false;
    }
})

letterSBMT.addEventListener("click", function () {
    let plyrLetter = Letterinpt.value;
    let letterIndex = answer.toLowerCase().indexOf(plyrLetter.toLowerCase());
    const indices = [];
    if (letterIndex !== -1) {
        while (letterIndex !== -1) {
            indices.push(letterIndex);
            letterIndex = answer.toLowerCase().indexOf(plyrLetter.toLowerCase(), letterIndex + 1);
        }
        for (z = 0; z <= indices.length; z++) {
            let indicesElement = indices[z] + 1;
            document.getElementById(indicesElement).innerHTML = plyrLetter;
            Letterinpt.value = "";
            letterSBMT.disabled = true;
        }
    } else {
        let bankContains = bank.textContent;
        let existsInBank = bankContains.indexOf(plyrLetter);
        if (existsInBank == -1) {
            for (y = 1; y <= 6; y++) {
                let markerID = "x" + y;
                let ptag = document.getElementById(markerID).innerHTML;
                if (!ptag) {
                    document.getElementById(markerID).innerHTML = "<p> x </p>"
                    document.getElementById(markerID).style.backgroundColor = "red";
                    a++;
                    hangman.style.backgroundImage = 'url(./images/Hangman' + a + '.jpeg)'
                    let newBankcntnt = bankContains + plyrLetter + ", ";
                    bank.textContent = newBankcntnt;
                    Letterinpt.value = "";
                    letterSBMT.disabled = true;
                    if (a > 5) {
                        console.log("Loser")
                    }
                    return;
                }
            }
        }
    }
})




/* wordSBMT.addEventListener("click", function () {
    let wordGuess = wordinpt.textContent.trim().toLowerCase();
    if (wordGuess == answerlowerCase) {
        console.log("victory")
    } else {
        console.log("defeat")
    }

}) */