/* eslint-disable react/prop-types */
import './userForm.css'
import Input from '../ui/Input'
import { useState } from 'react';
import scrollToSectionId from '../../utils/scrollToSection';

const UserForm = ({ addToUserList }) => {
    
    // state to store user value in input       
    const [user, setUser] = useState({
        name: '',
        age: ''
    });

    // state to track error and show it
    const [error,setError] = useState({
        set: false,
        message: ''
    });

    // function to set user in state
    const handleUserInput = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setUser( prev => ({...prev,[name]: value}))
    }

    // function to handle form submission and store in user list
    // through handle function get through prop
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(user.name.length > 0 && user.age > 0){
            addToUserList({user});
            return;
        }
        setError({set:true,message: "'Name' and 'Age' can not be empty."})
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
                        />
                        <Input title={"Age"} id={"age"} type='number'
                            value={user.age} onChange={handleUserInput}
                        />
                        <div className='btn-group'>
                            {/* button to scroll to table section */}
                            <button className='btn secondary-btn'
                                onClick={() => scrollToSectionId('user-table')}>
                                User List
                            </button>
                            <button type='submit' className='btn primary-btn'>
                                Add
                            </button>
                        </div>
                        {
                            // show error, in case, it is set
                            error.set && 
                                <div className='error'>
                                    {error.message}
                                </div>
                        }
                    </form>
                </div>
                <div className="card-footer"></div>
            </div>
        </section>
    );

}


export default UserForm;