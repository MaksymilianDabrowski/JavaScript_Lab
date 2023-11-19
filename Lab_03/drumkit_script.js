document.addEventListener('keypress', onKeyPress)


// Do klawiszy na klawiaturze "przypnij" możliwość odtwarzania dźwięków instrumentu (pliki dźwiękowe perkusji są w repo, możesz zastosować również dowolne inne)
const KeyToSound = {
    'b': document.querySelector('#s1'),
    'c': document.querySelector('#s2'),
    'h': document.querySelector('#s3'),
    'k': document.querySelector('#s4'),
    'o': document.querySelector('#s5'),
    'r': document.querySelector('#s6'),
    's': document.querySelector('#s7'),
    't': document.querySelector('#s8'),
    'y': document.querySelector('#s9'),
}
function onKeyPress(event) {
    const sound = KeyToSound[event.key]
    playSound(sound)
}
function playSound(sound) {
    sound.currentTime = 0
    sound.play()
}
// Aplikacja ma możliwość nagrywania ścieżki dźwiękowej na 4 osobnych kanałach (zapamiętanie jedynie na czas działania aplikacji)?
// dodać 4 kanały z możliwością nagrania dźwięku

let channel1 = [];
let channel2 = [];
let channel3 = [];
let channel4 = [];
let currChannel = channel1;





// Metronom
// dźwięk tink.wav jako podstawowa nuta metronomu



