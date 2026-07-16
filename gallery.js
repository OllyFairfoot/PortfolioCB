const gallery = document.getElementById("gallery");

function createArtworkElement(artwork) {
  const link = document.createElement("a");
  link.className = "painting-link";
  link.href = `artwork.html?id=${encodeURIComponent(artwork.id)}`;
  link.style.left = `${artwork.x}px`;
  link.style.top = `${artwork.y}px`;
  link.setAttribute("aria-label", `View ${artwork.title}`);

  const image = document.createElement("img");
  image.src = artwork.image;
  image.alt = artwork.title;
  image.style.width = `${artwork.width}px`;
  image.style.height = `${artwork.height}px`;

  const label = document.createElement("span");
  label.className = "painting-label";
  label.textContent = `${artwork.title}, ${artwork.year}`;

  link.append(image, label);
  return link;
}

artworks.forEach((artwork) => {
  gallery.appendChild(createArtworkElement(artwork));
});

/* Turn normal mouse-wheel movement into horizontal scrolling */
window.addEventListener(
  "wheel",
  (event) => {
    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault();
      window.scrollBy({
        left: event.deltaY,
        behavior: "auto"
      });
    }
  },
  { passive: false }
);

/* Arrow-key navigation */
window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    window.scrollBy({ left: 260, behavior: "smooth" });
  }

  if (event.key === "ArrowLeft") {
    window.scrollBy({ left: -260, behavior: "smooth" });
  }
});

/* Click-and-drag navigation */
let dragging = false;
let startX = 0;
let startScrollLeft = 0;

window.addEventListener("pointerdown", (event) => {
  if (event.target.closest(".painting-link")) return;

  dragging = true;
  startX = event.clientX;
  startScrollLeft = window.scrollX;
  document.body.style.cursor = "grabbing";
});

window.addEventListener("pointermove", (event) => {
  if (!dragging) return;
  const distance = event.clientX - startX;
  window.scrollTo(startScrollLeft - distance, 0);
});

window.addEventListener("pointerup", () => {
  dragging = false;
  document.body.style.cursor = "";
});

window.addEventListener("pointercancel", () => {
  dragging = false;
  document.body.style.cursor = "";
});
