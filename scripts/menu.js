const pages = {
    "Home": "index.html",
    "About": "about.html",
    "Homelab": "homelab.html",
    "Blog": "https://blog.msws.xyz",
    "|": null,
    "Discord": "https://msws.xyz/discord",
    "Paste": "https://paste.msws.xyz/",
    "Stats": "https://msws.xyz/stats"
}

window.addEventListener("load", init);

function init() {
    let header = document.querySelector('header');
    if (header == null) {
        header = document.createElement('header');
        document.body.before(header);
    }

    const ul = document.createElement('ul');
    ul.classList.add('header');

    const path = window.location.pathname.split("/").pop();

    for (let page in pages) {
        let a = document.createElement("a");
        a.appendChild(document.createTextNode(page));

        if (pages[page])
            a.href = pages[page];

        if (pages[page] == path || path == "" && pages[page] == "index.html")
            a.classList.add("current");

        ul.append(a);
    }

    header.prepend(ul);
}

