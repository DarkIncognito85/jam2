import * as THREE from 'three';

function renderAnimatedSkin(e: HTMLElement, t: string) {
    let o, E, r, c, V, n, x, T, R, a, H, w, s, f, i, v = 0;

    // Create a perspective camera
    E = new THREE.PerspectiveCamera(45, 1.3, 1, 10000);
    E.position.y = -12;

    // Create a scene
    o = new THREE.Scene();

    // Create a canvas element
    let B = document.createElement("canvas");
    B.style.display = "none";
    document.body.appendChild(B);
    B.width = 64;
    B.height = 64;

    // Get 2D rendering context
    let U = B.getContext("2d");

    // Create a texture
    let h = new THREE.Texture(B);
    h.magFilter = THREE.NearestFilter;
    h.minFilter = THREE.NearestMipMapNearestFilter;

    // Create basic and transparent materials
    c = new THREE.MeshBasicMaterial({ map: h, side: THREE.FrontSide });
    V = new THREE.MeshBasicMaterial({ map: h, transparent: true, opacity: 1, alphaTest: 0.5, side: THREE.DoubleSide });

    // Load image
    let d = new Image();
    d.crossOrigin = "";

    // Flag to check if image is loaded
    let m = false;

    // Render function
    function g() {
        requestAnimationFrame(g);
        E.rotation.y = v;
        v += Math.PI / 320;
        E.position.z = 48 * Math.cos(v);
        E.position.x = 48 * Math.sin(v);
        x.rotation.x = n.rotation.x = Math.cos(4 * v);
        x.position.z = n.position.z = -6 * Math.sin(n.rotation.x);
        x.position.y = n.position.y = -16 - 6 * Math.abs(Math.cos(n.rotation.x));
        R.rotation.x = T.rotation.x = Math.cos(4 * v + Math.PI);
        R.position.z = T.position.z = -6 * Math.sin(T.rotation.x);
        R.position.y = T.position.y = -16 - 6 * Math.abs(Math.cos(T.rotation.x));
        H.rotation.x = a.rotation.x = Math.cos(4 * v + Math.PI);
        H.position.z = a.position.z = -6 * Math.sin(a.rotation.x);
        H.position.y = a.position.y = -4 - 6 * Math.abs(Math.cos(a.rotation.x));
        s.rotation.x = w.rotation.x = Math.cos(4 * v);
        s.position.z = w.position.z = -6 * Math.sin(w.rotation.x);
        s.position.y = w.position.y = -4 - 6 * Math.abs(Math.cos(w.rotation.x));
        r.render(o, E);
    }

    // Load image callback
    d.onload = function () {
        console.log("Loaded Image");
        U.clearRect(0, 0, 64, 64);
        U.drawImage(d, 0, 0);
        if (d.height === 32) {
            Convert6432To6464(U);
        }
        FixNonVisible(U);
        FixOverlay(U);
        h.needsUpdate = true;
        c.needsUpdate = true;
        V.needsUpdate = true;
        if (!m) {
            // Define vertices and UVs for headBox
            let t = [new THREE.Vector2(0.125, 0.875), new THREE.Vector2(0.25, 0.875), new THREE.Vector2(0.25, 1), new THREE.Vector2(0.125, 1)];
            let E = [new THREE.Vector2(0.25, 0.875), new THREE.Vector2(0.375, 0.875), new THREE.Vector2(0.375, 1), new THREE.Vector2(0.25, 1)];
            let v = [new THREE.Vector2(0, 0.75), new THREE.Vector2(0.125, 0.75), new THREE.Vector2(0.125, 0.875), new THREE.Vector2(0, 0.875)];
            let B = [new THREE.Vector2(0.125, 0.75), new THREE.Vector2(0.25, 0.75), new THREE.Vector2(0.25, 0.875), new THREE.Vector2(0.125, 0.875)];
            let U = [new THREE.Vector2(0.25, 0.75), new THREE.Vector2(0.375, 0.75), new THREE.Vector2(0.375, 0.875), new THREE.Vector2(0.25, 0.875)];
