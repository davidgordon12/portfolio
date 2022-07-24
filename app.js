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
            document.getElementById('socials').classList.toggle("fadeInRight", entry.isIntersecting)
            document.getElementById('form').classList.toggle("fadeInLeft", entry.isIntersecting)
        })
    },
    {
        threshold: 0.7,
    })

    observer.observe(document.getElementById('socials'));
    observer.observe(document.getElementById('form'));
});