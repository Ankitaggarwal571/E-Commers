import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { GetUserAction, updateUserAction } from './Store/ActionCreateors/UserAction'

export default function UpdateProfile() {
    var dispatch = useDispatch()
    var navigate=useNavigate()

    var UserData = useSelector((state) => state.UserState)
    var [data, setdata] = useState({
        name: "",
        pic: "",
        email: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        state: "",

    })

    function getData(e) {
        var value = e.target.value
        var name = e.target.name
        setdata((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }

    function getFile(e) {
        var name = e.target.name
        var value = e.target.files[0].name
        console.log(name +" pic Data")
        setdata((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }

    function postData(e) {
        e.preventDefault()
        var item={
            id:localStorage.getItem("userID"),
            name: data.name,
            username: data.username,
            email: data.email,
            phone: data.phone,
            password: data.password,
            address1: data.address1,
            address2: data.address2,
            city: data.city,
            state: data.state,
            pic: data.pic,
            role: data.role,
        }
        dispatch(updateUserAction(item))
        navigate('/profile')
       
    }

    useEffect(() => {
        dispatch(GetUserAction())
        var user = UserData.find((item)=>item.id===Number(localStorage.getItem("userID")))
        // console.log("update "+user) 
        if(user){
            setdata(user)
        }
    }, [])
    return (
        <>
            <div className="hero-wrap hero-bread" >
                <div className="conatiner-fluid  mx-3 w-100">
                    <div className="w-50 m-auto">
                        <h3 className='text-center bg-primary text-light'>Profile Update Section</h3>
                        <div>
                            <form onSubmit={postData}>
                                <div className="mb-3">
                                    <input type="text" name="name" id="name" placeholder='Enter Your Name :' className='form-control' onChange={getData} value={data.name} />
                                </div>
                                <div className="mb-3">
                                    <input type="file" name="pic" id="pic" className='form-control' onChange={getFile} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" name="email" id="email" placeholder='Enter Your E-mail :' className='form-control' onChange={getData} value={data.email}/>
                                </div>
                                <div className="mb-3">
                                    <input type="text" name="phone" id="phone" placeholder='Enter Your Phone :' className='form-control' onChange={getData} value={data.phone} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" name="address1" id="Address1" placeholder='Enter House no. / Floor or :' className='form-control' onChange={getData} value={data.address1} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" name="address2" id="Address2" placeholder='Enter Landwork / Locality' className='form-control' onChange={getData} value={data.address2} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" name="city" id="city" placeholder='Enter Your City' className='form-control' onChange={getData} value={data.city} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" name="state" id="state" placeholder='Enter Your State' className='form-control' onChange={getData} value={data.state} />
                                </div>
                                <div className="mb-3">
                                    <button type='submit' className='bg-primary text-light btn btn-lg w-100'>Submit</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
