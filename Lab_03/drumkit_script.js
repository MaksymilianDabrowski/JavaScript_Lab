document.addEventListener('keypress', onKeyPress)

const channel1 = [];
const channel2 = [];
const channel3 = [];
const channel4 = [];

let currChannel = 1;

const currChannelBtn = document.getElementById(`ch1Btn`);
currChannelBtn.classList.add('active-channel');

// Do klawiszy na klawiaturze "przypnij" możliwość odtwarzania dźwięków instrumentu (pliki dźwiękowe perkusji są w repo, możesz zastosować również dowolne inne)
const KeyToSound = {
    'q': document.querySelector('#s1'),
    'w': document.querySelector('#s2'),
    'e': document.querySelector('#s3'),
    'r': document.querySelector('#s4'),
    't': document.querySelector('#s5'),
    'y': document.querySelector('#s6'),
    'u': document.querySelector('#s7'),
    'i': document.querySelector('#s8'),
    'o': document.querySelector('#s9'),
}

function onKeyPress(event) {
    const sound = KeyToSound[event.key]
    playSound(sound)

    storeMusic(event.key, currChannel)
}

function playSound(sound) {
    sound.currentTime = 0
    sound.play()
}

function storeMusic(key, channel) {
    const melody = getMusicByKeys(channel)
    melody.push(key);
}

function getMusicByKeys(channel) {
    switch (channel) {
        case 1:
            return channel1;
        case 2:
            return channel2;
        case 3:
            return channel3;
        case 4:
            return channel4;
        default:
            return [];
    }
}

document.getElementById('ch1Btn').addEventListener('click', () => changeChannel(1));
document.getElementById('ch2Btn').addEventListener('click', () => changeChannel(2));
document.getElementById('ch3Btn').addEventListener('click', () => changeChannel(3));
document.getElementById('ch4Btn').addEventListener('click', () => changeChannel(4));

document.getElementById('playCh1Btn').addEventListener('click', () => playFullMelody(1));
document.getElementById('playCh2Btn').addEventListener('click', () => playFullMelody(2));
document.getElementById('playCh3Btn').addEventListener('click', () => playFullMelody(3));
document.getElementById('playCh4Btn').addEventListener('click', () => playFullMelody(4));

function changeChannel(channel) {
    currChannel = channel;

    for (let i = 1; i <=4; i++)
    {
        const correspondingChannel = document.getElementById(`ch${i}Btn`);
        correspondingChannel.classList.remove('active-channel');
    }

    const currChannelBtn = document.getElementById(`ch${channel}Btn`);
    currChannelBtn.classList.add('active-channel');
}

function playFullMelody(channel) {
    const melodyKeys = getFullMelodyByChannel(channel);
    const playFullMelodyInterval = setInterval(() => {
        if (melodyKeys.length === 0) {
            clearInterval(playFullMelodyInterval);
        }
        else {
            const key = melodyKeys.shift();
            const sound = KeyToSound[key];
            playSound(sound);
        }
    }) 
}

function playAll() {
    playFullMelody(1);
    playFullMelody(2);
    playFullMelody(3);
    playFullMelody(4);
}