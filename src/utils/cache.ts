class LocalCache{

  //设置指定key和value的缓存
  setCache(key: string, value: any,isLocalStorge?: boolean) {

    window.localStorage.setItem(key, JSON.stringify(value)); //将value变成JSON字符串放入缓存中

  }

  //获取指定key的缓存
  getCache(key: string) {

    const value = window.localStorage.getItem(key);

    if (value) {
      return JSON.parse(value);
    }
  }

  //移除指定key的缓存
  removeCache(key: string) {

    window.localStorage.removeItem(key);
  }

  //清除缓存
  clearCache() {

    window.localStorage.clear();
  }

}

export default new LocalCache();
