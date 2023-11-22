/**
 * @description 选择图片
 * @param {object} params
 * @param {string} params.url 最大可选照片数。
 * @param {string} params.sourceType  相册选取或者拍照。
 * @returns {Promise<any>}
 */
export const chooseImage = (params) => {
  const { count = 1, sourceType = ['camera', 'album'] } = params;
  return new Promise((resolve, reject) => {
    dd.chooseImage({
      count,
      sourceType,
      success: resolve,
      fail: reject,
    });
  });
};

/**
 * @description 预览图片
 * @param {number} current 当前显示图片索引。
 * @param {string[]} urls  要预览的图片链接列表。
 * @returns {Promise<any>}
 */
export const previewImage = (current, urls) => {
  if (!urls.length) throw new Error('图片不能为空');
  return new Promise((resolve, reject) => {
    dd.previewImage({
      current,
      urls,
      success: resolve,
      fail: reject,
    });
  });
};

/**
 * @description  保存图片到手机相册
 * @param {string} url 要保存的图片地址
 * @returns {Promise<any>}
 */
export const saveImage = (url) => {
  if (!url.length) throw new Error('图片不能为空');
  return new Promise((resolve, reject) => {
    dd.previewImage({
      url,
      success: resolve,
      fail: reject,
    });
  });
};

/**
 * @description 压缩图片
 * @param {object} params
 * @param {string?} params.compressLevel 压缩级别，支持 0 ~ 4 的整数，默认 4。
 * @param {string | string[]} params.filePaths  要压缩的图片地址数组。
 * @returns {Promise<any>}
 */
export const compressImage = (params) => {
  const { compressLevel = 1, filePaths } = params;
  if (!filePaths.length) throw new Error('图片不能为空');
  return new Promise((resolve, reject) => {
    dd.compressImage({
      filePaths,
      compressLevel,
      success: resolve,
      fail: reject,
    });
  });
};

/**
 * @description  编辑图片
 * @param {string} url 编辑的图片地址
 * @returns {Promise<any>}
 */
export const editImage = (url) => {
  if (!url) throw new Error('图片地址不能为空');
  if (!dd.canIUse('editPicture')) {
    dd.alert({ content: '当前钉钉版本不支持编辑图片, 请更新钉钉版本' });
    return;
  }
  return new Promise((resolve, reject) => {
    dd.editPicture({
      url,
      success: resolve,
      fail: reject,
    });
  });
};

/**
 * @description  获取图片信息
 * @param {string} src 图片路径，目前支持：网络图片路径、相对路径。
 * @returns {Promise<any>}
 */
export const getImageInfo = (src) => {
  if (!src) throw new Error('图片地址不能为空');
  return new Promise((resolve, reject) => {
    dd.getImageInfo({
      src,
      success: resolve,
      fail: reject,
    });
  });
};
