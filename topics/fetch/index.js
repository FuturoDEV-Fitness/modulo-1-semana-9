// api doc: https://swapi.dev/

function getStarWarsFilms() {
  fetch("https://swapi.dev/api/films")
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(err));
}
