import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'

function App() {
  
  const [userUpdate, setUserUpdate] = useState()
  const [isFormClose, setIsFormClose] = useState(true)
  const [deleteClose, setDeleteClose] = useState(true)
  
  const baseUrl = 'https://users-crud.academlo.tech'
  const[users, getUsers, createUser, deleteUser, updateUser] = useFetch(baseUrl)


  useEffect(() =>{
    getUsers()
  }, [])
  
  const handleOpenForm = () =>{
    setIsFormClose(false)
  }
  const Delete = () =>{
    deleteUser()
    setDeleteClose(true)
  }


  return (
    <div>
      <div className='nav'>
        <h1 className='nav_title'>Users</h1>
        <button className='nav_btn' onClick={handleOpenForm}> + create new user</button>
      </div>
      <div className={`delete_open ${deleteClose && 'delete_close'}`}>
        <div className='close'>
          <h1 className='close_title'>Delete User</h1>
          <p className='close_p'>{`The user has been deleted`}</p>
          <button className='close_btn' onClick={Delete}>Accept</button>
        </div>
      </div>
      <div className={`form_container ${isFormClose && 'form_close'} `}>
      <FormUser
      createUser={createUser}
      userUpdate={userUpdate}
      updateUser={updateUser}
      setUserUpdate={setUserUpdate}
      setIsFormClose={setIsFormClose}
      />
      </div>
      <div className='users_container'>
        {
          users?.map(user =>(
            <UserCard 
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setUserUpdate={setUserUpdate}
              setIsFormClose={setIsFormClose}
              setDeleteClose={setDeleteClose}
            />   
          ))
        }
      </div>
    </div>
  )
}

export default App
