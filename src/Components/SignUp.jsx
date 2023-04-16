import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AddUserAction, GetUserAction } from './Store/ActionCreateors/UserAction'


export default function SignUp() {
    var dispatch=useDispatch()
    var navigate=useNavigate()
    var userDetail=useSelector((state)=>state.UserState)
        var [data,setdata]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        password:"",
        cnfpassword:""
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
          if(data.cnfpassword===data.password){
             if(userDetail.username!==data.username && userDetail.email!==data.email){
              var item={
                name:data.name,
                username:data.username,
                phone:data.phone,
                email:data.email,
                password:data.password,
                address1:"",
                address2:"",
                city:"",
                state:"",
                role:"user",
                pic:"",
              }
              dispatch(AddUserAction(item))
              navigate('/login')
             }
             else{
              alert("Username or Email Already Exits")
             }
          }
          else{
            alert("Password and Confirm Password does not match")
          }
      }
      useEffect(()=>{
        dispatch(GetUserAction())
      },[])
       
      return (
        <>
        <div className="hero-wrap hero-bread" style={{backgroundImage:' url("assets/images/gallery-5.jpg")'}}>
          <div className="container">
            <div className="row no-gutters slider-text align-items-center justify-content-center">
              <div className="col-md-9 ftco-animated text-center">
                  {/* <p className="breadcrumbs"><span className="mr-2"><Link to="/">Home</Link></span> <span>SignUp</span></p>
                <h1 className="mb-0 bread">Sign Up </h1> */}
              </div>
            </div> 
          </div>
       
         <div className="conatiner-fluid my-5 mx-3 w-100">
          <div className="w-50 m-auto">
          <h3 className='text-center bg-primary text-light'>SignUp Section</h3>
              <div>
                <form onSubmit={postData}>
                <div className="mb-3">
                    <input type="text" name="name" id="name" placeholder='Enter Your Name :' className='form-control' onChange={getData}/>
                  </div>
                  <div className="mb-3">
                    <input type="text" name="username" id="username" placeholder='Enter Your User Name :' className='form-control' onChange={getData}/>
                  </div>
                  <div className="mb-3">
                    <input type="text" name="email" id="email" placeholder='Enter Your E-mail :' className='form-control' onChange={getData}/>
                  </div>
                  <div className="mb-3">
                    <input type="text" name="phone" id="phone" placeholder='Enter Your Phone :' className='form-control' onChange={getData}/>
                  </div>
                  <div className="mb-3">
                    <input type="text" name="password" id="password" placeholder='Enter Your Password :' className='form-control' onChange={getData}/>
                  </div>
                  <div className="mb-3">
                    <input type="text" name="cnfpassword" id="cnfpassword" placeholder='Enter Confirm Password :' className='form-control' onChange={getData}/>
                  </div>
                  
                  <div className="mb-3">
                    <button type='submit' className='bg-primary text-light btn btn-lg w-100'>Submit</button>
                  </div>
                </form>
                <div className='d-flex justify-content-center'> 
                   <Link className="text-light" to="/login">Already User ? Login</Link>
                </div>
              </div>  
              </div>
          </div>    
         </div> 
        </>
      )
}


