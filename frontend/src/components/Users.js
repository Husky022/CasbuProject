import React from 'react'
import {Link} from 'react-router-dom'


const UserItem = ({user}) => {
    return (
           <tr>
               <td>
                   <Link to={`user/${user.id}`}>{user.username}</Link>
               </td>
               <td>
                   <Link to={`user/${user.id}`}>{user.firstname}</Link>
               </td>
               <td>
                   <Link to={`user/${user.id}`}>{user.lastname}</Link>
               </td>
               <td>
                   <Link to={`user/${user.id}`}>{user.birthday_year}</Link>
               </td>
           </tr>
   )
}

const UserList = ({users}) => {
   return (
       <div className="content-wrapper">
           <table>
               <th>
                   Username
               </th>
               <th>
                   First name
               </th>
               <th>
                   Last Name
               </th>
               <th>
                   Birthday year
               </th>
               {users.map((user) => <UserItem user={user} />)}
           </table>
       </div>
   )
}


export default UserList