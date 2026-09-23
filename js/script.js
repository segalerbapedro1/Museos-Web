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
      { file: "10-delavega-rompecabezas.jpg", alt: "Rompecabezas, de Jorge de la Vega, colección MALBA", title: "Jorge de la Vega, Rompecabezas", autor: "Jorge de la Vega", anio: 1969, tecnica: ["pintura"], motivos: ["cuerpos", "rostro"], emociones: ["extrañeza"]},
      { file: "11-varo-icono1945.jpg", alt: "Ícono, de Remedios Varo, colección MALBA", title: "Remedios Varo, Ícono", autor: "Remedios Varo", anio: 1945, tecnica: ["pintura"], motivos: ["paisaje"], emociones: ["extrañeza"]},
      { file: "12-petorutti-lacanciondelpueblo.jpg", alt: "La canción del pueblo, de Emilio Petorutti, colección MALBA", title: "Emilio Petorutti, La canción del pueblo", autor: "Emilio Petorutti", anio: 1927, tecnica: ["pintura"], motivos: ["cuerpos", "paisaje urbano"], emociones: ["extrañeza"]},
      { file: "13-rivera-retratoderamongomezdelaserna.jpg", alt: "Retrato de Ramón Gómez de la Serna, de Diego Rivera, colección MALBA", title: "Diego Rivera, Retrato de Ramón Gómez de la Serna", autor: "Diego Rivera", anio: 1915, tecnica: ["pintura"], motivos: ["rostro"], emociones: ["extrañeza"]},
      { file: "14-martins-oimpossivel.jpg", alt: "O Impossivel, de María Martins, colección MALBA", title: "María Martins, O Impossivel", autor: "María Martins", anio: 1945, tecnica: ["escultura"], motivos: ["personas", "cuerpos", "dualidad"], emociones: ["extrañeza", "tensión"]},
      { file: "15-prati-composicionserial.jpg", alt: "Composición serial, de Lidy Prati, colección MALBA", title: "Lidy Prati, Composición serial", autor: "Lidy Prati", anio: 1948, tecnica: ["pintura"], motivos: ["abstracción"], emociones: ["calma"]},
      { file: "16-torresgarcia-escenacallejera.jpg", alt: "Escena callejera o Calle de París o Constructivo, de Joaquín Torres García, colección MALBA", title: "Joaquín Torres García, Escena callejera o Calle de París o Constructivo", autor: "Joaquín Torres García", anio: 1930, tecnica: ["pintura"], motivos: ["cuerpos", "multitud", "paisaje urbano"], emociones: ["extrañeza"] },
      { file: "17-solar-dosmestizos.jpg", alt: "Dos mestizos de avión y gente, de Xul Solar, colección MALBA", title: "Xul Solar, Dos mestizos de avión y gente", autor: "Xul Solar", anio: 1935, tecnica: ["pintura"], motivos: ["cuerpos", "dualidad", "paisaje", "multitud"], emociones: ["extrañeza", "tensión"] },  
      { file: "18-solar-ronda.jpg", alt: "Ronda, de Xul Solar, colección MALBA", title: "Xul Solar, Ronda", autor: "Xul Solar", anio: 1925, tecnica: ["pintura"], motivos: ["cuerpos", "paisaje", "multitud"], emociones: ["extrañeza"] }, 
      { file: "19-solar-sandanza.jpg", alt: "San Danza, de Xul Solar, colección MALBA", title: "Xul Solar, San Danza", autor: "Xul Solar", anio: 1925, tecnica: ["pintura"], motivos: ["cuerpos", "multitud"], emociones: ["extrañeza"] }, 
      { file: "20-solar-jol.jpg", alt: "Jol, de Xul Solar, colección MALBA", title: "Xul Solar, Jol", autor: "Xul Solar", anio: 1926, tecnica: ["pintura"], motivos: ["cuerpos", "multitud", "paisaje urbano"], emociones: ["extrañeza"] },   
      { file: "21-solar-tres.jpg", alt: "Los tres, de Xul Solar, colección MALBA", title: "Xul Solar, Los tres", autor: "Xul Solar", anio: 1923, tecnica: ["pintura"], motivos: ["cuerpos"], emociones: ["extrañeza"] },
      { file: "22-oiticica-metaesquema.jpg", alt: "Metaesquema, de Hélio Oiticica, colección MALBA", title: "Hélio Oiticica, Metaesquema", autor: "Hélio Oiticica", anio: 1958, tecnica: ["pintura"], motivos: ["abstracción"], emociones: ["calma"] },
      { file: "23-lindner-portfolio.jpg", alt: "Portfolio de 120 dibujos, de Lux Lindner, colección MALBA", title: "Lux Lindner, Portfolio de 120 dibujos", autor: "Lux Lindner", anio: 1991, tecnica: ["dibujo"], motivos: ["abstracción", "cuerpos", "rostro", "personas"], emociones: ["calma"] },
      { file: "24-schvartz-batato.jpg", alt: "Batato, de Marcia Schvartz, colección MALBA", title: "Marcia Schvartz, Batato", autor: "Marcia Schvartz", anio: 1989, tecnica: ["pintura"], motivos: ["cuerpos", "rostro", "personas"], emociones: ["tensión", "contemplación", "melancolía"] },
      { file: "25-deira-nuevevariaciones.jpg", alt: "Nueve variaciones para un bastidor bien tensado, de Ernesto Deira, colección MALBA", title: "Ernesto Deira, Nueve variaciones para un bastidor bien tensado", autor: "Ernesto Deira", anio: 1965, tecnica: ["pintura"], motivos: ["abstracción", "cuerpos", "rostro", "personas"], emociones: ["confusión", "tensión"] },
      { file: "26-heinrich-lamano.jpg", alt: "La mano, de Annemarie Heinrich, colección MALBA", title: "Annemarie Heinrich, La mano", autor: "Annemarie Heinrich", anio: 1953, tecnica: ["fotografía"], motivos: ["cuerpos", "rostro", "personas"], emociones: ["confusión", "extrañeza"] },
      { file: "27-pla-milcarassarli.jpg", alt: "Las mil caras de Isabel Sarli, de Eduardo Pla, colección MALBA", title: "Eduardo Pla, Las mil caras de Isabel Sarli", autor: "Eduardo Pla", anio: 2006, tecnica: ["fotografía"], motivos: ["cuerpos", "rostro", "personas"], emociones: ["melancolía", "extrañeza"] },
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
  const vw = window.innerWidth || 1600;
  const vh = window.innerHeight || 900;
  const aspect = vw / vh;
  const cols = Math.max(1, Math.round(Math.sqrt(count * aspect)));
  const rows = Math.max(1, Math.ceil(count / cols));
  // Nodos chicos a propósito: así se ven los cables (líneas de conexión)
  // entre las obras en vez de que las imágenes se tapen entre sí.
  const baseSize = Math.max(46, Math.min(120, 1000 / Math.sqrt(count)));

  // El nav de arriba y la barra de leyenda de abajo son fixed y tapan
  // cualquier obra que quede detrás — se miden en vivo (la de abajo cambia
  // de alto según cuántos botones de criterio tiene, que a su vez depende
  // de cuántas obras hay) y se descuenta ese espacio, más un colchón de
  // aire y el alto máximo que puede llegar a tener una obra (imagen +
  // epígrafe), así ninguna termina escondida detrás de esas dos franjas.
  const navH = document.querySelector(".site-nav")?.offsetHeight || 48;
  const legendH = leyendaEl?.offsetHeight || 56;
  const colchon = 20;
  const tamañoMax = baseSize * 1.25; // el jitter de `size` de abajo llega hasta acá
  const altoMaxObra = tamañoMax * 1.35; // imagen + epígrafe, con margen de sobra

  const margenSupPct = ((navH + colchon) / vh) * 100;
  const margenInfPct = ((legendH + colchon + altoMaxObra) / vh) * 100;
  const margenLatPct = (tamañoMax / vw) * 100;

  const topMin = Math.max(4, margenSupPct);
  const topMax = Math.max(topMin + 10, 100 - margenInfPct);
  const leftMin = 2;
  const leftMax = Math.min(92, 100 - margenLatPct);

  const cellW = (leftMax - leftMin) / cols;
  const cellH = (topMax - topMin) / rows;

  const positions = [];
  for (let i = 0; i < count; i++) {
    const rand = mulberry32(1000 + i * 97);
    const col = i % cols;
    const row = Math.floor(i / cols);
    const jitterX = (rand() - 0.5) * cellW * 0.7;
    const jitterY = (rand() - 0.5) * cellH * 0.7;

    positions.push({
      top: Math.min(topMax, Math.max(topMin, topMin + row * cellH + cellH / 2 + jitterY)),
      left: Math.min(leftMax, Math.max(leftMin, leftMin + col * cellW + cellW / 2 + jitterX)),
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
    // Clave para que el arrastre con click IZQUIERDO funcione: una <img>
    // es "arrastrable" para el navegador por defecto (el drag nativo de
    // imágenes), y ese drag nativo se activa justo con el botón izquierdo
    // — le gana de mano al arrastre propio de acá abajo (pointerdown/move)
    // antes de que llegue a engancharse. Con el botón del medio nunca pasa
    // (el drag nativo del navegador solo escucha al izquierdo), por eso
    // ahí sí andaba. Con esto deshabilitado, el arrastre propio queda
    // libre para responder al izquierdo también.
    img.draggable = false;

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
// (misma técnica, misma década, algún motivo en común, alguna emoción en
// común). El autor NO participa acá: es un dato relevante y se guarda en
// cada obra (ver buildAllNodes), pero a pedido se dejó de usar como criterio
// de conexión, así que nunca genera líneas ni aparece en la leyenda de
// abajo. Todos los campos pueden venir null/vacíos (hay obras sin año
// todavía cargado) — por eso cada comparación se cubre con su propio
// chequeo, así una obra incompleta nunca "matchea" en falso.
//
// A diferencia de antes, acá se agregan TODOS los valores en común de cada
// tipo (no solo el primero) — si dos obras comparten dos motivos a la vez,
// entran los dos por separado. Cada uno se guarda como { tipo, valor } — no
// solo QUÉ tipo de dato coincide, sino el valor concreto que comparten (ej.
// "motivo": "rostro") — así después se puede mostrar en la leyenda de abajo
// "a qué responde" cada conexión, y conectar entre sí a TODAS las obras que
// comparten ese valor puntual (ver buildConnectionPairs).
// ===========================================================================

function decadaDe(anio) {
  if (anio == null) return null;
  return Math.floor(anio / 10) * 10;
}

function criteriosCompartidos(a, b) {
  const criterios = [];

  (a.tecnica || [])
    .filter((t) => (b.tecnica || []).includes(t))
    .forEach((t) => criterios.push({ tipo: "tecnica", valor: t }));

  const decadaA = decadaDe(a.anio);
  const decadaB = decadaDe(b.anio);
  if (decadaA !== null && decadaB !== null && decadaA === decadaB) {
    criterios.push({ tipo: "decada", valor: `años ${decadaA}` });
  }

  (a.motivos || [])
    .filter((m) => (b.motivos || []).includes(m))
    .forEach((m) => criterios.push({ tipo: "motivo", valor: m }));

  (a.emociones || [])
    .filter((e) => (b.emociones || []).includes(e))
    .forEach((e) => criterios.push({ tipo: "emocion", valor: e }));

  return criterios;
}

// ===========================================================================
// CONEXIONES ENTRE OBRAS
// Hay dos capas de conexiones, no una sola:
//
// 1) La RED DE FONDO (la que se ve flotando todo el tiempo, sin tocar nada):
//    cada obra se conecta solo con sus `NEIGHBORS_PER_NODE` vecinos más
//    afines (más criterios en común primero, la cercanía en pantalla como
//    desempate y como respaldo si no comparte nada con nadie). Es la misma
//    lógica sparse de siempre — a propósito no se dibujan TODAS las
//    conexiones posibles de una, para que de fondo se vea una red liviana y
//    no un enjambre de líneas.
//
// 2) Los PARES EXTRA: todas las demás obras que comparten un criterio
//    puntual (ej. las once obras con motivo "rostro") pero no entraron en la
//    red de fondo por el límite de vecinos. Estos pares se dibujan igual
//    (para que el layout ya los tenga listos) pero invisibles — ver
//    `.linea-extra` en el CSS — y solo se revelan cuando se elige justo ESE
//    criterio en la leyenda de abajo. Así, al tocar "rostro" se conectan
//    TODAS las obras con rostro, no solo las que ya caían cerca.
//
// Cada par (de cualquiera de las dos capas) guarda la lista COMPLETA de
// criterios que comparte esa pareja de obras (`criterios`, puede tener más
// de uno), no solo el primero — así una conexión que responde a varios
// criterios a la vez se resalta con cualquiera de ellos que se elija.
// ===========================================================================

function buildConnectionPairs(positions, flatData) {
  const total = flatData.length;

  // Se compara cada obra contra todas las demás una sola vez y se guarda
  // acá todo lo que comparten, para no recalcularlo dos veces.
  const compartidosPorPar = new Map(); // "i-j" (i<j) -> criterios[]
  for (let i = 0; i < total; i++) {
    for (let j = i + 1; j < total; j++) {
      const criterios = criteriosCompartidos(flatData[i], flatData[j]);
      if (criterios.length > 0) compartidosPorPar.set(`${i}-${j}`, criterios);
    }
  }

  // --- 1) Red de fondo (sparse) ---
  const basePairs = new Map(); // "i-j" -> { a, b, criterios }

  for (let i = 0; i < total; i++) {
    const candidatos = [];
    for (let j = 0; j < total; j++) {
      if (j === i) continue;
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      const criterios = compartidosPorPar.get(key) || [];
      const dx = positions[i].left - positions[j].left;
      const dy = positions[i].top - positions[j].top;
      candidatos.push({ j, criterios, d: dx * dx + dy * dy });
    }

    candidatos
      .sort((x, y) => y.criterios.length - x.criterios.length || x.d - y.d)
      .slice(0, Math.min(NEIGHBORS_PER_NODE, candidatos.length))
      .forEach(({ j, criterios }) => {
        const a = Math.min(i, j);
        const b = Math.max(i, j);
        const key = `${a}-${b}`;
        // Un mismo par puede aparecer visto desde los dos nodos; si ya
        // estaba guardado sin ningún criterio (respaldo por cercanía) pero
        // ahora aparece con alguno, nos quedamos con la versión que sí
        // explica la conexión.
        const actual = basePairs.get(key);
        if (!actual || (actual.criterios.length === 0 && criterios.length > 0)) {
          basePairs.set(key, { a, b, criterios });
        }
      });
  }

  // --- 2) Pares extra: todo lo que comparte algún criterio y no quedó en
  // la red de fondo ---
  const allPairs = Array.from(basePairs.values()).map((p) => ({ ...p, esExtra: false }));

  compartidosPorPar.forEach((criterios, key) => {
    if (basePairs.has(key)) return;
    const [a, b] = key.split("-").map(Number);
    allPairs.push({ a, b, criterios, esExtra: true });
  });

  return allPairs;
}

// ===========================================================================
// LÍNEAS DE CONEXIÓN
// Se recalculan en cada frame para que sigan a la flotación y al arrastre.
// Los pares "extra" (ver arriba) se dibujan igual que el resto pero con la
// clase `linea-extra`, que el CSS deja en opacity 0 salvo que además tengan
// `destacada` — así están listos para aparecer apenas se elige el criterio
// que les corresponde, sin tener que reconstruir nada.
// ===========================================================================

function buildLines() {
  lineEls = connectionPairs.map(({ esExtra }) => {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    if (esExtra) line.classList.add("linea-extra");
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

  updateRecorridoPropioLines(); // ver sección RECORRIDO PROPIO más abajo
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

// Tipos que efectivamente pintan una línea de color (ver CSS) — el autor
// quedó afuera de esta lista a propósito, ver criteriosCompartidos().
const TIPOS_CONEXION = ["tecnica", "decada", "motivo", "emocion"];

function actualizarResaltado() {
  // En modo "recorrido propio" toda esta red queda oculta por CSS de
  // cualquier manera (ver body.modo-recorrido-propio en style.css) — así
  // que ni vale la pena tocar clases acá: el hover normal no debe atenuar
  // ni resaltar nada mientras se arma el recorrido a mano.
  if (modoRecorridoPropio) return;

  const hayAlgoResaltado = hoverIndex !== null || criteriosSeleccionados.size > 0;
  const nodosRelevantes = new Set();
  if (hoverIndex !== null) nodosRelevantes.add(hoverIndex);

  connectionPairs.forEach((par, i) => {
    // Los pares "extra" (ver buildConnectionPairs) solo se muestran cuando
    // alguno de SUS criterios está elegido en la leyenda — nunca por hover,
    // así pasar el mouse por una obra sigue mostrando solo sus vecinos de
    // la red de fondo, como antes.
    const porHover = !par.esExtra && hoverIndex !== null && (par.a === hoverIndex || par.b === hoverIndex);

    // Un par puede compartir más de un criterio a la vez (ej. misma técnica
    // Y mismo motivo): alcanza con que UNO de los elegidos en la leyenda
    // esté entre los que comparte esta pareja de obras.
    const criterioActivo = criteriosSeleccionados.size > 0
      ? par.criterios.find((c) => criteriosSeleccionados.has(`${c.tipo}|${c.valor}`))
      : null;

    const destacada = porHover || !!criterioActivo;
    const line = lineEls[i];

    TIPOS_CONEXION.forEach((t) => line.classList.remove(`conexion-${t}`));
    const tipoColor = criterioActivo ? criterioActivo.tipo : (par.criterios[0] || {}).tipo;
    if (destacada && tipoColor) line.classList.add(`conexion-${tipoColor}`);

    line.classList.toggle("destacada", destacada);

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
// (técnica) a más general (emoción) — el autor ya no es un criterio de
// conexión (ver criteriosCompartidos), así que no aparece acá.
const ORDEN_TIPOS = ["tecnica", "decada", "motivo", "emocion"];
// Se usa solo para el aria-label de accesibilidad — el botón en pantalla
// muestra nada más el valor (ver renderLeyenda), sin el prefijo "técnica:",
// "motivo:", etc.
const ETIQUETA_TIPO = {
  tecnica: "técnica",
  decada: "década",
  motivo: "motivo",
  emocion: "emoción",
};

function listarCriteriosExistentes(pairs) {
  const vistos = new Map(); // "tipo|valor" -> { tipo, valor }
  pairs.forEach((par) => {
    par.criterios.forEach(({ tipo, valor }) => {
      const clave = `${tipo}|${valor}`;
      if (!vistos.has(clave)) vistos.set(clave, { tipo, valor });
    });
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
    boton.className = `leyenda-conexiones__item leyenda-conexiones__item--criterio leyenda-conexiones__item--${tipo}`;
    // Solo el valor (ej. "pintura", no "técnica: pintura") — el color del
    // outline ya indica de qué tipo de criterio se trata.
    boton.textContent = valor;
    boton.setAttribute("aria-label", `${ETIQUETA_TIPO[tipo] || tipo}: ${valor}`);
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
// RECORRIDO PROPIO
// Modo aparte, más simple que el resto: no compara datos curatoriales ni
// nada — cada quien arma su propio orden a mano. Al activarlo, toda la red
// de conexiones normal (de fondo, resaltada u oculta) se apaga por CSS
// (ver body.modo-recorrido-propio en style.css) y las obras quedan
// flotando sueltas. Cada click sobre una obra la suma al final del
// recorrido y la une con una línea roja a la anterior; clickear una obra
// que ya está en el recorrido la saca (y el camino se re-arma solo,
// uniendo directo a sus dos vecinas). No se guarda en ningún lado a
// propósito — es solo para explorar mientras se mira la pantalla, no hace
// falta que sobreviva a un refresh.
// ===========================================================================

const botonRecorridoPropio = document.getElementById("boton-recorrido-propio");
const botonReiniciarRecorrido = document.getElementById("boton-reiniciar-recorrido");
const hintRecorridoPropio = document.getElementById("recorrido-propio-hint");

let modoRecorridoPropio = false;
let recorridoPropio = [];    // índices (dentro de `nodes`) en el orden en que se clickearon
let recorridoLineEls = [];   // una <line> roja por cada par consecutivo del recorrido

function renderRecorridoPropio() {
  // Marca qué obras están elegidas y con qué número del recorrido.
  nodes.forEach((node, i) => {
    const orden = recorridoPropio.indexOf(i);
    node.classList.toggle("en-recorrido-propio", orden !== -1);
    if (orden !== -1) node.dataset.ordenRecorrido = orden + 1;
    else delete node.dataset.ordenRecorrido;
  });

  // Se reconstruyen las líneas rojas desde cero: una por cada par de obras
  // consecutivas en el recorrido. Es más simple que tratar de reutilizar
  // las que ya había, y acá nunca son tantas como para que importe.
  recorridoLineEls.forEach((line) => line.remove());
  recorridoLineEls = recorridoPropio.slice(1).map(() => {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.classList.add("linea-recorrido-propio");
    svg.appendChild(line);
    return line;
  });
  updateRecorridoPropioLines();

  if (botonReiniciarRecorrido) botonReiniciarRecorrido.hidden = recorridoPropio.length === 0;
}

function updateRecorridoPropioLines() {
  for (let k = 0; k < recorridoLineEls.length; k++) {
    const p1 = centerOf(nodes[recorridoPropio[k]]);
    const p2 = centerOf(nodes[recorridoPropio[k + 1]]);
    recorridoLineEls[k].setAttribute("x1", p1.x);
    recorridoLineEls[k].setAttribute("y1", p1.y);
    recorridoLineEls[k].setAttribute("x2", p2.x);
    recorridoLineEls[k].setAttribute("y2", p2.y);
  }
}

// Se llama desde el click de cada obra (ver attachNodeInteractions) cuando
// el modo está activo, en vez de abrir el lightbox.
function alternarEnRecorridoPropio(i) {
  const pos = recorridoPropio.indexOf(i);
  if (pos === -1) recorridoPropio.push(i);
  else recorridoPropio.splice(pos, 1);
  renderRecorridoPropio();
}

function alternarModoRecorridoPropio() {
  modoRecorridoPropio = !modoRecorridoPropio;
  document.body.classList.toggle("modo-recorrido-propio", modoRecorridoPropio);
  if (botonRecorridoPropio) botonRecorridoPropio.setAttribute("aria-pressed", String(modoRecorridoPropio));
  if (hintRecorridoPropio) hintRecorridoPropio.hidden = !modoRecorridoPropio;

  // Se limpia cualquier resaltado/filtro de la red normal al cruzar en
  // cualquiera de los dos sentidos, para que un modo nunca deje pisando
  // algo del otro (un criterio elegido, una obra en hover, etc.).
  hoverIndex = null;
  criteriosSeleccionados.clear();
  leyendaEl.querySelectorAll('.leyenda-conexiones__item--criterio[aria-pressed="true"]')
    .forEach((b) => b.setAttribute("aria-pressed", "false"));
  svg.classList.remove("resaltando");
  nodesLayer.classList.remove("resaltando");
  nodes.forEach((n) => n.classList.remove("obra-resaltada"));
  lineEls.forEach((line) => {
    line.classList.remove("destacada");
    TIPOS_CONEXION.forEach((t) => line.classList.remove(`conexion-${t}`));
  });

  if (!modoRecorridoPropio) {
    // Al salir del modo no queda nada armado — la próxima vez se empieza
    // de cero, como pidió simplicidad por sobre persistencia.
    recorridoPropio = [];
    renderRecorridoPropio();
  }
}

if (botonRecorridoPropio) {
  botonRecorridoPropio.addEventListener("click", alternarModoRecorridoPropio);
}
if (botonReiniciarRecorrido) {
  botonReiniciarRecorrido.addEventListener("click", () => {
    recorridoPropio = [];
    renderRecorridoPropio();
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
  nodeEls.forEach((node, i) => {
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
      // En modo "recorrido propio" el click suma/saca la obra del
      // recorrido en vez de abrir el lightbox (ver sección más arriba).
      if (modoRecorridoPropio) {
        alternarEnRecorridoPropio(i);
        return;
      }
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
