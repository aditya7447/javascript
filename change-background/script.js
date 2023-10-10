const btn = document.getElementsByTagName('button')[0];
const colors = [
    '#3498db', '#e74c3c', '#1abc9c', '#f39c12', '#9b59b6',
    '#2ecc71', '#f1c40f', '#e67e22', '#95a5a6', '#34495e',
    '#7f8c8d', '#d35400', '#c0392b', '#16a085', '#8e44ad',
    '#27ae60', '#d35400', '#2980b9', '#f39c12', '#bdc3c7'
];

btn.addEventListener('click', function() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    document.body.classList.add('change-background-animation');

    setTimeout(() => {
        document.body.classList.remove('change-background-animation');
    }, 500);
});