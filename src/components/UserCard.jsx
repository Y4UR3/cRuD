import React from 'react'
import './styles/UserCard.css'

const UserCard = ({user,  deleteUser, setUserUpdate,  setIsFormClose, setDeleteClose}) => {

    const handleDelete = () =>{
       deleteUser(user.id)
       setDeleteClose(false)
    }
    const handleEdit = () => {
        setUserUpdate(user)
        setIsFormClose(false)
    }

  return (
    <article className='users'>
     <div>
     <h2 className='users_title'>{user.first_name} {user.last_name}</h2>
      <hr className='hr'/>
      <ul className='users_data'>
        <li>
          <span className='users_label'>Email: </span>
        </li>
        <li>
          <span className='users_value'>{user.email}</span>
        </li>
        <li>
          <span className='users_label'>Birthday: </span>
        </li>
        <li>
          <span className='users_value'><i className='bx bx-gift'></i> {user.birthday}</span>
        </li>
      </ul>
     </div>
      <hr className='hr'/>
      <footer className='users_btn'>
        <button className='users_btn_edit' onClick={handleEdit}><i className='bx bx-edit-alt' ></i></button>
        <button className='users_btn_delete' onClick={handleDelete}><i className='bx bx-trash'></i></button>
      </footer>
    </article>
  )
}

export default UserCard