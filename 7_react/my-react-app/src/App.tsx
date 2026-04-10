import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {Component} from './01_react_basic/01.Component' // export로 썼을때
import ParentComponent from './01_react_basic/02.PropsAndState' // export default로 썼을때 
import ArrayBinding from './01_react_basic/03.ArrayBinding' // export default로 썼을때 
import UserInfoContainer from './prectice/1.propsprectice'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Component /> */}
      {/* <ParentComponent /> */}
      {/* <ArrayBinding /> */}
      <UserInfoContainer/>
    </>
  )
}

export default App
