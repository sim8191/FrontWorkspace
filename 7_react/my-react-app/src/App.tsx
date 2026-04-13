import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {Component} from './01_react_basic/01.Component' // export로 썼을때
import ParentComponent from './01_react_basic/02.PropsAndState' // export default로 썼을때 
import ArrayBinding from './01_react_basic/03.ArrayBinding' // export default로 썼을때 
import UserInfoContainer from './1prectice/1.propsprectice'
import BoardContainer from './1prectice/2.BoardContainer'
import ObjectDataBinding from './01_react_basic/04.ObjectBinding'
import ModuleCSS from './01_react_basic/05.ModuleCss'
import UseEffectHook from './02_react_advanced/01_UseEffectHook'
import OptimizationHook from './02_react_advanced/02_OptimizationHook'
import SingUpForm from './02_react_advanced/03_CustomHook'
import AutoSaveEditor from './2prectice/1.UseEffect'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Component /> */}
      {/* <ParentComponent /> */}
      {/* <ArrayBinding /> */}
      {/* <UserInfoContainer/> */}
      {/* <BoardContainer /> */}
      {/* <ObjectDataBinding /> */}
      {/* <ModuleCSS /> */}
      {/* <UseEffectHook /> */}
      {/* <OptimizationHook /> */}
      {/* <SingUpForm /> */}
      <AutoSaveEditor/>
    </>
  )
}

export default App
