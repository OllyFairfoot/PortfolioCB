const content = document.getElementById("artwork-content");
const params = new URLSearchParams(window.location.search);
const artworkId = params.get("id");
const artwork = artworks.find((item) => item.id === artworkId);

if (!artwork) {
  content.innerHTML = `
    <h1>Artwork not found</h1>
    <p>Check that the artwork ID in artworks.js matches the link.</p>
  `;
} else {
  document.title = `${artwork.title} | My Art Portfolio`;

  const progressMarkup =
    artwork.progress && artwork.progress.length
      ? `
        <section class="progress-section">
          <h2>Process and development</h2>
          <div class="progress-grid">
            ${artwork.progress
              .map(
                (stage) => `
                  <figure class="progress-card">
                    <img src="${stage.image}" alt="${stage.caption}">
                    <figcaption>${stage.caption}</figcaption>
                  </figure>
                `
              )
              .join("")}
          </div>
        </section>
      `
      : "";

  content.innerHTML = `
    <section class="artwork-hero">
      <img
        class="artwork-main-image"
        src="${artwork.image}"
        alt="${artwork.title}"
      >

      <div class="artwork-info">
        <h1>${artwork.title}</h1>

        <div class="artwork-meta">
          <div>${artwork.year}</div>
          <div>${artwork.medium}</div>
          <div>${artwork.dimensions}</div>
        </div>

        <div class="artwork-description">
          ${artwork.description}
        </div>
      </div>
    </section>

    ${progressMarkup}
  `;
}
