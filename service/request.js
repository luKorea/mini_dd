/**
 *
 * @param {object} params
 * @param {string} params.url
 * @param {string | 'GET'} params.method
 * @param {string | 'json'} params.dataType
 * @param {object | {}} params.data
 * @param {object | {"Content-Type": "application/x-www-form-urlencoded"}} params.headers
 * @returns {Promise<any>}
 */
const http = (params) => {
  const {
    url,
    method = 'GET',
    dataType = 'json',
    headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data = {},
  } = params;
  if (!url) {
    throw new Error('请输入请求地址');
  }
  return new Promise((resolve, reject) => {
    dd.httpRequest({
      url,
      method,
      dataType,
      headers,
      data,
      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      },
    });
  });
};

const getDifferentEnvUrl = (type) => {
  return type;
};

export default http;
