// Modal logic
const modal = document.getElementById('loveModal');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const mainContent = document.getElementById('mainContent');

yesBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    mainContent.style.display = 'block';
});

noBtn.addEventListener('click', function() {
    // Move the "No" button to a random position
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// Quiz logic
const quizBtns = document.querySelectorAll('.quizBtn');
const quizResult = document.getElementById('quizResult');
let correctAnswers = 0;

quizBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.dataset.answer === 'right') {
            correctAnswers++;
            this.style.backgroundColor = '#28a745'; // Green for correct
        } else {
            this.style.backgroundColor = '#dc3545'; // Red for wrong
        }
        this.disabled = true; // Disable after click
    });
});

// Show result after all questions (simple check)
setTimeout(() => {
    if (correctAnswers >= 1) { // Adjust threshold
        quizResult.style.display = 'block';
    }
}, 5000); // After 5 seconds, assuming user has clicked

// Surprise button
document.getElementById('surpriseBtn').addEventListener('click', function() {
    document.getElementById('surpriseText').style.display = 'block';
});