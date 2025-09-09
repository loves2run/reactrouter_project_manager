const projectsData = [
    {
        id: "1",
        projectName: "Finish project manager app",
        status: "In progress",
        description: "some notes here",
        dueDate: "10/01/2025",
    },
    {
        id: "2",
        projectName: "Update Linkedin",
        status: "In progress",
        description: "some notes here",
        dueDate: "11/15/2025",
    },
    {
        id: "3",
        projectName: "Bullee Excavation website",
        status: "Not started",
        description: "some notes here",
        dueDate: "12/19/2026",
    },
    {
        id: "4",
        projectName: "Finish Wordpress tutorial",
        status: "In progress",
        description: "May need to just start over...",
        dueDate: "3/30/2026",
    }
];

export function formatDateForDisplay(dateString) {
    if (!dateString) return '';
    
    try {
        // If it's already MM/DD/YYYY, return as-is
        if (dateString.includes('/')) return dateString;
        
        // If it's YYYY-MM-DD, convert to MM/DD/YYYY
        if (dateString.includes('-')) {
            const [year, month, day] = dateString.split('-');
            return `${month}/${day}/${year}`;
        }
        
        return dateString;
    } catch {
        return '';
    }
}

export function formatDateForInput(dateString) {
    if (!dateString) return '';
    
    try {
        // If it's already YYYY-MM-DD, return as-is
        if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) return dateString;
        
        // If it's MM/DD/YYYY, parse manually to avoid timezone issues
        if (dateString.includes('/')) {
            const [month, day, year] = dateString.split('/');
            if (month && day && year) {
                return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
            }
        }
        
        return '';
    } catch {
        return '';
    }
}

function fakeNetwork(key) {
    return new Promise(resolve => {
        setTimeout(resolve, Math.random() * 800);
    });
}


//Get all projects
export async function getProjects() {
    await fakeNetwork("getProjects");
    return projectsData;
}

//Get a single project
export async function getProject(id) {
    await fakeNetwork(`getProject:${id}`);
    const project = projectsData.find(project => project.id === id);
    return project || null;
}

//Create a new project
export async function createProject(projectData = {}) {
    await fakeNetwork();
    let newId = Math.random().toString(36).substring(2,9);

    const newProject = {
        id: newId,
        projectName: projectData.projectName || 'Untitled Project',
        status: projectData.status || "Not started",
        description: projectData.description || "Description goes here.",
        dueDate: projectData.dueDate || 'Date goes here.',
    };

    projectsData.unshift(newProject);
    return newProject;
}

//Update a project
export async function updateProject(id, updates) {
    await fakeNetwork(`updateProject:${id}`);

    const index = projectsData.findIndex(project => project.id === id);
    if (index === -1) return null;

    projectsData[index] = {...projectsData[index], ...updates };
    return projectsData[index];
}

//Delete a project
export async function deleteProject(id) {
    await fakeNetwork(`deleteProject:${id}`);

    const index = projectsData.findIndex(project => project.id === id);
    if (index === -1) return false;

    projectsData.splice(index, 1);
    return true;
}

//Search Projects (for future search functionality)
export async function searchProjects(query) {
    await fakeNetwork(`searchProjects:${query}`);
    if (!query) return projectsData;
    
    return projectsData.filter(project =>
      project.projectName.toLowerCase().includes(query.toLowerCase()) ||
      project.description.toLowerCase().includes(query.toLowerCase())
    );
  }

  export default projectsData;