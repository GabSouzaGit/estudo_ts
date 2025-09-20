type ObjectMapCallback = (value : any, key : string, obj : object) => any

declare global {
    interface Object {
        map(obj : object, callback : ObjectMapCallback) : void;
        merge(...objects : object[]) : object;
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

Object.prototype.merge = (...objects : object[]) => {
    let merged = {};

    for(let i = 0; i < objects.length; i++){
        const obj = objects[i];
        const keysToMerge : string[] = Object.keys(obj);
        if(keysToMerge.length == 0) continue;

        for(let j = 0; j < keysToMerge.length; j++){
            const key = keysToMerge[j];
            merged[key] = obj[key];
        }
    }
    
    return merged;
}

export {};