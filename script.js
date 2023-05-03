document.addEventListener("DOMContentLoaded", () => {
    const projectOne = document.getElementById('projects-container project0'); 
    const projectTwo = document.getElementById('projects-container project1'); 
    const projectThree = document.getElementById('projects-container project2'); 

    const projectsButton = document.getElementById('projects-button')
    const databaseButton = document.getElementById('database-button')
    const unitButton = document.getElementById('unit-button')

    const projects = [ projectOne, projectTwo, projectThree ];
    const buttons = [ projectsButton, databaseButton, unitButton ]

    function handleProjects(e) {
        if(e.target.classList.contains('selected')){
            return
        }
        else {
            buttons.forEach(button => {
                button.classList.remove('selected')
            })
            e.target.classList.add('selected')
            projects.forEach(project => {
                project.classList.remove('show')
                project.classList.add('hide')
                if(project.classList.contains(e.target.innerHTML))
                {
                    project.classList.add('show')
                }
            })
        }
    }

    for(let item of buttons) {
        item.addEventListener('click', (e) => {
            handleProjects(e)
        })
    }
  
  });

