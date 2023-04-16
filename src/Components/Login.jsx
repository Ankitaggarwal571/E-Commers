import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { GetUserAction } from './Store/ActionCreateors/UserAction'


export default function Login() {
  var dispatch=useDispatch()
  var navigate=useNavigate()
  var userData=useSelector((state)=>state.UserState)
  var [data,setdata]=useState({
    username:"",
    password:""
  })
  function getData(e){
     var value =e.target.value
     var name=e.target.name     

    setdata((old=>{
       return{
        ...old ,
        [name]:value
       }
    }))
  }
  function postData(e){
       e.preventDefault()
       var user=userData.find((item)=>item.username===data.username && item.password===data.password)
      if(user){
         localStorage.setItem("login",true)
         localStorage.setItem("name",user.name)
         localStorage.setItem("username",user.username)
         localStorage.setItem("role",user.role)
         localStorage.setItem("userID",user.id)
         navigate('/profile')
      }else{
        alert("invalid Username or Password !!!!!!")
      }
  }
   useEffect(()=>{
    dispatch(GetUserAction())
   },[])
  return (
    <>
    <div className="hero-wrap hero-bread" style={{backgroundImage:' url("assets/images/bg_6.jpg")'}}>
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9 ftco-animated text-center">
          	<p className="breadcrumbs"><span className="mr-2"><Link to="/">Home</Link></span> <span>Login</span></p>
            <h1 className="mb-0 bread">Login </h1>
          </div>
        </div> 
      </div>
    </div>
     <div className="conatiner-fluid my-5 mx-3 w-100">
      <div className="w-50 m-auto">
      <h3 className='text-center bg-primary text-light'>Login Section</h3>
          <div>
            <form onSubmit={postData}>
              <div className="mb-3">
                <label htmlFor="username">UserName</label>
                <input type="text" name="username" id="username" placeholder='Enter Your User Name :' className='form-control' onChange={getData}/>
              </div>
              <div className="mb-3">
                <label htmlFor="pass">Password</label>
                <input type="text" name="password" id="password" placeholder='Enter Your Password :' className='form-control' onChange={getData}/>
              </div>
              
              <div className="mb-3">
                <button type='submit' className='bg-primary text-light btn btn-lg w-100'>Login</button>
              </div>
            </form>
            <div className='d-flex justify-content-between'> 
              <Link className="text-dark" to="#">Forgot Password</Link>
              <Link className="text-dark" to="/signUp">New User ? Create New Account</Link>
            </div>
          </div>  
      </div>    
     </div> 
    </>
  )
}
