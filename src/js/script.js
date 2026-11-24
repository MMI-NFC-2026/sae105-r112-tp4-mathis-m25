// *** ACCORDEON ***

const accordeon = document.querySelector(".accordeon");

accordeon.querySelectorAll("details").forEach((det) => {
  det.addEventListener("toggle", () => {
    if (det.open) {
      accordeon.querySelectorAll("details").forEach((autre) => {
        if (autre !== det) {
          autre.open = false;
        }
      });
    }
  });
});
