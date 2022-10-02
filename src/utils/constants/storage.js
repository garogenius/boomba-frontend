
function Storage() {
    this.save = async (key, value) => {
        return await window.localStorage.setItem(key, value);
    };
    this.get = async (key) => {
        return await window.localStorage.getItem(key);
    };
}

const storage = new Storage();
export { storage };
