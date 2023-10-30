let colors = [
    '#fee2e2',
    '#ffedd5',
    '#fef3c7',
    '#ecfccb',
    '#dcfce7',
    '#ccfbf1',
    '#cffafe'
]

let p = 0;

let colorIndex = Math.round(new Date().getHours() / 23.0 * colors.length);

for (let project of document.querySelectorAll('.projects .project p')) {
    project.style.color = colors[colorIndex++ % colors.length]
}