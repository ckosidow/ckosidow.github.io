function changeProject(project) {
    const newProject = document.getElementById(project);
    const carousel = document.getElementsByClassName("carousel")[0];

    carousel.scrollTo(newProject.offsetLeft, carousel.offsetTop);
}