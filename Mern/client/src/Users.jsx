import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  

  useEffect(()=>{
    axios.get("http://localHost:3001/")
        .then(result=>{
            console.log(result)
            setUsers(result.data)
         })
        .catch(error=>console.log(error))

  },[])

  const UserDelete=(id)=>{

    axios.delete("http://localHost:3001/UserDelete/"+id)
    .then(result=>{
        console.log(result)
       window.location.reload();
     })
    .catch(error=>console.log(error))

  }
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-item-center position-relative">
      <div className='w-50 bg-white rounded p-3 position-absolute top-50 start-50 translate-middle'>
        <Link to="/Create" className="btn btn-success">Add +</Link>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
            users.map((user)=>{
                    return(
                    <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td><Link to={`/Update/${user._id}`} className="btn btn-success">Edit</Link> | <button className="btn btn-danger" onClick={(e)=>UserDelete(user._id)}>Delete</button></td>
                    </tr>
                    )
            })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
