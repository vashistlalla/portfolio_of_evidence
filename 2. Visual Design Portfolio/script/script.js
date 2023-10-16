
document.getElementById("movieInstruction").classList.toggle("pulsate");
document.getElementById("musicInstruction").classList.toggle("pulsate");
document.getElementById("theme1Rationale").style.visibility = "visible";
//$('head').append('<style>.box:before{animation: fill 7s ease-in-out forwards;}</style>');
var opacity = 0;
var intervalID = 0;
 function fadeIn()
 {
 	intervalID = setInterval(show, 20);
 }

 function show()
 {
 	var text = document.getElementById("rationaleText");
 	opacity = Number(window.getComputedStyle(text).getPropertyValue("opacity"));
 	if(opacity < 1)
 	{
 		opacity = opacity+0.1;
 		text.style.opacity=opacity;
 	}
 	else
 	{
 		clearInterval(intervalID);
 	}
 }

 function fadeIn2()
 {
 	intervalID = setInterval(show2, 20);
 }

 function show2()
 {
 	var text = document.getElementById("rationale3Text");
 	opacity = Number(window.getComputedStyle(text).getPropertyValue("opacity"));
 	if(opacity < 1)
 	{
 		opacity = opacity+0.1;
 		text.style.opacity=opacity;
 	}
 	else
 	{
 		clearInterval(intervalID);
 	}
 }
var theme1 = document.getElementById("theme1Button");
var theme2 = document.getElementById("theme2Button");
var theme3 = document.getElementById("theme3Button");

theme1.onclick= function(){
     $('#5').animate({backgroundColor: '#FFFFFF'}, function(){
        location.href = "theme1.html";
        });
}

theme2.onclick= function(){
	$('#6').animate({backgroundColor: '#C7B299'}, function(){
        location.href = "theme2.html";
        });
}

theme3.onclick= function(){
    $('#7').animate({backgroundColor: '#000000'}, function(){
        location.href = "theme3.html";
        });
}

function vanish() {
	document.getElementById("HP").classList.toggle("vanishOut");
}
var audio = new Audio('audio/filmStrip.mp3');
var audio2 = new Audio('audio/hipHop.mp3');
var audioTheme1 = new Audio('audio/theme1Music.mp3');
var audio3 = new Audio('audio/music.mp3');
var audio4 = new Audio('audio/mainSong.mp3');
var inter = 0;
function movie() {
    
    audio.play();
    inter = setInterval(pauseAud, 6000);
    document.getElementById("filmStrip").classList.toggle("filmStrip");
	document.getElementById("movie").classList.toggle("spaceInLeft");
	document.getElementById("movie").style.opacity = "1";
    document.getElementById("movieInstruction").classList.remove("pulsate");
}

function pauseAud(){
    audio.pause();
    clearInterval(inter);
}

function pauseAud2(){
    audio2.pause();
    clearInterval(inter);
}
function playAud3(){
    audio3.play();
    inter = setInterval(pauseAud3, 15000);

}

function playAudTheme1(){
    audioTheme1.play();
    inter = setInterval(pauseAudTheme1, 10000);
}

function pauseAudTheme1(){
    audioTheme1.pause();
    clearInterval(inter);
}

function pauseAud3(){
    audio3.pause();
    clearInterval(inter);
}

function playAud4(){
    audio4.play()
    inter = setInterval(pauseAud4, 15000);
    document.getElementById("songDes").style.opacity = "1";
}

function pauseAud4(){
    audio4.pause();
    clearInterval(inter);
}


function music() {
    audio2.play();
    inter = setInterval(pauseAud2, 3000);
    document.getElementById("musicNotesLeft").classList.remove("pulsate");
    document.getElementById("musicNotesRight").classList.remove("pulsate");
	document.getElementById("music").classList.remove("pulsate");
    document.getElementById("musicInstruction").classList.remove("pulsate");
	document.getElementById("music").classList.toggle("spinIn");
    document.getElementById("musicNotesLeft").classList.toggle("spinIn");
    document.getElementById("musicNotesRight").classList.toggle("spinIn");
	document.getElementById("music").style.opacity = "1";
    document.getElementById("musicNotesLeft").style.opacity = "1";
    document.getElementById("musicNotesRight").style.opacity = "1";
    document.getElementById("clickMe").style.opacity = "1";
	document.getElementById("music").addEventListener("animationend", pulsate);
}

function pulsate() {
    document.getElementById("musicNotesLeft").classList.remove("spinIn");
    document.getElementById("musicNotesRight").classList.remove("spinIn");
	document.getElementById("music").classList.remove("spinIn");
	document.getElementById("music").classList.toggle("pulsate");
    document.getElementById("musicNotesLeft").classList.toggle("pulsate");
    document.getElementById("musicNotesRight").classList.toggle("pulsate");
	$('#music').click(function (){
    $('#2').animate({backgroundColor: '#000000'}, function(){
        location.href = "theme3.html";
        });
    });
}

function leftSideIcon(){
    audioTheme1.play();
    document.getElementById("theme1Rationale").style.visibility = "hidden";
    intervalID = setInterval(leftSideIconReveal, 20);

}

function leftSideIconReveal(){
    icon1 = document.getElementById("liquid1");
    icon1Opacity = Number(window.getComputedStyle(icon1).getPropertyValue("opacity"));
    $('head').append('<style>#liquid1:before{animation: fill 7s ease-in-out forwards;}</style>');
     if(icon1Opacity < 1)
    {
        icon1Opacity = icon1Opacity+0.1;
        icon1.style.opacity= icon1Opacity;
    }
    else
    {
        clearInterval(intervalID);
        setTimeout(function(){
            intervalID = setInterval(revealTheme1Rationale, 20);
        }, 4000);
    } 
}

function revealTheme1Rationale(){
    rationale = document.getElementById("rationale1Text");
    rationaleOpacity = Number(window.getComputedStyle(rationale).getPropertyValue("opacity"));
    if(rationaleOpacity < 1)
    {
        rationaleOpacity = rationaleOpacity+0.1;
        rationale.style.opacity=rationaleOpacity;
    }
    else
    {
        clearInterval(intervalID);
        setTimeout(function(){
            intervalID = setInterval(rightSideIconReveal, 20);
        }, 4000);
    }  
}

function rightSideIconReveal(){
    console.log("hello");
    icon2 = document.getElementById("liquid2");
    icon2Opacity = Number(window.getComputedStyle(icon2).getPropertyValue("opacity"));
    $('head').append('<style>#liquid2:before{animation: fill 7s ease-in-out forwards;}</style>');
     if(icon2Opacity < 1)
    {
        icon2Opacity = icon2Opacity+0.1;
        icon2.style.opacity= icon2Opacity;
    }
    else
    {
        clearInterval(intervalID);
        setTimeout(function(){
            intervalID = setInterval(revealTheme1Info, 20);
        }, 4000);
    }
}

function revealTheme1Info(){
    info = document.getElementById("theme1Info");
    infoOpacity = Number(window.getComputedStyle(info).getPropertyValue("opacity"));
    if(infoOpacity < 1)
    {
        infoOpacity = infoOpacity+0.1;
        info.style.opacity=infoOpacity;
    }
    else
    {
        clearInterval(intervalID);
        setTimeout(function(){
            intervalID = setInterval(gunBarrelReveal, 30);
        }, 4000);
    }
}

function gunBarrelReveal(){
    prev = document.getElementById("theme1Prev");
    prevOpacity = Number(window.getComputedStyle(prev).getPropertyValue("opacity"));
    if(prevOpacity < 1)
    {
        prevOpacity = prevOpacity+0.1;
        prev.style.opacity=prevOpacity;
    }
    else
    {

        clearInterval(intervalID);
    }
    audioTheme1.pause();
}

window.addEventListener('load',() => {
  // Variables
  const canvasEl = document.querySelector('canvas')
  const ctx = canvasEl.getContext('2d')
  const brushWidth = 1000
  const fontSize = '80px'
  const speed = 80
  const txt = 'line work'
  
  let brushOffset = brushWidth
  let x = 30
  let i = 0
  counter = 0;
  // Font settings
  ctx.font = `${fontSize} \'Indie Flower\', cursive`
  
  ctx.lineWidth = 4
  
  ctx.fillStyle = '#212121'
  
  const draw = () => {
    ctx.clearRect(x, 0, 800, 150)
    ctx.setLineDash([brushWidth, brushOffset, brushOffset - speed])
    brushOffset -= speed
    ctx.strokeText(txt[i], x, 70)
  
    if (brushOffset > 0) {
      requestAnimationFrame(draw)
    } else {
      brushOffset = brushWidth
      x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random()

      if (i < txt.length) {
        requestAnimationFrame(draw)
      }
    }
  }
  $('#6').mouseenter(function(){
    fadeIn();

    if(counter == 0){
        playAud3();
       draw();
       counter++; 
    }
    
  })
  $('#6').mouseleave(function(){
    var text = document.getElementById("rationaleText");
    text.style.opacity = 0;
  })
})

var spans = document.querySelectorAll('.rw-words span'),
  maxwidth = 0,
  words = document.querySelector('.rw-words');
for (var i = 0, l = spans.length; i < l; i++) {
  console.log(i + ' width: ' + spans[i].offsetWidth)
  maxwidth = spans[i].offsetWidth > maxwidth ? spans[i].offsetWidth : maxwidth;
}
words.style.width = maxwidth + 'px'
theme3Counter = 0;
$('#7').mouseenter(function(){
    fadeIn2();
    if(theme3Counter == 0){
        playAud4();
        theme3Counter++; 
    }
})

 $('#7').mouseleave(function(){
    var text = document.getElementById("rationale3Text");
    text.style.opacity = 0;
  })