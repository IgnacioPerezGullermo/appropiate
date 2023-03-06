import axios from 'axios';
const secondAPI = axios.create({
  baseURL: 'https://api.cmfchile.cl',
});

const fetchUf = secondAPI
  .get(
    '/api-sbifv3/recursos_api/uf?apikey=37d5541b50a3e72b425781f8d5ada51aff9ee8a8&formato=JSON'
  )
  .then((response) => {
    let data = response.data.UFs[0];
    console.log(data);
    return data;
  });

export default await fetchUf;
