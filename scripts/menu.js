const pages = {
  "Home": "index.html",
  "About": "about.html",
  "Resume": "./Resume.pdf",
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

    if (page === "Resume")
      a.download = "";

    a.href = pages[page];

    let path = window.location.pathname.split("/").pop();
    if (pages[page] == path || path == "" && pages[page] == "index.html")
      a.classList.add("current");
    ul.append(a);
  }

  header.prepend(ul);
}

