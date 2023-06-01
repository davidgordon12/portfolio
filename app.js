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
                heroBio.innerText = "Mangalogue is a soon to be hub for free Manga content, created by amatuer artists and storytellers. Anyone will have the ability to share their creations, and get real feedback from enthusiasts and other creators. \n \n ";
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

                gitBtn.innerText = "Source"

                gitBtn.classList.add('hero-btn');

                gitBtn.onclick = () => window.open("https://github.com/davidgordon12/Mangalogue", '_blank').focus()

                heroBio.appendChild(gitBtn);

                gitBtn.style.color = "#937ab2";
                gitBtn.style.borderColor = "#937ab2";
            }, 1500);


            break;

        case "flashtyper":
            // Hide old hero section
            heroTitle.style.animation = "fadeOut 1.6s ease-in-out both";
            heroBio.style.animation = "fadeOut 1.6s ease-in-out both";

            // Wait until old hero section has fallen off, then add the new one
            setTimeout(() => {
                heroTitle.innerText = "Flashtyper";
                heroBio.innerText = "ASP.NET version of my typeracer clone, FlashTyper, featuring leaderboards and profiles. \n \n This is my first \'substantial\' ASP.NET project, that was not just a means of learning some concept. \n \n"
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

                gitBtn.onclick = () => window.open("https://github.com/davidgordon12/FlashTyper-MVC", '_blank').focus()
                demoBtn.onclick = () => window.open("https://flashtyper.azurewebsites.net/", '_blank').focus()

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
                heroBio.innerText = "An online note-taking app focused on simplicity and being well organized. \n \n Built with ASP.NET MVC and EntityFramework Core, Epistle features \'Bookshelves\' to organize your notes into specific categories, with a simple 3 column layout that is responsive on Desktop and Mobile. \n \n ";
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

                gitBtn.onclick = () => window.open("https://github.com/davidgordon12/epistle", '_blank').focus()
                demoBtn.onclick = () => window.open("https://epistle.azurewebsites.net", '_blank').focus()

                heroBio.appendChild(gitBtn);
                heroBio.appendChild(demoBtn);

                gitBtn.style.color = "#7C65DA";
                gitBtn.style.borderColor = "#7C65DA";

                demoBtn.style.color = "#7C65DA";
                demoBtn.style.borderColor = "#7C65DA";
            }, 1500);

            break;

        case "chip":
            // Hide old hero section
            heroTitle.style.animation = "fadeOut 1.6s ease-in-out both";
            heroBio.style.animation = "fadeOut 1.6s ease-in-out both";

            // Wait until old hero section has fallen off, then add the new one
            setTimeout(() => {
                heroTitle.innerText = "Chip-8";
                heroBio.innerText = "Chip-8 is an accurate Chip-8 emulator written in the Rust programming language. \n \n ";
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

                gitBtn.innerText = "Source"

                gitBtn.classList.add('hero-btn');

                gitBtn.onclick = () => window.open("https://github.com/davidgordon12/CHIP-8", '_blank').focus()

                heroBio.appendChild(gitBtn);

                gitBtn.style.color = "#c3da65";
                gitBtn.style.borderColor = "#c3da65";
            }, 1500);

            break;

        case "acsit":
            // Hide old hero section
            heroTitle.style.animation = "fadeOut 1.6s ease-in-out both";
            heroBio.style.animation = "fadeOut 1.6s ease-in-out both";

            // Wait until old hero section has fallen off, then add the new one
            setTimeout(() => {
                heroTitle.innerText = "ACSIT Portal";
                heroBio.innerText = "ACSIT Portal is a forum written for Conestoga College students to share their business ideas. \n \n As my final capstone project, I was glad to lead my team when it came to Web Design and System Infrastructure, as well as taking care of all code implementation and testing. \n \n ";
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

                gitBtn.innerText = "Source"

                gitBtn.classList.add('hero-btn');

                gitBtn.onclick = () => window.open("https://github.com/davidgordon12/ACSITPortal", '_blank').focus()

                heroBio.appendChild(gitBtn);

                gitBtn.style.color = "#d54946";
                gitBtn.style.borderColor = "#d54946";
            }, 1500);

            break;
    }
}
