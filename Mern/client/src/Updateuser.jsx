import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function Updateuser() {
    const {id}=useParams()
    const [name,setName]=useState()
    const [age,setAge]=useState()
    const [email,setEmail]=useState()
    const navigation=useNavigate()

    useEffect(()=>{
        axios.get("http://localHost:3001/getUser/"+id)
            .then(result=>{
                console.log(result)
                setName(result.data.name)
                setEmail(result.data.email)
                setAge(result.data.age)
             })
            .catch(error=>console.log(error))
    
      },[])

      const Update =(e) =>{
        e.preventDefault();
        axios.put("http://localHost:3001/UpdateUser/"+id,{name,email,age})
        .then(result=>{
            console.log(result)
            navigation('/')
         })
        .catch(error=>console.log(error))
      }
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-item-center position-relative">
    <div className='w-50 bg-white rounded p-3 position-absolute top-50 start-50 translate-middle'>
        <form onSubmit={Update}>
            <h2>Update User</h2>
            <div className='mb-2'>
                    <label>Name</label>
                    <input type="text" placeholder='Enter Name' className='form-control' value={name} onChange={(e)=>setName(e.target.value)}></input>
                </div>
                <div className='mb-2'>
                    <label>Email</label>
                    <input type="email" placeholder='Enter Name' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
                <div className='mb-2'>
                    <label>Age</label>
                    <input type="text" placeholder='Enter Name' className='form-control' value={age} onChange={(e)=>setAge(e.target.value)}></input>
                </div>
            <button className="btn btn-primary">Save</button>
        </form>
    </div>
</div>
  )
}

export default Updateuser
