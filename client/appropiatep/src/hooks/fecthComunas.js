function fetchComunas() {
  const comunas = fetch('https://api.toctoc.com/api/v1/public/comunas', {
    method: 'GET',
    mode: 'no-cors',
  }).then((response) => {
    const res = response.json();
    return res;
  });
}

export default fetchComunas;
