<script>
import { onMounted, ref } from "vue";

export default {
    name: "Map",
    setup() {
        const mapRef = ref(null);
        onMounted(() => {
            const tt = window.tt;
            var map = tt.map({
                key: "1JNM9zmAHGoFlR8FiiV1syDoa05dafLP",
                container: mapRef.value,
                style: "tomtom://vector/1/basic-main",
                center: [-97.7431, 30.2672],
                zoom: 2.5,
            });
            map.addControl(new tt.FullscreenControl());
            map.addControl(new tt.NavigationControl());

            function addMarker(map) {
                const tt = window.tt;

                var location1 = [-119.4179, 36.7783];
                var location2 = [-97.7431, 30.2672];
                var location3 = [-98, 38.5];
                var location4 = [-89, 40];
                var location5 = [-111.0937, 34.0489];
                var location6 = [117.0208, 36.6683];
                var location7 = [-72.576, 44.2601];
                var popupOffset = 25;

                var marker1 = new tt.Marker().setLngLat(location1).addTo(map);
                var marker2 = new tt.Marker().setLngLat(location2).addTo(map);
                var marker3 = new tt.Marker().setLngLat(location3).addTo(map);
                var marker4 = new tt.Marker().setLngLat(location4).addTo(map);
                var marker5 = new tt.Marker().setLngLat(location5).addTo(map);
                var marker6 = new tt.Marker().setLngLat(location6).addTo(map);
                var marker7 = new tt.Marker().setLngLat(location7).addTo(map);

                var popup1 = new tt.Popup({
                    offset: popupOffset,
                    closeButton: false,
                }).setText("California School for the Blind");
                var popup2 = new tt.Popup({
                    offset: popupOffset,
                    closeButton: false,
                }).setText("Texas School for the Blind and Visually Impaired");
                var popup3 = new tt.Popup({
                    offset: popupOffset,
                    closeButton: false,
                }).setText("Kansas School for the Blind");
                var popup4 = new tt.Popup({
                    offset: popupOffset,
                    closeButton: false,
                }).setText("Illinois School for the Visually Impaired");
                var popup5 = new tt.Popup({
                    offset: popupOffset,
                    closeButton: false,
                }).setText("Arizona State School for the Deaf and the Blind");
                var popup6 = new tt.Popup({
                    offset: popupOffset,
                    closeButton: false,
                }).setText(
                    "HeZe Special Education Center (菏泽市特殊教育中心)"
                );
                var popup7 = new tt.Popup({
                    offset: popupOffset,
                    closeButton: false,
                }).setText(
                    "Vermont Association For The Blind And Visually Impaired"
                );

                marker1.setPopup(popup1);
                marker2.setPopup(popup2);
                marker3.setPopup(popup3);
                marker4.setPopup(popup4);
                marker5.setPopup(popup5);
                marker6.setPopup(popup6);
                marker7.setPopup(popup7);
            }

            addMarker(map);
        });

        return { mapRef };
    },
};
</script>

<template>
    <div id="map" ref="mapRef"></div>
</template>

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
