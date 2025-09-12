type ObjectMapCallback = (value : any, key : string, obj : object) => any

declare global {
    interface Object {
        map(obj : object, callback : ObjectMapCallback) : void;
    }
}

Object.prototype.map = (obj : object, callback : ObjectMapCallback) => {
    const keys = Object.keys(obj);
    const copy = { ...obj }

    for(let i = 0; i < keys.length; i++){
        copy[keys[i]] = callback(
            copy[keys[i]],
            keys[i],
            copy
        )
    }

    return copy;
}

export {};