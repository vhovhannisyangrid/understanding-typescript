// Generic Type Definitions
export type DataStore<T> = {
    [key: string]: T
}

export type Listener<T> = (items: T[]) => void;
