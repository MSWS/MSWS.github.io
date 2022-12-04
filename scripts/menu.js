const pages = {
  "Home": "index.html",
  "About": "about.html",
  "Resume": "resume.html",
  "Guess": "guess.html"
}

window.addEventListener("load", init);

function init() {
  let header = document.querySelector('header');
  if (header == null) {
    header = document.createElement('header');
    document.body.before(header);
  }

  let ul = document.createElement('ul');
  ul.classList.add('header');

  for (let page in pages) {
    let a = document.createElement("a");
    a.appendChild(document.createTextNode(page));
    a.href = pages[page];

    if (pages[page] == window.location.pathname.split("/").pop())
      a.classList.add("current");
    ul.append(a);
  }

  header.prepend(ul);
}

