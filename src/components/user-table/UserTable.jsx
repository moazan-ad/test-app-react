/* eslint-disable react/prop-types */

import './userTable.css'

const UserTable = ({ 
    userList,
    handleToggleComponents,
    setUser,
    deleteFromUserList,
    setIsEditing
 }) => {

    const handleEditToggle = (user,index) => {
        setUser({...user,index: index});
        setIsEditing(true);
        handleToggleComponents('user-form'); 
    }

    const handleToggle = () => {
        setUser({name: '',age:'',id:''});
        setIsEditing(false);
        handleToggleComponents('user-form');
    }

    return(
        <section id="user-table-section">
            <div id='user-table-card'>
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

                            userList.map((user, index) =>
                                <tr key={`${index}`}>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        <div className='action-btns'>
                                            <button title='Edit' onClick={() => handleEditToggle(user, index)}>
                                                <i className="fa-solid fa-pen-to-square edit-btn"></i>
                                            </button>
                                            <button title='Delete'
                                                onClick={() => deleteFromUserList(index)}>
                                                <i className="fa-solid fa-trash delete-btn"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
            <button title='Add User Data' className='btn add-user-data-btn'
                onClick={handleToggle}>
                New User
            </button>
        </section>
    );
}


export default UserTable