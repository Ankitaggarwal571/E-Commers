import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCartAction } from './Store/ActionCreateors/CartAction'
import { GetUserAction } from './Store/ActionCreateors/UserAction'


export default function Checkout() {
	var [total,settotal]=useState()
	var [shipping,setshipping]=useState()
	var [finalTotal,setfinaltotal]=useState()
	var [user,setuser]=useState()
	var dispatch=useDispatch()
	var cart=useSelector((state)=>state.CartState)
	var users=useSelector((state)=>state.UserState)
	var data=users.find((item)=>item.id===Number(localStorage.getItem("userID")))
      setuser(data)		

	function getCartData(){
		var data=cart.filter((item)=>item.userid===localStorage.getItem("userID"))
		var total=0
		var shipping=0
		// var finalTotal=0
		for(let item of data){
		   total=total+item.total
		}
		if(total>0 && total<=1000){
			shipping=150
			setshipping(shipping)
		}
		else{
			setshipping("free")
		}
		settotal(total)
		setfinaltotal(total+shipping)
		
	
	}

	useEffect(()=>{	
       dispatch(getCartAction())
	   dispatch(GetUserAction())
	   getCartData()
	},[cart.length])
  return (
    <>
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 ftco-animated">
						<form action="#" className="billing-form">
							<h3 className="mb-4 billing-heading">Billing Details</h3>
	          	<div className="row align-items-end">
	          		<div className="col-md-6">
	                <div className="form-group">
	                	<label htmlFor="firstname">Firt Name</label>
						<input type="text" className="form-control" placeholder=""/>
	                </div>
	              </div>
	              <div className="col-md-6">
	                <div className="form-group">
	                	<label htmlFor="lastname">Last Name</label>
	                  <input type="text" className="form-control" placeholder=""/>
	                </div>
                </div>
                <div className="w-100"></div>
		            <div className="col-md-12">
		            	<div className="form-group">
		            		<label htmlFor="country">State / Country</label>
		            		<div className="select-wrap">
		                  <div className="icon"><span className="ion-ios-arrow-down"></span></div>
		                  <select name="" id="" className="form-control">
		                  	<option value="">France</option>
		                    <option value="">Italy</option>
		                    <option value="">Philippines</option>
		                    <option value="">South Korea</option>
		                    <option value="">Hongkong</option>
		                    <option value="">Japan</option>
		                  </select>
		                </div>
		            	</div>
		            </div>
		            <div className="w-100"></div>
		            <div className="col-md-6">
		            	<div className="form-group">
	                	<label htmlFor="streetaddress">Street Address</label>
	                  <input type="text" className="form-control" placeholder="House number and street name"/>
	                </div>
		            </div>
		            <div className="col-md-6">
		            	<div className="form-group">
	                  <input type="text" className="form-control" placeholder="Appartment, suite, unit etc: (optional)"/>
	                </div>
		            </div>
		            <div className="w-100"></div>
		            <div className="col-md-6">
		            	<div className="form-group">
	                	<label htmlFor="towncity">Town / City</label>
	                  <input type="text" className="form-control" placeholder=""/>
	                </div>
		            </div>
		            <div className="col-md-6">
		            	<div className="form-group">
		            		<label htmlFor="postcodezip">Postcode / ZIP *</label>
	                  <input type="text" className="form-control" placeholder=""/>
	                </div>
		            </div>
		            <div className="w-100"></div>
		            <div className="col-md-6">
	                <div className="form-group">
	                	<label htmlFor="phone">Phone</label>
	                  <input type="text" className="form-control" placeholder=""/>
	                </div>
	              </div>
	              <div className="col-md-6">
	                <div className="form-group">
	                	<label htmlFor="emailaddress">Email Address</label>
	                  <input type="text" className="form-control" placeholder=""/>
	                </div>
                </div>
                <div className="w-100"></div>
                <div className="col-md-12">
                	<div className="form-group mt-4">
										<div className="radio">
										  <label className="mr-3"><input type="radio" name="optradio"/> Create an Account? </label>
										  <label><input type="radio" name="optradio"/> Ship to different address</label>
										</div>
									</div>
                </div>
	            </div>
	          </form>



	          <div className="row mt-5 pt-3 d-flex">
	          	<div className="col-md-6 d-flex">
	          		<div className="cart-detail cart-total bg-light p-3 p-md-4">
	          			<h3 className="billing-heading mb-4">Cart Total</h3>
	          			<p className="d-flex">
		    						<span>Subtotal</span>
		    						<span>{total}</span>
		    					</p>
		    					<p className="d-flex">
		    						<span>Delivery</span>
		    						<span>{shipping=="free"?<span>{"Your Delivery is free"}</span>:<span>{shipping}</span>}</span>
		    					</p>
		    					<hr/>
		    					<p className="d-flex total-price">
		    						<span>Total</span>
		    						<span>{finalTotal}</span>
		    					</p>
								</div>
	          	</div>
	          	<div className="col-md-6">
	          		<div className="cart-detail bg-light p-3 p-md-4">
	          			<h3 className="billing-heading mb-4">Payment Method</h3>
									<div className="form-group">
										<div className="col-md-12">
											<div className="radio">
											   <label><input type="radio" name="optradio" className="mr-2"/> Direct Bank Tranfer</label>
											</div>
										</div>
									</div>
									<div className="form-group">
										<div className="col-md-12">
											<div className="radio">
											   <label><input type="radio" name="optradio" className="mr-2"/> Check Payment</label>
											</div>
										</div>
									</div>
									<div className="form-group">
										<div className="col-md-12">
											<div className="radio">
											   <label><input type="radio" name="optradio" className="mr-2"/> Paypal</label>
											</div>
										</div>
									</div>
									<div className="form-group">
										<div className="col-md-12">
											<div className="checkbox">
											   <label><input type="checkbox" value="" className="mr-2"/> I have read and accept the terms and conditions</label>
											</div>
										</div>
									</div>
									<p><Link to="#"className="btn btn-primary py-3 px-4">Place an order</Link></p>
								</div>
	          	</div>
	          </div>
          </div> 
        </div>
      </div>
    </section> 
    </>
  )
}
