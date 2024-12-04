// Example: Add dynamic glow effect
setInterval(() => {
    const rings = document.querySelectorAll('.neon-ring');
    rings.forEach((ring) => {
      ring.style.boxShadow = `0 0 ${Math.random() * 20 + 20}px rgba(255, 255, 255, 0.6)`;
    });
  }, 1000);
  