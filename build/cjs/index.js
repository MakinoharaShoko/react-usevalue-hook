'use strict';

var react = require('react');

function useValue(initialState) {
    const [value, setValue] = react.useState(initialState);
    return {
        value,
        set: function (newValue) {
            this.value = newValue;
            setValue(newValue);
        }
    };
}
function uv(initialValue) {
    const [value, setValue] = react.useState(initialValue);
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

exports.useValue = useValue;
exports.uv = uv;
//# sourceMappingURL=index.js.map
