/* eslint-disable react/prop-types */

import './userTable.css'

const UserTable = ({ userList, handleToggleComponents }) => {
    

    return(
        <section id="user-table-section">
            <div className='table-header'>
                <button className='primary-btn add-user-data-btn' onClick={() => handleToggleComponents('user-form')}>
                    Add Data
                </button>
            </div>
            <table id="user-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                         
                        userList.map((user,index) => 
                            <tr key={`${index}`}>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>
                                    <div className='action-btns'>
                                        <button>
                                            <i className="fa-solid fa-pen-to-square delete-btn"></i>
                                        </button>
                                        <button>
                                            <i className="fa-solid fa-trash edit-btn"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ) 
                    }
                </tbody>
            </table>
        </section>
    );
}


export default UserTable