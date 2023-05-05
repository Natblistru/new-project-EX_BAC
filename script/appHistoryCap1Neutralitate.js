window.onscroll = function() {myFunction()};

const navbar = document.getElementById("menu-nav");
const sticky = navbar.offsetTop;

const slider = document.querySelector('.swiper-container');
let mySwiper = new Swiper(slider, {
    slidesPerView: 1,  
})
document.querySelector('.buttonNext').addEventListener('click',()=>{
    mySwiper.slideNext();
}) 


const modal = document.getElementById('myModal');
const spanClose = document.getElementsByClassName('close')[0];
const modalImg = document.getElementById('img01');
const modalBox = document.getElementById('box1');
const BoxInModalHeader = document.querySelector('#box1 .modal-header h5');
const BoxInModalBody = document.querySelector('#box1 .modal-body');

// Добавляем обработчик клика на кнопку закрытия модального окна
spanClose.addEventListener('click', function() {
  // Запускаем анимацию скрытия
  modal.classList.add('close-animation');
});
// Добавляем обработчик события transitionend на .modal
modal.addEventListener('transitionend', function(event) {
  // Если это анимация закрытия и свойство, которое изменилось - это opacity
  if (event.propertyName === 'opacity' && !modal.classList.contains('show')) {
    modal.style.display = "none";
    modal.classList.remove('close-animation');
    // modalBox.style.zIndex = "0";
    modalBox.style.display = "none";
    modalImg.style.display = "none";
  }
});

//Initializare Image Comparison Slider
function initComparisons() {
  var x, i;
  /*find all elements with an "overlay" class:*/
  x = document.getElementsByClassName("img-comp-overlay");
  for (i = 0; i < x.length; i++) {
    /*once for each "overlay" element:
    pass the "overlay" element as a parameter when executing the compareImages function:*/
    compareImages(x[i]);
  }
  function compareImages(img) {
    var slider, img, clicked = 0, w, h;
    /*get the width and height of the img element*/
    w = img.offsetWidth;
    h = img.offsetHeight;
    /*set the width of the img element to 50%:*/
    img.style.width = (w / 2) + "px";
    /*create slider:*/
    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    /*insert slider*/
    img.parentElement.insertBefore(slider, img);
    /*position the slider in the middle:*/
    slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
    slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
    /*execute a function when the mouse button is pressed:*/
    slider.addEventListener("mousedown", slideReady);
    /*and another function when the mouse button is released:*/
    window.addEventListener("mouseup", slideFinish);
    /*or touched (for touch screens:*/
    slider.addEventListener("touchstart", slideReady);
    /*and released (for touch screens:*/
    window.addEventListener("touchend", slideFinish);
    function slideReady(e) {
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*the slider is now clicked and ready to move:*/
      clicked = 1;
      /*execute a function when the slider is moved:*/
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      /*the slider is no longer clicked:*/
      clicked = 0;
    }
    function slideMove(e) {
      var pos;
      /*if the slider is no longer clicked, exit this function:*/
      if (clicked == 0) return false;
      /*get the cursor's x position:*/
      pos = getCursorPos(e)
      /*prevent the slider from being positioned outside the image:*/
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      /*execute a function that will resize the overlay image according to the cursor:*/
      slide(pos);
    }
    function getCursorPos(e) {
      var a, x = 0;
      e = (e.changedTouches) ? e.changedTouches[0] : e;
      /*get the x positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x coordinate, relative to the image:*/
      x = e.pageX - a.left;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      return x;
    }
    function slide(x) {
      /*resize the image:*/
      img.style.width = x + "px";
      /*position the slider:*/
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
    }
  }
}

// modalImg.onmousedown = function(event) { // (1) start the process

//   let shiftX = event.clientX - modalImg.getBoundingClientRect().left;
//   let shiftY = event.clientY - modalImg.getBoundingClientRect().top;

//   modalImg.style.position = 'absolute';
//   modalBox.style.position = 'absolute';
//   modalImg.style.zIndex = 1000;
//   modalBox.style.zIndex = 998;   
//   document.body.appendChild(modalImg);
//   // ...and put that absolutely positioned modalImg under the cursor
//   moveAt(event.pageX, event.pageY);

//   function moveAt(pageX, pageY) {
//       modalImg.style.left = pageX - shiftX + 'px';
//       modalImg.style.top = pageY - shiftY + 'px';
//   }

//   function onMouseMove(event) {
//     moveAt(event.pageX, event.pageY);
//   }

//   // (3) move the modalImg on mousemove
//   document.addEventListener('mousemove', onMouseMove);

//   // (4) drop the modalImg, remove unneeded handlers
//   modalImg.onmouseup = function() {
//     document.removeEventListener('mousemove', onMouseMove);
//     modalImg.onmouseup = null;
//   };

// };
// modalImg.ondragstart = function() {
//   return false;
// };


// let offsetX, offsetY;


// modalBox.onmousedown = function(event) { // (1) start the process

//   // let shiftX = event.clientX - modalBox.getBoundingClientRect().left;
//   // let shiftY = event.clientY - modalBox.getBoundingClientRect().top;

//   offsetX = event.clientX - modalBox.offsetLeft;
//   offsetY = event.clientY - modalBox.offsetTop;

//   // (2) prepare to moving: make absolute and top by z-index
//   modalBox.style.position = 'absolute';
//   modalBox.style.zIndex = 1000;
//   modalImg.style.zIndex = 998;
//   document.body.appendChild(modalBox);
//   // ...and put that absolutely positioned modalImg under the cursor
//   moveAtmodalBox(event.pageX , event.pageY);

//   function moveAtmodalBox(pageX, pageY) {
//       // modalBox.style.left = pageX - shiftX + 'px';
//       // modalBox.style.top = pageY - shiftY + 'px';
//       modalBox.style.left = pageX - offsetX + 'px';
//       modalBox.style.top = pageY  + 'px';
//   }

//   function onMouseMovemodalBox(event) {
//     moveAtmodalBox(event.pageX, event.pageY);
//   }

//   // (3) move the modalImg on mousemove
//   document.addEventListener('mousemove', onMouseMovemodalBox);

//   // (4) drop the modalImg, remove unneeded handlers
//     modalBox.onmouseup = function() {
//     document.removeEventListener('mousemove', onMouseMovemodalBox);
//     modalBox.onmouseup = null;
//   };


// };

// modalBox.ondragstart = function() {
//   return false;
// };

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.padding = "0 2em";
      panel.style.margin = "0";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.margin = "1em 0 2em";
    } 
  });
}

function initialization(){
  const firstButtonAccordion = document.querySelectorAll('.theory-block .accordion')[0];
  firstButtonAccordion.classList.add('active')
  let panel = firstButtonAccordion.nextElementSibling;
  panel.style.maxHeight = panel.scrollHeight + "px";
  panel.style.margin = "1em 0 2em";   
  console.log(panel)
}


function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// function openNote(evt, cityName) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += " active";
// }

// const link = document.querySelectorAll('a[href^="#"]');

// link.forEach((element) => {
//   element.addEventListener('click', prelucrareLink);
// });

// function prelucrareLink(event) {
//   event.preventDefault(); // предотвращаем переход по ссылке по умолчанию

//   const targetId = event.currentTarget.getAttribute('href').slice(1);
//   const targetElement = document.getElementById(targetId);
//   console.log(targetId)
//   if (targetElement) {
//     const event = new Event('mouseover');
//     const button = document.querySelector(`[data-item=${targetId}]`)
//     button.dispatchEvent(event);
//     targetElement.scrollIntoView({ behavior: 'smooth' });
//   }
// }

async function app(){
  try { 
    const response = await fetch("/dis/history/capitoleHistory.json");
     if (!response.ok) { 
        throw new Error(`HTTP error! status: ${response.status}`); } 
        const data = await response.json();
console.log(data)
        let capitolIdx = 0;
        let temaIdx = 0;
        let subjectIdx = 0;
        let tema = data[capitolIdx]
        console.log(tema)
        let capitoleList = document.querySelector(".theory-block .text-block");
        capitoleList.innerHTML = tema.subtitles[temaIdx].subjects[subjectIdx].innerHTML;

        // tema.subtitles[temaIdx].subjects.forEach(capitol => {
        //   let renderedHtml = Mustache.render(template, capitol);
        //   capitoleList.innerHTML += renderedHtml;
        // });

        // template = document.querySelector("#tests-container-template").innerHTML;
        // testeList = document.querySelector(".tests-container");

        // tema.subtitles[temaIdx].teste.forEach(test => {
        //   let renderedHtml = Mustache.render(template, test);
        //   testeList.innerHTML += renderedHtml;
        // });

        initialization()
        const mySpansImg = document.querySelectorAll('.panel .text-block span[data-img]');
        
        // Добавляем обработчик клика на каждый mySpans
        mySpansImg.forEach((mySpan) => {
          mySpan.addEventListener('click', function() {
            const imgPath = this.getAttribute('data-img');
            modalImg.src = imgPath;
            // modalImg.style.zIndex = "98";
            modal.style.display = "block";
            modalImg.style.display = "block";
          });
        });
        const mySpansBox = document.querySelectorAll('.panel .text-block span[data-box]');
        console.log(mySpansBox)
        // Добавляем обработчик клика на каждый mySpans
        mySpansBox.forEach((mySpan) => {
          mySpan.addEventListener('click', function() {
            const idxNota = +this.getAttribute('data-box') - 1;
            BoxInModalHeader.innerHTML = tema.subtitles[temaIdx].subjects[subjectIdx].note[idxNota].headerInnerHTML;
            BoxInModalBody.innerHTML = tema.subtitles[temaIdx].subjects[subjectIdx].note[idxNota].bodyInnerHTML;
            // modalBox.style.zIndex = "99";
            modalBox.style.display = "block";
            modal.style.display = "block";
          });
        });
        initComparisons();
      } 
      catch (error) { 
         console.error('Error:', error); 
     }

}
app();
// openNote(event, 'marile-puteri');

// progress bar
/*var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}*/