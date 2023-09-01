import mitt from 'mitt';
import { useRef, useState, useEffect } from 'react';

const eb = mitt();

class MemoryKV {
  private map = new Map<string, any>();
  public init(key: string, initialValue: any) {
    if (this.map.has(key)) {
      return;
    } else {
      this.map.set(key, initialValue);
    }
  }
  public get(key: string) {
    return this.map.get(key);
  }
  public set(key: string, value: any) {
    return this.map.set(key, value);
  }
}

export function useValue<T>(initialState: T) {
  const [value, setValue] = useState<T>(initialState);
  const valueRef = useRef<T>(value);

  return {
    set value(newValue: T) {
      valueRef.current = newValue;
      setValue(newValue);
    },
    get value(): T {
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

const mkv = new MemoryKV();

export function useValueWithKey<T>(initialState: T, key: string) {
  const [_, setValue] = useState<T>(initialState);

  useEffect(() => {
    // init value(if not set by another component)
    mkv.set(key, initialState);
    const handleChange = () => {
      setValue(mkv.get(key));
    };
    eb.on(`__CHANGED__${key}`, handleChange);
    return () => {
      eb.off(`__CHANGED__${key}`, handleChange);
    };
  }, []);

  return {
    set value(newValue: T) {
      mkv.set(key, newValue);
      eb.emit(`__CHANGED__${key}`);
      setValue(newValue);
    },
    get value(): T {
      return mkv.get(key);
    },
  };
}

export function uVK<T>(initialState: T, key: string) {
  const [_, setValue] = useState<T>(initialState);

  useEffect(() => {
    // init value(if not set by another component)
    mkv.set(key, initialState);
    const handleChange = () => {
      setValue(mkv.get(key));
    };
    eb.on(`__CHANGED__${key}`, handleChange);
    return () => {
      eb.off(`__CHANGED__${key}`, handleChange);
    };
  }, []);

  return {
    set v(newValue: T) {
      mkv.set(key, newValue);
      eb.emit(`__CHANGED__${key}`);
      setValue(newValue);
    },
    get v(): T {
      return mkv.get(key);
    },
  };
}
