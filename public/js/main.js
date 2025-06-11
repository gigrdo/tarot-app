document.getElementById('drawBtn').addEventListener('click', () => {
  const lang = document.getElementById('lang').value;

  fetch(`/api/tarot?lang=${lang}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById('result').innerHTML = `
        <h2>${data.name}</h2>
        <p><strong>${lang === 'es' ? 'Significado' : 'Meaning'}:</strong> ${data.meaning}</p>
        <p><strong>${lang === 'es' ? 'Posición' : 'Orientation'}:</strong> ${data.orientation}</p>
        <img src="${data.image}" alt="${data.name}" width="200" class="${data.orientation.toLowerCase() === 'reversed' || data.orientation.toLowerCase() === 'invertida' ? 'reversed' : 'upright'}" />

      `;
    })
    .catch(err => {
      document.getElementById('result').innerHTML = `<p>Error fetching card 😞</p>`;
      console.error(err);
    });
});
