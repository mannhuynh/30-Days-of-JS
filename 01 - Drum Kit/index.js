
function playSound(e) {
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    //If different keys pressed, stop the function from runinng all together
    if (!audio) return;

    audio.currentTime = 0; // set back the audio when press the same button again
    audio.play();

    // Add class "playing" from CSS to create animation for pressed buttons.
    key.classList.add('playing');
    
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip if it is not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
// Loop throu all keys and remove transition if it is ended.
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// play the sound when press button
window.addEventListener('keydown', playSound);

// ADD CLICK BY MOUSE FUNCTIONALITY

for (let i=0; i<keys.length; i++) {
    keys[i].addEventListener('click', function ()  {
        this.classList.add('playing');
        
    });
    
}
