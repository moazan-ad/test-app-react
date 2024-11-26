/* eslint-disable react/prop-types */
import './userForm.css'
import Input from '../ui/Input'
import { useState } from 'react';

const UserForm = ({
    user,
    setUser,
    setUserList,
    handleToggleComponents,
    addToUserList,
    isEditing,
    setIsEditing

    }) => {
    

   
        
    const editUserList = (user) => {
        setUserList(prev => {
            const { name, age, index } = user;
            const tempUserList = [...prev];
            tempUserList[index] = { name, age };
            return tempUserList;
        })
    }

    const [error,setError] = useState({
        set: false,
        errorField: '',
        message: ''
    });

    const handleUserInput = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        if(value){
            setError({
                set: false,
                errorField: '',
                message: ""
            });
        }
        setUser( prev => ({...prev,[name]: value}))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (user.name.length <= 0)
            return setError({ 
                            set: true,
                            errorField: 'name', 
                            message: "Name should be valid." 
                        });
        else if (user.age <= 0)
            return setError({ 
                            set: true,
                            errorField: 'age',
                            message: "'Age' should be a valid value." });

        if (isEditing) editUserList(user);
        else addToUserList({user});
        setUser({ name: '', age: '', id: '' });
        handleToggleComponents('user-table');
    }

    const handleToggle = () => {
        setUser({ name: '', age: '', id: '' });
        setIsEditing(false);
        handleToggleComponents('user-table');
    }

    return(
        <section id='user-form-section' >
            <div id='user-form-card' className='text'>
                <div className='card-header'>
                    <h1 className='title'>Enter user details</h1>
                </div>
                <div className='card-body'>
                    <form id='user-form' onSubmit={handleOnSubmit}>
                        <Input title={"Name"} id={"name"} 
                            value={user.name} onChange={handleUserInput}
                            error={error}
                        />
                        <Input title={"Age"} id={"age"} type='number'
                            value={user.age} onChange={handleUserInput}
                            error={error}
                        />
                        <div className='btn-group'>
                            <button className='btn secondary-btn'
                                onClick={handleToggle}>
                                User Table
                            </button>
                            <button type='submit' className='btn primary-btn edit-update-btn'>
                                {
                                    isEditing ? "Update" : "Add"
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );

}
export default UserForm;