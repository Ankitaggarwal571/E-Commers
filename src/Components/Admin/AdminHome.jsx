import React from 'react'
import { Link } from 'react-router-dom'
import LeftNav from './LeftNav'


export default function AdminHome() {
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
     <div className="container-fluid mt-4 mb-4">
      <div className="row">
        <div className="col-lg-2 col-12">
           <LeftNav/>
        </div>
        <div className="col-lg-10 col-12">
             <div className="row">
                <div className="col-md-5">
                    <img src="assets/images/bg_1.jpg" height="470px" width="100%" alt="" />
                </div>
                <div className="col-md-7">
                    <h4 className='text-light bg-primary text-center'>Admin Home</h4>
                    <div className="d-flex">
                        <div className='p-3 border w-50 my-2'>Name</div>
                        <div className='p-3 border w-50 my-2'>Ankit Aggarwal</div>
                    </div>
                    <div className="d-flex">
                        <div className='p-3 border w-50 my-2'>User</div>
                        <div className='p-3 border w-50 my-2'>Admin</div>
                    </div>
                    <div className="d-flex">
                        <div className='p-3 border w-50 my-2'>Phone </div>
                        <div className='p-3 border w-50 my-2'>9079650645</div>
                    </div>
                    <div className="d-flex">
                        <div className='p-3 border w-50 my-2'>E-mail</div>
                        <div className='p-3 border w-50 my-2'>ankitaggarwal571@gmail.com</div>
                    </div>
                    <div className="d-flex">
                        <div className='p-3 border w-50 my-2'>Role</div>
                        <div className='p-3 border w-50 my-2'>Admin</div>
                    </div>
                    <Link to="updateProfile"><button className='w-100 btn btn-primary'>Update Profile</button></Link>
                    
                </div>
             </div>
        </div>
      </div>   
     </div> 
    </>
  )
}
