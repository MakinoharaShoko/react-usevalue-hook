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
function uv(initialState) {
    const [v, setV] = useState(initialState);
    return {
        v,
        s: function (v) {
            this.v = v;
            setV(v);
        }
    };
}

export { useValue, uv };
//# sourceMappingURL=index.js.map
