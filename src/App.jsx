
import { useState } from 'react';
import './App.css';
import UserForm from './components/user-form/UserForm';
import UserTable from './components/user-table/UserTable'; 

function App() {
  
  const [userList, setUserList] = useState([]);
  const [toggleComponents, setToggleComponents] = useState('user-form');
  const [user, setUser] = useState({
    id: '',
    name: '',
    age: ''
  });

  const [isEditing, setIsEditing] = useState(false);



  const addToUserList = ({user}) => {
    const {name,age} = user;
    setUserList(prev => [...prev, {name,age}]);
  }
  
  const deleteFromUserList = (index) => {
    setUserList(prev => {
      const temp = [];
      prev.forEach((elem, idx) => {
        if(index !== idx ){
          temp.push(elem);    
        }
      })
      return temp;
    })






  }

  const handleToggleComponents = (componentName) => {
    setToggleComponents(componentName);
  }

  return (
    <main>
      
      {
        toggleComponents === "user-form" ? 
          <UserForm
            user={user} setUser={setUser} setUserList={setUserList}
            handleToggleComponents={handleToggleComponents} 
            addToUserList={addToUserList}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          /> :
        toggleComponents === "user-table" ? 
          <UserTable 
              handleToggleComponents={handleToggleComponents}
              userList={userList}
              setUser={setUser}
              deleteFromUserList={deleteFromUserList}
              setIsEditing={setIsEditing}
          /> : null
      }

    </main>
  )
}

export default App
