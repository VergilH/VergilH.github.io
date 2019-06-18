var box = document.getElementById("box")
var btn = document.getElementById("btn")
    btn.onclick = function() {
        if (box.offsetLeft == 0) {
            box.style['margin-left'] = -100 + "px"
        } else {
            box.style['margin-left'] = 0 + "px"
        }
    }