const wordLocation = document.getElementById('word');
const words = [
    "be",
    "bear",
    "beat",
    "become",
    "begin",
    "bet",
    "bite",
    "bleed",
    "blow",
    "break",
    "bring",
    "build",
    "burn",
    "burst",
    "buy",
    "catch",
    "choose",
    "come",
    "cost",
    "creep",
    "cut",
    "dig",
    "do",
    "draw",
    "dream",
    "drink",
    "drive",
    "eat",
    "fall",
    "feed",
    "feel",
    "fight",
    "find",
    "fly",
    "forbid",
    "forget",
    "forgive",
    "freeze",
    "get",
    "give",
    "go",
    "grow",
    "hang",
    "have",
    "hear",
    "hide",
    "hit",
    "hold",
    "hurt",
    "keep",
    "kneel",
    "know",
    "lay",
    "lead",
    "learn",
    "leave",
    "lend",
    "let",
    "lie",
    "light",
    "lose",
    "make",
    "mean",
    "meet",
    "pay",
    "put",
    "read",
    "ride",
    "ring",
    "rise",
    "run",
    "saw",
    "say",
    "see",
    "seek",
    "sell",
    "send",
    "set",
    "shake",
    "shine",
    "shoot",
    "show",
    "shut",
    "sing",
    "sink",
    "sit",
    "sleep",
    "speak",
    "spell",
    "spend",
    "spread",
    "stand",
    "steal",
    "stick",
    "swear",
    "sweep",
    "swim",
    "take",
    "teach",
    "tear",
    "tell",
    "think",
    "throw",
    "understand",
    "wake",
    "wear",
    "weep",
    "win",
    "wind",
    "write"
].sort(() => Math.random() - 0.5);

let switcher = true;
let counter = 0;

const setWord = (set) => {
    if (counter < set.length) {
        if (switcher) {
            switcher = false;
            wordLocation.classList.add('slide-in-blurred-top-back');
            setTimeout(() => {
                wordLocation.classList.remove('slide-in-blurred-top-back');
                wordLocation.innerHTML = set[counter];
                wordLocation.classList.add('slide-in-blurred-top')
            }, 500)
            setTimeout(() => {
                wordLocation.classList.remove('slide-in-blurred-top');
                switcher = true;
                counter++;
            }, 1000)
        }
    } else {
        if (switcher) {
            switcher = false;
            wordLocation.classList.add('slide-in-blurred-top-back');
            setTimeout(() => {
                wordLocation.classList.remove('slide-in-blurred-top-back');
                wordLocation.innerHTML = "that's all! <br> thank you!"
                wordLocation.classList.add('slide-in-blurred-top')
            }, 500)
            setTimeout(() => {
                wordLocation.classList.remove('slide-in-blurred-top');
            }, 1000)
        }
    }
};

window.addEventListener('click', () => setWord(words));