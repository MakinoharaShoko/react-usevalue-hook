import {useState} from "react";

export function useValue<T>(initialState: T) {
  const [value, setValue] = useState<T>(initialState);
  return {
    value,
    set: function (newValue: T) {
      this.value = newValue;
      setValue(newValue);
    }
  };
}

export function uv<T>(initialState: T) {
  const [v, setV] = useState<T>(initialState);
  return {
    v,
    s: function (v: T) {
      this.v = v;
      setV(v);
    }
  };
}
