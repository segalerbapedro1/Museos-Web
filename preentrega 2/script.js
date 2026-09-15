// ===========================================================================
// RED DE NODOS
// Conecta los <figure class="node-img"> entre sí con líneas finas dentro
// del <svg id="connections">. Las posiciones se recalculan en cada frame
// para que las líneas sigan a la flotación (y ahora también al arrastre)
// de cada imagen.
//
// Para sumar una obra: agregá su <figure> en el HTML y sumá el índice acá
// abajo. NODE_CONNECTIONS es la lista de pares que se conectan — hoy están
// las tres obras conectadas entre sí (triángulo). Cuando definas los
// parámetros reales (por tema, por año, por autor, etc.), esta es la lista
// que vas a generar dinámicamente en vez de escribir a mano.
// ===========================================================================

const nodes = Array.from(document.querySelectorAll(".node-img"));
const svg = document.getElementById("connections");

const NODE_CONNECTIONS = [
  [0, 1],
  [1, 2],
  [0, 2],
];

let lineEls = [];

function buildLines() {
  lineEls = NODE_CONNECTIONS.map(() => {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    svg.appendChild(line);
    return line;
  });
}

function centerOf(el) {
  const r = el.getBoundingClientRect();
  return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
}

function updateLines() {
  svg.setAttribute("width", window.innerWidth);
  svg.setAttribute("height", window.innerHeight);

  NODE_CONNECTIONS.forEach(([a, b], i) => {
    const p1 = centerOf(nodes[a]);
    const p2 = centerOf(nodes[b]);
    const line = lineEls[i];
    line.setAttribute("x1", p1.x);
    line.setAttribute("y1", p1.y);
    line.setAttribute("x2", p2.x);
    line.setAttribute("y2", p2.y);
  });
}

function loop() {
  updateLines();
  requestAnimationFrame(loop);
}

if (nodes.length && !window.matchMedia("(max-width: 760px)").matches) {
  buildLines();
  updateLines();
  requestAnimationFrame(loop);
}

window.addEventListener("resize", updateLines);

// ===========================================================================
// ARRASTRAR NODOS
// Pointer Events (funciona con mouse y con touch). Un movimiento por debajo
// de DRAG_THRESHOLD todavía cuenta como click y abre el lightbox; por
// encima, se considera arrastre y el próximo click en el botón se ignora
// una vez (ver flag suppressClick más abajo, en la sección LIGHTBOX).
// ===========================================================================

const DRAG_THRESHOLD = 6; // px de movimiento antes de considerarlo "arrastre"

nodes.forEach((node) => {
  const trigger = node.querySelector(".node-trigger");
  let dragging = false;
  let moved = false;
  let startX, startY, offsetX, offsetY;

  node.style.pointerEvents = "auto"; // reactiva todo el nodo, no solo el botón

  node.addEventListener("pointerdown", (e) => {
    dragging = true;
    moved = false;
    node.classList.add("dragging");
    node.setPointerCapture(e.pointerId);

    const rect = node.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    startX = e.clientX;
    startY = e.clientY;
  });

  node.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    if (!moved && (Math.abs(e.clientX - startX) > DRAG_THRESHOLD ||
                   Math.abs(e.clientY - startY) > DRAG_THRESHOLD)) {
      moved = true;
    }
    if (!moved) return;

    let x = e.clientX - offsetX;
    let y = e.clientY - offsetY;

    // no dejar que se vaya afuera de la ventana
    x = Math.max(0, Math.min(x, window.innerWidth - node.offsetWidth));
    y = Math.max(0, Math.min(y, window.innerHeight - node.offsetHeight));

    node.style.setProperty("--left", x + "px");
    node.style.setProperty("--top", y + "px");
  });

  node.addEventListener("pointerup", () => {
    dragging = false;
    node.classList.remove("dragging");
    if (moved) trigger.dataset.suppressClick = "true";
  });
});

// ===========================================================================
// LIGHTBOX
// ===========================================================================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");
let lastFocused = null;

function openLightbox(trigger) {
  const src = trigger.dataset.full;
  const alt = trigger.querySelector("img").alt;
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.hidden = false;
  lastFocused = trigger;
  lightboxClose.focus();
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImg.src = "";
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

document.querySelectorAll(".node-trigger").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.dataset.suppressClick === "true") {
      btn.dataset.suppressClick = "";
      return;
    }
    openLightbox(btn);
  });
});

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
});
