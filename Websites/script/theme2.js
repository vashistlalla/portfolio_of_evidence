var title = document.getElementById("Title");
var startButton = document.getElementById("start");
var human = document.getElementById("human");
var handMark = document.getElementById("handMark");
var bodyMark = document.getElementById("bodyMark");
var eyeMark = document.getElementById("eyeMark");
var handOpen = document.getElementById("handOpen");
var handClenched = document.getElementById("handClenched");
var handPocket = document.getElementById("handPocket");
var hips = document.getElementById("handOnHips");
var neck = document.getElementById("rubbingNeck");
var eyeContact = document.getElementById("eyeContact");
var eyeLeft = document.getElementById("eyeLeft");
var eyeRight = document.getElementById("eyeRight");
var eyeBottomLeft = document.getElementById("eyeBottomLeft");
var eyeBottomRight = document.getElementById("eyeBottomRight");
var eyeTopLeft = document.getElementById("eyeTopLeft");
var eyeTopRight = document.getElementById("eyeTopRight");
var bottomLeftArrow = document.getElementById("bottomLeftArrow");
var bottomRightArrow = document.getElementById("bottomRightArrow");
var leftArrowMarker = document.getElementById("leftArrowMarker");
var rightArrowMarker = document.getElementById("rightArrowMarker");
var topLeftArrow = document.getElementById("topLeftArrow");
var topRightArrow = document.getElementById("topRightArrow");
var contactArrow = document.getElementById("contactArrow");
var lieArrow = document.getElementById("detectorArrow");
var eyeBottomRightText = document.getElementById("eyeBottomRightText");
var eyeBottomLeftText = document.getElementById("eyeBottomLeftText");
var eyeTopRightText = document.getElementById("eyeTopRightText");
var eyeTopLeftText = document.getElementById("eyeTopLeftText");
var eyeRightText = document.getElementById("eyeRightText");
var eyeLeftText = document.getElementById("eyeLeftText");
var handOpenText = document.getElementById("handOpenText");
var handClenchedText = document.getElementById("handClenchedText");
var handPocketText = document.getElementById("handPocketText");
var handOnHipsText = document.getElementById("handOnHipsText");
var rubbingNeckText = document.getElementById("rubbingNeckText");
var verdict = document.getElementById("verdict");
var detector = document.getElementById("detector");
var rightArrowText = document.getElementById("rightArrowText");
var leftArrowText = document.getElementById("leftArrowText");
var check = 0;
var back = document.getElementById("back");
var rationale = document.getElementById("rationale");
var truth = document.getElementById("truthVerdict");
var lie = document.getElementById("lieVerdict");
var eyeInfo = document.getElementById("eyeInfo");

var music = new Audio("audio/music.mp3");
music.volume = 0.5;
music.loop = true;

truth.style.webkitAnimationPlayState = "paused";
lie.style.webkitAnimationPlayState = "paused";
title.style.webkitAnimationPlayState = "paused";
handOpen.style.webkitAnimationPlayState = "paused";
handPocket.style.webkitAnimationPlayState = "paused";
handClenched.style.webkitAnimationPlayState = "paused";
handMark.style.webkitAnimationPlayState = "paused";
bodyMark.style.webkitAnimationPlayState = "paused";
eyeMark.style.webkitAnimationPlayState = "paused";
human.style.webkitAnimationPlayState = "paused";
hips.style.webkitAnimationPlayState = "paused";
neck.style.webkitAnimationPlayState = "paused";
eyeContact.style.webkitAnimationPlayState = "paused";
eyeLeft.style.webkitAnimationPlayState = "paused";
eyeRight.style.webkitAnimationPlayState = "paused";
eyeBottomLeft.style.webkitAnimationPlayState = "paused";
eyeBottomRight.style.webkitAnimationPlayState = "paused";
eyeTopLeft.style.webkitAnimationPlayState = "paused";
eyeTopRight.style.webkitAnimationPlayState = "paused";
bottomLeftArrow.style.webkitAnimationPlayState = "paused";
bottomRightArrow.style.webkitAnimationPlayState = "paused";
leftArrowMarker.style.webkitAnimationPlayState = "paused";
rightArrowMarker.style.webkitAnimationPlayState = "paused";
topLeftArrow.style.webkitAnimationPlayState = "paused";
topRightArrow.style.webkitAnimationPlayState = "paused";
contactArrow.style.webkitAnimationPlayState = "paused";
eyeBottomRightText.style.webkitAnimationPlayState = "paused";
eyeBottomLeftText.style.webkitAnimationPlayState = "paused";
eyeTopRightText.style.webkitAnimationPlayState = "paused";
eyeTopLeftText.style.webkitAnimationPlayState = "paused";
eyeRightText.style.webkitAnimationPlayState = "paused";
eyeLeftText.style.webkitAnimationPlayState = "paused";
handOpenText.style.webkitAnimationPlayState = "paused";
handClenchedText.style.webkitAnimationPlayState = "paused";
handPocketText.style.webkitAnimationPlayState = "paused";
handOnHipsText.style.webkitAnimationPlayState = "paused";
rubbingNeckText.style.webkitAnimationPlayState = "paused";
back.style.webkitAnimationPlayState = "paused";
verdict.style.webkitAnimationPlayState = "paused";
leftArrowText.style.webkitAnimationPlayState = "paused";
rightArrowText.style.webkitAnimationPlayState = "paused";
rationale.style.webkitAnimationPlayState = "paused";
eyeInfo.style.webkitAnimationPlayState = "paused";

function keypush(evt) {
		if(evt.keyCode == 39) {
			leftArrowText.style.visibility = "visible";
			rightArrowText.style.visibility = "hidden";
			leftArrowText.style.webkitAnimationPlayState = "running";
			hips.style.webkitAnimationPlayState = "paused";
			neck.style.animation = "handAppear 2s ease 0.5s forwards";
			hips.style.animation = "handDisappear 2s ease 0.5s forwards";
			neck.style.visibility = "visible";
			hips.style.visibility = "hidden";
			handOnHipsText.style.visibility = "hidden";
			neck.style.webkitAnimationPlayState = "running";
			neck.onclick = function() {
				lieArrow.style.animation = "lie 1s infinite";
				rubbingNeckText.style.visibility = "visible";
				
				rubbingNeckText.style.webkitAnimationPlayState = "running";
				check = 2;
			}
		}
		if(evt.keyCode == 37) {
			leftArrowText.style.visibility = "hidden";
			rightArrowText.style.visibility = "visible";
			rightArrowText.style.webkitAnimationPlayState = "running";
			neck.style.webkitAnimationPlayState = "paused";
			hips.style.animation = "handAppear 2s ease 0.5s forwards";
			neck.style.animation = "handDisappear 2s ease 0.5s forwards";
			hips.style.visibility = "visible";
			neck.style.visibility = "hidden";
			rubbingNeckText.style.visibility = "hidden";
			hips.style.webkitAnimationPlayState = "running";
			hips.onclick = function() {
				lieArrow.style.animation = "swivel 1s infinite";
				handOnHipsText.style.visibility = "visible";
				
				handOnHipsText.style.webkitAnimationPlayState = "running";

				check = 2;
			}
		}
}

startButton.onclick = function() {
	startButton.style.opacity = "0";
	startButton.parentNode.removeChild(startButton);
	title.style.webkitAnimationPlayState = "running";
	setTimeout(moveToNextScene, 4999);
	music.play();
}

function moveToNextScene() {
	title.style.opacity = "0";
	title.parentNode.removeChild(title);
}

handMark.onclick = function() {
	handOpen.style.visibility = "visible";
	handPocket.style.visibility = "visible";
	handClenched.style.visibility = "visible";
	human.style.webkitAnimationPlayState = "running";
	handMark.style.webkitAnimationPlayState = "running";
	bodyMark.style.webkitAnimationPlayState = "running";
	eyeMark.style.webkitAnimationPlayState = "running";
	handOpen.style.webkitAnimationPlayState = "running";
	handPocket.style.webkitAnimationPlayState = "running";
	handClenched.style.webkitAnimationPlayState = "running";
	back.style.webkitAnimationPlayState = "running";
	bodyMark.addEventListener("animationend", backButton);

}

function backButton() {
	back.onclick = function() {
		human.style.animation = "bodyAppear 2s ease 0.5s forwards";
		handMark.style.animation = "markAppear 2s ease 0.5s forwards";
		bodyMark.style.animation = "markAppear 2s ease 0.5s forwards";
		eyeMark.style.animation = "markAppear 2s ease 0.5s forwards";
		handOpen.style.animation = "handDisappear 2s ease 0.5s forwards";
		handPocket.style.animation = "handDisappear 2s ease 0.5s forwards";
		handClenched.style.animation = "handDisappear 2s ease 0.5s forwards";
		handOpenText.style.animation = "handDisappear 2s ease 0.5s forwards";
		handPocketText.style.animation = "handDisappear 2s ease 0.5s forwards";
		handClenchedText.style.animation = "handDisappear 2s ease 0.5s forwards";
		hips.style.animation = "handDisappear 2s ease 0.5s forwards";
		handOnHipsText.style.animation = "handDisappear 2s ease 0.5s forwards"
		neck.style.animation = "handDisappear 2s ease 0.5s forwards";
		rubbingNeckText.style.animation = "handDisappear 2s ease 0.5s forwards";
		eyeContact.style.animation = "handDisappear 2s ease 0.5s forwards";
		eyeLeft.style.animation = "handDisappear 2s ease 0.5s forwards";
		eyeRight.style.animation = "handDisappear 2s ease 0.5s forwards";
		eyeBottomLeft.style.animation = "handDisappear 2s ease 0.5s forwards";
		eyeBottomRight.style.animation = "handDisappear 2s ease 0.5s forwards";
		eyeTopLeft.style.animation = "handDisappear 2s ease 0.5s forwards";
		eyeTopRight.style.animation = "handDisappear 2s ease 0.5s forwards";
		bottomLeftArrow.style.animation = "handDisappear 2s ease 0.5s forwards";
		bottomRightArrow.style.animation = "handDisappear 2s ease 0.5s forwards";
		topRightArrow.style.animation = "handDisappear 2s ease 0.5s forwards";
		topLeftArrow.style.animation = "handDisappear 2s ease 0.5s forwards";
		leftArrowMarker.style.animation = "handDisappear 2s ease 0.5s forwards";
		rightArrowMarker.style.animation = "handDisappear 2s ease 0.5s forwards";
		contactArrow.style.animation = "handDisappear 2s ease 0.5s forwards";
		eyeLeftText.style.animation = "handDisappear 2s ease 0.5s forwards";
		eyeRightText.style.animation = "handDisappear 2s ease 0.5s forwards";
		eyeBottomLeftText.style.animation = "handDisappear 2s ease 0.5s forwards";
		eyeBottomRightText.style.animation = "handDisappear 2s ease 0.5s forwards";
		eyeTopLeftText.style.animation = "handDisappear 2s ease 0.5s forwards";
		eyeTopRightText.style.animation = "handDisappear 2s ease 0.5s forwards";
		back.style.animation = "handDisappear 2s ease 0.5s forwards";
		rightArrowText.style.animation = "handDisappear 2s ease 0.5s forwards";
		leftArrowText.style.animation = "handDisappear 2s ease 0.5s forwards";
		eyeInfo.style.animation = "handDisappear 2s ease 0.5s forwards";
		eyeInfo.style.visibility = "hidden";
		leftArrowText.style.visibility = "hidden";
		rightArrowText.style.visibility = "hidden";
		handOpen.style.visibility = "hidden";
		handPocket.style.visibility = "hidden";
		handClenched.style.visibility = "hidden";
		handOpenText.style.visibility = "hidden";
		handPocketText.style.visibility = "hidden";
		handClenchedText.style.visibility = "hidden";
		hips.style.visibility = "hidden";
		handOnHipsText.style.visibility = "hidden";
		neck.style.visibility ="hidden";
		rubbingNeckText.style.visibility = "hidden";
		eyeContact.style.visibility = "hidden";
		eyeLeft.style.visibility = "hidden";
		eyeRight.style.visibility = "hidden";
		eyeBottomLeft.style.visibility = "hidden";
		eyeBottomRight.style.visibility = "hidden";
		eyeTopLeft.style.visibility = "hidden";
		eyeTopRight.style.visibility = "hidden";
		eyeLeftText.style.visibility = "hidden";
		eyeRightText.style.visibility = "hidden";
		eyeBottomLeftText.style.visibility = "hidden";
		eyeBottomRightText.style.visibility = "hidden";
		eyeTopLeftText.style.visibility = "hidden";
		eyeTopRightText.style.visibility = "hidden";
		bottomLeftArrow.style.visibility = "hidden";
		bottomRightArrow.style.visibility = "hidden";
		topRightArrow.style.visibility = "hidden";
		topLeftArrow.style.visibility = "hidden";
		leftArrowMarker.style.visibility = "hidden";
		rightArrowMarker.style.visibility = "hidden";
		contactArrow.style.visibility = "hidden";
		document.removeEventListener("keydown", keypush);
		handMark.addEventListener("animationend", changeAnimations);
		if(check == 1){
			handMark.style.visibility = "hidden";
		}
		if(check == 2){
			bodyMark.style.visibility = "hidden";
		}
		if(check == 3){
			eyeMark.style.visibility = "hidden";
		}
	}
}



function changeAnimations() {
	human.style.animation = "bodyDisappear 2s ease 0.5s forwards";
	handMark.style.animation = "markDisappear 2s ease 0.5s forwards";
	bodyMark.style.animation = "markDisappear 2s ease 0.5s forwards";
	eyeMark.style.animation = "markDisappear 2s ease 0.5s forwards";
	handOpen.style.animation = "handAppear 2s ease 0.5s forwards";
	handPocket.style.animation = "handAppear 2s ease 0.5s forwards";
	handClenched.style.animation = "handAppear 2s ease 0.5s forwards";
	handOpenText.style.animation = "handAppear 2s ease 0.5s forwards";
	handPocketText.style.animation = "handAppear 2s ease 0.5s forwards";
	handClenchedText.style.animation = "handAppear 2s ease 0.5s forwards";
	hips.style.animation = "handAppear 2s ease 0.5s forwards";
	handOnHipsText.style.animation = "handAppear 2s ease 0.5s forwards";
	neck.style.animation = "handAppear 2s ease 0.5s forwards";
	rubbingNeckText.style.animation = "handAppear 2s ease 0.5s forwards";
	eyeContact.style.animation = "handAppear 2s ease 0.5s forwards";
	eyeLeft.style.animation = "handAppear 2s ease 0.5s forwards";
	eyeRight.style.animation = "handAppear 2s ease 0.5s forwards";
	eyeBottomLeft.style.animation = "handAppear 2s ease 0.5s forwards";
	eyeBottomRight.style.animation = "handAppear 2s ease 0.5s forwards";
	eyeTopLeft.style.animation = "handAppear 2s ease 0.5s forwards";
	eyeTopRight.style.animation = "handAppear 2s ease 0.5s forwards";
	eyeLeftText.style.animation = "handAppear 2s ease 0.5s forwards";
	eyeRightText.style.animation = "handAppear 2s ease 0.5s forwards";
	eyeBottomLeftText.style.animation = "handAppear 2s ease 0.5s forwards";
	eyeBottomRightText.style.animation = "handAppear 2s ease 0.5s forwards";
	eyeTopLeftText.style.animation = "handAppear 2s ease 0.5s forwards";
	eyeTopRightText.style.animation = "handAppear 2s ease 0.5s forwards";
	bottomLeftArrow.style.animation = "handAppear 2s ease 0.5s forwards";
	bottomRightArrow.style.animation = "handAppear 2s ease 0.5s forwards";
	topRightArrow.style.animation = "handAppear 2s ease 0.5s forwards";
	topLeftArrow.style.animation = "handAppear 2s ease 0.5s forwards";
	leftArrowMarker.style.animation = "handAppear 2s ease 0.5s forwards";
	rightArrowMarker.style.animation = "handAppear 2s ease 0.5s forwards";
	contactArrow.style.animation = "handAppear 2s ease 0.5s forwards";
	back.style.animation = "handAppear 2s ease 0.5s forwards"
	leftArrowText.style.animation = "handAppear 2s ease 0.5s forwards";
	rightArrowText.style.animation = "handAppear 2s ease 0.5s forwards";
	eyeInfo.style.animation = "handAppear 2s ease 0.5s forwards";
	eyeInfo.style.webkitAnimationPlayState = "paused";
	leftArrowText.style.webkitAnimationPlayState = "paused";
	rightArrowText.style.webkitAnimationPlayState = "paused";
	handOpen.style.webkitAnimationPlayState = "paused";
	handPocket.style.webkitAnimationPlayState = "paused";
	handClenched.style.webkitAnimationPlayState = "paused";
	handOpenText.style.webkitAnimationPlayState = "paused";
	handPocketText.style.webkitAnimationPlayState = "paused";
	handClenchedText.style.webkitAnimationPlayState = "paused";
	handMark.style.webkitAnimationPlayState = "paused";
	bodyMark.style.webkitAnimationPlayState = "paused";
	eyeMark.style.webkitAnimationPlayState = "paused";
	human.style.webkitAnimationPlayState = "paused";
	hips.style.webkitAnimationPlayState = "paused";
	handOnHipsText.style.webkitAnimationPlayState = "paused";
	neck.style.webkitAnimationPlayState = "paused";
	rubbingNeckText.style.webkitAnimationPlayState = "paused";
	eyeContact.style.webkitAnimationPlayState = "paused";
	eyeLeft.style.webkitAnimationPlayState = "paused";
	eyeRight.style.webkitAnimationPlayState = "paused";
	eyeBottomLeft.style.webkitAnimationPlayState = "paused";
	eyeBottomRight.style.webkitAnimationPlayState = "paused";
	eyeTopLeft.style.webkitAnimationPlayState = "paused";
	eyeTopRight.style.webkitAnimationPlayState = "paused";
	bottomLeftArrow.style.webkitAnimationPlayState = "paused";
	bottomRightArrow.style.webkitAnimationPlayState = "paused";
	leftArrowMarker.style.webkitAnimationPlayState = "paused";
	rightArrowMarker.style.webkitAnimationPlayState = "paused";
	topLeftArrow.style.webkitAnimationPlayState = "paused";
	topRightArrow.style.webkitAnimationPlayState = "paused";
	contactArrow.style.webkitAnimationPlayState = "paused";
	eyeBottomRightText.style.webkitAnimationPlayState = "paused";
	eyeBottomLeftText.style.webkitAnimationPlayState = "paused";
	eyeTopRightText.style.webkitAnimationPlayState = "paused";
	eyeTopLeftText.style.webkitAnimationPlayState = "paused";
	eyeRightText.style.webkitAnimationPlayState = "paused";
	eyeLeftText.style.webkitAnimationPlayState = "paused";
	handOpenText.style.webkitAnimationPlayState = "paused";
	handClenchedText.style.webkitAnimationPlayState = "paused";
	handPocketText.style.webkitAnimationPlayState = "paused";
	handOnHipsText.style.webkitAnimationPlayState = "paused";
	rubbingNeckText.style.webkitAnimationPlayState = "paused";
	back.style.webkitAnimationPlayState = "paused";
	if(eyeMark.style.visibility == "hidden" && bodyMark.style.visibility == "hidden" && handMark.style.visibility == "hidden") {
			verdict.style.visibility = "visible";
			verdict.style.webkitAnimationPlayState = "running";
			verdict.onclick = function() {
				human.style.animationName = "swipe";
				human.style.webkitAnimationPlayState = "running";
				verdict.parentNode.removeChild(verdict);
				setTimeout(moveToNextScene2, 4999);
			}
		}
}

bodyMark.onclick = function() {
	rightArrowText.style.visibility = "visible";
	rightArrowText.style.webkitAnimationPlayState = "running";
	hips.style.visibility = "visible";
	hips.style.webkitAnimationPlayState = "running";
	human.style.webkitAnimationPlayState = "running";
	handMark.style.webkitAnimationPlayState = "running";
	bodyMark.style.webkitAnimationPlayState = "running";
	eyeMark.style.webkitAnimationPlayState = "running";
	back.style.webkitAnimationPlayState = "running";
	document.addEventListener("keydown", keypush);
	bodyMark.addEventListener("animationend", backButton);
}

eyeMark.onclick = function() {
	eyeContact.style.visibility = "visible";
	eyeLeft.style.visibility = "visible";
	eyeRight.style.visibility = "visible";
	eyeBottomLeft.style.visibility = "visible";
	eyeBottomRight.style.visibility = "visible";
	eyeTopLeft.style.visibility = "visible";
	eyeTopRight.style.visibility = "visible";
	bottomLeftArrow.style.visibility = "visible";
	bottomRightArrow.style.visibility = "visible";
	topRightArrow.style.visibility = "visible";
	topLeftArrow.style.visibility = "visible";
	leftArrowMarker.style.visibility = "visible";
	rightArrowMarker.style.visibility = "visible";
	contactArrow.style.visibility = "visible";
	eyeInfo.style.visibility = "visible";
	bottomLeftArrow.style.webkitAnimationPlayState = "running";
	bottomRightArrow.style.webkitAnimationPlayState = "running";
	leftArrowMarker.style.webkitAnimationPlayState = "running";
	rightArrowMarker.style.webkitAnimationPlayState = "running";
	topLeftArrow.style.webkitAnimationPlayState = "running";
	topRightArrow.style.webkitAnimationPlayState = "running";
	contactArrow.style.webkitAnimationPlayState = "running";
	eyeContact.style.webkitAnimationPlayState = "running";
	human.style.webkitAnimationPlayState = "running";
	handMark.style.webkitAnimationPlayState = "running";
	bodyMark.style.webkitAnimationPlayState = "running";
	eyeMark.style.webkitAnimationPlayState = "running";
	back.style.webkitAnimationPlayState = "running";
	eyeInfo.style.webkitAnimationPlayState = "running";

	bottomLeftArrow.onclick = function() {
		eyeBottomLeft.style.visibility = "visible";
		eyeBottomLeft.style.webkitAnimationPlayState = "running";
		eyeContact.style.visibility = "hidden";
		eyeLeft.style.visibility = "hidden";
		eyeRight.style.visibility = "hidden";
		eyeBottomRight.style.visibility = "hidden";
		eyeTopLeft.style.visibility = "hidden";
		eyeTopRight.style.visibility = "hidden";
	}
	bottomRightArrow.onclick = function() {
		eyeBottomRight.style.visibility = "visible";
		eyeBottomRight.style.webkitAnimationPlayState = "running";
		eyeLeft.style.visibility = "hidden";
		eyeRight.style.visibility = "hidden";
		eyeBottomLeft.style.visibility = "hidden";
		eyeTopLeft.style.visibility = "hidden";
		eyeTopRight.style.visibility = "hidden";
		eyeContact.style.visibility = "hidden";
	}
	topLeftArrow.onclick = function() {
		eyeTopLeft.style.visibility = "visible";
		eyeTopLeft.style.webkitAnimationPlayState = "running";
		eyeLeft.style.visibility = "hidden";
		eyeRight.style.visibility = "hidden";
		eyeBottomLeft.style.visibility = "hidden";
		eyeBottomRight.style.visibility = "hidden";
		eyeTopRight.style.visibility = "hidden";
		eyeContact.style.visibility = "hidden";
	}
	topRightArrow.onclick = function() {
		eyeTopRight.style.visibility = "visible";
		eyeTopRight.style.webkitAnimationPlayState = "running";
		eyeLeft.style.visibility = "hidden";
		eyeRight.style.visibility = "hidden";
		eyeBottomLeft.style.visibility = "hidden";
		eyeTopLeft.style.visibility = "hidden";
		eyeBottomRight.style.visibility = "hidden";
		eyeContact.style.visibility = "hidden";
	}
	//mixed the names up
	leftArrowMarker.onclick = function() {
		eyeRight.style.webkitAnimationPlayState = "running";
		eyeRight.style.visibility = "visible";
		eyeBottomRight.style.visibility = "hidden";
		eyeLeft.style.visibility = "hidden";
		eyeBottomLeft.style.visibility = "hidden";
		eyeTopLeft.style.visibility = "hidden";
		eyeTopRight.style.visibility = "hidden";
		eyeContact.style.visibility = "hidden";
	}
	rightArrowMarker.onclick = function() {
		eyeLeft.style.visibility = "visible";
		eyeLeft.style.webkitAnimationPlayState = "running";
		eyeRight.style.visibility = "hidden";
		eyeBottomRight.style.visibility = "hidden";
		eyeBottomLeft.style.visibility = "hidden";
		eyeTopLeft.style.visibility = "hidden";
		eyeTopRight.style.visibility = "hidden";
		eyeContact.style.visibility = "hidden";
	}
	contactArrow.onclick = function() {
		eyeContact.style.visibility = "visible";
		eyeContact.style.webkitAnimationPlayState = "running";
		eyeLeft.style.visibility = "hidden";
		eyeRight.style.visibility = "hidden";
		eyeBottomLeft.style.visibility = "hidden";
		eyeTopLeft.style.visibility = "hidden";
		eyeTopRight.style.visibility = "hidden";
		eyeBottomRight.style.visibility = "hidden";
	}
	bodyMark.addEventListener("animationend", backButton);
}

handOpen.onclick = function() {
	lieArrow.style.animation = "truth 1s infinite";
	handOpenText.style.visibility = "visible";
	handPocketText.style.visibility = "hidden";
	handClenchedText.style.visibility = "hidden";
	handOpenText.style.webkitAnimationPlayState = "running";
	check = 1;
}

handClenched.onclick = function() {
	lieArrow.style.animation = "lie 1s infinite";
	handClenchedText.style.visibility = "visible";
	handPocketText.style.visibility = "hidden";
	handOpenText.style.visibility = "hidden";
	handClenchedText.style.webkitAnimationPlayState = "running";
	check = 1;
}

handPocket.onclick = function() {
	lieArrow.style.animation = "lie 1s infinite";
	handPocketText.style.visibility = "visible";
	handOpenText.style.visibility = "hidden";
	handClenchedText.style.visibility = "hidden";
	handPocketText.style.webkitAnimationPlayState = "running";
	check = 1;
}

eyeLeft.onclick = function() {
	lieArrow.style.animation = "lie 1s infinite";
	eyeRightText.style.visibility = "visible";
	eyeLeftText.style.visibility = "hidden";
	eyeTopLeftText.style.visibility = "hidden";
	eyeTopRightText.style.visibility = "hidden";
	eyeBottomLeftText.style.visibility = "hidden";
	eyeBottomRightText.style.visibility = "hidden";
	eyeRightText.style.webkitAnimationPlayState = "running";
	check = 3;
}

eyeTopRight.onclick = function() {
	lieArrow.style.animation = "lie 1s infinite";
	eyeTopRightText.style.visibility = "visible";
	eyeRightText.style.visibility = "hidden";
	eyeTopLeftText.style.visibility = "hidden";
	eyeLeftText.style.visibility = "hidden";
	eyeBottomLeftText.style.visibility = "hidden";
	eyeBottomRightText.style.visibility = "hidden";
	eyeTopRightText.style.webkitAnimationPlayState = "running";
	check = 3
}

eyeBottomRight.onclick = function() {
	lieArrow.style.animation = "lie 1s infinite";
	eyeBottomRightText.style.visibility = "visible";
	eyeRightText.style.visibility = "hidden";
	eyeTopLeftText.style.visibility = "hidden";
	eyeTopRightText.style.visibility = "hidden";
	eyeBottomLeftText.style.visibility = "hidden";
	eyeLeftText.style.visibility = "hidden";
	eyeBottomRightText.style.webkitAnimationPlayState = "running";
	check = 3;
}

eyeRight.onclick = function() {
	lieArrow.style.animation = "truth 1s infinite";
	eyeLeftText.style.visibility = "visible";
	eyeRightText.style.visibility = "hidden";
	eyeTopLeftText.style.visibility = "hidden";
	eyeTopRightText.style.visibility = "hidden";
	eyeBottomLeftText.style.visibility = "hidden";
	eyeBottomRightText.style.visibility = "hidden";
	eyeLeftText.style.webkitAnimationPlayState = "running";
	check = 3;
}

eyeBottomLeft.onclick = function() {
	lieArrow.style.animation = "truth 1s infinite";
	eyeBottomLeftText.style.visibility = "visible";
	eyeRightText.style.visibility = "hidden";
	eyeTopLeftText.style.visibility = "hidden";
	eyeTopRightText.style.visibility = "hidden";
	eyeLeftText.style.visibility = "hidden";
	eyeBottomRightText.style.visibility = "hidden";
	eyeBottomLeftText.style.webkitAnimationPlayState = "running";
	check = 3;
}

eyeTopLeft.onclick = function() {
	lieArrow.style.animation = "truth 1s infinite";
	eyeTopLeftText.style.visibility = "visible";
	eyeRightText.style.visibility = "hidden";
	eyeLeftText.style.visibility = "hidden";
	eyeTopRightText.style.visibility = "hidden";
	eyeBottomLeftText.style.visibility = "hidden";
	eyeBottomRightText.style.visibility = "hidden";
	eyeTopLeftText.style.webkitAnimationPlayState = "running";
	check = 3;
}

function moveToNextScene2() {
	lieArrow.style.visibility = "hidden";
	detector.style.visibility = "hidden";
	rationale.style.visibility = "visible";
	if(lieArrow.style.animationName == "lie") {
		lie.style.visibility = "visible";
		lie.style.webkitAnimationPlayState = "running";
		rationale.style.visibility = "visible";
		rationale.style.webkitAnimationPlayState ="running";
	}
	if(lieArrow.style.animationName == "truth") {
		truth.style.visibility = "visible";
		truth.style.webkitAnimationPlayState = "running";
		rationale.style.visibility = "visible";
		rationale.style.webkitAnimationPlayState = "running";
	}
	if(lieArrow.style.animationName == "swivel") {
		truth.style.visibility = "visible";
		truth.style.webkitAnimationPlayState = "running";
		rationale.style.visibility = "visible";
		rationale.style.webkitAnimationPlayState = "running";
	}
	rationale.onclick = function() {
		location.href = "index.html#6";
	}
}