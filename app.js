// Add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=700) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

// Blob animation
const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
<<<<<<< HEAD
  }, { duration: 4000, fill: "forwards" });
=======
  }, { duration: 2000, fill: "forwards" });
>>>>>>> 9fb12503fa69a63c8baa172cbe9a006e82bfb8b1
}

// Animate text on load
const letters = "ABcDeFGHIJKlmNoPQRSTUVWXYZ";

let interval = null;

window.onload = () => { 
    let name = document.querySelector("h2");

    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
        name.innerText = name.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return name.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= name.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 30);
  }