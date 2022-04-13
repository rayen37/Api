import React from 'react'
import UserCard from './UserCard'

function UserList({users}) {
  return (
    <div style={{display:"flex",justifyContent:"center",padding:'100px',flexWrap:"wrap",paddingLeft:'5%'}}>
        {users.map(user=> <div key={user.id}> <UserCard user={user}/></div>)}
         
    </div>
  )
}

export default UserList