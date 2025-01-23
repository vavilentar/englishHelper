const wordLocation = document.getElementById('word');
const words = [
    "additional",
    "afraid",
    "angry",
    "anxious",
    "asleep",
    "attentive",
    "available",
    "basic",
    "beautiful",
    "big",
    "boring",
    "brave",
    "bright",
    "busy",
    "calm",
    "careful",
    "cheap",
    "clean",
    "clever",
    "cold",
    "comfortable",
    "confident",
    "conscious",
    "constant",
    "convenient",
    "cool",
    "correct",
    "curious",
    "dangerous",
    "dark",
    "deep",
    "different",
    "difficult",
    "dirty",
    "easy",
    "efficient",
    "empty",
    "every",
    "exact",
    "exciting",
    "expensive",
    "fair",
    "famous",
    "fast",
    "fat",
    "fine",
    "firm",
    "flat",
    "foreign",
    "formal",
    "former",
    "free",
    "fresh",
    "friendly",
    "frightful",
    "full",
    "funny",
    "gorgeous",
    "guilty",
    "happy",
    "hard",
    "healthy",
    "heavy",
    "helpful",
    "historical",
    "honest",
    "hot",
    "huge",
    "hungry",
    "ill",
    "illegal",
    "important",
    "impossible",
    "independent",
    "informal",
    "innocent",
    "interesting",
    "international",
    "kind",
    "large",
    "leading",
    "legal",
    "light",
    "little",
    "lonely",
    "long",
    "loose",
    "loud",
    "lucky",
    "necessary",
    "nice",
    "normal",
    "obvious",
    "official",
    "old",
    "opposite",
    "perfect",
    "pleasant",
    "polite",
    "poor",
    "popular",
    "possible",
    "powerful",
    "quiet",
    "rare",
    "recent",
    "relevant",
    "remarkable",
    "remote",
    "responsible",
    "rich",
    "rude",
    "sad",
    "safe",
    "secure",
    "sensible",
    "short",
    "silly",
    "similar",
    "slow",
    "small",
    "smooth",
    "strange",
    "strict",
    "strong",
    "successful",
    "sudden",
    "suitable",
    "suspicious",
    "sweet",
    "tall",
    "tasty",
    "terrible",
    "thin",
    "thirsty",
    "tight",
    "tiny",
    "tired",
    "traditional",
    "typical",
    "useful",
    "usual",
    "valuable",
    "warm",
    "weak",
    "weird",
    "wide",
    "wise",
    "wonderful",
    "young"
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