const projectList = document.querySelector('.project-list');
const addProjectButton = document.querySelector('#add-project-button');

// Sample project data
const projects = [
  {
    title: 'Home Security',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    members: 93,
    progress: 50
  },
  // Add more projects here...
];

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

// Add event listener to the add project button
addProjectButton.addEventListener('click', () => {
  // Add a new project here...
  const newProject = {
    title: 'New Project',
    description: 'This is a new project.',
    members: 1,
    progress: 0
  };

  projects.push(newProject);
  renderProject(newProject);
});

// Render the projects when the page loads
renderProjects();
