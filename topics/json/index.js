const planets = fetch("/data/planets.json").then((res) => res.json());

function showFileContent() {
  planets.then((res) => console.log(res));
}

function convertJsToJson() {
  planets.then((res) => JSON.stringify(res)).then((res) => console.log(res));
}

function conevertJsonToJs() {
  const jsonExample = '{ "name": "John", "age": 22 }';
  console.log(JSON.parse(jsonExample));
}
