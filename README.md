# react-usevalue-hook
一个同步的、可作为全局状态管理的，useState 的替代

## 我是一个懒人，所以我想要用最少的代码使用一个全局状态，同时它的实现也要用很少的代码:P

```shell
yarn add react-usevalue-hook
# or npm install react-usevalue-hook --save
```

## 基本用法
```tsx
function Comp1() {
  const value1 = useValue(1)

  return <div onClick={() => { value1.value = value1.value + 1 }}>
    {value1.value} Click to +1
  </div>
}
```

### 简写版
```tsx
function Comp1() {
  const value1 = uv(1)

  return <div onClick={() => { value1.v = value1.v + 1 }}>
    {value1.v} Click to +1
  </div>
}
```

### 如果想要在多个组件间同步状态，只需要给你想要同步状态的 state 加一个 key，并使用 `useValueWithKey` hook

```tsx
import { useValueWithKey } from 'react-usevalue-hook';

function Comp1() {
  const value1 = useValueWithKey(1, 'global1')

  return <div onClick={() => { value1.value = value1.value + 1 }}>
    {value1.value} Click to +1
  </div>
}

function Comp2() {
  const value2 = useValueWithKey(2, 'global1')

  return <div onClick={() => { value2.value = value2.value + 1 }}>
    {value2.value} Click to +1
  </div>
}

function App() {
  return (
    <div style={{padding:20}}>
      <div><Comp1 /></div>
      <div><Comp2 /></div>
    </div>
  )
}

export default App
```

### 我更喜欢简写版：
```tsx
import { uVK } from 'react-usevalue-hook';
import './App.css'
function Comp1() {
  const value1 = uVK(1, 'global1')

  return <div onClick={() => { value1.v = value1.v + 1 }}>
    {value1.v} Click to +1
  </div>
}

function Comp2() {
  const value2 = uVK(2, 'global1')

  return <div onClick={() => { value2.v = value2.v + 1 }}>
    {value2.v} Click to +1
  </div>
}

function App() {
  return (
    <div style={{padding:20}}>
      <div><Comp1 /></div>
      <div><Comp2 /></div>
    </div>
  )
}

export default App

```
