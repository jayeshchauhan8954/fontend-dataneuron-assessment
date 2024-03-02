import { showMessage } from "./toast";
import { _toastVariants } from "./constant";

function getRequestHeaders(type) {
  let headers = {};
  switch (type) {
    case 'json':
      headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      break;
    case 'form':
      headers = {
        "accept": 'application/json',
        "access-control-allow-origin": "*",
        "content-type": "multipart/form-data"
      };
      break;
    default:
      headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      };
      break;
  }
  return headers;
};

function createQueryOrParams(object, type = 'query') {
  let string = '';
  let length = Object.entries(object).length || 0;
  if (type === 'query') {
    string = '?';
    Object.entries(object).forEach((item, index) => {
      string = string + item[0] + '=' + item[1];
      if (length !== index + 1) {
        string = string + '&';
      }
    });

  } else if (type === 'params') {
    string = '/';
    Object.entries(object).forEach((item, index) => {
      string = string + item[1];
      if (length !== index + 1) {
        string = string + '/';
      }
    });
  }
  return string;
};

const apiRequest = async ({
  endUrl,
  method,
  headerType = 'json',
  body = null,
  query = null,
  params = null,
  token = true,
  savedToken = null,
  showMsg = false,
  addOrgQry = false,
  allOrg = false
}) => {
  let requestHeaders = getRequestHeaders(headerType);
  if (params) {
    /* Add params */
    endUrl = endUrl + createQueryOrParams(params, 'params');
  }
  if (query) {
    /* Add query */
    endUrl = endUrl + createQueryOrParams(query, 'query');
  }


  const options = {
    method: method,
    headers: requestHeaders,
    timeoutInterval: 10000
  };
  if (body) {
    options.body = headerType === 'json' ? JSON.stringify(body) : body
  }
  try {
    let fetched = await fetch(endUrl, options);
    let response = await fetched.json();
    if (response.status === 200 || response.status_code === 200) {
      /* Will modify according to api's response */
      response = {
        status: true,
        data: response.data,
        message: response.message
      }
    }
    else {
      let msg = response?.errors?.length > 0 ? response?.errors?.[0].message : ''
      response = { status: false, data: {}, message: response.message || msg };
    }
    if (showMsg) {
      showMessage({ variant: response?.status ? _toastVariants.Success : _toastVariants.Error, message: response?.message })
    }
    return response;
  } catch (e) {
    if (showMsg) {
      showMessage({ variant: _toastVariants.Error, message: e.toString() })
    }
    return { status: false, data: {}, message: e.toString() };
  }
};

export { apiRequest };
