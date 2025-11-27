// GEOG 466 – Term Project
// Verdun with Papi Maurice: trenches, forts, and memory

// ===== Base map setup =====
const map = L.map("map").setView([49.3, 4.3], 8);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

// ===== Story locations =====
const places = [
  {
    name: "Fère-en-Tardenois",
    type: "Home base / Starting point",
    lat: 49.183,
    lng: 3.617,
    history:
      "Small town in the Aisne department, close to 1914–1918 support lines, logistics routes, and rear positions.",
    trenches:
      "No major trenches remain here, but the region was full of rear lines, camps, and roads used to supply the front.",
    memory:
      "This is where my grandfather Maurice lived. Every October break or weekend started here before heading to Verdun, Soissons, or the Chemin des Dames."
  },
  {
    name: "Soissons",
    type: "War-damaged city",
    lat: 49.381,
    lng: 3.323,
    history:
      "Soissons was bombarded repeatedly and changed hands many times during the First World War.",
    trenches:
      "The city was surrounded by trench networks on the surrounding ridges overlooking the Aisne valley.",
    memory:
      "We often passed through Soissons. My grandfather always pointed out church façades and old walls still marked by shrapnel."
  },
  {
    name: "Chemin des Dames Ridge",
    type: "Front line ridge",
    lat: 49.445,
    lng: 3.667,
    history:
      "A strategic ridge held by German forces. The Nivelle Offensive in 1917 caused massive French losses.",
    trenches:
      "The entire ridge was lined with trenches, dugouts, caverns, and observation posts.",
    memory:
      "Driving along the ridge with him in autumn fog was unforgettable. He explained how holding the high ground meant life or death."
  },
  {
    name: "Caverne du Dragon (Grotte du Dragon)",
    type: "Underground quarry",
    lat: 49.443,
    lng: 3.672,
    history:
      "An underground limestone quarry transformed into a multi-level battlefield used by both armies.",
    trenches:
      "Connected to surface trench systems through galleries, acting as underground barracks and firing positions.",
    memory:
      "Inside the darkness of the cave, my grandfather described the cold, humidity, and silence soldiers endured."
  },
  {
    name: "Craonne / Plateau de Californie",
    type: "Destroyed village",
    lat: 49.448,
    lng: 3.786,
    history:
      "The old village of Craonne was destroyed by artillery and later rebuilt elsewhere.",
    trenches:
      "The plateau was covered by tangled trench lines, shell holes, mine craters, and collapsed dugouts.",
    memory:
      "He told me to imagine the village before 1914 — shops, schools, families — then showed how artillery erased everything."
  },
  {
    name: "Verdun (City)",
    type: "Front city / Symbol of resistance",
    lat: 49.159,
    lng: 5.384,
    history:
      "Verdun was massively fortified and became the center of the longest and bloodiest battle of the war.",
    trenches:
      "Concentric trench systems and communication lines surrounded Verdun, connecting to forts and wooded hills.",
    memory:
      "Whenever we arrived in Verdun, I felt like entering a history book. My grandfather connected every corner of the city to the battle."
  },
  {
    name: "Fort Douaumont",
    type: "Main fortress",
    lat: 49.228,
    lng: 5.439,
    history:
      "The largest Verdun fort, captured by Germans early in 1916 and retaken by the French later.",
    trenches:
      "Surrounded by zigzag trenches, barbed wire, and crater fields still visible today.",
    memory:
      "Inside the fort’s tunnels, he taught me about tactics, mistakes, and survival. Outside, he showed me how trenches circled the entire fort."
  },
  {
    name: "Fort Vaux",
    type: "Underground fortress",
    lat: 49.22,
    lng: 5.457,
    history:
      "Known for Commandant Raynal’s desperate defense in June 1916.",
    trenches:
      "Trenches connected the fort to nearby strongpoints. Underground galleries acted like vertical extensions of trench warfare.",
    memory:
      "He said Fort Vaux represented courage: holding out under suffocating conditions, darkness, and isolation."
  },
  {
    name: "Fleury-devant-Douaumont",
    type: "Village destroyed in battle",
    lat: 49.214,
    lng: 5.438,
    history:
      "One of the villages 'Mort pour la France'. It changed hands 16 times in the fighting.",
    trenches:
      "The area around Fleury was a maze of trenches and shell holes. The village was obliterated by artillery.",
    memory:
      "Walking through the wooden signs marking old streets, he asked me to imagine the lives that once filled the village."
  },
  {
    name: "Ossuaire de Douaumont",
    type: "Ossuary & cemetery",
    lat: 49.21,
    lng: 5.423,
    history:
      "Contains the remains of 130,000 unknown French and German soldiers.",
    trenches:
      "The ossuary stands in the center of former no man’s land, surrounded by cratered soil and former trench networks.",
    memory:
      "This was the quietest place. In front of the endless crosses, my grandfather always spoke more softly."
  }
];

// ===== Add markers =====
const markers = [];

places.forEach((place) => {
  const popup = `
    <div class="popup">
      <div class="popup-title">${place.name}</div>
      <div class="popup-subtitle">${place.type}</div>
      <div><strong>Historical context:</strong> ${place.history}</div>
      <div style="margin-top:4px;"><strong>Trenches:</strong> ${place.trenches}</div>
      <div style="margin-top:4px;"><strong>Memory:</strong> ${place.memory}</div>
    </div>
  `;

  const marker = L.marker([place.lat, place.lng]).bindPopup(popup);
  marker.addTo(map);
  markers.push(marker);
});

// ===== Fit map to marker bounds =====
const group = L.featureGroup(markers);
map.fitBounds(group.getBounds().pad(0.2));
