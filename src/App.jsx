
import { useEffect, useState } from 'react';
import './App.css';
import UserForm from './components/user-form/UserForm'
import UserTable from './components/user-table/UserTable'; 
import UserEditForm from './components/user-edit-form/UserEditForm'

function App() {
  
  const [userList, setUserList] = useState([]);
  const [toggleComponents, setToggleComponents] = useState('user-form');
  const [editUserData,setEditUserData] = useState({
    name: '',
    age:'',
    index: ''
  })


  useEffect(()=>{
    console.log(userList)
  }, [userList])

  const handleToggleComponents = (componentName) => {
    setToggleComponents(componentName);
  }

  const addToUserList = ({user}) => {
    setUserList(prev => [...prev, user])
  }

  const editUserList = (user) => {
    setUserList( prev => {
      const {name,age,index} = user;
      const tempUserList = [...prev];
      tempUserList[index] = {name,age};
      return tempUserList;
    }) 
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



  return (
    <main>
      
      {
        toggleComponents === "user-form" ? 
          <UserForm handleToggleComponents={handleToggleComponents} 
            addToUserList={addToUserList} /> :
        toggleComponents === "user-table" ? 
          <UserTable handleToggleComponents={handleToggleComponents}
              userList={userList} setEditUserData={setEditUserData}
              deleteFromUserList={deleteFromUserList}/> : 
        toggleComponents === "user-edit-form" ? 
              <UserEditForm editUserList={editUserList} 
                setEditUserData={setEditUserData}
                editUserData={editUserData}
                handleToggleComponents={handleToggleComponents}/> : null
      }

    </main>
  )
}

export default App
