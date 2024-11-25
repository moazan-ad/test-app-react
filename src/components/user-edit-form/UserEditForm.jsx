/* eslint-disable react/prop-types */
import './userEditForm.css'
import Input from '../ui/Input'
import { useState } from 'react';

const UserEditForm = ({  
    handleToggleComponents,
    editUserList,
    editUserData,
    setEditUserData
 }) => {

    


    const [error, setError] = useState({
        set: false,
        message: ''
    });


    const handleUserInput = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setEditUserData(prev => ({ ...prev, [name]: value }))
    }


    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (editUserData.name.length > 0 && editUserData.age > 0) {
            editUserList(editUserData)
            handleToggleComponents('user-table')
            return;
        }
        setError({ set: true, message: "'Name' and 'Age' can not be empty." })
    }

    return (
        <section id='user-form-section' >
            <div id='user-form-card' className='text'>
                <div className='card-header'>
                    <h1 className='title'>Edit user details</h1>
                </div>
                <div className='card-body'>
                    <form id='user-form' onSubmit={handleOnSubmit}>
                        <Input title={"Name"} id={"name"}
                            value={editUserData.name} onChange={handleUserInput}
                        />
                        <Input title={"Age"} id={"age"} type='number'
                            value={editUserData.age} onChange={handleUserInput}
                        />
                        <div className='btn-group'>
                            {/* button to scroll to table section */}
                            <button className='btn secondary-btn'
                                onClick={() => handleToggleComponents('user-table')}>
                                User Table
                            </button>
                            <button type='submit' className='btn primary-btn'>
                                Update
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


export default UserEditForm;