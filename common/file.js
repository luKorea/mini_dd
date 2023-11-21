/**
 * @description 文件上传
 * @param {object} params
 * @param {string} params.url 开发者服务器地址。
 * @param {string} params.fileType 文件类型  image | video | audio
 * @param {string} params.fileName 文件名，即对应的 key, 开发者在服务器端通过这个 key 可以获取到文件二进制内容。
 * @param {string} params.filePath 要上传文件资源的本地定位符。
 * @param {string} params.header 请求头参数
 * @param {string} params.formData HTTP 请求中其他额外的 form 数据。
 * @returns {Promise<any>}
 */
export const uploadFile = (params) => {
  const {
    url,
    fileType = 'image',
    fileName = 'file',
    filePath,
    header = {},
    formData = {},
  } = params;
  if (!url) throw new Error('请输入地址');
  return new Promise((resolve, reject) => {
    dd.uploadFile({
      url,
      fileType,
      filePath,
      fileName,
      header,
      formData,
      success: resolve,
      fail: reject,
    });
  });
};

/**
 * @description 文件下载
 * @param {object} params
 * @param {string} params.url 文件地址
 * @param {string} params.header
 * @returns {Promise<any>}
 */
export const downloadFile = (params) => {
  const { url, header = {} } = params;
  if (!url) throw new Error('请填写文件地址');
  return new Promise((resolve, reject) => {
    dd.uploadFile({
      url,
      header,
      success: resolve,
      fail: reject,
    });
  });
};
