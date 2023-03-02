// Add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 700) {
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
  }, { duration: 4000, fill: "forwards" });
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
        if (index < iteration) {
          return name.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");

    if (iteration >= name.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
}

// Animate new hero section

// Start by getting all of our links
let links = document.querySelectorAll(".project-item");

links.forEach(element => {
  element.addEventListener('click', swapHero)
});

let heroTitle = document.getElementById("hero-title")
let heroBio = document.getElementById("hero-bio");


// Animate our new hero-section
function swapHero(event) {
  switch (event.target.id) {
    case "mangalogue":
      // Hide old hero section
      heroTitle.style.animation = "fadeOut 1.6s ease-in-out both";
      heroBio.style.animation = "fadeOut 1.6s ease-in-out both";
      // Wait until old hero section has fallen off, then add the new one
      setTimeout(() => {
        heroTitle.innerText = "Mangalogue";
        heroBio.innerText = "Mangalogue is ";
        heroTitle.style.animation = "fadeIn 1.6s ease-in-out both";
        heroBio.style.animation = "fadeIn 1.6s ease-in-out both";
      }, 1500);
      break;
    case "flashtyper":
      dropBio();
      setBioFlashtyper();
      break;
    case "epistle":
      dropBio();
      setBioEpistle();
      break;
    case "dread":
      dropBio();
      setBioDread();
      break;
    case "medusa":
      dropBio();
      break;
  }
}