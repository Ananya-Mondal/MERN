import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

 
function CreatUser() {
    const [name,setName]=useState()
    const [age,setAge]=useState()
    const [email,setEmail]=useState()
    const navigation=useNavigate()

    const SendData= (e)=> {
        e.preventDefault();
        axios.post("http://localHost:3001/CreateUser",{name,email,age})
        .then(result=>{
            console.log(result)
            navigation('/')
         })
        .catch(error=>console.log(error))

    }
    
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-item-center position-relative">
        <div className='w-50 bg-white rounded p-3 position-absolute top-50 start-50 translate-middle'>
            <form onSubmit={SendData}>
                <h2>Add User</h2>
                <div className='mb-2'>
                    <label>Name</label>
                    <input type="text" placeholder='Enter Name' className='form-control' onChange={(e)=>setName(e.target.value)}></input>
                </div>
                <div className='mb-2'>
                    <label>Email</label>
                    <input type="email" placeholder='Enter Name' className='form-control' onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
                <div className='mb-2'>
                    <label>Age</label>
                    <input type="text" placeholder='Enter Name' className='form-control' onChange={(e)=>setAge(e.target.value)}></input>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreatUser
