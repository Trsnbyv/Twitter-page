// import { Toaster } from 'react-hot-toast'
// import Signin from './components/Login'
import './App.css'
import {Context} from "./context/Context"
import { useContext } from 'react'
import Dashboard from './routes/Dashboard/Index'
import Login from './routes/Login/Index'

function App() {
  const {token} = useContext(Context)
  return token ? <Dashboard/> : <Login />

  // return (
  //   <>
  //    <Toaster 
  //     position="top-right"
  //     reverseOrder={false}
  //    />
  //    <Signin/>
  //   </>
  // )
}

export default App
