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
        let template = document.querySelector("#subjects-container-template").innerHTML;
        capitoleList = document.querySelector(".subjects-container");

        tema.subtitles[temaIdx].subjects.forEach(capitol => {
          let renderedHtml = Mustache.render(template, capitol);
          capitoleList.innerHTML += renderedHtml;
        });

        template = document.querySelector("#tests-container-template").innerHTML;
        testeList = document.querySelector(".tests-container");

        tema.subtitles[temaIdx].teste.forEach(test => {
          let renderedHtml = Mustache.render(template, test);
          testeList.innerHTML += renderedHtml;
        });

      } 
      catch (error) { 
         console.error('Error:', error); 
     }

}
app();

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