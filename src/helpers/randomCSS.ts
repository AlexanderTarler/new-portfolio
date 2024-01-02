export const randomCSS = () => {
  const animations = [
    "animate__bounceInDown",
    "animate__bounceInLeft",
    "animate__bounceInRight",
    "animate__bounceInUp",
    "animate__fadeIn",
    "animate__zoomIn",
    "animate__backInDown",
    "animate__backInLeft",
    "animate__backInRight",
    "animate__backInUp",
    "animate__fadeInDown",
    "animate__fadeInLeft",
    "animate__fadeInRight",
    "animate__fadeInUp",
  ];

  const randomAnimation =
    animations[Math.floor(Math.random() * animations.length)];
  const randomDelay = Math.floor(Math.random() * 3) + 1; // Random delay between 1 and 3 seconds

  return `animate__animated ${randomAnimation} animate__delay-${randomDelay}s`;
};
