
import { useState } from 'react'
import './App.css'
import UserForm from './components/user-form/UserForm'
import UserTable from './components/user-table/UserTable'; 

function App() {
  
  const [userList, setUserList] = useState([]);
  const [toggleComponents, setToggleComponents] = useState('user-form')

  const handleToggleComponents = (componentName) => {
    setToggleComponents(componentName);
  }

  const addToUserList = ({user}) => {
    setUserList(prev => [...prev, user])
  }

  return (
    <main>
      
      {
        toggleComponents === "user-form" ? 
        <UserForm handleToggleComponents={handleToggleComponents} 
        addToUserList={addToUserList} /> :
         toggleComponents === "user-table" ? 
         <UserTable handleToggleComponents={handleToggleComponents}
            userList={userList} /> : 
            null
      }

    </main>
  )
}

export default App
