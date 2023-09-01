'use strict';

var react = require('react');

function mitt(n){return {all:n=n||new Map,on:function(t,e){var i=n.get(t);i?i.push(e):n.set(t,[e]);},off:function(t,e){var i=n.get(t);i&&(e?i.splice(i.indexOf(e)>>>0,1):n.set(t,[]));},emit:function(t,e){var i=n.get(t);i&&i.slice().map(function(n){n(e);}),(i=n.get("*"))&&i.slice().map(function(n){n(t,e);});}}}

const eb = mitt();
class MemoryKV {
    map = new Map();
    init(key, initialValue) {
        if (this.map.has(key)) {
            return;
        }
        else {
            this.map.set(key, initialValue);
        }
    }
    get(key) {
        return this.map.get(key);
    }
    set(key, value) {
        return this.map.set(key, value);
    }
}
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
const mkv = new MemoryKV();
function useValueWithKey(initialState, key) {
    const [_, setValue] = react.useState(initialState);
    react.useEffect(() => {
        // init value(if not set by another component)
        mkv.init(key, initialState);
        const handleChange = () => {
            setValue(mkv.get(key));
        };
        eb.on(`__CHANGED__${key}`, handleChange);
        handleChange();
        return () => {
            eb.off(`__CHANGED__${key}`, handleChange);
        };
    }, []);
    return {
        set value(newValue) {
            mkv.set(key, newValue);
            eb.emit(`__CHANGED__${key}`);
            setValue(newValue);
        },
        get value() {
            return mkv.get(key) ?? initialState;
        },
    };
}
function uVK(initialState, key) {
    const [_, setValue] = react.useState(initialState);
    react.useEffect(() => {
        // init value(if not set by another component)
        mkv.init(key, initialState);
        const handleChange = () => {
            setValue(mkv.get(key));
        };
        eb.on(`__CHANGED__${key}`, handleChange);
        handleChange();
        return () => {
            eb.off(`__CHANGED__${key}`, handleChange);
        };
    }, []);
    return {
        set v(newValue) {
            mkv.set(key, newValue);
            eb.emit(`__CHANGED__${key}`);
            setValue(newValue);
        },
        get v() {
            return mkv.get(key) ?? initialState;
        },
    };
}

exports.uVK = uVK;
exports.useValue = useValue;
exports.useValueWithKey = useValueWithKey;
exports.uv = uv;
//# sourceMappingURL=index.js.map
