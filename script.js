function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".menu-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

const lightSwitch = document.getElementById('lightSwitch');
const light = document.querySelector('.light');
const cmdText = document.querySelector('.cmd_text');
const cmd = document.querySelector('.cmd');
const cmdHeader = document.querySelector('.cmd_header');

lightSwitch.addEventListener('change', function() {
    if (this.checked) {
        light.classList.add('light-on');

        cmdText.classList.add('text-light');
        cmd.classList.add('cmd-light');
        cmdHeader.classList.add('header-light');
    } else {
        light.classList.remove('light-on');

        cmdText.classList.remove('text-light');
        cmd.classList.remove('cmd-light');
        cmdHeader.classList.remove('header-light');
    }
});




document.addEventListener('DOMContentLoaded', function() {
    const gridItems = document.querySelectorAll('.grid-item');
    const projectInfo = document.querySelector('.project_info');
    const arrowButton = document.querySelector('.arrow_button');

    const projectInfoTitle = document.getElementById('data-title');
    const projectInfoDescription = document.getElementById('data-description');
    const projectInfoTechnologies = document.getElementById('data-technologies');
    //const projectInfoFeatures = document.getElementById('data-features');
    const projectInfolink = document.getElementById('data-source-link');
    
    // Function to update and show project info
    function showProjectInfo(item) {
        const title = item.getAttribute('data-title');
        const description = item.getAttribute('data-description');
        const technologies = JSON.parse(item.getAttribute('data-technologies'));
        //const features = JSON.parse(item.getAttribute('data-features'));
        const link = item.getAttribute('data-source-link');


        projectInfoTitle.textContent = title;
        projectInfoDescription.textContent = description;
        
        // Clear previous technology icons
        projectInfoTechnologies.innerHTML = '';
        
        // Check for technologies
        if (technologies.includes('PYTHON')) {
            projectInfoTechnologies.insertAdjacentHTML('beforeend', `<div class="item"><img src="./assets/python.svg" alt="PYTHON"><p>Python</p></div>`);
        }
        if (technologies.includes('CUSTOMTKINTER')) {
            projectInfoTechnologies.insertAdjacentHTML('beforeend', `<div class="item"><img src="./assets/customtkinter.svg" alt="CUSTOMTKINTER"><p>Custom Tkinter</p></div>`);
        }
        if (technologies.includes('HTML')) {
            projectInfoTechnologies.insertAdjacentHTML('beforeend', `<div class="item"><img src="./assets/html.svg" alt="HTML"><p>HTML</p></div>`);
        }
        if (technologies.includes('CSS')) {
            projectInfoTechnologies.insertAdjacentHTML('beforeend', `<div class="item"><img src="./assets/css.svg" alt="CSS"><p>CSS</p></div>`);
        }
        if (technologies.includes('JS')) {
            projectInfoTechnologies.insertAdjacentHTML('beforeend', `<div class="item"><img src="./assets/js.svg" alt="JS"><p>JavaScript</p></div>`);
        }
        if (technologies.includes('SQLite')) {
            projectInfoTechnologies.insertAdjacentHTML('beforeend', `<div class="item"><img src="./assets/sqlite.svg" alt="SQLite"><p>SQLite</p></div>`);
        }
        
        //projectInfoFeatures.innerHTML = '<ul>' + features.map(feature => `<li>${feature}</li>`).join('') + '</ul>';
        //projectInfolink.textContent = link;   

        // Clear previous link
        projectInfolink.innerHTML = '';
        projectInfolink.insertAdjacentHTML('beforeend', `<a href="${link}" target="_blank" rel="noopener noreferrer"><button class="project_github" role="button">Visit GitHub Repo</button></a>`);
        
        projectInfo.classList.add('active');
    }

    // Add click event listener for each grid item
    gridItems.forEach(item => {
        item.addEventListener('click', function() {
            showProjectInfo(this);
        });
    });

    // Add click event listener to the arrow button to close the project info panel
    arrowButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent event from bubbling up
        projectInfo.classList.remove('active');
    });
});