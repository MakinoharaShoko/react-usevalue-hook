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
function uv(initialState) {
    const [v, setV] = react.useState(initialState);
    return {
        v,
        s: function (v) {
            this.v = v;
            setV(v);
        }
    };
}

exports.useValue = useValue;
exports.uv = uv;
//# sourceMappingURL=index.js.map
