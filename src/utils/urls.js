import { BASE_URL } from '../api/base_url'
const path = (route) => `${BASE_URL}${route}`

const URL = {
  baseUrl: BASE_URL,

  /* ------------UPLOAD IMAGE----------*/
  uploadImage: path('/v1/master/create-image'),
  getAllImage: path('/v1/master/get-all-images'),
  mailQuery: path('/v1/master/send-mail'),
  getPrefLang:path('/v1/master/get-lang-preference'),
  createPrefLang:path('/v1/master/create-lang-preference'),
  updatePrefLang:path('/v1/master/update-lang-preference'),

}

export default URL
