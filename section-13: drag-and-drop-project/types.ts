// Type Definitions
export enum ProjectStatus {
  Active,
  Finished
}

export type Listener<T> = (items: T[]) => void;
