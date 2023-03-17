import { useState } from 'react';

function useValue(initialState) {
    const [value, setValue] = useState(initialState);
    return {
        value,
        set: function (newValue) {
            this.value = newValue;
            setValue(newValue);
        }
    };
}
function uv(initialValue) {
    const [value, setValue] = useState(initialValue);
    const valueObject = { value };
    return {
        set v(newValue) {
            valueObject.value = newValue;
            setValue(newValue);
        },
        get v() {
            return valueObject.value;
        },
    };
}

export { useValue, uv };
//# sourceMappingURL=index.js.map
