var Wave=function(e){if("object"!=typeof e&&"undefined"==typeof e.canvas)throw"Provide a valid canvas element for the application.";var n=e.canvas,t=n.getContext("2d"),i=e.frequency||.005,f=e.phase||30,a=e.amplitude||50,o=e.color||"red",d=e.shift||10,r=e.lineWidth||4,l="undefined"!=typeof e.outline?e.outline:!0,u="undefined"!=typeof e.fill?e.fill:!1,c="undefined"!=typeof e.gradient?e.gradient:!1,h=e.origin||{x:0,y:n.height/2},p=function(e,i,f){var a=r/2;if(t.beginPath(),l&&(t.fillStyle=f,t.lineWidth=2,t.arc(e,i,a,0,2*Math.PI),t.fill()),u){if(c){var o=t.createLinearGradient(0,0,0,n.height);o.addColorStop(.5,f),o.addColorStop(1,"transparent"),t.fillStyle=o}else t.fillStyle=f;t.fillRect(e-a,i-a,a,n.height-i+a)}},y=function(e,n,t,i,f){for(var a=h.x;a<h.x+e;a++){var o=i*Math.sin(f*(a+n));p(a,h.y+o,t)}},s=function(e,n){return Math.floor(Math.random()*(n-e))+e},v=function(){t.clearRect(0,0,n.width,n.height)},g=function(e){requestAnimationFrame(g),v(),f+=s(10,15)+d;var t="undefined"!=typeof e?e.amplitude||a:a,r="undefined"!=typeof e?e.color||o:o,l="undefined"!=typeof e?e.phase||f:f,u="undefined"!=typeof e?e.frequency||i:i;y(n.width,l,r,t,u)},m=function(e){f+=s(10,15)+d;var t="undefined"!=typeof e?e.amplitude||a:a,r="undefined"!=typeof e?e.color||o:o,l="undefined"!=typeof e?e.phase||f:f,u="undefined"!=typeof e?e.frequency||i:i;y(n.width,l,r,t,u)};this.redraw=function(e){m(e)},this.draw=function(e){g(e)},this.clearCanvas=function(){v()}};

window.onload = function() {
    var canvas = document.getElementById("c"),
        context = canvas.getContext("2d");
    var wave = new Wave({
        canvas: canvas,
        frequency: 0.05,
        shift: -20,
        color: "black"
    });

    wave.draw();
}
var container = document.getElementById("container")
var character = document.getElementById("Character");
var sweatOne = document.getElementById("one");
var sweatTwo = document.getElementById("two");
var TV = document.getElementById("TV");
var canvas = document.getElementById("c");
var contract = document.getElementById("Contract");
var signUp = document.getElementById("signUp");
var sig = document.getElementById("sig");
var pushUp = document.getElementById("pushUp");
var pushUp2 = document.getElementById("pushUp2");
var pushUp3 = document.getElementById("pushUp3");
var curl1 = document.getElementById("curl1");
var background = document.getElementById("background1");
var background2 = document.getElementById("background2");
var bookShelf = document.getElementById("BookShelf");
var arrow = document.getElementById("arrow");
var arrow2 = document.getElementById("arrow2");
var arrow3 = document.getElementById("arrow3");
var arrow4 = document.getElementById("arrow4");
var background3 = document.getElementById("background3");
var zip = document.getElementById("drop");
var suit = document.getElementById("suit");
var tie = document.getElementById("tie");
var logo =  document.getElementById("agent")

var TVStatic = new Audio("audio/TV.mp3");
var penSig = new Audio("audio/pen.mp3");
var spyMusic = new Audio("audio/spyMusic.mp3");
var gunShot = new Audio("audio/gun.mp3");
var zipSound = new Audio("audio/zip.mp3");

TVStatic.volume = 0.1;
penSig.volume = 0.5;
spyMusic.volume = 0.1;
gunShot.volume = 0.1;
zipSound.volume = 0.1;

bookShelf.style.animationPlayState = "paused";
signUp.style.animationPlayState = "paused";
contract.style.animationPlayState = "paused";
character.style.animationPlayState = "paused";
sig.style.animationPlayState = "paused";
TV.style.animationPlayState = "paused";
pushUp.style.animationPlayState = "paused";
pushUp2.style.animationPlayState = "paused";
pushUp3.style.animationPlayState = "paused";
curl1.style.animationPlayState = "paused";
background3.style.animationPlayState = "paused";
zip.style.animationPlayState = "paused";
tie.style.animationPlayState = "paused";
logo.style.animationPlayState = "paused";
suit.style.animationPlayState = "paused";


TV.addEventListener("animationend", Scene2);
TV.onclick = function Transition() {
	TVStatic.play();
	character.style.animationPlayState = "running";
	TV.style.animationPlayState = "running";
	bookShelf.style.animationPlayState = "running";
	sweatOne.parentNode.removeChild(sweatOne);
	sweatTwo.parentNode.removeChild(sweatTwo);
	canvas.parentNode.removeChild(canvas);
	arrow.parentNode.removeChild(arrow);
}
sig.addEventListener("animationend", Scene3);
function Scene2(){
	TVStatic.pause();
	TV.parentNode.removeChild(TV);
	character.parentNode.removeChild(character);
	bookShelf.parentNode.removeChild(bookShelf);
	signUp.style.animationPlayState = "running";
	contract.style.animationPlayState = "running";
	signUp.onclick = function signContract() {
		sig.style.animationPlayState = "running";
		penSig.play();
	}
}

function Scene3(){
	penSig.pause();
	sig.parentNode.removeChild(sig);
	signUp.parentNode.removeChild(signUp);
	contract.parentNode.removeChild(contract);
	background.src = "images/background2.png";
	pushUp.style.animationPlayState= "running";
	pushUp2.style.animationPlayState= "running";
	pushUp3.style.animationPlayState= "running";
	arrow2.style.opacity = "1";
}

pushUp.onclick = function Scene4() {
	pushUp.parentNode.removeChild(pushUp);
	pushUp2.parentNode.removeChild(pushUp2);
	pushUp3.parentNode.removeChild(pushUp3);
	curl1.style.animationPlayState = "running";
	arrow2.style.opacity = "0";
	arrow3.style.opacity = "1";

	curl1.onclick = function Scene5() {
		curl1.parentNode.removeChild(curl1);
		background.src = "images/barrelSequence.gif";
		spyMusic.play();
		background3.style.animationPlayState = "running";
		arrow2.parentNode.removeChild(arrow2);
		arrow3.parentNode.removeChild(arrow3);
	}
}

background3.onclick = function addBullet(event) {
	var x = event.clientX;
	var y = event.clientY;
	if((x >= 1020 && y >= 1350) || (x <= 1060 && y <= 1390))
	{
		spyMusic.pause();
		gunShot.play();
		background.src="images/Background3.png"
		background3.parentNode.removeChild(background3);
		zip.style.opacity = "1";
	}
}

drop.onclick = function zipDown() {
	gunShot.pause();
	zipSound.play();
	zip.style.animationPlayState = "running";
	zip.addEventListener("animationend",zipUp);
}

function zipUp() {
	zipSound.pause();
	zip.removeEventListener("animationend",zipUp);
	zip.style.animation = "zipUp 3s forwards";
	zip.style.animationPlayState = "paused";
	zip.onclick = function transitionZip() {
		zipSound.play();
		zip.style.animationPlayState = "running";
		zip.addEventListener("animationend", Scene6);
	} 
}

function Scene6() {
	zipSound.pause();
	zip.parentNode.removeChild(zip);
	background.src = "images/lastBackground.png";
	suit.style.animationPlayState = "running";
	arrow4.style.opacity = "1";
	suit.onclick = function suitUp() {
		tie.style.animationPlayState = "running";
		arrow4.parentNode.removeChild(arrow4);
		tie.addEventListener("animationend", logoScene)
	}
}

function logoScene() {
	suit.style.animationPlayState = "paused";
	logo.style.opacity = "1";
	logo.style.animationPlayState = "running";
	suit.style.animation = "suitFadeOut 2s forwards";
	logo.addEventListener("animationend", suitFade);
	tie.parentNode.removeChild(tie);
}

function suitFade() {
	suit.parentNode.removeChild(suit);
	var rationale = document.createElement('a');
	var text = document.createTextNode("Back");
	rationale.appendChild(text);
	rationale.title = "Back";
	rationale.href = "index.html#5";
	rationale.style.position = "relative";
	rationale.style.bottom = "1000px";
	rationale.style.left = "-300px";
	container.append(rationale);
}
