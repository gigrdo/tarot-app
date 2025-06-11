const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;


app.use(express.static('public'));

// API: /api/tarot
app.get('/api/tarot', (req, res) => {
  const lang = req.query.lang || 'en';

  const tarotDeck = [
    {
      name: lang === 'es' ? "El Loco" : "The Fool",
      meaning: lang === 'es'
        ? "Comienzos, aventura, libertad"
        : "Beginnings, adventure, freedom",
      orientation: lang === 'es'
        ? (Math.random() < 0.5 ? "al derecho" : "invertida")
        : (Math.random() < 0.5 ? "Upright" : "Reversed"),
      image: "img/el_loco.jpg"
    },
    {
      name: lang === 'es' ? "La Muerte" : "Death",
      meaning: lang === 'es'
        ? "Transformación, renacimiento, dejar ir"
        : "Transformation, rebirth, letting go",
      orientation: lang === 'es'
        ? (Math.random() < 0.5 ? "al derecho" : "invertida")
        : (Math.random() < 0.5 ? "Upright" : "Reversed"),
      image: "img/la_muerte.jpg"
    },
    {
      name: lang === 'es' ? "La Torre" : "The Tower",
      meaning: lang === 'es'
        ? "Caos, ruptura, revelación"
        : "Chaos, upheaval, revelation",
      orientation: lang === 'es'
        ? (Math.random() < 0.5 ? "al derecho" : "invertida")
        : (Math.random() < 0.5 ? "Upright" : "Reversed"),
      image: "img/la_torre.jpg"
    },
    {
      name: lang === 'es' ? "La Estrella" : "The Star",
      meaning: lang === 'es'
        ? "Esperanza, claridad, inspiración"
        : "Hope, clarity, inspiration",
      orientation: lang === 'es'
        ? (Math.random() < 0.5 ? "al derecho" : "invertida")
        : (Math.random() < 0.5 ? "Upright" : "Reversed"),
      image: "img/la_estrella.jpg"
    }
  ];

  const randomCard = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
  res.json(randomCard);
});

// Start server
app.listen(PORT, () => {
  console.log(`🔮 Tarot App API is running on port ${PORT}`);
});