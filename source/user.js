function $$(sel) {
  return document.querySelector(sel);
}

function create_button() {
  var btn = document.createElement("div");
  btn.className = "box";

  var text = document.createElement("div");
  text.className = "text";
  text.innerHTML = get_timeout() || '';
  btn.appendChild(text);

  var img = document.createElement("img");
  img.setAttribute("src", "http://beerhold.it/100/50/?=" + +new Date());
  btn.appendChild(img);

  return btn;
}

function create_real_button() {
  var btn = create_button();
  cont.appendChild(btn);
}

function stop(evt) {
  evt.preventDefault();
  evt.stopPropagation();
}

function hide(elm) {
  elm.style.display = "none";
}

function show(elm) {
  elm.style.display = "inline-block";
}

var link = $$("#link");
var cont = $$("#page");
var get_timeout = function () {
  var hash = window.location.hash;
  return +hash.substr(1);
}
var img = $$("#loader");

var help_timeout;

link.addEventListener("click", function (evt) {
  stop(evt);
  show(img);

  clearTimeout(help_timeout);

  help_timeout = setTimeout(function () {
    create_real_button();
    hide(img);
  }, get_timeout());
});

