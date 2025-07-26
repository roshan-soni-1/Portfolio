fetch('/project.json')
  .then(res => res.json())
  .then(projects => {
    const container = document.getElementById('project-container');
    const template = document.getElementById('project-template');
    
    projects.forEach(project => {
      const clone = template.content.cloneNode(true);
      
      clone.querySelector('.project-title').textContent = project.title;
      
      clone.querySelector('.project-description').textContent = project.description;
      const techDiv = clone.querySelector('.project-tech');
      project.tech.forEach(t => {
        const span = document.createElement('span');
        span.className = 'tech-tag';
        span.textContent = t;
        techDiv.appendChild(span);
      });
      clone.querySelector('.project-link').href = project.link;
      container.appendChild(clone);
    });
  });
