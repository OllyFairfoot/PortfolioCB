/*
  EDIT THIS FILE whenever you add a new artwork.

  x and y control where the work hangs in the gallery.
  x is the distance from the left in pixels.
  y is the distance from the top in pixels.

  width and height control the displayed painting size.
*/

const artworks = [
  {
    id: "red-study",
    title: "Red Study",
    year: "2026",
    medium: "Oil on canvas",
    dimensions: "80 × 60 cm",
    image: "images/artworks/red-study.jpg",
    x: 500,
    y: 390,
    width: 230,
    height: 300,
    description:
      "Write the full description of the finished artwork here. You can discuss the subject, materials, ideas, influences and decisions behind the work.",
    progress: [
      {
        image: "images/progress/red-study-1.jpg",
        caption: "Initial sketch and composition planning."
      },
      {
        image: "images/progress/red-study-2.jpg",
        caption: "Early colour and tonal development."
      },
      {
        image: "images/progress/red-study-3.jpg",
        caption: "Later stage before the final details."
      }
    ]
  },

  {
    id: "second-painting",
    title: "Second Painting",
    year: "2026",
    medium: "Acrylic on board",
    dimensions: "60 × 50 cm",
    image: "images/artworks/second-painting.jpg",
    x: 1100,
    y: 390,
    width: 260,
    height: 220,
    description:
      "Replace this with the description of your second artwork.",
    progress: [
      {
        image: "images/progress/second-painting-1.jpg",
        caption: "First stage."
      }
    ]
  }
];
