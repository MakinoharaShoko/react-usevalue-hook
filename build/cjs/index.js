'use strict';

var react = require('react');

function useValue(initialState) {
    const [value, setValue] = react.useState(initialState);
    const valueRef = react.useRef(value);
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
    const [value, setValue] = react.useState(initialValue);
    const valueRef = react.useRef(value);
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

exports.useValue = useValue;
exports.uv = uv;
//# sourceMappingURL=index.js.map
