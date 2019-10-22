// This function loads pokemon data from the Pokemon API
function fetchNorrisJSON() {
  // Feel free to download this HTML and edit it, to use another Pokemon ID

  const url = `https://api.chucknorris.io/jokes/random`;
  axios
    .get(url)
    .then(function(response) {
      return response.data; // SUBTLE difference with Fetch: response.data instead of response.json()
    })
    .then(function(norris) {
      const norrisHtml = `
          <p><strong>${norris.value}</strong></p>
          <img src="${norris.icon_url}" />
        `;
      document.querySelector('#pokemon').innerHTML = pokemonHtml;
    });
}

fetchNorrisJSON();
