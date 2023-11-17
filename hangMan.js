/* All Words Array */
const options = ['Oranges', 'Chocolate', 'Banana', 'Africa', 'Develop', 'Cutlery', 'Piano', 'Eleven', 'Favorite', 'Memories', 'Idea', 'Area', 'India', 'Canada', 'Media', 'Family', 'Energy', 'Memory', 'Fireboard', 'Celebrate', 'Adventure', 'Important', 'Consonant', 'Dangerous', 'Bicycle', 'Syllable', 'Holiday', 'Potato', 'Musical', 'Elephant', 'Tomato', 'Oxygen', 'Strawberry', 'Anteater', 'Buffalo', 'Octopus', 'Tropical', 'Crocodile', 'Dinosaur', 'Withering', 'Serious', 'Imperfect', 'Warrior', 'Curious', 'Genius', 'Graduate', 'Radical', 'Weathering', 'Amazing', 'Bullying', 'Worrying', 'Packaging', 'Provoking', 'Thanksgiving', 'Consuming', 'January', 'Independence', 'Technology', 'Ordinary', 'Alternative', 'Community', 'Relaxation', 'Aberration', 'America', 'Virginia', 'February', 'Eternity', 'Identical', 'Irregular', 'Secretary', 'Alligator', 'Intermittent', 'Intelligence', 'Undemanding', 'Information', 'Preposition', 'Belligerent', 'Literature', 'Watermelon', 'Television', 'Invisible', 'Everyday', 'Education', 'Aquarium', 'Cinderella', 'Caterpillar', 'Macaroni', 'Original', 'Elevator', 'Orangutan', 'Ecosystem', 'Amphibian', 'Avocado', 'Biology', 'Bacteria', 'Peninsula', 'Evolution', 'Pollination', 'Pomegranate', 'Remarkable', 'Promiscuous', 'Victorious', 'Overrated', 'Experienced', 'Dedicated', 'Charismatic', 'Embarrassing', 'Admirable', 'Integrity', 'Adversity', 'Equality', 'Celebrity', 'Necessary', 'Obesity', 'Authority', 'Military', 'Cemetery'];

/*         Variables             */


const Letterinpt = document.getElementById('letter');
const letterSBMT = document.getElementById('letter-sbmt');
const wordInpt = document.getElementById('word');
const wordSBMT = document.getElementById('word-sbmt');
const hangman = document.getElementById('hangman');
const restart = document.getElementById('restart');
const defeat = document.getElementById('def-Banner')
const dfRestart = document.getElementById('def-restart')
const vcRestart = document.getElementById('vic-restart')
const victory = document.getElementById('vic-Banner')
const solveButton = document.getElementById('solve');
const solve = document.getElementById('solve-banner');
const back2Game = document.getElementById('btg');
const bank = document.getElementById('bank');
let reveal = document.querySelector('.reveal');
let a = 0;
let answer = options[randomize()];
let answerLength = answer.length;
letterSBMT.disabled = true;
wordSBMT.disabled = true;
console.log(answer)

/* Determines the lenght of the board */
for (x = 1; x <= answerLength; x++) {
    document.getElementById(x).classList.add('board');
}

/* Disable the submit button unless there is value in the input */
Letterinpt.addEventListener("keyup", function () {
    if (Letterinpt.value.trim() != "") {
        letterSBMT.disabled = false;
    }
})
wordInpt.addEventListener("keyup", function () {
    if (wordInpt.value.trim() != "") {
        wordSBMT.disabled = false;
    }
})

/* all buttons */
letterSBMT.addEventListener("click", function () {
    let plyrLetter = Letterinpt.value;
    let letterIndex = answer.toLowerCase().indexOf(plyrLetter.toLowerCase());
    const indices = [];
    if (letterIndex !== -1) {
        while (letterIndex !== -1) {
            indices.push(letterIndex);
            letterIndex = answer.toLowerCase().indexOf(plyrLetter.toLowerCase(), letterIndex + 1);
        }
        for (z = 0; z < indices.length; z++) {
            let indicesElement = indices[z] + 1;
            document.getElementById(indicesElement).innerHTML = "<p class = 'ptag'>" + plyrLetter + "</p>";
            Letterinpt.value = "";
            letterSBMT.disabled = true;
            let BoardStatus = document.querySelectorAll('.ptag');
            let boardstatuslength = BoardStatus.length
            if (boardstatuslength == answerLength) {
                victory.style.display = 'block';
            }


        }
    } else {
        let bankContains = bank.textContent;
        let existsInBank = bankContains.indexOf(plyrLetter);
        if (existsInBank == -1) {
            a++;
            score();
            let newBankcntnt = bankContains + plyrLetter + ", ";
            bank.textContent = newBankcntnt;
            Letterinpt.value = "";
            letterSBMT.disabled = true;
            return;
        }
    }
})
wordSBMT.addEventListener("click", function () {
    let plyrWord = wordInpt.value;
    console.log(plyrWord)
    if (String(plyrWord.toLowerCase()) === String(answer.toLowerCase())) {
        solve.style.display = "none";
        victory.style.display = 'block';
    } else {
        solve.style.display = "none";
        reveal.innerHTML = "<p>The word was <span class = 'bigger'>"+ answer+"</span></p>";
        defeat.style.display = 'block';
    }
    wordInpt.value = "";
})
solveButton.addEventListener("click", function () {
    solve.style.display = 'block';
})
back2Game.addEventListener("click", function () {
    solve.style.display = "none";
})

/* Retrievs random word from array */
function randomize() {
    return Math.floor(Math.random() * options.length);
}

/* restarts game */
function refresh() {
    document.location.reload();
}

/* Checks if player lost */
function score() {
    hangman.style.backgroundImage = 'url(./images/Hangman' + a + '.png)'
    if (a > 5) {
        reveal.innerHTML = "<p>The word was <span class = 'bigger'>"+ answer+"</span></p>";
        defeat.style.display = "block";
    }
}
restart.addEventListener("click", refresh)
dfRestart.addEventListener("click", refresh)
vcRestart.addEventListener("click", refresh)
