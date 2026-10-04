// Render project cards and navigate to project-description.html?id=#
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('projects-grid');
  const list = window.projects || [];
  if (!container) return;

  if (!list.length) {
    container.innerHTML = '<p style="padding:20px">No projects available.</p>';
    return;
  }

  container.innerHTML = list.map(p => `
    <article class="project-card" data-project-id="${p.id}" tabindex="0" role="button" aria-label="${p.title}">
      <img class="project-thumb" src="${p.image || 'https://via.placeholder.com/800x450.png?text=No+Image'}" alt="${(p.title||'Project') + ' image'}">
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-short">${p.short || ''}</p>
      </div>
    </article>
  `).join('');

  container.querySelectorAll('.project-card').forEach(card => {
    const id = card.dataset.projectId;
    const go = () => { window.location.href = `project-description.html?id=${encodeURIComponent(id)}`; };
    card.addEventListener('click', go);
    card.addEventListener('keypress', e => { if (e.key === 'Enter' || e.key === ' ') go(); });
  });
});