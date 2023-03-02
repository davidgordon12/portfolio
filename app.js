var generateStars = function(){
    
    var $galaxy = $('.background-container');    
    var iterator = 0;
    
    while (iterator <= 100){
        var xposition = Math.random();
        var yposition = Math.random();
        var star_type = Math.floor((Math.random() * 3) + 1);
        var position = {
            "x" : $galaxy.width() * xposition,
            "y" : $galaxy.height() * yposition,
        };
        
        $('<div class="star star-type' + star_type + '"></div>').appendTo($galaxy).css({
            "top" : position.y,
            "left" : position.x
        });
        
        iterator++;
    }
    
};

generateStars();

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
let brand = document.getElementById("brand");
let heroTitle = document.getElementById("hero-title")
let heroBio = document.getElementById("hero-bio");
let sBlob = document.getElementById("blob");
let projects = document.getElementById("project-list");
let projectTitle = document.getElementById("project-title");

brand.addEventListener('click', home);

function home(event) {
    // Hide old hero section
    heroTitle.style.animation = "fadeOut 1.6s ease-in-out both";
    heroBio.style.animation = "fadeOut 1.6s ease-in-out both";

    // Wait until old hero section has fallen off, then add the new one
    setTimeout(() => {
        heroTitle.innerText = "Welcome.";
        heroBio.innerText = "My name is David Gordon, I'm a full-stack developer based in Waterloo, Ontario, Canada. I have developed many types of full-stack web and desktop applictaions, from content-management systems for small teams, to simple book-keeping platforms for individuals. \n \n I'm passionate about creating clean, simple, and performant back-end services, complimented with elegant, beautiful interfaces and intuitive UX.";
        heroTitle.style.animation = "fadeIn 1.6s ease-in-out both";
        heroBio.style.animation = "fadeIn 1.6s ease-in-out both";

        // Change the theme of the webpage
        sBlob.style.background = "aliceblue";
        projects.style.borderColor = "aliceblue";
        heroBio.style.color = "aliceblue";
        heroTitle.style.color = "aliceblue";
        projectTitle.style.color = "aliceblue";
        event.target.style.color = "aliceblue";
    }, 1500);
}

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
                heroBio.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet ullamcorper felis. Maecenas ac bibendum nibh. Pellentesque ut vulputate elit, eu hendrerit eros. Vestibulum laoreet eget elit in pharetra. Fusce eget est posuere, facilisis enim non, gravida purus. Maecenas et congue elit, eleifend porta risus. In faucibus gravida posuere. \n \n ";
                heroTitle.style.animation = "fadeIn 1.6s ease-in-out both";
                heroBio.style.animation = "fadeIn 1.6s ease-in-out both";

                // Change the theme of the webpage
                sBlob.style.background = "#937ab2";
                projects.style.borderColor = "#937ab2";
                heroBio.style.color = "#937ab2";
                heroTitle.style.color = "#937ab2";
                projectTitle.style.color = "#937ab2";
                event.target.style.color = "#937ab2";
                
                let gitBtn = document.createElement("button");
                let demoBtn = document.createElement("button");

                gitBtn.innerText = "Source"
                demoBtn.innerText = "Live Demo"

                gitBtn.classList.add('hero-btn');
                demoBtn.classList.add('hero-btn');

                heroBio.appendChild(gitBtn);
                heroBio.appendChild(demoBtn);

                gitBtn.style.color = "#937ab2";
                gitBtn.style.borderColor = "#937ab2";

                demoBtn.style.color = "#937ab2";
                demoBtn.style.borderColor = "#937ab2";
            }, 1500);


            break;

        case "flashtyper":
            // Hide old hero section
            heroTitle.style.animation = "fadeOut 1.6s ease-in-out both";
            heroBio.style.animation = "fadeOut 1.6s ease-in-out both";

            // Wait until old hero section has fallen off, then add the new one
            setTimeout(() => {
                heroTitle.innerText = "Flashtyper";
                heroBio.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet ullamcorper felis. Maecenas ac bibendum nibh. Pellentesque ut vulputate elit, eu hendrerit eros. Vestibulum laoreet eget elit in pharetra. Fusce eget est posuere, facilisis enim non, gravida purus. Maecenas et congue elit, eleifend porta risus. In faucibus gravida posuere. \n \n ";
                heroTitle.style.animation = "fadeIn 1.6s ease-in-out both";
                heroBio.style.animation = "fadeIn 1.6s ease-in-out both";
                // Change the theme of the webpage
                sBlob.style.background = "#7ad6df";
                projects.style.borderColor = "#7ad6df";
                heroBio.style.color = "#7ad6df";
                heroTitle.style.color = "#7ad6df";
                projectTitle.style.color = "#7ad6df";
                event.target.style.color = "#7ad6df";
                
                let gitBtn = document.createElement("button");
                let demoBtn = document.createElement("button");

                gitBtn.innerText = "Source"
                demoBtn.innerText = "Live Demo"

                gitBtn.classList.add('hero-btn');
                demoBtn.classList.add('hero-btn');

                heroBio.appendChild(gitBtn);
                heroBio.appendChild(demoBtn);

                gitBtn.style.color = "#7ad6df";
                gitBtn.style.borderColor = "#7ad6df";

                demoBtn.style.color = "#7ad6df";
                demoBtn.style.borderColor = "#7ad6df";
            }, 1500);

            break;

        case "epistle":
            // Hide old hero section
            heroTitle.style.animation = "fadeOut 1.6s ease-in-out both";
            heroBio.style.animation = "fadeOut 1.6s ease-in-out both";

            // Wait until old hero section has fallen off, then add the new one
            setTimeout(() => {
                heroTitle.innerText = "Epistle";
                heroBio.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet ullamcorper felis. Maecenas ac bibendum nibh. Pellentesque ut vulputate elit, eu hendrerit eros. Vestibulum laoreet eget elit in pharetra. Fusce eget est posuere, facilisis enim non, gravida purus. Maecenas et congue elit, eleifend porta risus. In faucibus gravida posuere. \n \n ";
                heroTitle.style.animation = "fadeIn 1.6s ease-in-out both";
                heroBio.style.animation = "fadeIn 1.6s ease-in-out both";
                // Change the theme of the webpage
                sBlob.style.background = "#7C65DA";
                projects.style.borderColor = "#7C65DA";
                heroBio.style.color = "#7C65DA";
                heroTitle.style.color = "#7C65DA";
                projectTitle.style.color = "#7C65DA";
                event.target.style.color = "#7C65DA";
                
                let gitBtn = document.createElement("button");
                let demoBtn = document.createElement("button");

                gitBtn.innerText = "Source"
                demoBtn.innerText = "Live Demo"

                gitBtn.classList.add('hero-btn');
                demoBtn.classList.add('hero-btn');

                heroBio.appendChild(gitBtn);
                heroBio.appendChild(demoBtn);

                gitBtn.style.color = "#7C65DA";
                gitBtn.style.borderColor = "#7C65DA";

                demoBtn.style.color = "#7C65DA";
                demoBtn.style.borderColor = "#7C65DA";
            }, 1500);

            break;

        case "dread":
            // Hide old hero section
            heroTitle.style.animation = "fadeOut 1.6s ease-in-out both";
            heroBio.style.animation = "fadeOut 1.6s ease-in-out both";

            // Wait until old hero section has fallen off, then add the new one
            setTimeout(() => {
                heroTitle.innerText = "Dread";
                heroBio.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet ullamcorper felis. Maecenas ac bibendum nibh. Pellentesque ut vulputate elit, eu hendrerit eros. Vestibulum laoreet eget elit in pharetra. Fusce eget est posuere, facilisis enim non, gravida purus. Maecenas et congue elit, eleifend porta risus. In faucibus gravida posuere. \n \n ";
                heroTitle.style.animation = "fadeIn 1.6s ease-in-out both";
                heroBio.style.animation = "fadeIn 1.6s ease-in-out both";
                // Change the theme of the webpage
                sBlob.style.background = "#c3da65";
                projects.style.borderColor = "#c3da65";
                heroBio.style.color = "#c3da65";
                heroTitle.style.color = "#c3da65";
                projectTitle.style.color = "#c3da65";
                event.target.style.color = "#c3da65";
                
                let gitBtn = document.createElement("button");
                let demoBtn = document.createElement("button");

                gitBtn.innerText = "Source"
                demoBtn.innerText = "Live Demo"

                gitBtn.classList.add('hero-btn');
                demoBtn.classList.add('hero-btn');

                heroBio.appendChild(gitBtn);
                heroBio.appendChild(demoBtn);

                gitBtn.style.color = "#c3da65";
                gitBtn.style.borderColor = "#c3da65";

                demoBtn.style.color = "#c3da65";
                demoBtn.style.borderColor = "#c3da65";
            }, 1500);

            break;

        case "medusa":
            // Hide old hero section
            heroTitle.style.animation = "fadeOut 1.6s ease-in-out both";
            heroBio.style.animation = "fadeOut 1.6s ease-in-out both";

            // Wait until old hero section has fallen off, then add the new one
            setTimeout(() => {
                heroTitle.innerText = "Medusa";
                heroBio.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet ullamcorper felis. Maecenas ac bibendum nibh. Pellentesque ut vulputate elit, eu hendrerit eros. Vestibulum laoreet eget elit in pharetra. Fusce eget est posuere, facilisis enim non, gravida purus. Maecenas et congue elit, eleifend porta risus. In faucibus gravida posuere. \n \n ";
                heroTitle.style.animation = "fadeIn 1.6s ease-in-out both";
                heroBio.style.animation = "fadeIn 1.6s ease-in-out both";
                // Change the theme of the webpage
                sBlob.style.background = "#d54946";
                projects.style.borderColor = "#d54946";
                heroBio.style.color = "#d54946";
                heroTitle.style.color = "#d54946";
                projectTitle.style.color = "#d54946";
                event.target.style.color = "#d54946";

                let gitBtn = document.createElement("button");
                let demoBtn = document.createElement("button");

                gitBtn.innerText = "Source"
                demoBtn.innerText = "Live Demo"

                gitBtn.classList.add('hero-btn');
                demoBtn.classList.add('hero-btn');

                heroBio.appendChild(gitBtn);
                heroBio.appendChild(demoBtn);

                gitBtn.style.color = "#d54946";
                gitBtn.style.borderColor = "#d54946";

                demoBtn.style.color = "#d54946";
                demoBtn.style.borderColor = "#d54946";
            }, 1500);

            break;
    }
}