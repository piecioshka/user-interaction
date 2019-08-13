/**
 * @author Piotr Kowalski <piecioshka@gmail.com>
 */
(function (global, document) {
  "use strict";

  // private
  var $link, $container, help_timeout;

/******************************************************************************/
/* UTILITIES */
/******************************************************************************/

  function $(sel) {
    return document.querySelector(sel);
  }

  function get_timeout_from_hash() {
    return Number(global.location.hash.substr(1));
  }

  function create_button() {
    var $btn, $text, $img;

    $btn = document.createElement("div");
    $btn.className = "box";

    $text = document.createElement("div");
    $text.className = "text";
    $text.innerHTML = String(get_timeout_from_hash()) || '';
    $btn.appendChild($text);

    $img = document.createElement("img");
    $img.setAttribute("src", "https://picsum.photos/100/50?=" + Number(new Date()));
    $btn.appendChild($img);

    return $btn;
  }

  function create_real_button() {
    var $btn = create_button();
    $container.appendChild($btn);
  }

/******************************************************************************/
/* INIT PROCESS */
/******************************************************************************/

  function main() {
    $link = $("#link");
    $container = $("#page");

    $link.addEventListener("click", function (evt) {
      clearTimeout(help_timeout);

      help_timeout = setTimeout(function () {
        create_real_button();
      }, get_timeout_from_hash());
    });
  }

  main();

}(this, document));
