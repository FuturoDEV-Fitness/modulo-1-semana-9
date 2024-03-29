function saveData(value) {
  localStorage.setItem("futuro", value);
  window.alert(`O valor salvo para a key "futuro" foi: ${value}`);
}

function getData() {
  const value = localStorage.getItem("futuro");
  window.alert(`O valor resgatado da key "futuro" foi: ${value}`);
}

function clearData() {
  localStorage.removeItem("futuro");
}

function clearStorage() {
  localStorage.clear();
}
