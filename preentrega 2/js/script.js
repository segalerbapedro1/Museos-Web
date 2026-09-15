// ===========================================================================
// DATOS DE LOS NODOS
// Cada grupo define su carpeta de imágenes, el epígrafe común y la clase de
// sombra que le corresponde. Para sumar una obra nueva alcanza con agregar
// una línea al array `images` del grupo correspondiente — el layout, las
// conexiones y los eventos de arrastre/lightbox se generan solos, no hace
// falta tocar el HTML ni escribir <figure> a mano.
// ===========================================================================

const NODE_GROUPS = {
  salapays: {
    folder: "images/salapays/",
    caption: "Sala Pays",
    shadowClass: "shadow-turquesa",
    images: [
      { file: "obra-hacha.jpg", alt: "Instalación con un hacha clavada sobre un mapa, obra en Sala Pays" },
      { file: "obra-culpable-inocente.jpg", alt: "Dos retratos enfrentados con las inscripciones culpable e inocente, obra en Sala Pays" },
      { file: "obra-evidencia.jpg", alt: "Peluca, revólver y cartera dispuestos sobre un panel, obra en Sala Pays" },
    ],
  },
  malba: {
    folder: "images/malba/",
    caption: "MALBA",
    shadowClass: "shadow-lima",
    images: [
      { file: "2001.02.jpg", alt: "Obra de la colección MALBA" },
      { file: "2013.14.jpg", alt: "Obra de la colección MALBA" },
      { file: "2019.16.Althabe-Julian.PH-Catalina-Romero.Alta_.1.jpg", alt: "Obra de la colección MALBA" },
      { file: "2020-06-06-115741.jpg", alt: "Obra de la colección MALBA" },
      { file: "2020-06-08-112954.jpg", alt: "Obra de la colección MALBA" },
      { file: "2020-06-09-111559.jpg", alt: "Obra de la colección MALBA" },
      { file: "2021-04-12-105924.jpg", alt: "Obra de la colección MALBA" },
      { file: "2022-06-09-161755.jpg", alt: "Obra de la colección MALBA" },
      { file: "A_1009.jpg", alt: "Obra de la colección MALBA" },
      { file: "A_1010.jpg", alt: "Obra de la colección MALBA" },
      { file: "A_1013.jpg", alt: "Obra de la colección MALBA" },
      { file: "A_1014.jpg", alt: "Obra de la colección MALBA" },
      { file: "A_1098.jpg", alt: "Obra de la colección MALBA" },
      { file: "A_1099.jpg", alt: "Obra de la colección MALBA" },
      { file: "A_1139.jpg", alt: "Obra de la colección MALBA" },
      { file: "A_1264.jpg", alt: "Obra de la colección MALBA" },
      { file: "A_1278.jpg", alt: "Obra de la colección MALBA" },
      { file: "A_1337.jpg", alt: "Obra de la colección MALBA" },
      { file: "A_1380.jpg", alt: "Obra de la colección MALBA" },
      { file: "A_1433.jpg", alt: "Obra de la colección MALBA" },
      { file: "A_1461.jpg", alt: "Obra de la colección MALBA" },
      { file: "A_1529.jpg", alt: "Obra de la colección MALBA" },
      { file: "A_1530.jpg", alt: "Obra de la colección MALBA" },
      { file: "A_579.jpg", alt: "Obra de la colección MALBA" },
      { file: "A_632.jpg", alt: "Obra de la colección MALBA" },
      { file: "A_702.jpg", alt: "Obra de la colección MALBA" },
      { file: "A_722.jpg", alt: "Obra de la colección MALBA" },
      { file: "A_726.jpg", alt: "Obra de la colección MALBA" },
      { file: "A_742.jpg", alt: "Obra de la colección MALBA" },
      { file: "A_761.jpg", alt: "Obra de la colección MALBA" },
      { file: "A_766.jpg", alt: "Obra de la colección MALBA" },
      { file: "A_771.jpg", alt: "Obra de la colección MALBA" },
      { file: "A_797.jpg", alt: "Obra de la colección MALBA" },
      { file: "A_940.jpg", alt: "Obra de la colección MALBA" },
      { file: "A_970.jpg", alt: "Obra de la colección MALBA" },
      { file: "A_973.jpg", alt: "Obra de la colección MALBA" },
      { file: "A_980.jpg", alt: "Obra de la colección MALBA" },
      { file: "A_982.jpg", alt: "Obra de la colección MALBA" },
      { file: "alys.jpg", alt: "alys — obra de la colección MALBA" },
      { file: "Arden-Quin-Composicion-001.jpg", alt: "Arden Quin Composicion — obra de la colección MALBA" },
      { file: "Barradas-Quiosco-de-Canaletas-008.jpg", alt: "Barradas Quiosco de Canaletas — obra de la colección MALBA" },
      { file: "Berni-Manifestacion-023-1.jpg", alt: "Berni Manifestacion — obra de la colección MALBA" },
      { file: "De-la-vega-armado-ret-1.jpg", alt: "De la vega armado ret — obra de la colección MALBA" },
      { file: "Do-Amaral-Abaporu-067-1.jpg", alt: "Do Amaral Abaporu — obra de la colección MALBA" },
      { file: "Kahlo-Autorretrato-con-chango-y-loro-102-1.jpg", alt: "Kahlo Autorretrato con chango y loro — obra de la colección MALBA" },
      { file: "Lam-la-manana-verde-108-1.jpg", alt: "Lam la manana verde — obra de la colección MALBA" },
      { file: "Martins-O-impossivel-119.jpg", alt: "Martins O impossivel — obra de la colección MALBA" },
      { file: "Matta-The-disasters-of-Mysticism-122.jpg", alt: "Matta The disasters of Mysticism — obra de la colección MALBA" },
      { file: "Oiticica-Metaesquema-2001-124-137-1.jpg", alt: "Oiticica Metaesquema — obra de la colección MALBA" },
      { file: "Pettoruti-Vallombrosa-151-1.jpg", alt: "Pettoruti Vallombrosa — obra de la colección MALBA" },
      { file: "Portinari-Festa-de-Sao-Joao-171-1.jpg", alt: "Portinari Festa de Sao Joao — obra de la colección MALBA" },
      { file: "Torres-Garcia-Composicion-simetrica-universal-200.jpg", alt: "Torres Garcia Composicion simetrica universal — obra de la colección MALBA" },
      { file: "Xul-Pareja2001-181-212.jpg", alt: "Xul Pareja2001 — obra de la colección MALBA" },
    ],
  },
};

// Cantidad de vecinos (dentro del mismo grupo) con los que se conecta cada
// nodo. Con 2 vecinos, tres obras se conectan formando un triángulo (como
// antes) y los grupos grandes arman una red local en vez de líneas
// cruzando toda la pantalla.
const NEIGHBORS_PER_NODE = 2;

const nodesLayer = document.querySelector(".nodes-layer");
const svg = document.getElementById("connections");
const isMobile = window.matchMedia("(max-width: 760px)").matches;

let nodes = [];           // elementos <figure class="node-img"> ya en el DOM
let lineEls = [];
let connectionPairs = []; // [[i, j], ...] índices dentro de `nodes`

// ===========================================================================
// GENERACIÓN DE LAYOUT
// Reparte los nodos en una grilla con jitter aleatorio (pero determinístico,
// vía PRNG con semilla) para que floten distribuidos sin amontonarse, sin
// importar cuántas imágenes tenga cada grupo.
// ===========================================================================

function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function layoutNodes(count) {
  const aspect = (window.innerWidth || 1600) / (window.innerHeight || 900);
  const cols = Math.max(1, Math.round(Math.sqrt(count * aspect)));
  const rows = Math.max(1, Math.ceil(count / cols));
  // Nodos chicos a propósito: así se ven los cables (líneas de conexión)
  // entre las obras en vez de que las imágenes se tapen entre sí.
  const baseSize = Math.max(46, Math.min(120, 1000 / Math.sqrt(count)));
  const cellW = 100 / cols;
  const cellH = 100 / rows;

  const positions = [];
  for (let i = 0; i < count; i++) {
    const rand = mulberry32(1000 + i * 97);
    const col = i % cols;
    const row = Math.floor(i / cols);
    const jitterX = (rand() - 0.5) * cellW * 0.7;
    const jitterY = (rand() - 0.5) * cellH * 0.7;

    positions.push({
      top: Math.min(92, Math.max(2, row * cellH + cellH / 2 + jitterY)),
      left: Math.min(92, Math.max(2, col * cellW + cellW / 2 + jitterX)),
      size: Math.round(baseSize * (0.75 + rand() * 0.5)),
      delay: +(rand() * 3).toFixed(2),
      duration: +(6 + rand() * 4).toFixed(2),
      tilt: +(rand() * 4 - 2).toFixed(2),
    });
  }
  return positions;
}

// ===========================================================================
// CONSTRUCCIÓN DE NODOS
// ===========================================================================

function buildAllNodes() {
  const flat = [];
  Object.entries(NODE_GROUPS).forEach(([groupKey, group]) => {
    group.images.forEach((img, i) => {
      flat.push({
        groupKey,
        caption: group.caption,
        shadowClass: group.shadowClass,
        src: group.folder + img.file,
        alt: img.alt,
        id: `node-${groupKey}-${i}`,
      });
    });
  });

  const positions = layoutNodes(flat.length);
  const groupIndices = {};
  const builtNodes = [];

  flat.forEach((data, i) => {
    const pos = positions[i];

    const figure = document.createElement("figure");
    figure.className = `node-img ${data.shadowClass}`;
    figure.id = data.id;
    figure.style.setProperty("--top", pos.top + "%");
    figure.style.setProperty("--left", pos.left + "%");
    figure.style.setProperty("--size", pos.size + "px");
    figure.style.setProperty("--delay", pos.delay + "s");
    figure.style.setProperty("--duration", pos.duration + "s");
    figure.style.setProperty("--tilt", pos.tilt + "deg");

    const button = document.createElement("button");
    button.className = "node-trigger";
    button.dataset.full = data.src;
    button.setAttribute("aria-label", `Ampliar obra — ${data.caption}`);

    const img = document.createElement("img");
    img.src = data.src;
    img.alt = data.alt;
    img.loading = "lazy";

    button.appendChild(img);
    figure.appendChild(button);

    const figcaption = document.createElement("figcaption");
    figcaption.textContent = data.caption;
    figure.appendChild(figcaption);

    nodesLayer.appendChild(figure);
    builtNodes.push(figure);

    (groupIndices[data.groupKey] ||= []).push(i);
  });

  return { builtNodes, positions, groupIndices };
}

function buildConnectionPairs(positions, groupIndices) {
  const pairs = new Set();
  Object.values(groupIndices).forEach((indices) => {
    if (indices.length < 2) return;
    indices.forEach((i) => {
      indices
        .filter((j) => j !== i)
        .map((j) => {
          const dx = positions[i].left - positions[j].left;
          const dy = positions[i].top - positions[j].top;
          return { j, d: dx * dx + dy * dy };
        })
        .sort((a, b) => a.d - b.d)
        .slice(0, Math.min(NEIGHBORS_PER_NODE, indices.length - 1))
        .forEach(({ j }) => pairs.add(i < j ? `${i}-${j}` : `${j}-${i}`));
    });
  });
  return Array.from(pairs, (key) => key.split("-").map(Number));
}

// ===========================================================================
// LÍNEAS DE CONEXIÓN
// Se recalculan en cada frame para que sigan a la flotación y al arrastre.
// ===========================================================================

function buildLines() {
  lineEls = connectionPairs.map(() => {
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

  connectionPairs.forEach(([a, b], i) => {
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

// ===========================================================================
// ARRASTRAR + ABRIR (click)
// Pointer Events (funciona con mouse y con touch). El modo arrastre se
// habilita cuando el puntero se mantiene apretado más de HOLD_DELAY, y solo
// cuenta como arrastre de verdad si además hubo un movimiento real (>
// MOVE_THRESHOLD px).
//
// OJO: el click se escucha en `node` (la <figure>), no en el botón interno
// `.node-trigger`. Esto no es arbitrario — al hacer node.setPointerCapture()
// para poder arrastrar, el navegador termina disparando el evento "click"
// resultante sobre el elemento que capturó el puntero (node), no sobre el
// botón que está debajo del dedo/mouse. Si el listener estuviera en el
// botón, nunca se dispararía y las obras no abrirían nunca al clickear.
// ===========================================================================

const HOLD_DELAY = 220;     // ms apretando antes de habilitar el arrastre
const MOVE_THRESHOLD = 4;   // px de movimiento real antes de considerarlo "arrastre"

function attachNodeInteractions(nodeEls) {
  nodeEls.forEach((node) => {
    const trigger = node.querySelector(".node-trigger");
    let dragging = false;
    let didMove = false;
    let holdTimer = null;
    let startX, startY, lastX, lastY, offsetX, offsetY;

    node.style.pointerEvents = "auto"; // reactiva todo el nodo, no solo el botón

    function startDragging() {
      dragging = true;
      node.classList.add("dragging");
      const rect = node.getBoundingClientRect();
      offsetX = lastX - rect.left;
      offsetY = lastY - rect.top;
    }

    function stopDragging() {
      clearTimeout(holdTimer);
      if (dragging) {
        dragging = false;
        node.classList.remove("dragging");
      }
    }

    node.addEventListener("pointerdown", (e) => {
      startX = lastX = e.clientX;
      startY = lastY = e.clientY;
      didMove = false;
      node.setPointerCapture(e.pointerId);
      clearTimeout(holdTimer);
      holdTimer = setTimeout(startDragging, HOLD_DELAY);
    });

    node.addEventListener("pointermove", (e) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (!didMove && (Math.abs(lastX - startX) > MOVE_THRESHOLD ||
                       Math.abs(lastY - startY) > MOVE_THRESHOLD)) {
        didMove = true;
      }
      if (!dragging) return;

      let x = lastX - offsetX;
      let y = lastY - offsetY;

      // no dejar que se vaya afuera de la ventana
      x = Math.max(0, Math.min(x, window.innerWidth - node.offsetWidth));
      y = Math.max(0, Math.min(y, window.innerHeight - node.offsetHeight));

      node.style.setProperty("--left", x + "px");
      node.style.setProperty("--top", y + "px");
    });

    node.addEventListener("pointerup", stopDragging);
    node.addEventListener("pointercancel", stopDragging);

    node.addEventListener("click", () => {
      if (didMove) return; // hubo arrastre real: no abrir
      openLightbox(trigger);
    });
  });
}

// ===========================================================================
// LIGHTBOX
// ===========================================================================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = lightbox.querySelector("figcaption");
const lightboxClose = document.getElementById("lightbox-close");
let lastFocused = null;

function openLightbox(trigger) {
  const src = trigger.dataset.full;
  const img = trigger.querySelector("img");
  lightboxImg.src = src;
  lightboxImg.alt = img.alt;
  lightboxCaption.textContent = trigger.closest(".node-img").querySelector("figcaption").textContent;
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

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
});

// ===========================================================================
// INICIALIZACIÓN
// En mobile ni siquiera se construyen los nodos: la capa de fondo va oculta
// por CSS (.nodes-layer { display: none }) y así se evita bajar decenas de
// imágenes que nunca se van a ver.
// ===========================================================================

if (!isMobile) {
  const { builtNodes, positions, groupIndices } = buildAllNodes();
  nodes = builtNodes;
  connectionPairs = buildConnectionPairs(positions, groupIndices);

  attachNodeInteractions(nodes);

  buildLines();
  updateLines();
  requestAnimationFrame(loop);

  window.addEventListener("resize", updateLines);
}
