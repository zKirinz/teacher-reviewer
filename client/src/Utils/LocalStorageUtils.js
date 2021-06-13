class LocalStorageUtils {
    getItem(key, defaultValue = '""') {
        if (typeof localStorage !== 'undefined') {
            let item = localStorage.getItem(key)
            if (item && item === 'undefined') {
                item = defaultValue
            }
            return item
        }
        return undefined
    }

    setItem(key, value = '') {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem(key, value)
        }
    }

    removeItem(key) {
        if (typeof localStorage !== 'undefined') {
            localStorage.removeItem(key)
        }
    }

    clear() {
        if (typeof localStorage !== 'undefined') {
            localStorage.clear()
        }
    }
}

export default new LocalStorageUtils()
