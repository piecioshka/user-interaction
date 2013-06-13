/**
 * @author Piotr Kowalski <piotr.kowalski@redefine.pl>
 */
(function (global) {
  "use strict";

  // imports
  var document = global.document;

  // private
  var link, cont, help_timeout;

/******************************************************************************/
/* UTILITIES */
/******************************************************************************/

  function $$(sel) {
    return document.querySelector(sel);
  }

  function get_timeout_from_hash() {
    return +global.location.hash.substr(1);
  }

  function create_button() {
    var btn, text, img;

    btn = document.createElement("div");
    btn.className = "box";

    text = document.createElement("div");
    text.className = "text";
    text.innerHTML = get_timeout_from_hash() || '';
    btn.appendChild(text);

    img = document.createElement("img");
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

/******************************************************************************/
/* INIT PROCESS */
/******************************************************************************/

  link = $$("#link");
  cont = $$("#page");

  link.addEventListener("click", function (event) {
    stop(event);

    clearTimeout(help_timeout);

    help_timeout = setTimeout(function () {
      create_real_button();
    }, get_timeout_from_hash());
  });

}(this));
