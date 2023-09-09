let colors = ['9ca3af']

let p = 0;

let colorIndex = Math.round(new Date().getHours() / 23.0 * colors.length);

for (let project of document.querySelectorAll('.projects .project p')) {
  project.style.color = '#' + colors[colorIndex++ % colors.length]
}