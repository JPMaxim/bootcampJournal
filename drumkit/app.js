const tom = document.querySelector("#tom")
const tink = document.querySelector("#tink")
const snare = document.querySelector("#snare")
const ride = document.querySelector("#ride")
const openhat = document.querySelector("#openhat")
const kick = document.querySelector("#kick")
const hihat = document.querySelector("#hihat")
const clap = document.querySelector("#clap")
const boom = document.querySelector("#boom")

const tomAudio = document.querySelector("#tomAudio");
const tinkAudio = document.querySelector("#tinkAudio");
const snareAudio = document.querySelector("#snareAudio");
const rideAudio = document.querySelector("#rideAudio");
const openhatAudio = document.querySelector("#openhatAudio");
const kickAudio = document.querySelector("#kickAudio");
const hihatAudio = document.querySelector("#hihatAudio");
const clapAudio = document.querySelector("#clapAudio");
const boomAudio = document.querySelector("#boomAudio");

document.addEventListener("keypress", (pressed) => {
    if (pressed.code == "KeyA") {
        tomAudio.play();
    } else if (pressed.code == "KeyE") {
        tinkAudio.play();
    } else if (pressed.code == "KeyR") {
        snareAudio.play();
    } else if (pressed.code == "KeyG") {
        rideAudio.play();
    } else if (pressed.code == "KeyH") {
        openhatAudio.play();
    } else if (pressed.code == "KeyI") {
        kickAudio.play();
    } else if (pressed.code == "KeyO") {
        hihatAudio.play();
    } else if (pressed.code == "Quote") {
        clapAudio.play();
    } else if (pressed.code == "Space") {
        boomAudio.play();
    }
})
tom.addEventListener("click", () => {
    tomAudio.play();
})
tink.addEventListener("click", () => {
    tinkAudio.play();
})
snare.addEventListener("click", () => {
    snareAudio.play();
})
ride.addEventListener("click", () => {
    rideAudio.play();
})
openhat.addEventListener("click", () => {
    openhatAudio.play();
})
kick.addEventListener("click", () => {
    kickAudio.play();
})
hihat.addEventListener("click", () => {
    hihatAudio.play();
})
clap.addEventListener("click", () => {
    clapAudio.play();
})
boom.addEventListener("click", () => {
    boomAudio.play();
})