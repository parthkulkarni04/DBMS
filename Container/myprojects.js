const projectList = document.querySelector('.project-list');
const addProjectButton = document.querySelector('#add-project-button');
const projectForm = document.querySelector('#project-form');
const addProjectForm = document.querySelector('#add-project-form');
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

  const linkElement = document.createElement('a');
  linkElement.textContent = 'Open Project >';
  linkElement.href = '#';
  projectElement.appendChild(linkElement);

  projectList.appendChild(projectElement);
}

// Function to render all projects
function renderProjects() {
  projects.forEach(renderProject);
}


//add event listener to add project button
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
    const projectDeadline = document.querySelector('#project-deadline').value;

    // Create a new project object
    const newProject = {
        title: projectTitle,
        description: projectDescription,
        members: 1, // Assuming a new project starts with 1 member
        progress: 0,
        deadline: projectDeadline
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
// Render the projects when the page loads
// renderProjects();

  // Sample JavaScript function to add members
  function addMember() {
    var inputBox = document.getElementById('add-members');
    var memberList = document.getElementById('member-list');

    // Get the value from the input box
    var newMember = inputBox.value;

    // Create a new list item and append it to the member list
    var listItem = document.createElement('li');
    listItem.textContent = newMember;
    memberList.appendChild(listItem);

    // Clear the input box after adding a member
    inputBox.value = '';
}
