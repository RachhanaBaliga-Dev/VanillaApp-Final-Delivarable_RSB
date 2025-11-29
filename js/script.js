// grabbing the elements
const vibeButton = document.querySelector('#vibe-button');
const moodEmoji = document.querySelector('#mood-emoji');
const moodTitle = document.querySelector('#mood-title');
const moodText = document.querySelector('#mood-text');

let moodIndex = 0;

function showMood() {
  if (moodIndex === 0) {
    document.body.style.backgroundImage = 'linear-gradient(135deg, #a1c4fd, #c2e9fb)';
    moodEmoji.textContent = '💙';
    moodTitle.textContent = 'Calm';
    moodText.textContent = 'Slow down, breathe, and take things one step at a time.';
  } else if (moodIndex === 1) {
    document.body.style.backgroundImage = 'linear-gradient(135deg, #f9fafb, #e5e7eb)';
    moodEmoji.textContent = '🧠';
    moodTitle.textContent = 'Focused';
    moodText.textContent = 'Hide the distractions and give your brain one clear target.';
  } else if (moodIndex === 2) {
    document.body.style.backgroundImage = 'linear-gradient(135deg, #f97316, #facc15)';
    moodEmoji.textContent = '⚡️';
    moodTitle.textContent = 'Energized';
    moodText.textContent = 'Turn that energy into something you’ll be proud of later.';
  }
}

// click = move to the next mood
vibeButton.addEventListener('click', function () {
  moodIndex = moodIndex + 1;
  if (moodIndex > 2) {
    moodIndex = 0;
  }
  showMood();
});

// start on the first mood
showMood();
