function compareVersion(version1: string, version2: string): number {
    let ver1: string[] = version1.split(".")
    let ver2: string[] = version2.split(".")
    let len: number = ver1.length > ver2.length ? ver1.length : ver2.length

    let ans: number = 0

    for (let i: number = 0; i < len; i++) {
        if ((Number(ver1[i] || 0)) < (Number(ver2[i] || 0))) { ans = -1; break }
        if ((Number(ver1[i] || 0)) > (Number(ver2[i] || 0))) { ans = 1; break }
    }

    return ans
};