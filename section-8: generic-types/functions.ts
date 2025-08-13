// Generic Utility Functions
export function merge<T>(a: T, b: T) {
    return [a, b];
}

export function mergeMultiple<T, U>(a: T, b: U) {
    return [a, b];
}

export function mergeObj<T extends object>(a: T, b: T) {
    return { ...a, ...b };
}

export function mergeObjSecond<T extends object, U extends object>(a: T, b: U) {
    return { ...a, ...b };
}
