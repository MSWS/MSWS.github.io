let footer = document.querySelector('footer');
if (footer == null) {
  footer = document.createElement('footer');
  document.body.appendChild(footer);
}


let text = document.createElement('p');
text.classList.add('footer');
text.appendChild(document.createTextNode("©2022 Isaac Boaz. All Rights Reserved."));
text.appendChild(document.createElement('br'));
text.appendChild(document.createTextNode("Last Updated: " + document.lastModified));
footer.appendChild(text)