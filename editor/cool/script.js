var zoomsize = 12;
var linetabs = 0;
var code = document.getElementById("code");
var zoomindicator = document.getElementById("zi");
var notif = document.getElementById("notification");
var notifpreview = document.getElementById("notifpreview");
var notiflc = document.getElementById("notiflettercount");
var bluroverlay = document.getElementById("blur-overlay");

code.focus();

var zoom = function() {
    if (zoomsize < 50) {
        zoomsize += 4;
        code.style.fontSize = zoomsize+"pt";
    };
    code.focus();
    zoomindicator.innerText = zoomsize;
};

var zoomout = function() {
    if (zoomsize > 6) {
        zoomsize -= 4;
        code.style.fontSize = zoomsize+"pt";
    };
    code.focus();
    zoomindicator.innerText = zoomsize;
};

var resetzoom = function() {
    zoomsize = 12;
    code.style.fontSize = zoomsize+"pt";
    code.focus();
    zoomindicator.innerText = zoomsize;
};

code.addEventListener('keydown', function(e) {
    if (this.selectionEnd - this.selectionStart >= 300 && !e.ctrlKey) {
        e.preventDefault();
        notif.classList.add("open");
        bluroverlay.classList.add("on");
        notiflc.innerHTML = this.selectionEnd - this.selectionStart;
        notifpreview.innerText = code.value.substring(start, end);
    } else if (e.key == "Tab") {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;
        this.value = this.value.substring(0, start) +
        "\t" + this.value.substring(end);
        this.selectionStart =
        this.selectionEnd = start + 1;
        if (this.value == "!\t") {
            this.value = 
            '// this is a beginner project, to help get you started!\n'+
            '\n'+
            'if (confirm("are you having a good day?")) {\n'+
            '\talert("great!");\n'+
            '} else {\n'+
            '\talert(":(");\n'+
            '};'
        };
    } else if (e.key == "(") {
        var start = this.selectionStart;
        var end = this.selectionEnd;
        this.value = this.value.substring(0, start) +
        ")" + this.value.substring(end);
        this.selectionStart =
        this.selectionEnd = start;
    } else if (e.key == "\"") {
        var start = this.selectionStart;
        var end = this.selectionEnd;
        this.value = this.value.substring(0, start) +
        "\"" + this.value.substring(end);
        this.selectionStart =
        this.selectionEnd = start;
    } else if (e.key == "'") {
        var start = this.selectionStart;
        var end = this.selectionEnd;
        this.value = this.value.substring(0, start) +
        "'" + this.value.substring(end);
        this.selectionStart =
        this.selectionEnd = start;
    } else if (e.key == "[") {
        var start = this.selectionStart;
        var end = this.selectionEnd;
        this.value = this.value.substring(0, start) +
        "]" + this.value.substring(end);
        this.selectionStart =
        this.selectionEnd = start;
    } else if (e.key == "{") {
        var start = this.selectionStart;
        var end = this.selectionEnd;
        this.value = this.value.substring(0, start) +
        "}" + this.value.substring(end);
        this.selectionStart =
        this.selectionEnd = start;
    } else if (e.ctrlKey && e.key == "z") {
        e.preventDefault();
    } else if (e.key == "Enter") {
        if ((code.value[this.selectionStart-1] == "{" && code.value[this.selectionStart] == "}") || (code.value[this.selectionStart-1] == "[" && code.value[this.selectionStart] == "]") || (code.value[this.selectionStart-1] == "(" && code.value[this.selectionStart] == ")")) {
            var start = this.selectionStart;
            var end = this.selectionEnd;
            this.value = this.value.substring(0, start) + "\n\t\n" + this.value.substring(end);
            code.setSelectionRange(this.selectionStart-2, this.selectionStart-2);
        };
    } else if (e.ctrlKey && e.key == "/") {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;
        if (start == end) {
            this.value = this.value.substring(0, start) + "/*  */" + this.value.substring(end);
            code.setSelectionRange(start+3, start+3);
        } else {
            if (this.value.substring(start, end).includes("\n")) {
                this.value = this.value.substring(0, start) + "/* " + this.value.substring(start, end) + " */" + this.value.substring(end);
                code.setSelectionRange(start, end+6);
            } else {
                this.value = this.value.substring(0, start) + "// " + this.value.substring(start);
                code.setSelectionRange(start, end+3);
            }
        }
    };
});

var deleteselection = function() {
    code.focus();
    var start = code.selectionStart;
    var end = code.selectionEnd;
    code.value = code.value.substring(0, start)+code.value.substring(end);
    code.selectionEnd = start;
    closenotif();
};

var closenotif = function() {
    code.selectionStart = code.selectionEnd;
    notif.classList.remove("open");
    bluroverlay.classList.remove("on");
    code.focus();
};

var log = function(message) {
    document.getElementById("projecttext").innerHTML += message;
};

var clearconsole = function() {
    document.getElementById("projecttext").innerHTML = "";
};

document.getElementById("start").addEventListener("click", function() {
    document.getElementById("stage").contentWindow.postMessage(code.value, "*");
});