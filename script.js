const cube = document.querySelector("#cube");

let rotation = 0;

function rotateCube() {
    rotation += 1;

    cube.cameraOrbit = `${rotation}deg 75deg 20m`;

    requestAnimationFrame(rotateCube);
}

rotateCube();