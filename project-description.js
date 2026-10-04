function getQueryParameter(param){
  return new URLSearchParams(window.location.search).get(param);
}
function safe(v){ return v == null ? '' : String(v); }

document.addEventListener('DOMContentLoaded', () => {
  const id = parseInt(getQueryParameter('id'), 10);
  const list = window.projects || [];
  const project = list.find(p => Number(p.id) === id);
  const root = document.getElementById('project-container');
  if (!root) return;

  if (!project) {
    root.innerHTML = '<p style="padding:20px">Project not found. <a href="projects.html">Back to list</a></p>';
    return;
  }

  root.innerHTML = `
    <div class="description-layout">
      <aside class="desc-sidebar">
        <div class="profile-img-container">
          <img src="${safe(project.image)}" alt="${safe(project.title)}" class="profile-img">
        </div>
        <div class="desc-basic">
          <h1 class="profile-name">${safe(project.title)}</h1>
          <h2 class="profile-title">${safe(project.short || '')}</h2>
        </div>
      </aside>

      <section class="desc-main">
        <div class="profile-section">
          <h3 class="section-title">Project Overview</h3>
          <p class="profile-description" style="text-align:justify;">${safe(project.description)}</p>
        </div>

        <!-- Project ID removed as requested -->

      </section>
    </div>
  `;
  document.title = `${project.title} — Project`;
});