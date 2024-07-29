document.getElementById('generateButton').addEventListener('click', generateWord);

const words = [
    'coffee',
    'fast food',
    'snacks',
    'streaming services',
    'magazines',
    'energy drinks',
    'lottery tickets',
    'cable TV',
    'gym membership',
    'online shopping',
    'concert tickets',
    'designer clothes',
    'subscriptions',
    'video games',
    'dining out'
];

function generateWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    document.getElementById('blank').textContent = randomWord;
}
