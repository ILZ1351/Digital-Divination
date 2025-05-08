// map configuration and state
const mapConfig = {
  center: [40.7128, -74.0060], //  center
  zoom: 12,
  maxZoom: 18,
  minZoom: 10
};

// nyc neighborhood coordinates and zoom levels
const neighborhoods = {
  'harlem': {
    center: [40.8116, -73.9465],
    zoom: 14
  },
  'east-village': {
    center: [40.7265, -73.9818],
    zoom: 15
  },
  'west-village': {
    center: [40.7358, -74.0036],
    zoom: 15
  },
  'soho': {
    center: [40.7233, -73.9990],
    zoom: 15
  },
  'tribeca': {
    center: [40.7163, -74.0086],
    zoom: 15
  },
  'chelsea': {
    center: [40.7465, -74.0014],
    zoom: 15
  },
  'midtown': {
    center: [40.7549, -73.9840],
    zoom: 14
  },
  'upper-east': {
    center: [40.7736, -73.9566],
    zoom: 14
  },
  'upper-west': {
    center: [40.7870, -73.9754],
    zoom: 14
  },
  'brooklyn-heights': {
    center: [40.6953, -73.9937],
    zoom: 15
  },
  'downtown': {
    center: [40.7075, -74.0113],
    zoom: 15
  },
  'financial-district': {
    center: [40.7075, -74.0113],
    zoom: 15
  }
};

// haunted locations data with neighborhood info form api
const hauntedLocations = {
  "The Chelsea Hotel": {
    position: [40.7445, -73.9965],
    story: "This historic hotel has been home to numerous artists, writers, and musicians, many of whom never left. The most famous ghost is that of Sid Vicious's girlfriend, Nancy Spungen, who was murdered in Room 100. Guests have reported seeing her ghost and hearing strange noises.",
    type: "Hotel",
    neighborhood: "chelsea",
    history: "Built in 1884, the Chelsea Hotel has been home to countless famous residents including Mark Twain, Dylan Thomas, and Arthur Miller. It's considered one of NYC's most haunted locations."
  },
  "The Dakota": {
    position: [40.7767, -73.9762],
    story: "The famous apartment building where John Lennon lived and died. Many residents and visitors have reported seeing his ghost, and some claim to hear piano music late at night.",
    type: "Residential",
    neighborhood: "upper-west",
    history: "Built in 1884, this historic apartment building has been home to many famous residents. The most famous ghostly resident is John Lennon, who was murdered outside the building in 1980."
  },
  "Merchant's House Museum": {
    position: [40.7277, -73.9919],
    story: "Built in 1832, this house is considered one of NYC's most haunted locations. The ghost of Gertrude Tredwell, the last family member to live there, is said to still roam the halls.",
    type: "Museum",
    neighborhood: "east-village",
    history: "The Merchant's House Museum is the only 19th-century family home in New York City preserved intact, both inside and out. It's been called 'Manhattan's most haunted house.'"
  },
  "One if by Land, Two if by Sea": {
    position: [40.7337, -74.0007],
    story: "This restaurant was once Aaron Burr's carriage house. Staff and diners have reported seeing a ghostly woman in white and experiencing unexplained cold spots.",
    type: "Restaurant",
    neighborhood: "west-village",
    history: "Built in 1767, this building was originally Aaron Burr's carriage house. The ghost of a woman in white is said to be Burr's daughter, Theodosia, who disappeared at sea."
  },
  "The Algonquin Hotel": {
    position: [40.7614, -73.9807],
    story: "The ghost of a man in a top hat is often seen in the lobby, and some guests have reported their room keys mysteriously moving on their own.",
    type: "Hotel",
    neighborhood: "midtown",
    history: "Opened in 1902, the Algonquin Hotel was home to the famous Algonquin Round Table. The ghost is believed to be that of a former manager who loved the hotel so much he never left."
  },
  "The White Horse Tavern": {
    position: [40.7357, -74.0077],
    story: "Dylan Thomas's favorite bar, where he had his last drink. His ghost is said to still visit, and some claim to see him at his favorite table.",
    type: "Bar",
    neighborhood: "west-village",
    history: "Established in 1880, this historic bar was frequented by famous writers and artists. Dylan Thomas allegedly had 18 whiskeys here before collapsing and dying at the Chelsea Hotel."
  },
  "The New Amsterdam Theatre": {
    position: [40.7564, -73.9861],
    story: "The ghost of Olive Thomas, a Ziegfeld Follies performer, is said to haunt the theater. She's often seen in her dressing room or on the catwalk.",
    type: "Theater",
    neighborhood: "midtown",
    history: "Built in 1903, this theater was home to the Ziegfeld Follies. Olive Thomas died under mysterious circumstances in 1920, and her ghost is said to still perform on stage."
  },
  "The Ear Inn": {
    position: [40.7197, -74.0077],
    story: "Built in 1817, this bar is haunted by a former resident named Mickey. Staff and customers have reported seeing his ghost and hearing unexplained noises.",
    type: "Bar",
    neighborhood: "soho",
    history: "One of NYC's oldest bars, the Ear Inn has been serving drinks since 1817. The ghost of Mickey is said to be a former resident who loved the place so much he never left."
  },
  "The House of Death": {
    position: [40.7337, -73.9997],
    story: "Mark Twain once lived here, and his ghost is said to still reside in the building. Other spirits have also been reported, including a woman in a white dress.",
    type: "Residential",
    neighborhood: "west-village",
    history: "Built in 1856, this house has been home to many famous residents. Mark Twain lived here in 1900, and his ghost is said to still haunt the building."
  },
  "The Morris-Jumel Mansion": {
    position: [40.8344, -73.9386],
    story: "Built in 1765, this is Manhattan's oldest house. The ghost of Eliza Jumel, who lived here in the 19th century, is said to still haunt the mansion.",
    type: "Museum",
    neighborhood: "harlem",
    history: "This historic mansion was built in 1765 and served as George Washington's headquarters during the Revolutionary War. It's now a museum and is considered one of NYC's most haunted locations."
  },
  "The Roosevelt Island Smallpox Hospital": {
    position: [40.7514, -73.9617],
    story: "This abandoned hospital is said to be haunted by the ghosts of patients who died there. Visitors have reported hearing screams and seeing shadowy figures.",
    type: "Hospital",
    neighborhood: "roosevelt-island",
    history: "Built in 1856, this hospital treated smallpox patients until the 1950s. It's now a ruin and is considered one of NYC's most haunted locations."
  },
  "The Woolworth Building": {
    position: [40.7125, -74.0083],
    story: "The ghost of Frank Woolworth is said to still walk the halls of his namesake building. Employees have reported seeing his ghost and hearing unexplained noises.",
    type: "Office",
    neighborhood: "financial-district",
    history: "Built in 1913, this was once the tallest building in the world. Frank Woolworth's ghost is said to still oversee his empire from beyond the grave."
  }
};

// global variables
let map = null;
let markers = [];
let userMarker = null;
let userLocation = null;
let nightMode = false;
let nearestMarker = null;

// calculate distance between two points in kilometers
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
            Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// initialize the map
function initMap() {
  if (!map) {
    map = L.map('map').setView(mapConfig.center, mapConfig.zoom);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // fetch haunted locations from API
    fetchHauntedLocations();
  }
}

// request user location
function requestLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        initMap(); // initialize map after getting location
        addUserMarker();
        document.getElementById('locationPrompt').style.display = 'none';
        map.setView([userLocation.lat, userLocation.lng], 15);
      },
      function(error) {
        console.error('Error getting location:', error);
        initMap(); // initialize map even if location is denied
        document.getElementById('locationPrompt').style.display = 'none';
      }
    );
  } else {
    console.error('Geolocation is not supported by this browser.');
    initMap(); // initialize map if geolocation is not supported
    document.getElementById('locationPrompt').style.display = 'none';
  }
}

// continue without location
function continueWithoutLocation() {
  initMap(); // initialize map when continuing without location
  document.getElementById('locationPrompt').style.display = 'none';
}

// Add user location marker
function addUserMarker() {
  if (userMarker) {
    map.removeLayer(userMarker);
  }

  const userIcon = L.divIcon({
    className: 'user-marker',
    html: '👤',
    iconSize: [30, 30],
    iconAnchor: [15, 15]
  });

  userMarker = L.marker([userLocation.lat, userLocation.lng], { icon: userIcon })
    .addTo(map)
    .bindPopup('Your Location')
    .openPopup();
}

// Find nearest haunted location
function findNearestHaunted() {
  if (!userLocation || markers.length === 0) return;

  let nearest = null;
  let minDistance = Infinity;

  markers.forEach(({ marker, position, type }) => {
    const distance = calculateDistance(
      userLocation.lat,
      userLocation.lng,
      position[0],
      position[1]
    );

    if (distance < minDistance) {
      minDistance = distance;
      nearest = { marker, type };
    }
  });

  if (nearest) {
    const color = getColorForType(nearest.type);
    nearest.marker.setIcon(L.divIcon({
      className: 'custom-div-icon',
      html: `<div style="background-color: ${color}; width: 25px; height: 25px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 15px ${color};"></div>`,
      iconSize: [25, 25]
    }));

    map.setView(nearest.marker.getLatLng(), 15);
    nearest.marker.openPopup();
  }
}

// fetch haunted locations from API
async function fetchHauntedLocations() {
  try {
    // first try the haunted places API
    const response = await fetch('https://api.hauntedplaces.org/v1/places?city=new-york');
    const data = await response.json();
    
    if (data && data.places) {
      data.places.forEach(place => {
        addHauntedMarker(
          place.latitude,
          place.longitude,
          place.name,
          place.type || 'Unknown',
          place.description || 'No description available',
          place.history || 'No history available'
        );
      });
    } else {
      // if API fails, use local data
      addLocalHauntedLocations();
    }
  } catch (error) {
    console.error('Error fetching from API:', error);
    // fallback to local data
    addLocalHauntedLocations();
  }
}

// add local haunted locations as fallback
function addLocalHauntedLocations() {
  const localLocations = [
    {
      name: "The Chelsea Hotel",
      position: [40.7445, -73.9965],
      story: "This historic hotel has been home to numerous artists, writers, and musicians, many of whom never left. The most famous ghost is that of Sid Vicious's girlfriend, Nancy Spungen, who was murdered in Room 100.",
      type: "Hotel",
      history: "Built in 1884, the Chelsea Hotel has been home to countless famous residents including Mark Twain, Dylan Thomas, and Arthur Miller."
    },
    {
      name: "The Dakota",
      position: [40.7767, -73.9762],
      story: "The famous apartment building where John Lennon lived and died. Many residents and visitors have reported seeing his ghost, and some claim to hear piano music late at night.",
      type: "Residential",
      history: "Built in 1884, this historic apartment building has been home to many famous residents."
    },
    {
      name: "Merchant's House Museum",
      position: [40.7277, -73.9919],
      story: "Built in 1832, this house is considered one of NYC's most haunted locations. The ghost of Gertrude Tredwell, the last family member to live there, is said to still roam the halls.",
      type: "Museum",
      history: "The Merchant's House Museum is the only 19th-century family home in New York City preserved intact."
    },
    {
      name: "One if by Land, Two if by Sea",
      position: [40.7337, -74.0007],
      story: "This restaurant was once Aaron Burr's carriage house. Staff and diners have reported seeing a ghostly woman in white and experiencing unexplained cold spots.",
      type: "Restaurant",
      history: "Built in 1767, this building was originally Aaron Burr's carriage house."
    },
    {
      name: "The Algonquin Hotel",
      position: [40.7614, -73.9807],
      story: "The ghost of a man in a top hat is often seen in the lobby, and some guests have reported their room keys mysteriously moving on their own.",
      type: "Hotel",
      history: "Opened in 1902, the Algonquin Hotel was home to the famous Algonquin Round Table."
    },
    {
      name: "The White Horse Tavern",
      position: [40.7357, -74.0077],
      story: "Dylan Thomas's favorite bar, where he had his last drink. His ghost is said to still visit, and some claim to see him at his favorite table.",
      type: "Bar",
      history: "Established in 1880, this historic bar was frequented by famous writers and artists."
    },
    {
      name: "The New Amsterdam Theatre",
      position: [40.7564, -73.9861],
      story: "The ghost of Olive Thomas, a Ziegfeld Follies performer, is said to haunt the theater. She's often seen in her dressing room or on the catwalk.",
      type: "Theater",
      history: "Built in 1903, this theater was home to the Ziegfeld Follies."
    },
    {
      name: "The Ear Inn",
      position: [40.7197, -74.0077],
      story: "Built in 1817, this bar is haunted by a former resident named Mickey. Staff and customers have reported seeing his ghost and hearing unexplained noises.",
      type: "Bar",
      history: "One of NYC's oldest bars, the Ear Inn has been serving drinks since 1817."
    },
    {
      name: "The House of Death",
      position: [40.7337, -73.9997],
      story: "Mark Twain once lived here, and his ghost is said to still reside in the building. Other spirits have also been reported, including a woman in a white dress.",
      type: "Residential",
      history: "Built in 1856, this house has been home to many famous residents."
    },
    {
      name: "The Morris-Jumel Mansion",
      position: [40.8344, -73.9386],
      story: "Built in 1765, this is Manhattan's oldest house. The ghost of Eliza Jumel, who lived here in the 19th century, is said to still haunt the mansion.",
      type: "Museum",
      history: "This historic mansion was built in 1765 and served as George Washington's headquarters."
    },
    {
      name: "The Roosevelt Island Smallpox Hospital",
      position: [40.7514, -73.9617],
      story: "This abandoned hospital is said to be haunted by the ghosts of patients who died there. Visitors have reported hearing screams and seeing shadowy figures.",
      type: "Hospital",
      history: "Built in 1856, this hospital treated smallpox patients until the 1950s."
    },
    {
      name: "The Woolworth Building",
      position: [40.7125, -74.0083],
      story: "The ghost of Frank Woolworth is said to still walk the halls of his namesake building. Employees have reported seeing his ghost and hearing unexplained noises.",
      type: "Office",
      history: "Built in 1913, this was once the tallest building in the world."
    }
  ];

  localLocations.forEach(location => {
    addHauntedMarker(
      location.position[0],
      location.position[1],
      location.name,
      location.type,
      location.story,
      location.history
    );
  });
}

// add a single haunted location marker
function addHauntedMarker(lat, lng, name, type, story, history) {
  const color = getColorForType(type);
  const marker = L.marker([lat, lng], {
    icon: L.divIcon({
      className: 'custom-div-icon',
      html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 5px ${color};"></div>`,
      iconSize: [20, 20]
    })
  });

  let distanceText = '';
  if (userLocation) {
    const distance = calculateDistance(userLocation.lat, userLocation.lng, lat, lng);
    distanceText = `
      <div style="margin-top: 10px; padding: 5px; background-color: rgba(255, 0, 0, 0.1); border-radius: 5px;">
        <strong>Distance from you:</strong> ${distance.toFixed(1)} km
        <div style="width: 100%; height: 5px; background-color: ${color}; margin-top: 5px;">
          <div style="width: ${Math.min(100, (distance / 5) * 100)}%; height: 100%; background-color: ${color};"></div>
        </div>
      </div>
    `;
  }

  marker.bindPopup(`
    <div style="font-family: 'Special Elite', cursive; max-width: 300px;">
      <h2 style="color: ${color}; font-family: 'Nosifer', cursive; margin-bottom: 10px;">${name}</h2>
      <p><strong>Type:</strong> <span style="color: ${color};">${type}</span></p>
      <p><strong>Story:</strong> ${story}</p>
      <p><strong>History:</strong> ${history}</p>
      ${distanceText}
    </div>
  `);

  marker.addTo(map);
  markers.push({ marker, name, type, story, history, position: [lat, lng] });
}

// get color based on location type
function getColorForType(type) {
  const colors = {
    'Residential': '#ff0000',      // red
    'Museum': '#0000ff',           // Blue
    'Restaurant': '#00ff00',       // green
    'Hotel': '#ffff00',            // yellow
    'Bar': '#800080',              // purple
    'Theater': '#ffa500',          // orange
    'Hospital': '#ff00ff',         // pink
    'Office': '#00ffff',           // cyan
    'Unknown': '#808080'           // gray
  };
  return colors[type] || '#808080';
}

// night mode
function toggleNightMode() {
  nightMode = !nightMode;
  document.body.style.backgroundColor = nightMode ? "#000" : "#0a0a0a";
  
  if (nightMode) {
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '© OpenStreetMap contributors, © CARTO'
    }).addTo(map);
  } else {
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
  }
}

// haunted stories
function toggleHauntedStories() {
  markers.forEach(({ marker }) => {
    if (marker.isPopupOpen()) {
      marker.closePopup();
    } else {
      marker.openPopup();
    }
  });
}

//  map when the page loads
document.addEventListener('DOMContentLoaded', initMap);
