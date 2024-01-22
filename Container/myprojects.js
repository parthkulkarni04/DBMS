const projectList = document.querySelector('.project-list');
const addProjectButton = document.querySelector('#add-project-button');
const projectForm = document.querySelector('#project-form');
const addProjectForm = document.querySelector('#add-project-form');
const taskList = document.getElementById('task-list');
let memberIdCounter = 1; // Counter for dynamic member input boxes

// Sample project data
const projects = [];

// Function to render a single project
function renderProject(project) {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');

    const titleElement = document.createElement('h2');
    titleElement.textContent = project.title;
    projectElement.appendChild(titleElement);

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = project.description;
    projectElement.appendChild(descriptionElement);

    const membersElement = document.createElement('p');
    membersElement.textContent = `${project.members} member(s)`;
    projectElement.appendChild(membersElement);

    const progressElement = document.createElement('p');
    progressElement.textContent = `${project.progress}%`;
    projectElement.appendChild(progressElement);

    const buttonElement = document.createElement('button');
    buttonElement.textContent = 'Open Project';
    buttonElement.classList.add('open-button');
    buttonElement.addEventListener('click', function() {
        // Your logic to handle the button click and open the project goes here
        console.log('Project opened:', project.title);
    });
    projectElement.appendChild(buttonElement);

    projectList.appendChild(projectElement);
}


// Function to render all projects
function renderProjects() {
    projects.forEach(renderProject);
}

// Add event listener to add project button
addProjectButton.addEventListener('click', () => {
    projectForm.style.display = 'block';
    projectForm.style.position = 'fixed';
    projectForm.style.top = '100px'; // Adjust as needed
    projectForm.style.right = '100px'; // Adjust as needed
    projectForm.style.padding = '50px'; // Add padding
});

// Event listener to handle form submission
addProjectForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const projectTitle = document.querySelector('#project-title').value;
    const projectDescription = document.querySelector('#project-description').value;
    const projectStartDate = document.querySelector('#project-Startdate').value;
    const numMembers = document.querySelector('#num-members').value;
    const projectGuide = document.querySelector('#project-guide').value;
    const projectLeader = document.querySelector('#project-leader').value;
    const tasks = Array.from(document.querySelectorAll('#task-list li')).map(item => item.textContent);

    // Create a new project object
    const newProject = {
        title: projectTitle,
        description: projectDescription,
        members: numMembers,
        progress: 0,
        startDate: projectStartDate,
        guide: projectGuide,
        leader: projectLeader,
        tasks: tasks,
    };

    // Add the new project to the list and render it
    projects.push(newProject);
    renderProject(newProject);

    // Hide the form after submission
    projectForm.style.display = 'none';

    // Reset form fields (optional)
    addProjectForm.reset();

    // You might want to send the data to a server here for persistent storage
});

// Sample JavaScript function to add members
function addMember() {
    const numMembers = document.querySelector('#num-members').value;

    if (numMembers > 0) {
        const memberContainer = document.createElement('div');
        memberContainer.classList.add('member-container');

        for (let i = 0; i < numMembers; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.name = `member-${memberIdCounter++}`;
            input.placeholder = `Member ${i + 1}`;
            memberContainer.appendChild(input);
        }

        document.querySelector('#add-members').appendChild(memberContainer);
    }
}

// Sample JavaScript function to add tasks
function addTask() {
    const inputBox = document.getElementById('add-task');

    // Get the value from the input box
    const newTask = inputBox.value;

    // Create a new list item and append it to the task list
    const listItem = document.createElement('li');
    listItem.textContent = newTask;
    taskList.appendChild(listItem);

    // Clear the input box after adding a task
    inputBox.value = '';
}

// Render the projects when the page loads
// renderProjects();
