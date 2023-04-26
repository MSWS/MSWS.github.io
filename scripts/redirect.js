let target = window.location.href;
let matches = RegExp('(:|\\.)([0-9]|\\S){2,5}\\/.+').exec(target);

let match = target.substring(matches.index, matches.index + matches[0].length);
match = match.substring(match.indexOf("/") + 1).toLowerCase();

const map = {
  "github": "https://github.com/MSWS/",
  "youtube": "https://www.youtube.com/@MSWS/",
  "jbmaps": "https://docs.google.com/spreadsheets/d/1V4IP8lJe1Y7VmWusPT4166AlRQX3Tj-BSG7J_V3cGL4/edit?usp=sharing",
  "sonitor": "https://www.edgegamers.com/threads/374889/",
  "playlist": "https://music.youtube.com/playlist?list=PLgCdlfyStH3fMphQSEQYMB1N0RM7h8xBU",
  "discord": "https://discord.gg/A4dFdzZFHh",
  "resume": "https://msws.xyz/resume.html/",
  "egoss": "https://discord.gg/qGyYm8kK5W",
  "topsecret": "https://youtu.be/dQw4w9WgXcQ",
  "audit": "https://docs.google.com/spreadsheets/d/16xoubtD7E54jdlCjA0i8jCeBda5kOJW7tNVIeus2Ouo/"
}

if (match in map)
  window.location.href = map[match];