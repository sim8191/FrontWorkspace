// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './03_globalState/2.redex/store/store.ts'
// import Component from './01_react_basic/01.Component.tsx' // export default Component 라고 따로 만들었을때

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <BrowserRouter>
  {/* <StrictMode> // 이거 쓰면 골치 아픔(그이유가 뭘 2번씩 일는 다고 함) */}
    <>
    <App />
    {/* <Component /> */} {/* 이거 여기다가 하는게 아니라 App여기에다가 넘겨서 가지고 와야함 */}
    </>
  {/* </StrictMode>, */}
  </BrowserRouter>
  </Provider>
)
