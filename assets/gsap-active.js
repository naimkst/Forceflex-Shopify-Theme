document.addEventListener("DOMContentLoaded", () => {
  const images = [];
  const totalFrames = 360; // Adjust to the number of images you have
  const sequence = document.getElementById("sequence");

  // Preload images
  for (let i = 0; i < totalFrames; i++) {
    const img = new Image();
    img.src = `/assets/02_${String(i).padStart(4, "0")}.png`;
    images.push(img);
  }

  gsap.registerPlugin(ScrollTrigger);

  const obj = { frame: totalFrames - 1 };

  function updateImage() {
    const imgIndex = Math.max(0, Math.floor(obj.frame));
    sequence.src = images[imgIndex].src;
  }

  gsap.to(obj, {
    frame: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".image-sequence-container",
      start: "top top",
      end: "+=20%",
      scrub: true,
      pin: true,
      onUpdate: updateImage,
    },
  });
});
