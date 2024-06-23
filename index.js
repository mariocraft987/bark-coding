/* Some common scripts created in javascript to work the website, and make it interactive. */

let toevaluate = ["/src/scripts/injector.js"];
toevaluate.forEach(path => {
  fetch(path)
    .then(data => data.text())
    .then(data => {
      (async () => {
        eval(data);
      })(); //run in a seprate thread so it doesnt block this scripts execution
    });
});

let newsBox = "<a href='https://bark.dumorando.com'>bark.dumorando.com</a> is a new domain of Bark Coding!";
let baseUrl = window.location.origin;
let commitsLength = 150;

let mobile = window.navigator.userAgent.toLowerCase().includes("mobi");

console.error("Exit Now! This part is used by devolopers. \n Hackers could tell you to paste strings here to hack your Bark account. \n DON'T DO IT");

document.body.innerHTML += "<button onclick='scrollToTop()' class='buttonFrBx' id='topBtn' disabled>Top</button>";

// footer

// @deprecated use <!-- inject:footer --> instead.
/*
if (document.url != "baseUrl") {
    var footer;
    footer = '<footer><p style="color: #777;">Looks like you\'ve reached the bottom.</p><p>';
    footer += '<a href="'+baseUrl+'">Home</a> '; // Home
    footer += '<a href="/editor/">Editor</a> '; // Editor
    footer += '<a href="https://github.com/mariocraft987/bark.github.io/">Github</a> '; // Github
    footer += '<br/><br/><a href="https://github.com/mariocraft987/bark-coding/wiki">Wiki</a> '; // Wiki
    footer += '<a href="https://discord.gg/hXmHw7H9BF">Discord</a> '; // Discord
    footer += '</p></footer>'
    document.body.innerHTML += footer;
}
*/

if (new Date().getMonth() === 3 && new Date().getDate() === 1) {
    document.getElementById("flip-it-afd-btn").addEventListener("click", function () {
        document.body.classList.toggle("afd-upside-down");
        localStorage.setItem("flip-it-afd", document.body.classList.contains("afd-upside-down"));
    })
    window.addEventListener("load", function () {
        if (localStorage.getItem("flip-it-afd") == "true") {
            this.document.body.classList.add("afd-upside-down");
        }
    })
}

function whatsNew() {
    if (document.URL == baseUrl + "/") {
        document.getElementById("boxChanger").innerHTML = "<h2>Whats New?</h2><p>" + newsBox + "</p>";
    }
}

function randomTxt() {
    //geeksforgeeks.org for the random text generator.

    if (document.URL == baseUrl + "/explore") {

        fetch(window.location.origin +'/src/scripts/tips.json')
            .then(res => res.json()).then(data => {
                obj = data;
            })
            .then(() => {
                wrd = obj[parseInt(Math.random() * obj.length)]
                document.getElementById("randomWord").innerHTML = wrd;
            });
    }
}

function jobRegister() {
    let job = document.querySelector('input[name=job]:checked').value;
    let username = document.getElementById('github-username').value;
    document.getElementById('page').innerHTML = '<br/><h2>You have selected a Job to ' + job + '</h2><p>We have to run a few tests to see your actually <em>' + username + '</em></p><br/><br/><p>Please comment "Job Register 4067"';
    document.getElementById('page').innerHTML += ' on <a class="link" href="https://github.com/Mariocraft987/bark.github.io/commit/5644df6ebc5aa7ea7b611141a265ff7c17712c5e">this commit</a>.</p>'
}

/* @mnsderp for the data saving scripts */

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    // Save dark mode state to local storage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Function to initialize dark mode based on local storage
function initializeDarkMode() {
    // Attach event listener to dark mode toggle button
    const darkModeToggle = document.getElementById('darkModeToggle');
    try {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    } catch (error) {
        console.error('failed to add click event for the dark mode toggle :(', error);
    }
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    const body = document.body;
    if (isDarkMode) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}

// Initialize dark mode when the page loads
window.addEventListener('load', initializeDarkMode);

whatsNew();
const theme = localStorage.getItem('theme');
if (theme) {
    if (theme.startsWith('#')) {
        const style = document.createElement('style');
        document.head.append(style);
        const link = document.createElement('link');
        link.rel = "stylesheet";
        link.href = window.location.origin + `/src/themes/bluedodger.css`;
        document.head.append(link);
    } else if (theme != "bluedodger") {
        const link = document.createElement('link');
        link.rel = "stylesheet";
        link.href = window.location.origin +`/src/themes/${theme}.css`;
        document.head.append(link);
    } else {
        const link = document.createElement('link');
        link.rel = "stylesheet";
        link.href = window.location.origin+`/src/themes/bluedodger.css`;
        document.head.append(link);
    }
} else {
        const link = document.createElement('link');
        link.rel = "stylesheet";
        link.href = window.location.origin + `/src/themes/bluedodger.css`;
        document.head.append(link);
    }

let mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.disabled = false;
  } else {
    mybutton.disabled = true;
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
