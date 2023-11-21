class WebSocket {
  constructor(config) {
    this.config = config;
  }

  // 创建连接
  createConnect() {
    if (!this.config.url) throw new Error('请配置链接服务器地址');
    return new Promise((resolve, reject) => {
      dd.connectSocket({
        ...this.config,
        success: resolve,
        fail: reject,
      });
    });
  }
  // 发送信息
  sendMessage(data, isBuffer) {
    return new Promise((resolve, reject) => {
      dd.sendSocketMessage({
        data, // 需要发送的内容
        isBuffer,
        success: resolve,
        fail: reject,
      });
    });
  }
  // 接受信息
  onSocketMessage() {
    dd.onSocketMessage(function (res) {
      return res.data;
    });
  }
  // 关闭链接
  closeWebsocket() {
    dd.closeWebsocket();
  }
}

export default WebSocket;
