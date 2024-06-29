const getStorage = (name) => {
    const data = localStorage.getItem(name);
    const datajs = JSON.parse(data);
    return datajs;
}

const saveStorage = (name, data) => {
    const dataString = JSON.stringify(data);
    localStorage.setItem(name, dataString);
}

const remoteStorage = (name) => {
    localStorage.removeItem(name);
}

export {
    getStorage, saveStorage, remoteStorage
}