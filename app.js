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

// Animate text on load
const letters = "ABcDeFGHIJKlmNoPQRSTUVWXYZ";

let interval = null;

window.onload = () => {
    blob.style.background = "aliceblue"

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

// These are the elements we will be editing
let heroTitle = document.getElementById("hero-title")
let heroBio = document.getElementById("hero-bio");
let sBlob = document.getElementById("blob");
let projects = document.getElementById("project-list");

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

            // Change the theme of the webpage
            sBlob.style.background = "#937ab2";
            projects.style.borderColor = "#937ab2";
            heroBio.style.color = "#937ab2";
            heroTitle.style.color = "#937ab2";
            event.target.style.color = "#937ab2";
            break;

        case "flashtyper":
            // Hide old hero section
            heroTitle.style.animation = "fadeOut 1.6s ease-in-out both";
            heroBio.style.animation = "fadeOut 1.6s ease-in-out both";

            // Wait until old hero section has fallen off, then add the new one
            setTimeout(() => {
                heroTitle.innerText = "Flashtyper";
                heroBio.innerText = "Flashtyper is ";
                heroTitle.style.animation = "fadeIn 1.6s ease-in-out both";
                heroBio.style.animation = "fadeIn 1.6s ease-in-out both";
            }, 1500);

            // Change the theme of the webpage
            sBlob.style.background = "#7ad6df";
            projects.style.borderColor = "#7ad6df";
            heroBio.style.color = "#7ad6df";
            heroTitle.style.color = "#7ad6df";
            event.target.style.color = "#7ad6df";
            break;

        case "epistle":
            // Hide old hero section
            heroTitle.style.animation = "fadeOut 1.6s ease-in-out both";
            heroBio.style.animation = "fadeOut 1.6s ease-in-out both";

            // Wait until old hero section has fallen off, then add the new one
            setTimeout(() => {
                heroTitle.innerText = "Epistle";
                heroBio.innerText = "Epistle is ";
                heroTitle.style.animation = "fadeIn 1.6s ease-in-out both";
                heroBio.style.animation = "fadeIn 1.6s ease-in-out both";
            }, 1500);

            // Change the theme of the webpage
            sBlob.style.background = "#7C65DA";
            projects.style.borderColor = "#7C65DA";
            heroBio.style.color = "#7C65DA";
            heroTitle.style.color = "#7C65DA";
            event.target.style.color = "#7C65DA";
            break;

        case "dread":
            // Hide old hero section
            heroTitle.style.animation = "fadeOut 1.6s ease-in-out both";
            heroBio.style.animation = "fadeOut 1.6s ease-in-out both";

            // Wait until old hero section has fallen off, then add the new one
            setTimeout(() => {
                heroTitle.innerText = "Dread";
                heroBio.innerText = "Dread is ";
                heroTitle.style.animation = "fadeIn 1.6s ease-in-out both";
                heroBio.style.animation = "fadeIn 1.6s ease-in-out both";
            }, 1500);

            // Change the theme of the webpage
            sBlob.style.background = "#c3da65";
            projects.style.borderColor = "#c3da65";
            heroBio.style.color = "#c3da65";
            heroTitle.style.color = "#c3da65";
            event.target.style.color = "#c3da65";
            break;

        case "medusa":
            // Hide old hero section
            heroTitle.style.animation = "fadeOut 1.6s ease-in-out both";
            heroBio.style.animation = "fadeOut 1.6s ease-in-out both";

            // Wait until old hero section has fallen off, then add the new one
            setTimeout(() => {
                heroTitle.innerText = "Medusa";
                heroBio.innerText = "Medusa is ";
                heroTitle.style.animation = "fadeIn 1.6s ease-in-out both";
                heroBio.style.animation = "fadeIn 1.6s ease-in-out both";
            }, 1500);

            // Change the theme of the webpage
            sBlob.style.background = "#d54946";
            projects.style.borderColor = "#d54946";
            heroBio.style.color = "#d54946";
            heroTitle.style.color = "#d54946";
            event.target.style.color = "#d54946";
            break;
    }
}