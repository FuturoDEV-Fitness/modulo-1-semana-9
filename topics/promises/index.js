function simplePromise(isError) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isError) return reject("Ocorreu um erro :(");
      resolve("Deu tudo certo!");
    }, 500);
  });
}

function callPromise(isError) {
  simplePromise(isError)
    .then((res) => console.log(`(then): ${res}`))
    .catch((err) => console.log(`(catch): ${err}`))
    .finally(() => console.log("(finally): A Promise concluiu sua execução."));

  console.log("A promessa está sendo executada...");
}
