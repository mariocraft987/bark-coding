let isFullScreen = true

function NewtoggleFullscreen() {
  if (isFullScreen == true) { // checks if fullscreen is true
    document.getElementById("blocklyDiv").style.display = "block";
    document.getElementById("xysize").style.display = "block";
    document.getElementById("editortabs").style.display = "block";
    isFullScreen = false
  }else{
    document.getElementById("blocklyDiv").style.display = "none";
    document.getElementById("xysize").style.display = "none";
    document.getElementById("editortabs").style.display = "none";
    isFullScreen = true
  }
}
