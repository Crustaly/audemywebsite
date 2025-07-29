<template>
  <div id="map" ref="mapRef">
    <p v-if="!mapVisible" class="text-center text-sm text-gray-500 mt-4">
      Loading map...
    </p>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const mapRef = ref(null);
const mapVisible = ref(false);
let observer;

const onMapIntersect = (entries) => {
  const [entry] = entries;
  if (entry.isIntersecting) {
    mapVisible.value = true;
    loadMap();
    observer.disconnect();
  }
};

const loadMap = async () => {
  if (!window.tt) {
    // Load TomTom JS
    await loadScript(
      'https://api.tomtom.com/maps-sdk-for-web/cdn/5.x/5.64.0/maps/maps-web.min.js'
    );
    await loadScript(
      'https://api.tomtom.com/maps-sdk-for-web/cdn/5.x/5.64.0/services/services-web.min.js'
    );
    // Load CSS
    loadCSS(
      'https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.25.0/maps/maps.css'
    );
  }

  const tt = window.tt;
  const map = tt.map({
    key: '1JNM9zmAHGoFlR8FiiV1syDoa05dafLP',
    container: mapRef.value,
    style: 'tomtom://vector/1/basic-main',
    center: [-97.7431, 30.2672],
    zoom: 2.5,
  });

  map.addControl(new tt.FullscreenControl());
  map.addControl(new tt.NavigationControl());
  addMarkers(map);
};

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

const loadCSS = (href) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.type = 'text/css';
  document.head.appendChild(link);
};

const addMarkers = (map) => {
  const tt = window.tt;
  const locations = [
    {
      name: 'Alabama Institute for the Deaf and Blind',
      coordinates: [-86.121667, 33.423889],
    },
    {
      name: 'Arizona State School for the Deaf and the Blind',
      coordinates: [-110.9904206, 32.2370163],
    },
    {
      name: 'California School for the Blind',
      coordinates: [-121.965, 37.561389],
    },
    {
      name: 'Florida School for the Deaf and the Blind',
      coordinates: [-81.31568, 29.91387],
    },
    {
      name: 'Georgia Academy for the Blind',
      coordinates: [-83.6686, 32.8481],
    },
    {
      name: 'Hadley (IL)',
      coordinates: [-87.7305, 42.1056],
    },
    {
      name: 'Idaho Educational Services for the Deaf and the Blind',
      coordinates: [-114.71018377937226, 42.930033266556364],
    },
    {
      name: 'Illinois School for the Visually Impaired',
      coordinates: [-90.21798754611584, 39.73565543633133],
    },
    {
      name: 'Indiana School for the Blind and Visually Impaired',
      coordinates: [-86.08515046145114, 39.83401516509762],
    },
    {
      name: 'Iowa Educational Services for the Blind and Visually Impaired',
      coordinates: [-95.82260501904825, 41.22588929543891],
    },
    {
      name: 'Kansas State School for the Blind',
      coordinates: [-94.6395, 39.11653],
    },
    {
      name: 'Kentucky School for the Blind',
      coordinates: [-85.713383, 38.255933],
    },
    {
      name: 'Louisiana School for the Visually Impaired',
      coordinates: [-91.188055, 30.393055],
    },
    {
      name: 'Maryland School for the Blind',
      coordinates: [-76.536111, 39.3675],
    },
    {
      name: 'Missouri School for the Blind',
      coordinates: [-90.245, 38.608333],
    },
    {
      name: 'Perkins School for the Blind (MA)',
      coordinates: [-71.1755, 42.362],
    },
    {
      name: 'Vermont Association for the Blind and Visually Impaired',
      coordinates: [-73.15, 44.466667],
    },
    {
      name: 'Visually Impaired Preschool Services (KY + IN)',
      coordinates: [-85.68384087502888, 38.20048802883136],
    },
  ];

  locations.forEach((location) => {
    const marker = new tt.Marker().setLngLat(location.coordinates).addTo(map);
    const popup = new tt.Popup({ offset: 25, closeButton: false }).setText(
      location.name
    );
    marker.setPopup(popup);
  });
};

onMounted(() => {
  observer = new IntersectionObserver(onMapIntersect, {
    root: null,
    threshold: 0.3,
  });

  if (mapRef.value) observer.observe(mapRef.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<style>
#map {
  height: 45vh;
  width: 35vw;
  border-radius: 16px;
}
@media (max-width: 768px) {
  #map {
    height: 80vw;
    width: 80vw;
    border-radius: 12px;
    margin: 0 auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
}
</style>
