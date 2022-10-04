function Storage() {
  this.save = (key, value) => {
    return localStorage.setItem(key, value);
  };
  this.get = (key) => {
    return localStorage.getItem(key);
  };
}

const storage = new Storage();
export { storage };
