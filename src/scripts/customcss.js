let customCSS = localStorage.getItem("customCSS") ?? "";//so it never returns "null"

//this is from a addstyle pollyfill
const addStyle = function (aCss) {
    'use strict';
    let head = document.getElementsByTagName('head')[0];
    if (head) {
      let style = document.createElement('style');
      style.setAttribute('type', 'text/css');
      style.textContent = aCss;
      head.appendChild(style);
      return style;
    }
    return null;
};

addStyle(customCSS);