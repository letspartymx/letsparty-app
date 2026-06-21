// Lista única de accesos del sidebar. Para añadir un módulo nuevo, solo agrega un item aquí.
const NAV_ITEMS = [
  { href: "dashboard.html", label: "Dashboard", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>` },
  { href: "eventos.html", label: "Eventos", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>` },
  { href: "calendario.html", label: "Calendario", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><circle cx="8" cy="16" r="1" fill="currentColor"/><circle cx="12" cy="16" r="1" fill="currentColor"/><circle cx="16" cy="16" r="1" fill="currentColor"/></svg>` },
  { href: "fotos.html", label: "Fotos", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>` },
  { href: "cotizaciones.html", label: "Cotizaciones", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>` }
];

function initNav() {
  const ul = document.querySelector(".sidebar-nav");
  if (ul) {
    const actual = location.pathname.split("/").pop() || "dashboard.html";
    ul.innerHTML = NAV_ITEMS.map(item =>
      `<li><a href="${item.href}"${item.href === actual ? ' class="activo"' : ""}>${item.icon}${item.label}</a></li>`
    ).join("");
  }

  const btn = document.getElementById("btn-hamburguesa");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  if (btn && sidebar && overlay) {
    btn.addEventListener("click", () => { sidebar.classList.add("abierto"); overlay.classList.add("visible"); });
    overlay.addEventListener("click", () => { sidebar.classList.remove("abierto"); overlay.classList.remove("visible"); });
  }
}

document.addEventListener("DOMContentLoaded", initNav);
