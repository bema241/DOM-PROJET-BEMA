
const phrase = document.getElementById("citation").innerText;

const phraseNettoyee = phrase.replace(".", "");

const mots = phraseNettoyee.split(" ");

let motLePlusLong = "";

for (let i = 0; i < mots.length; i++) {
    if (mots[i].length > motLePlusLong.length) {
        motLePlusLong = mots[i];
    }
}

document.getElementById("mot Plus Long").innerText = "Le mot le plus long est : " + motLePlusLong;