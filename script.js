fetch('countries.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('country-info');
    data.forEach(country => {
        const div = document.createElement('div');
        div.innerHTML = `<strong>${country.name}</strong> - ${country.region}<br>Population: ${country.population}<br>Language: ${country.language}<hr>`;
        container.appendChild(div);
    });
  });
