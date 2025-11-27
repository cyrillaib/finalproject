// GEOG 466 – Term Project
// Verdun with Papi Maurice: trenches, forts, memory & media

// ===== Base map setup =====
const map = L.map("map").setView([49.3, 4.3], 8);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

// ===== Story locations =====
// icon = emoji, image = path to local file in /images, credit = source text
const places = [
  {
    name: "Fère-en-Tardenois",
    type: "Home base / Starting point",
    lat: 49.183,
    lng: 3.617,
    icon: "🏠",
    image: "images/fere-en-tardenois.jpg",
    credit:
      "Source: Carte postale ancienne, Geneanet – https://www.geneanet.org/cartes-postales/view/5928804",
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
    icon: "🏺",
    image: "images/soissons.jpg",
    credit:
      "Source: Soissons cathedral ruins, Pixabay – https://pixabay.com/photos/abandoned-cathedral-church-soissons-2572677/",
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
    icon: "🚗",
    image: "images/chemin-des-dames.jpg",
    credit:
      "Source: Photo du Chemin des Dames, HistoryWeb – https://historyweb.fr/la-bataille-du-chemin-des-dames/",
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
    icon: "🐉",
    image: "images/caverne-du-dragon.jpg",
    credit:
      "Source: Caverne du Dragon, Aisne Tourisme – https://www.aisne.com/territoire/terre-memoire/caverne-dragon-centre-daccueil-visiteur-chemin-dames",
    history:
      "An underground limestone quarry transformed into a multi-level battlefield used by both armies.",
    trenches:
      "Connected to surface trench systems through galleries, acting as underground barracks and firing positions.",
    memory:
      "Inside the darkness of the cave, my grandfather described the cold, humidity, and silence that soldiers endured between attacks."
  },
  {
    name: "Craonne / Plateau de Californie",
    type: "Destroyed village & protest song",
    lat: 49.448,
    lng: 3.786,
    icon: "🏚️",
    image: "images/craonne.jpg",
    credit:
      "Source: Chanson de Craonne, Aisne Tourisme – https://www.aisne.com/territoire/terre-memoire/1914-1918-grande-guerre/premiere-guerre-mondiale-dans-laisne/adieu-vie-chanson-craonne",
    history:
      "The old village of Craonne was destroyed during the Nivelle Offensive in 1917. The plateau above it became a symbol of the carnage and of the soldiers who began to question the war.",
    trenches:
      "The plateau was covered by tangled trench lines, shell holes, mine craters, and collapsed dugouts. The relief was completely reshaped by artillery.",
    memory:
      "Here my grandfather often sang 'La Chanson de Craonne'. He knew so many military songs. Because he had lost his teeth after being malnourished on a mission, strangers sometimes struggled to understand him, but I understood every word. In those moments, with the song and the landscape, he wasn’t just an instructor or a veteran – he was simply my grandfather.",
    mediaEmbed:
      '<p><strong>Écouter la chanson :</strong></p>' +
      '<iframe width="280" height="158" ' +
      'src="https://www.bing.com/videos/embed/591CB73C621E123A8999591CB73C621E123A8999" ' +
      'title="Chanson de Craonne" ' +
      'allow="autoplay; encrypted-media; fullscreen; picture-in-picture" ' +
      'frameborder="0" allowfullscreen>' +
      "</iframe>" +
      '<p><em>(Si la lecture ne fonctionne pas, cliquez ' +
      '<a href="https://www.bing.com/videos/riverview/relatedvideo?q=chanson+de+craonne&&mid=591CB73C621E123A8999591CB73C621E123A8999" target="_blank">' +
      "ici</a>.)</em></p>"
  },
  {
    name: "Verdun (City)",
    type: "Front city / Symbol of resistance",
    lat: 49.159,
    lng: 5.384,
    icon: "🏙️",
    image: "images/verdun.jpg",
    credit:
      "Source: French soldier at Verdun, Reddit (Dan Carlin fan community) – https://www.reddit.com/r/dancarlin/comments/90r5na/french_soldier_shot_during_battle_verdun_1916/",
    history:
      "Verdun was massively fortified and became the center of the longest and one of the bloodiest battles of the war.",
    trenches:
      "Concentric trench systems and communication lines surrounded Verdun, connecting forts and wooded hills all around the city.",
    memory:
      "Whenever we arrived in Verdun, I felt like entering a history book. My grandfather connected every corner of the city to some story about trenches, artillery, or exhausted soldiers."
  },
  {
    name: "Fort Douaumont",
    type: "Main fortress",
    lat: 49.228,
    lng: 5.439,
    icon: "🛡️",
    image: "images/fort-douaumont.jpg",
    credit:
      "Source: Fort Douaumont, WW1 Battlefields – https://pages.ww1battlefields.co.uk/verdun/douaumont.html",
    history:
      "The largest Verdun fort, captured by the Germans early in 1916 and retaken by the French later that year.",
    trenches:
      "The fort was surrounded by zigzag trenches, barbed wire, and crater fields that are still visible in the pitted ground.",
    memory:
      "Inside the fort’s tunnels, he taught me about tactics, accidents, and survival. Outside, he showed me how trenches circled the entire fort and how artillery reshaped the surrounding hills."
  },
  {
    name: "Fort Vaux",
    type: "Underground fortress",
    lat: 49.22,
    lng: 5.457,
    icon: "🏰",
    image: "images/fort-vaux.jpg",
    credit:
      "Source: Fort de Vaux, Verdun 1916 – https://verdun1916.eu/?page_id=451",
    history:
      "Fort Vaux is known for Commandant Raynal’s desperate defense in June 1916, when the garrison held out in terrible conditions before surrendering.",
    trenches:
      "Trenches connected the fort to nearby strongpoints. Its underground galleries functioned as vertical extensions of the trench system.",
    memory:
      "For my grandfather, Fort Vaux represented endurance: holding out under suffocating conditions, darkness, and isolation. Standing there with him made those values feel concrete."
  },
  {
    name: "Fleury-devant-Douaumont",
    type: "Village destroyed in battle",
    lat: 49.214,
    lng: 5.438,
    icon: "⚰️",
    image: "images/fleury.jpg",
    credit:
      "Source: Fleury-devant-Douaumont, carte postale, Geneanet – https://www.geneanet.org/cartes-postales/view/7762412",
    history:
      "One of the villages 'Mort pour la France'. Fleury changed hands sixteen times in the fighting and was never rebuilt in its original location.",
    trenches:
      "The village lay in the middle of the Verdun battle zone, cut by trenches, communication lines, and shell holes.",
    memory:
      "Walking through the wooden signs marking the old streets, he asked me to imagine the bakery, the school, the mairie. It was the first time I fully understood that trenches and artillery erase ordinary lives, not just abstract front lines."
  },
  {
    name: "Ossuaire de Douaumont",
    type: "Ossuary & cemetery",
    lat: 49.21,
    lng: 5.423,
    icon: "✝️",
    image: "images/ossuaire-douaumont.jpg",
    credit:
      "Source: Ossuaire de Douaumont, Visit Grand Est – https://visitgrandest.com/ossuaire-de-douaumont",
    history:
      "The Douaumont Ossuary contains the remains of around 130,000 unknown French and German soldiers, with a vast military cemetery in front.",
    trenches:
      "The ossuary stands in the middle of former no man’s land, surrounded by ground once cut by trenches and churned by artillery.",
    memory:
      "This was always the quietest moment of our trips. In front of the endless lines of crosses and the bones visible through the windows, my grandfather spoke more softly. Verdun, for me, is this mix of history lesson and mourning shared with him."
  }
];

// ===== Add markers with custom icons into a cluster group =====
const markers = [];
const clusterGroup = L.markerClusterGroup({
  disableClusteringAtZoom: 11
});

places.forEach((place) => {
  const popup = `
    <div class="popup">
      <div class="popup-title">${place.name}</div>
      <div class="popup-subtitle">${place.type}</div>
      <div class="popup-section">
        <span class="popup-section-label">Historical context:</span>
        ${place.history}
      </div>
      <div class="popup-section">
        <span class="popup-section-label">Trenches & landscape:</span>
        ${place.trenches}
      </div>
      <div class="popup-section">
        <span class="popup-section-label">Personal memory:</span>
        ${place.memory}
      </div>
      ${
        place.image
          ? `<div class="popup-section">
              <img class="popup-img" src="${place.image}" alt="${place.name}">
              <div class="popup-credit">${place.credit}</div>
            </div>`
          : ""
      }
      ${
        place.mediaEmbed
          ? `<div class="popup-section">
               ${place.mediaEmbed}
             </div>`
          : ""
      }
    </div>
  `;

  const icon = L.divIcon({
    className: "emoji-marker",
    html: place.icon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -28]
  });

  const marker = L.marker([place.lat, place.lng], { icon }).bindPopup(popup);
  markers.push(marker);
  clusterGroup.addLayer(marker);
});

// Add cluster group to map
map.addLayer(clusterGroup);

// ===== Journey controls: previous / next with fly + popup =====
let currentIndex = 0;

function updateStoryStatus() {
  const statusEl = document.getElementById("story-status");
  if (!statusEl) return;
  const place = places[currentIndex];
  statusEl.textContent = `${currentIndex + 1} / ${places.length} — ${place.name}`;
}

function focusOnPlace(index) {
  // wrap around
  if (index < 0) index = places.length - 1;
  if (index >= places.length) index = 0;
  currentIndex = index;

  const marker = markers[currentIndex];
  const latlng = marker.getLatLng();

  updateStoryStatus();

  map.once("moveend", () => {
    marker.openPopup();
  });

  map.setView(latlng, 13, { animate: true });
}

// Hook up buttons
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => {
    focusOnPlace(currentIndex - 1);
  });

  nextBtn.addEventListener("click", () => {
    focusOnPlace(currentIndex + 1);
  });
}

// Initial overview then start on the first place
const group = L.featureGroup(markers);
map.fitBounds(group.getBounds().pad(0.2));
updateStoryStatus();

// Delay the first focus so the map/layout is fully ready
setTimeout(() => {
  focusOnPlace(0);
}, 800); // you can try 600–1000 ms if needed

