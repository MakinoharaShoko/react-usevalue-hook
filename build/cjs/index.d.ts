export declare function useValue<T>(initialState: T): {
    value: any;
    set: (newValue: T) => void;
};
export declare function uv<T>(initialValue: T): {
    v: T;
};
