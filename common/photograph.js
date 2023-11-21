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
