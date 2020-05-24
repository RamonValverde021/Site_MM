var slideIndex,slides,dots,captionText;
function initGallery() {
    slideIndex = 0;
    slides = document.getElementsByClassName("imagemHolder");
    slides[slideIndex].style.opacity = 1;
    captionText = document.querySelector(".subtituloHolder .textoSubtitulo");
    captionText.innerText = slides[slideIndex].querySelector(".textoSubtitulo").innerText;
if(slides.length<2){
    var nextPrevBtns=document.querySelector(".setaEsquerda,.setaDireita");
    nextPrevBtns.style.display="none";
    for (i = 0; i < nextPrevBtn.length; i++) {
        nextPrevBtn[i].style.display="none";
    }
}
dots=[];
var dotsConteiner=document.getElementById("dotsConteiner"),i;
    for (i = 0; i < slides.length; i++) {
        var dot=document.createElement("span");
        dot.classList.add("dots");
        dotsConteiner.append(dot);
        dot.setAttribute("onclick","moveSlide("+i+")");
        dots.push(dot);
    }
    dots[slideIndex].classList.add("active");
}
initGallery();
function plusSlides(n) {
    moveSlide(slideIndex+n);
}
function moveSlide(n){
    var i;
    var current,next;
    var moveSlideAnimClass={
        forCurrent:"",
        forNext:""
    };
    var slideTextAnimClass;
    if(n>slideIndex) {
        if(n >= slides.length){n=0;}
        moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";
        moveSlideAnimClass.forNext="moveLeftNextSlide";
        slideTextAnimClass="slideTextFromTop";
    }else if(n<slideIndex){
        if(n<0){n=slides.length-1;}
        moveSlideAnimClass.forCurrent="moveRightCurrentSlide";
        moveSlideAnimClass.forNext="moveRightPrevSlide";
        slideTextAnimClass="slideTextFromBottom";
    }
    if(n!=slideIndex){
        next = slides[n];
        current=slides[slideIndex];
        for (i = 0; i < slides.length; i++) {
            slides[i].className = "imagemHolder";
            slides[i].style.opacity=0;
            dots[i].classList.remove("active");
        }
        current.classList.add(moveSlideAnimClass.forCurrent);
        next.classList.add(moveSlideAnimClass.forNext);
        dots[n].classList.add("active");
        slideIndex=n;
        captionText.style.display="none";
        captionText.className="textoSubtitulo "+slideTextAnimClass;
        captionText.innerText=slides[n].querySelector(".textoSubtitulo").innerText;
        captionText.style.display="block";
    }
}
var timer=null;
function setTimer(){
    timer=setInterval(function () {
        plusSlides(1) ;
    },5000);
}
setTimer();
function playPauseSlides() {
    var playPauseBtn=document.getElementById("playPauseBtn");
    if(timer==null){
        setTimer();
        playPauseBtn.style.backgroundPositionY="0px"
    }else{
        clearInterval(timer);
        timer=null;
        playPauseBtn.style.backgroundPositionY="-33px"
    }
}

