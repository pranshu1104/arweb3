AFRAME.registerComponent('markerhandler', {
    init: function () {
        const marker = this.el;

        marker.addEventListener('markerFound', () => {
            // Marker found, add your 3D model
            const model = document.createElement('a-entity');
            model.setAttribute('gltf-model', 'url(path/to/your/water_molecule.glb)');
            model.setAttribute('scale', '0.1 0.1 0.1');

            marker.appendChild(model);
        });

        marker.addEventListener('markerLost', () => {
            // Marker lost, remove the 3D model
            while (marker.firstChild) {
                marker.removeChild(marker.firstChild);
            }
        });
    }
});
