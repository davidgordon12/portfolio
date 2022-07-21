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
});