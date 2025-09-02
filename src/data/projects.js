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