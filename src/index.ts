import {useRef, useState} from "react";

export function useValue<T>(initialState: T) {
  const [value, setValue] = useState<T>(initialState);
  const valueRef = useRef<T>(value);

  return {
    set v(newValue: T) {
      valueRef.current = newValue;
      setValue(newValue);
    },
    get v(): T {
      return valueRef.current;
    },
  };
}

export function uv<T>(initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const valueRef = useRef<T>(value);

  return {
    set v(newValue: T) {
      valueRef.current = newValue;
      setValue(newValue);
    },
    get v(): T {
      return valueRef.current;
    },
  };
}
