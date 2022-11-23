let footer = document.querySelector('footer');
if (footer == null) {
  footer = document.createElement('footer');
  document.body.appendChild(footer);
}


let text = document.createElement('p');
text.classList.add('footer');

let years = "2022";
let year = new Date().getFullYear();
if (year + "" != years) {
  years += "-" + year % 100;
}

text.appendChild(document.createTextNode("©" + years + " Isaac Boaz. All Rights Reserved."));
text.appendChild(document.createElement('br'));
text.appendChild(document.createTextNode("Last Updated: " + document.lastModified));
footer.appendChild(text)