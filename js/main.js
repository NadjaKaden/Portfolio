const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const particles = Array.from({ length: 90 }, () => ({
    x: Math.ran
        });

    requestAnimationFrame(animate);


animate();
