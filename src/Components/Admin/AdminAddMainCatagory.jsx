import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addMainCatagory , getMainCatagory } from '../Store/ActionCreateors/MainCatagoryAction'
import LeftNav from './LeftNav'


export default function AdminAddMainCatagory() {
    var MainCatagoryfromRed=useSelector((state)=>state.MainCatagoryState)
    var dispatch=useDispatch()
    var navigate=useNavigate()
   const[name,setname]=useState()
   function getData(e){
        setname(e.target.value)
   }
   function postData(e){
    e.preventDefault()
    var item=MainCatagoryfromRed.find((item)=>item.name===name)
    if(item){
      alert("Already exists")
    }
    else{
    dispatch(addMainCatagory({name:name}))
    navigate('/adminMaincatagories')
  }
   }
   useEffect(()=>{
    dispatch(getMainCatagory())
   },[])
  return (
    <>
         <div className="hero-wrap hero-bread" style={{backgroundImage:' url("assets/images/bg_6.jpg")'}}>
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9 ftco-animated text-center">
          	<p className="breadcrumbs"><span className="mr-2"><Link to="/">Home</Link></span> <span>Admin</span></p>
            <h1 className="mb-0 bread">Admin Home </h1>
          </div>
        </div> 
      </div>
    </div>
      <div className="container-fluid">
        <div className="row">
            <div className="col-lg-2 col-12 ">
                <LeftNav/>
            </div>
       
            <div className="col-lg-10 my-4">
                <h4 className='bg-primary text-center text-light'>Add Main Catagories</h4>
                <form className='p-2' onSubmit={postData}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder='Enter Catagoroy Name' className='form-control' onChange={getData} />
                    <button type='submit' className='btn btn-primary w-100 my-3'> Add Main Catagory </button>
                </form>
            </div>
        </div>
      </div>
    </>
  )
}
