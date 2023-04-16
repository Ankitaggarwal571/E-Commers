import React, { useEffect, useState } from 'react'
import { GetUserAction } from './Store/ActionCreateors/UserAction'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Profile() {
   var dispatch=useDispatch()
   const [user,setuser]=useState({})
   var users=useSelector((state)=>state.UserState)

     
    useEffect(()=>{
        dispatch(GetUserAction())
        var data=users.find((item)=>item.id===Number(localStorage.getItem("userID")))
        if(data){
            setuser(data)
        }
    },[users.length])
  return (
    <>
    <div className="container">
      <div className="row my-5">
        <div className="col-md-6 mt-4">
           {
            user.pic?
            <img src={`/assets/images/${user.pic}`} width="100%" height="515px" alt="" />:
            <img src='assets/images/no-image.png' height="460px" width="90%" />
           }
        </div>
        <div className="col-md-6">
            <div className="d-flex mt-4 mb-2">
            <div className="first w-50 p-2 border">Name</div>
            <div className="second w-50 p-2 border">{user.name}</div>
            </div>
            <div className="d-flex my-2 ">
            <div className="first w-50 p-2 border">User Name</div>
            <div className="second w-50 p-2 border">{user.username}</div>
            </div>
            <div className="d-flex my-2 ">
            <div className="first w-50 p-2 border">Phone</div>
            <div className="second w-50 p-2 border">{user.phone}</div>
            </div>
            <div className="d-flex my-2 ">
            <div className="first w-50 p-2 border">E-mail</div>
            <div className="second w-50 p-2 border">{user.email}</div>
            </div>
            <div className="d-flex my-2 ">
            <div className="first w-50 p-2 border">Address 1</div>
            <div className="second w-50 p-2 border">{user.address1}</div>
            </div>
            <div className="d-flex my-2 ">
            <div className="first w-50 p-2 border">Address 2</div>
            <div className="second w-50 p-2 border">{user.address2}</div>
            </div>
            <div className="d-flex my-2 ">
            <div className="first w-50 p-2 border">City</div>
            <div className="second w-50 p-2 border">{user.city}</div>
            </div>
            <div className="d-flex my-2 ">
            <div className="first w-50 p-2 border">State</div>
            <div className="second w-50 p-2 border">{user.state}</div>
            </div>
            <div className="d-flex my-2 ">
            <div className="first w-50 p-2 border">Role</div>
            <div className="second w-50 p-2 border">{user.role}</div>
            </div>
            <div className="">
             <Link to="/UpdateProfile" className="btn btn-primary w-100 mt-1">Update Profile</Link>
            </div>
        </div>
      </div>
      </div>
    </>
  )
}
