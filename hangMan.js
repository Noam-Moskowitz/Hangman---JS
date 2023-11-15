const options = ['Oranges', 'Chocolate', 'Banana', 'Africa', 'Develop', 'Cutlery', 'Piano', 'Eleven', 'Favorite', 'Memories', 'Idea', 'Area', 'India', 'Canada', 'Media', 'Family', 'Energy', 'Memory', 'Fireboard', 'Celebrate', 'Adventure', 'Important', 'Consonant', 'Dangerous', 'Bicycle', 'Syllable', 'Holiday', 'Potato', 'Musical', 'Elephant', 'Tomato', 'Oxygen', 'Strawberry', 'Anteater', 'Buffalo', 'Octopus', 'Tropical', 'Crocodile', 'Dinosaur', 'Withering', 'Serious', 'Imperfect', 'Warrior', 'Curious', 'Genius', 'Graduate', 'Radical', 'Weathering', 'Amazing', 'Bullying', 'Worrying', 'Packaging', 'Provoking', 'Thanksgiving', 'Consuming', 'January', 'Independence', 'Technology', 'Ordinary', 'Alternative', 'Community', 'Relaxation', 'Aberration', 'America', 'Virginia', 'February', 'Eternity', 'Identical', 'Irregular', 'Secretary', 'Alligator', 'Intermittent', 'Intelligence', 'Undemanding', 'Information', 'Preposition', 'Belligerent', 'Literature', 'Watermelon', 'Television', 'Invisible', 'Everyday', 'Education', 'Aquarium', 'Cinderella', 'Caterpillar', 'Macaroni', 'Original', 'Elevator', 'Orangutan', 'Ecosystem', 'Amphibian', 'Avocado', 'Biology', 'Bacteria', 'Peninsula', 'Evolution', 'Pollination', 'Pomegranate', 'Remarkable', 'Promiscuous', 'Victorious', 'Overrated', 'Experienced', 'Dedicated', 'Charismatic', 'Embarrassing', 'Admirable', 'Integrity', 'Adversity', 'Equality', 'Celebrity', 'Necessary', 'Obesity', 'Authority', 'Military', 'Cemetery'];

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
let a = 0;
const bank = document.getElementById('bank');
letterSBMT.disabled = true;
wordSBMT.disabled = true;

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
wordInpt.addEventListener("keyup", function () {
    if (wordInpt.value.trim() != "") {
        wordSBMT.disabled = false;
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
    if (String(plyrWord) === String(answer.toLowerCase())) {
        victory.style.display = 'block';
    } else {
        a++;
        a++;
        score();
    }
    wordInpt.value = "";
})

function refresh() {
    document.location.reload();
}

function score() {
    hangman.style.backgroundImage = 'url(./images/Hangman' + a + '.jpeg)'
    if (a > 5) {
        defeat.style.display = "block";
    }
}
restart.addEventListener("click", refresh)
dfRestart.addEventListener("click", refresh)
vcRestart.addEventListener("click", refresh)