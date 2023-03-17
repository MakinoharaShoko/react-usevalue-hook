export declare function useValue<T>(initialState: T): {
    value: any;
    set: (newValue: T) => void;
};
export declare function uv<T>(initialState: T): {
    v: any;
    s: (v: T) => void;
};
