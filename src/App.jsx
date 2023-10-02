import './App.css'
import ChangeUser from './components/ChangeUser'
import Edit from './components/Edit'
import Home from './components/Home'
import UserProvider from './context/UserContext'

function App () {
  return (
    <>
      <UserProvider>
        <Home />
        <Edit />
        <ChangeUser />
      </UserProvider>
    </>
  )
}

export default App
