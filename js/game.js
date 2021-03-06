const AREA = document.body;
var defaultLength = 75;
var CIRCLE = document.querySelector('.circle');


var circleSize = defaultLength;
var clickCount = 0;

var windowWidth = window.innerWidth - (circleSize + 2);
var windowHeight = window.innerHeight - (circleSize + 2);

var win = false;
var lose = false;

function positionCircle(e) {
    var horizontalPosition = (windowWidth * Math.random()) + 1;
    var verticalPosition= (windowHeight * Math.random()) + 1;
    var newColor = randomColor();

    circleSize = defaultLength;
    // CIRCLE.style.height = defaultLength + 'px';
    // CIRCLE.style.width = defaultLength + 'px';
    CIRCLE.style.backgroundColor = newColor;
    CIRCLE.style.left = horizontalPosition + 'px';
    CIRCLE.style.top = verticalPosition + 'px';
    do {
        setInterval(shrinkCircle, 100);
    } while (circleSize < 0)
}

function shrinkCircle() {
    circleSize -= .3 + ((Math.log10(clickCount)) / 1000000);
    if (circleSize < 0) {
        location.href = "../html/game-end.html";
        localStorage.setItem("clicks", clickCount);
    }
    CIRCLE.style.height = circleSize + 'px';
    CIRCLE.style.width = circleSize + 'px';
    console.log("working");
}

positionCircle();

CIRCLE.addEventListener('click', positionCircle, false);
CIRCLE.addEventListener('click', function(){ clickCount += 1; console.log(clickCount) }, false);