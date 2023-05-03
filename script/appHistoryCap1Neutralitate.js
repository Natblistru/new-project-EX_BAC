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


const modalImg = document.getElementById('modalImg');
const ImgInModal = document.getElementById('img01');
const closeSpanImg = document.getElementById('spanImgInModal');

const modalBox = document.getElementById('modalBox');
const BoxInModalHeader = document.querySelector('#box01 .modal-header h5');
const BoxInModalBody = document.querySelector('#box01 .modal-body');
const closeSpanBox = document.getElementById('spanBoxInModal');

// Добавляем обработчик клика на кнопку закрытия модального окна
closeSpanImg.addEventListener('click', function() {
  modalImg.style.display = "none";
});
window.addEventListener('click', function(event) {
  if (event.target == modalImg) {
    modalImg.style.display = "none";
  }
});
closeSpanBox.addEventListener('click', function() {
  modalBox.style.display = "none";
});
window.addEventListener('click', function(event) {
  if (event.target == modalBox) {
    modalBox.style.display = "none";
  }
});


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
//      panel.style.padding = "2em 2em";
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
            ImgInModal.src = imgPath;
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
            modalBox.style.display = "block";
          });
        });
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