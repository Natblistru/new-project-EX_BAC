window.onscroll = function() {myFunction()};

const navbar = document.getElementById("menu-nav");
const sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function openNote(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

const link = document.querySelectorAll('a[href^="#"]');

link.forEach((element) => {
  element.addEventListener('click', prelucrareLink);
});

function prelucrareLink(event) {
  event.preventDefault(); // предотвращаем переход по ссылке по умолчанию

  const targetId = event.currentTarget.getAttribute('href').slice(1);
  const targetElement = document.getElementById(targetId);
  console.log(targetId)
  if (targetElement) {
    const event = new Event('mouseover');
    const button = document.querySelector(`[data-item=${targetId}]`)
    button.dispatchEvent(event);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
}

async function app(){
  try { 
    const response = await fetch("/dis/history/capitoleHistory.json");
     if (!response.ok) { 
        throw new Error(`HTTP error! status: ${response.status}`); } 
        const data = await response.json();
console.log(data)
        let capitolIdx = 0;
        let temaIdx = 0;
        let tema = data[capitolIdx]
        console.log(tema)
        // let template = document.querySelector("#subjects-container-template").innerHTML;
        // capitoleList = document.querySelector(".subjects-container");

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