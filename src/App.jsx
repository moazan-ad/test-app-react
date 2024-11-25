
import { useEffect, useState } from 'react'
import './App.css'
import UserForm from './components/user-form/UserForm'


function App() {
  
  

  const [userList, setUserList] = useState([]);


  const addToUserList = (user) => {
    setUserList(prev => [...prev, user])
  }


  return (
    <main>
      <UserForm addToUserList={addToUserList}/>
    </main>
  )
}

export default App
