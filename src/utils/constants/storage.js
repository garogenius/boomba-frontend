function Storage() {
  this.save = async (key, value) => {
    return await window.localStorage.setItem(key, value);
  };
  this.get = (key) => {
    return localStorage.getItem(key);
  };
}

const storage = new Storage();
export { storage };
