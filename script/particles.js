// Particles.js minimal script
(function () {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    document.body.appendChild(canvas);
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';

    const particles = [];
    const particleCount = 100;

    // Resize canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Create particles
    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 4 + 1,
            xSpeed: Math.random() * 2 - 1,
            ySpeed: Math.random() * 2 - 1,
            color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.8)`
        };
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
    }

    // Draw particles
    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle) => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();

            particle.x += particle.xSpeed;
            particle.y += particle.ySpeed;

            // Bounce on edges
            if (particle.x < 0 || particle.x > canvas.width) particle.xSpeed *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.ySpeed *= -1;
        });

        requestAnimationFrame(drawParticles);
    }

    drawParticles();
})();

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Particles.js Custom</title>
    <style>
        body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-color: #282c34;
        }
    </style>
</head>
<body>
    <script src="particles.js"></script>
</body>
</html>
