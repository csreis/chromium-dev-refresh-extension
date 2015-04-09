// Inject a web fonts style rule using JavaScript, since it doesn't seem to
// work from the content script's CSS file.
var s = document.createElement("style");
s.innerHTML = "@import url(https://fonts.googleapis.com/css?family=Ubuntu+Mono:400,700|Roboto:400,700,100);"
document.body.appendChild(s);
