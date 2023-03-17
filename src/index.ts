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

export function uv<T>(initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const valueObject = {value};
  return {
    set v(newValue: T) {
      valueObject.value = newValue;
      setValue(newValue);
    },
    get v(): T {
      return valueObject.value;
    },
  };
}
