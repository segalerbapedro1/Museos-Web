// ===========================================================================
// DATOS DE LOS NODOS
// Cada grupo define su carpeta de imágenes, el epígrafe común y la clase de
// sombra que le corresponde. Para sumar una obra nueva alcanza con agregar
// una línea al array `images` del grupo correspondiente — el layout, las
// conexiones y los eventos de arrastre/lightbox se generan solos, no hace
// falta tocar el HTML ni escribir <figure> a mano.
// ===========================================================================

// Listas de referencia — el código no las necesita para funcionar (técnica,
// motivos y emociones son texto libre en cada obra, los tres en forma de
// array — una obra puede tener varias técnicas, varios motivos y varias
// emociones a la vez), pero repetir EXACTAMENTE las mismas palabras entre
// obras es lo que hace que se conecten entre sí. Sumá acá cualquier
// técnica/motivo/emoción nuevo que uses, para no terminar escribiendo la
// misma idea con sinónimos distintos sin querer.
const TECNICAS_POSIBLES = [
  "escultura", "fotografía", "instalación", "pintura",
];

const MOTIVOS_POSIBLES = [
  "abstracción", "animales", "arquitectura", "árboles", "cuerpos", "dualidad",
  "figura solitaria", "mapa", "multitud", "objeto cortante", "objeto cotidiano",
  "paisaje", "paisaje urbano", "rayos", "rostro", "personas",
];

const EMOCIONES_POSIBLES = [
  "calma", "contemplación", "euforia", "extrañeza", "melancolía", "tensión", "tristeza",
];

const NODE_GROUPS = {
  salapays: {
    folder: "images/salapays/",
    caption: "Sala Pays",
    shadowClass: "shadow-turquesa",
    images: [
      {
        file: "obra-hacha.jpg",
        alt: "Instalación con un hacha clavada sobre un mapa, obra en Sala Pays",
        autor: "Horacio Zabala",
        anio: 1972,
        tecnica: ["escultura"], // revisá si es la técnica correcta
        motivos: ["mapa", "objeto cortante"],
        emociones: ["tensión"],
      },
      {
        file: "obra-culpable-inocente.jpg",
        alt: "Dos retratos enfrentados con las inscripciones culpable e inocente, obra en Sala Pays",
        autor: "Oscar Bony",
        anio: 1998,
        tecnica: ["fotografía"],
        motivos: ["rostro", "dualidad"],
        emociones: ["tensión"],
      },
      {
        file: "obra-evidencia.jpg",
        alt: "Peluca, revólver y cartera dispuestos sobre un panel, obra en Sala Pays",
        autor: null, // completar
        anio: null, // completar
        tecnica: ["instalación"], // revisá si es la técnica correcta
        motivos: ["objeto cortante", "objeto cotidiano"],
        emociones: ["extrañeza"],
      },
    ],
  },

  malba: {
    folder: "images/malba/",
    caption: "Malba",
    shadowClass: "shadow-lima",
    images: [
      { file: "03-berni-manifestacion.jpg", alt: "Manifestación, de Antonio Berni, colección MALBA", title: "Antonio Berni, Manifestación",
        autor: "Antonio Berni", anio: 1934, tecnica: ["pintura"], motivos: ["cuerpos", "multitud", "rostro"], emociones: ["tensión", "tristeza"]},
      { file: "01-doamoral-Abaporu.jpg", alt: "Abaporu, de Tarsila do Amaral, colección MALBA", title: "Tarsila do Amaral, Abaporu",
        autor: "Tarsila do Amaral", anio: 1928, tecnica: ["pintura"], motivos: ["cuerpos", "paisaje"], emociones: ["extrañeza"] },
      { file: "02-kahlo-autoretrato.jpg", alt: "Autorretrato con chango y loro, de Frida Kahlo, colección MALBA", title: "Frida Kahlo, Autorretrato con chango y loro", autor: "Frida Kahlo", anio: 1942, tecnica: ["pintura"], motivos: ["rostro", "animales"], emociones: ["melancolía"]},
      { file: "06-lam-lamananaverde.jpg", alt: "La mañana verde, de Wifredo Lam, colección MALBA", title: "Wifredo Lam, La mañana verde",
        autor: "Wifredo Lam", anio: 1943, tecnica: ["pintura"], motivos: ["cuerpos", "animales"], emociones: ["extrañeza"] },
      { file: "08-matta-disasters.jpg", alt: "The Disasters of Mysticism, de Roberto Matta, colección MALBA", title: "Roberto Matta, The Disasters of Mysticism", autor: "Roberto Matta", anio: 1942, tecnica: ["pintura"], motivos: ["abstracción"], emociones: ["tensión"] },
      { file: "07-oiticica-metaesquema.jpg", alt: "Metaesquema, de Hélio Oiticica, colección MALBA", title: "Hélio Oiticica, Metaesquema",
        autor: "Hélio Oiticica", anio: 1958, tecnica: ["pintura"], motivos: ["abstracción"], emociones: ["calma"] },
      { file: "09-portinari-festa.jpg", alt: "Festa de São João, de Cândido Portinari, colección MALBA", title: "Cândido Portinari, Festa de São João", autor: "Cândido Portinari", anio: 1936, tecnica: ["pintura"], motivos: ["cuerpos", "multitud"], emociones: ["contemplación", "extrañeza"] },
      { file: "04-torresgarcia-composicion.jpg", alt: "Composición simétrica universal, de Joaquín Torres García, colección MALBA", title: "Joaquín Torres García, Composición simétrica universal", autor: "Joaquín Torres García", anio: 1931, tecnica: ["pintura"], motivos: ["abstracción"], emociones: ["extrañeza"] },
      { file: "05-solar-pareja.jpg", alt: "Pareja, de Xul Solar, colección MALBA", title: "Xul Solar, Pareja",
        autor: "Xul Solar", anio: 1923, tecnica: ["pintura"], motivos: ["cuerpos", "dualidad", "rostro"], emociones: ["extrañeza"]},
    ],
  },

  amalita: {
    folder: "images/amalita/",
    caption: "Colección Amalita",
    shadowClass: "shadow-amalita",
    images: [
      { file: "01-noe-tormenta.jpg", alt: "Tormenta en la Pampa. Homenaje a una pintura escrita por Sarmiento, de Luis Felipe Noé, colección Amalita", title: "Luis Felipe Noé, Tormenta en la Pampa. Homenaje a una pintura escrita por Sarmiento",
        autor: "Luis Felipe Noé", anio: 1991, tecnica: ["pintura"], motivos: ["paisaje", "rayos"], emociones: ["contemplación"]},
      { file: "02-malharro-crepusculo.jpg", alt: "Crespúsculo, de Martín Malharro, colección Amalita", title: "Martín Malharro, Crespúsculo",
        autor: "Martín Malharro", anio: 1901, tecnica: ["pintura"], motivos: ["paisaje", "árboles"], emociones: ["contemplación"]},
      { file: "03-warhol-amalita.jpg", alt: "Retrato de la Sra. Amalia Lacroze de Fortabat de Andy Warhol, colección Amalita", title: "Andy Warhol, Retrato de la Sra. Amalia Lacroze de Fortabat", autor: "Andy Warhol", anio: 1980, tecnica: ["pintura"], motivos: ["rostro"], emociones: ["admiración"]},
      { file: "04-malharro-atardecer.jpg", alt: "Atardecer, de Martín Malharro, colección Amalita", title: "Martín Malharro, Atardecer",
        autor: "Martín Malharro", anio: 1911, tecnica: ["pintura"], motivos: ["paisaje", "árboles", "cielo"], emociones: ["contemplación"]}, 
      { file: "05-fader-tropilla.jpg", alt: "La tropilla, de Fernando Fader, colección Amalita", title: "Fernando Fader, La tropilla",
        autor: "Fernando Fader", anio: 1907, tecnica: ["pintura"], motivos: ["paisaje", "animales", "cielo"], emociones: ["contemplación"]},
      { file: "06-libian-fuegos.jpg", alt: "Fuegos de Artificio, de Valentín Thibon de Libian, colección Amalita", title: "Valentín Thibon de Libian, Fuegos de Artificio", autor: "Valentín Thibon de Libian", anio: null, tecnica: ["pintura"], motivos: ["paisaje urbano", "multitud", "cielo"], emociones: ["contemplación", "calma", "melancolía"]},
      { file: "07-alonso-oreja.jpg", alt: "La oreja, de Carlos Alonso, colección Amalita", title: "Carlos Alonso, La oreja", autor: "Carlos Alonso", anio: 1972, tecnica: ["pintura"], motivos: ["rostro"], emociones: ["extrañeza", "tensión"]},
      { file: "08-alonso-invierno.jpg", alt: "Fin del Invierno, de Carlos Alonso, colección Amalita", title: "Carlos Alonso, Fin del Invierno", autor: "Carlos Alonso", anio: 1974, tecnica: ["pintura"], motivos: ["paisaje"], emociones: ["extrañeza", "contemplación"]},
      { file: "09-basaldua-mml.jpg", alt: "Retrato de Manuel Mujica Lainez, de Héctor Basaldúa, colección Amalita", title: "Héctor Basaldúa, Retrato de Manuel Mujica Lainez", autor: "Héctor Basaldúa", anio: 1942, tecnica: ["pintura"], motivos: ["rostro"], emociones: ["contemplación"]},
      { file: "10-benedit-tijera.jpg", alt: "Caja de Campo - Tijera de castrar, de Luis Fernando Benedit, colección Amalita", title: "Luis Fernando Benedit, Caja de Campo - Tijera de castrar", autor: "Luis Fernando Benedit", anio: 1978, tecnica: ["escultura"], motivos: ["objeto cortante"], emociones: ["extrañeza"]},
      { file: "11-berni-almuerzo.jpg", alt: "Domingo en la chacra o El almuerzo, de Antonio Berni, colección Amalita", title: "Antonio Berni, Domingo en la chacra o El almuerzo", autor: "Antonio Berni", anio: 1945, tecnica: ["pintura"], motivos: ["multitud", "rostro", "paisaje"], emociones: ["contemplación", "extrañeza"]},  
      { file: "12-berni-difunta.jpg", alt: "La Difunta Correa, de Antonio Berni, colección Amalita", title: "Antonio Berni, La Difunta Correa", autor: "Antonio Berni", anio: 1971, tecnica: ["instalación"], motivos: ["paisaje"], emociones: ["contemplación", "extrañeza"]}, 
      { file: "13-fader-duraznos.jpg", alt: "Entre duraznos floridos, de Fernando Fader, colección Amalita", title: "Fernando Fader, Entre duraznos floridos", autor: "Fernando Fader", anio: 1915, tecnica: ["pintura"], motivos: ["paisaje", "árboles", "personas"], emociones: ["calma", "melancolía"]},
      { file: "14-solar-bripaisgente.jpg", alt: "Bri-País-Gente, de Xul Solar, colección Amalita", title: "Xul Solar, Bri-País-Gente", autor: "Xul Solar", anio: 1933, tecnica: ["pintura"], motivos: ["paisaje urbano", "multitud", "personas", "abstracción"], emociones: ["calma", "melancolía", "extrañeza"]},
      { file: "15-solar-noche.jpg", alt: "Noche, de Xul Solar, colección Amalita", title: "Xul Solar, Noche", autor: "Xul Solar", anio: 1933, tecnica: ["pintura"], motivos: ["paisaje urbano", "multitud", "personas", "abstracción"], emociones: ["calma", "melancolía", "extrañeza"]},
      { file: "16-solar-zigzag.jpg", alt: "Zig-zag, de Xul Solar, colección Amalita", title: "Xul Solar, Zig-zag", autor: "Xul Solar", anio: 1949, tecnica: ["pintura"], motivos: ["paisaje urbano", "multitud", "personas", "abstracción"], emociones: ["calma", "melancolía", "extrañeza"]},
      { file: "17-solar-cupulas.jpg", alt: "Cúpulas, de Xul Solar, colección Amalita", title: "Xul Solar, Cúpulas", autor: "Xul Solar", anio: 1948, tecnica: ["pintura"], motivos: ["paisaje urbano", "multitud", "personas", "abstracción"], emociones: ["calma", "melancolía", "extrañeza"]},
      { file: "18-solar-pantree.jpg", alt: "Pan-tree, de Xul Solar, colección Amalita", title: "Xul Solar, Pan-tree", autor: "Xul Solar", anio: 1954, tecnica: ["pintura"], motivos: ["abstracción"], emociones: ["extrañeza"]},
      { file: "19-solar-pantree2.jpg", alt: "Pan-tree, de Xul Solar, colección Amalita", title: "Xul Solar, Pan-tree", autor: "Xul Solar", anio: 1953, tecnica: ["pintura"], motivos: ["abstracción"], emociones: ["extrañeza"]},
      { file: "20-solar-horoscopomml.jpg", alt: "Horóscopo de Manuel Mujica Láinez, de Xul Solar, colección Amalita", title: "Xul Solar, Horóscopo de Manuel Mujica Láinez", autor: "Xul Solar", anio: 1953, tecnica: ["pintura"], motivos: ["abstracción"], emociones: ["extrañeza"]},
      { file: "21-vidalquadras-retratoamalita.jpg", alt: "Retrato de la señora Amalia Lacroze de Fortabat, de Alejo Vidal–Quadras, colección Amalita", title: "Alejo Vidal–Quadras, Retrato de la señora Amalia Lacroze de Fortabat", autor: "Alejo Vidal–Quadras", anio: 1946, tecnica: ["pintura"], motivos: ["rostro"], emociones: ["contemplación"]},
      { file: "22-vidalquadras-retratoalfredo.jpg", alt: "Retrato del señor Alfredo Fortabat, de Alejo Vidal–Quadras, colección Amalita", title: "Alejo Vidal–Quadras, Retrato del señor Alfredo Fortabat", autor: "Alejo Vidal–Quadras", anio: 1961, tecnica: ["pintura"], motivos: ["rostro"], emociones: ["contemplación"]},
      { file: "23-vidalquadras-retratoamalita.jpg", alt: "Retrato de la señora Amalia Lacroze de Fortabat, de Alejo Vidal–Quadras, colección Amalita", title: "Alejo Vidal–Quadras, Retrato de la señora Amalia Lacroze de Fortabat", autor: "Alejo Vidal–Quadras", anio: 1962, tecnica: ["pintura"], motivos: ["rostro"], emociones: ["contemplación"]},
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
        title: img.title || "", // autor/nombre de la obra deducido del archivo, si se pudo
        id: `node-${groupKey}-${i}`,
        // Metadata curatorial — viaja con cada nodo para que buildConnectionPairs
        // pueda comparar obras entre sí y conectarlas por criterios reales en vez
        // de por cercanía en pantalla o por pertenecer al mismo museo.
        autor: img.autor ?? null,
        anio: img.anio ?? null,
        tecnica: img.tecnica || [],
        motivos: img.motivos || [],
        emociones: img.emociones || [],
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
    button.dataset.title = data.title;
    button.setAttribute("aria-label", `Ampliar obra — ${data.title || data.caption}`);

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

  return { builtNodes, positions, groupIndices, flatData: flat };
}

// ===========================================================================
// CRITERIOS COMPARTIDOS
// Compara dos obras y devuelve la lista de criterios en los que coinciden
// (mismo autor, misma técnica, misma década, algún motivo en común, alguna
// emoción en común). Todos los campos pueden venir null/vacíos (hay obras
// sin autor o año todavía cargados) — por eso cada comparación se cubre con
// su propio chequeo, así una obra incompleta nunca "matchea" en falso.
//
// Cada criterio encontrado se guarda como { tipo, valor } — no solo QUÉ tipo
// de dato coincide, sino el valor concreto que comparten (ej. "autor":
// "Frida Kahlo", "motivo": "paisaje") — así después se puede mostrar en la
// leyenda de abajo "a qué responde" cada conexión.
// ===========================================================================

function decadaDe(anio) {
  if (anio == null) return null;
  return Math.floor(anio / 10) * 10;
}

function criteriosCompartidos(a, b) {
  const criterios = [];

  if (a.autor && b.autor && a.autor === b.autor) {
    criterios.push({ tipo: "autor", valor: a.autor });
  }

  const tecnicasComunes = (a.tecnica || []).filter((t) => (b.tecnica || []).includes(t));
  if (tecnicasComunes.length > 0) {
    criterios.push({ tipo: "tecnica", valor: tecnicasComunes[0] });
  }

  const decadaA = decadaDe(a.anio);
  const decadaB = decadaDe(b.anio);
  if (decadaA !== null && decadaB !== null && decadaA === decadaB) {
    criterios.push({ tipo: "decada", valor: `años ${decadaA}` });
  }

  const motivosComunes = (a.motivos || []).filter((m) => (b.motivos || []).includes(m));
  if (motivosComunes.length > 0) {
    criterios.push({ tipo: "motivo", valor: motivosComunes[0] });
  }

  const emocionesComunes = (a.emociones || []).filter((e) => (b.emociones || []).includes(e));
  if (emocionesComunes.length > 0) {
    criterios.push({ tipo: "emocion", valor: emocionesComunes[0] });
  }

  return criterios;
}

// ===========================================================================
// CONEXIONES ENTRE OBRAS
// Antes cada obra se conectaba solo con las más cercanas EN PANTALLA y solo
// dentro de su propio museo. Ahora se compara CADA obra con TODAS las demás
// (sin importar el museo) y se prioriza conectarla con las que comparten más
// criterios curatoriales (autor, técnica, década, motivo, emoción). La
// distancia en pantalla pasa a ser solo un desempate — y también un respaldo
// para las obras que todavía no comparten ningún criterio con nadie, así
// ninguna queda flotando sin ninguna línea.
//
// Cada conexión además guarda un `tipo`: el primer criterio compartido
// (según el orden en que `criteriosCompartidos` los agrega, de más
// específico — autor — a más general — emoción), que se usa después para
// pintar la línea de un color distinto según qué la originó. Una conexión
// que solo existe como respaldo por cercanía (sin ningún criterio en común)
// queda con `tipo: null` y se dibuja neutra, como antes.
// ===========================================================================

function buildConnectionPairs(positions, flatData) {
  const pairs = new Map(); // "i-j" -> { tipo, valor } | null
  const total = flatData.length;

  for (let i = 0; i < total; i++) {
    const candidatos = [];
    for (let j = 0; j < total; j++) {
      if (j === i) continue;
      const criterios = criteriosCompartidos(flatData[i], flatData[j]);
      const dx = positions[i].left - positions[j].left;
      const dy = positions[i].top - positions[j].top;
      candidatos.push({ j, compartidos: criterios.length, criterio: criterios[0] || null, d: dx * dx + dy * dy });
    }

    candidatos
      .sort((a, b) => b.compartidos - a.compartidos || a.d - b.d)
      .slice(0, Math.min(NEIGHBORS_PER_NODE, candidatos.length))
      .forEach(({ j, criterio }) => {
        const key = i < j ? `${i}-${j}` : `${j}-${i}`;
        // Un mismo par puede aparecer visto desde los dos nodos; si ya estaba
        // guardado sin criterio (respaldo por cercanía) pero ahora aparece con
        // uno compartido, nos quedamos con el que sí explica la conexión.
        if (!pairs.has(key) || (pairs.get(key) === null && criterio)) {
          pairs.set(key, criterio);
        }
      });
  }

  return Array.from(pairs, ([key, criterio]) => {
    const [a, b] = key.split("-").map(Number);
    return { a, b, tipo: criterio?.tipo || null, valor: criterio?.valor || null };
  });
}

// ===========================================================================
// LÍNEAS DE CONEXIÓN
// Se recalculan en cada frame para que sigan a la flotación y al arrastre.
// ===========================================================================

function buildLines() {
  lineEls = connectionPairs.map(({ tipo }) => {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    if (tipo) line.classList.add(`conexion-${tipo}`); // color por criterio, ver CSS
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

  connectionPairs.forEach(({ a, b }, i) => {
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
// RESALTADO DE CONEXIONES + LEYENDA
// Por defecto todas las líneas quedan grises, como al principio. Se revelan
// con su color al pasar el mouse por una obra (se resaltan sus conexiones),
// o al elegir uno o más criterios en la leyenda fija de abajo (se resaltan
// todas las conexiones — y las obras — que responden a ese criterio en
// particular, aunque el mouse no esté encima de nada).
//
// `hoverIndex` guarda el índice de la obra bajo el mouse (o null) y
// `criteriosSeleccionados` los criterios elegidos en la leyenda, como
// strings "tipo|valor" (ej. "motivo|paisaje"). `actualizarResaltado()` es la
// única función que combina ambos y pinta el resultado; se llama cada vez
// que cualquiera de los dos cambia.
// ===========================================================================

const leyendaEl = document.getElementById("leyenda-conexiones");

let hoverIndex = null;
const criteriosSeleccionados = new Set();

function claveDe(par) {
  return par.tipo && par.valor ? `${par.tipo}|${par.valor}` : null;
}

function actualizarResaltado() {
  const hayAlgoResaltado = hoverIndex !== null || criteriosSeleccionados.size > 0;
  const nodosRelevantes = new Set();
  if (hoverIndex !== null) nodosRelevantes.add(hoverIndex);

  connectionPairs.forEach((par, i) => {
    const clave = claveDe(par);
    const porHover = hoverIndex !== null && (par.a === hoverIndex || par.b === hoverIndex);
    const porCriterio = clave !== null && criteriosSeleccionados.has(clave);
    const destacada = porHover || porCriterio;
    lineEls[i].classList.toggle("destacada", destacada);
    if (destacada) {
      nodosRelevantes.add(par.a);
      nodosRelevantes.add(par.b);
    }
  });

  svg.classList.toggle("resaltando", hayAlgoResaltado);
  nodesLayer.classList.toggle("resaltando", hayAlgoResaltado);
  nodes.forEach((node, i) => {
    node.classList.toggle("obra-resaltada", nodosRelevantes.has(i));
  });
}

function attachHoverHighlight(nodeEls) {
  nodeEls.forEach((node, i) => {
    node.addEventListener("mouseenter", () => {
      hoverIndex = i;
      actualizarResaltado();
    });
    node.addEventListener("mouseleave", () => {
      hoverIndex = null;
      actualizarResaltado();
    });
  });
}

// Orden en el que se listan los criterios en la leyenda: de más específico
// (autor) a más general (emoción) — el mismo orden en que se buscan en
// criteriosCompartidos().
const ORDEN_TIPOS = ["autor", "tecnica", "decada", "motivo", "emocion"];
const ETIQUETA_TIPO = {
  autor: "autor",
  tecnica: "técnica",
  decada: "década",
  motivo: "motivo",
  emocion: "emoción",
};

function listarCriteriosExistentes(pairs) {
  const vistos = new Map(); // "tipo|valor" -> { tipo, valor }
  pairs.forEach((par) => {
    const clave = claveDe(par);
    if (clave && !vistos.has(clave)) vistos.set(clave, { tipo: par.tipo, valor: par.valor });
  });

  return Array.from(vistos.values()).sort((a, b) => {
    const ordenTipo = ORDEN_TIPOS.indexOf(a.tipo) - ORDEN_TIPOS.indexOf(b.tipo);
    return ordenTipo !== 0 ? ordenTipo : a.valor.localeCompare(b.valor, "es");
  });
}

function renderLeyenda(criterios) {
  if (!leyendaEl) return;

  criterios.forEach(({ tipo, valor }) => {
    const clave = `${tipo}|${valor}`;
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = `leyenda-conexiones__item leyenda-conexiones__item--${tipo}`;
    boton.textContent = `${ETIQUETA_TIPO[tipo] || tipo}: ${valor}`;
    boton.setAttribute("aria-pressed", "false");

    boton.addEventListener("click", () => {
      const activo = criteriosSeleccionados.has(clave);
      if (activo) {
        criteriosSeleccionados.delete(clave);
      } else {
        criteriosSeleccionados.add(clave);
      }
      boton.setAttribute("aria-pressed", String(!activo));
      actualizarResaltado();
    });

    leyendaEl.appendChild(boton);
  });
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
  const museo = trigger.closest(".node-img").querySelector("figcaption").textContent;
  const titulo = trigger.dataset.title; // autor + obra deducidos del nombre de archivo (solo MALBA, cuando se pudo)

  lightboxImg.src = src;
  lightboxImg.alt = img.alt;
  // Si se pudo deducir el autor/nombre de la obra del archivo, se muestra
  // "Autor, Obra - Museo"; si no, queda solo el nombre del museo como antes.
  lightboxCaption.textContent = titulo ? `${titulo} - ${museo}` : museo;
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

// Reutiliza el mismo lightbox de las obras para las imágenes sueltas
// dentro del texto del ensayo.
document.querySelectorAll(".essay-image-trigger").forEach((btn) => {
  btn.addEventListener("click", () => {
    const img = btn.querySelector("img");
    const caption = btn.closest("figure").querySelector("figcaption");
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = caption ? caption.textContent : "";
    lightbox.hidden = false;
    lastFocused = btn;
    lightboxClose.focus();
    document.body.style.overflow = "hidden";
  });
});

// ===========================================================================
// PREVIEW DE VIDEO EN HOVER
// El CSS (.video-hover:hover .video-hover__preview) ya se encarga de
// mostrar/ocultar la preview; acá solo arrancamos y paramos el <video> para
// que no quede reproduciéndose de fondo mientras no se ve.
// ===========================================================================

document.querySelectorAll(".video-hover").forEach((wrap) => {
  const video = wrap.querySelector("video");
  if (!video) return;
  wrap.addEventListener("mouseenter", () => {
    video.currentTime = 0;
    video.play().catch(() => {}); // si el navegador bloquea el autoplay, no rompe nada
  });
  wrap.addEventListener("mouseleave", () => {
    video.pause();
  });
});

// ===========================================================================
// INICIALIZACIÓN
// Los nodos se construyen siempre (de escritorio y de mobile): en mobile
// los necesita la sección "Recorrido" para poder mostrarlos ahí. Lo que
// cambia según el tamaño de pantalla es si se ven todo el tiempo de fondo
// (desktop) o solo dentro de "Recorrido" (mobile, ver más abajo y
// style.css). Como las imágenes tienen loading="lazy", en mobile el
// navegador no baja las que están ocultas hasta que la sección se muestra.
// ===========================================================================

const { builtNodes, positions, flatData } = buildAllNodes();
nodes = builtNodes;
connectionPairs = buildConnectionPairs(positions, flatData);

attachNodeInteractions(nodes);
attachHoverHighlight(nodes);
renderLeyenda(listarCriteriosExistentes(connectionPairs));

buildLines();
updateLines();
requestAnimationFrame(loop);

window.addEventListener("resize", updateLines);

// ===========================================================================
// SECCIÓN "RECORRIDO" EN MOBILE
// La capa de nodos es una sola y es fixed (cubre toda la pantalla siempre,
// esté donde esté en el HTML). En desktop se deja ver todo el tiempo. En
// mobile, en cambio, arrancaría tapando el texto del "Ensayo" — por eso ahí
// queda oculta por CSS y solo se muestra mientras la sección "Recorrido"
// está en pantalla, agregando/sacando la clase .mostrar-recorrido en
// <body> según entra o sale del viewport.
// ===========================================================================

const recorridoSection = document.getElementById("recorrido");
if (recorridoSection && "IntersectionObserver" in window) {
  const recorridoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        document.body.classList.toggle("mostrar-recorrido", entry.isIntersecting);
      });
    },
    { threshold: 0.15 }
  );
  recorridoObserver.observe(recorridoSection);
}
