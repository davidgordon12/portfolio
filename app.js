window.addEventListener('load', (event) => {
    var home = document.getElementById('home');
    home.addEventListener('mouseover', (event) => {
        document.getElementById('bar_h').style.height = '3px';
    });
    home.addEventListener('mouseout', (event) => {
        document.getElementById('bar_h').style.height = '1px';
    });

    var projects = document.getElementById('projects');
    projects.addEventListener('mouseover', (event) => {
        document.getElementById('bar_p').style.height = '3px';
    });
    projects.addEventListener('mouseout', (event) => {
        document.getElementById('bar_p').style.height = '1px';
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting()) {
                document.querySelectorAll(entry)[0].classList.add('fadeInLeft');
                document.querySelectorAll(entry)[1].classList.add('fadeInRight');
            }
        })
    })

    observer.observe(document.getElementById('socials'));
    observer.observe(document.getElementById('form'));
});