function isEmpty(obj: Record<string, any> | any[]): boolean {
    for (let _ in obj) return false;
    return true;
};