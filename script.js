document.getElementById('generateFactBtn').addEventListener('click', generateFunFact);

function generateFunFact() {
    const funFacts = [
        "Wanderlust Explorer: At 17, I am always planning my next travel adventure.",
        "Stargazing Dreamer: Nights spent under the stars bring me peace and inspiration.",
        "Melody Lover: Music is my constant companion, enhancing every moment."
    ];

    const randomIndex = Math.floor(Math.random() * funFacts.length);
    const randomFact = funFacts[randomIndex];

    document.getElementById('factDisplay').textContent = randomFact;
}
