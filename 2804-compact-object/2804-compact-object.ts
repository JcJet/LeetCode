type Obj = Record<any, any>;

function compactObject(obj: Obj): Obj {
    // obj is not an object or is null
    if (typeof obj !== 'object' || obj === null) return obj;
    // obj is an array
    if (Array.isArray(obj)) return obj.reduce((acc, iter) => {
        if (!iter) return acc;
        acc.push(compactObject(iter));
        return acc;
    }, []);
    // obj is an ordinary object
    return Object.entries(obj).reduce((acc, [key, val]) => {
        if (val) acc[key] = compactObject(val);
        return acc;
    }, {});
};