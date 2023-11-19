document.addEventListener('keypress', onKeyPress)

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