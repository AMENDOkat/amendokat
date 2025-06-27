// Random quote
window.onload = function(){
    const quotes = [
        "You chucked me out like I was trash. For that you should be dead. But! But! But! Then it hit me like a flash! What if high school went away instead?",
        "The Phantom of the Opera is there, inside your mind!",
        "This is counter-culture from the underground. Eternal revolution, this is our sound. KMFDM, better than the best. Megalomaniacal and harder than the rest",
        "That's a sharp outfit, Chan. Careful, you could puncture the hull of an empire-class Fire Nation battleship, leaving thousands to drown at sea... Because... It's so sharp.",
        "You know, you ponies got it all wrong, friendship isn't magic, it's power."
    ];
    const randomQuote = document.getElementById("randomQuote");
    const random = Math.floor(Math.random() * quotes.length);
    randomQuote.textContent = quotes[random];
}

// Copy textarea link to clipboard
document.getElementById("linkBtn").onclick = function() {
    document.getElementById("linkTxt").select();
    document.execCommand('copy');
}

// Thing of the whenever
const totw = document.getElementById("totw_real");
const cozy = document.getElementById("totw_creature");

document.getElementById("cozyBtn").onclick = function() {
    totw.style.display = 'none';
    cozy.style.display = 'block';
}

document.getElementById("totwBtn").onclick = function() {
    cozy.style.display = 'none';
    totw.style.display = 'block';
}

document.getElementById("closeWindowBtn").onclick = function() {
    document.getElementById("totwTitle").textContent = "You can't do that dumbass.";
    closeWindowBtn.disabled = true;
}

// Snoopy bark
document.getElementById("snupi").onclick = function(){
    var audio = new Audio('https://amendokat.github.io/assets/audio/bark.mp3');
    audio.play();
}