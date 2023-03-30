class LocalStorageHelper {
    /**
     * @param {string} name
     */
    setData(name, value, clearAfter = null) {
        if (typeof window !== "undefined") {
            localStorage.setItem(name, JSON.stringify(value));
            if (clearAfter) {
                setTimeout(() => {
                    localStorage.removeItem(name);
                });
            }
        }
    }

    /**
     * @param {string} name
     */

    getData(name) {
        let data = null;
        if (typeof window !== "undefined") {
            data = JSON.parse(localStorage.getItem(name));
            return data;
        }
    }

    /**
     * @param {string} name
     */

    clear(name) {
        localStorage.removeItem(name);
    }
}

const localStorageHelper = new LocalStorageHelper();
export default localStorageHelper;