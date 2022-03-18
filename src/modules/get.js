export function getValue(obj,path) {
    const pathArray = path.split('.')
    return pathArray.reduce((prev, curr) => prev[curr], obj) ?? null
}
