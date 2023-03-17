import { useState, useRef } from 'react';

function useValue(initialState) {
    const [value, setValue] = useState(initialState);
    const valueRef = useRef(value);
    return {
        set value(newValue) {
            valueRef.current = newValue;
            setValue(newValue);
        },
        get value() {
            return valueRef.current;
        },
    };
}
function uv(initialValue) {
    const [value, setValue] = useState(initialValue);
    const valueRef = useRef(value);
    return {
        set v(newValue) {
            valueRef.current = newValue;
            setValue(newValue);
        },
        get v() {
            return valueRef.current;
        },
    };
}

export { useValue, uv };
//# sourceMappingURL=index.js.map
