import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { DeleteCartAction, getCartAction, updateCartAction } from './Store/ActionCreateors/CartAction'


export default function Cart() {
   var dispatch=useDispatch()
//    var navigate=useNavigate()
   var [quantity,setQty]=useState()
   var [totalprice,settotalprice]=useState()
    var [cart,setcart]=useState([])
    var [total, settotal] = useState(0)
    var [shipping, setshipping] = useState(0)
    var [final, setfinal] = useState(0)

  var cartData=useSelector((state)=>state.CartState)

  function getAPIData() {
	dispatch(getCartAction())
	var data = cartData.filter((item) =>item.userid === localStorage.getItem("userID"))
	if (data){
		setcart(data)
		var total = 0
		var shipping = 0
		var final = 0
		for(let item of data){
			total = total+item.total
		}
		if(total>0 && total<=1000){
		shipping = 150
		}
		else{
			setQty("your delviary is free")
		}
		final = total+shipping
		settotal(total)
		setshipping(shipping)
		setfinal(final)
		
		
	}
}

  function update(id,op){
	var item = cartData.find((item) => item.id === id)
	// console.log(item.id)
	if (op === "dec" && item.qty == 1){
		return item
	}
	else if (op === "dec") {
		item.qty=item.qty-1
		item.total=item.total-item.price
	}
	else {
		setQty(quantity+1)
		item.qty=item.qty+1
		item.total=item.total+item.price
		
	}
	dispatch(updateCartAction(item))
	getAPIData()
  }

   function deleteCart(id){
      dispatch(DeleteCartAction({id:id}))
	  getAPIData()
   }

  useEffect(()=>{
	// dispatch(getCartAction())
	getAPIData()
  },[cartData.length])
  return (	
    <>
   

    <section className="ftco-section ftco-cart">
			<div className="container">
				<div className="row">
    			<div className="col-md-12 ftco-animated">
    				<div className="cart-list">
	    				<table className="table">
						    <thead className="thead-primary">
						      <tr className="text-center">
						        <th>&nbsp;</th>
						        <th>&nbsp;</th>
						        <th>Product</th>
						        <th>Price</th>
						        <th>Quantity</th>
						        <th>Total</th>
						      </tr>
						    </thead>
						    <tbody>
						     
                             {
								cart.map((item,index)=>{
									return  <tr className="text-center" key={index}>
									<td className="product-remove"><button className='' style={{fontSize:"20px", background:"none", padding:"10px"}} onClick={()=>deleteCart(item.id)}><span className="ion-ios-close"></span></button></td>
						
									<td className="image-prod"><img src={`/assets/productimages/${item.pic}`} height="100px" width="150px" alt="" /></td>
									
									<td className="product-name">
										<h3>{item.name}</h3>
										<p>Color :- {item.color} / Size :-  {item.size}</p>
									</td>
									
									<td className="price">&#8377; { item.price}</td>
									
									<td className="quantity">
										<button onClick={()=>update(item.id,"dec")} style={{background:"none",border:"none",width:"40px"}}><i className="ion-ios-remove"></i></button>&nbsp;&nbsp;&nbsp; {item.qty} &nbsp;&nbsp;&nbsp;
									    <button onClick={()=>update(item.id,"inc")} style={{background:"none" , border:"none",width:"40px"  }} width="40px"><i className="ion-ios-add"></i></button>
								  </td>
									<td className="total">&#8377; { item.total}</td>
								  </tr>
								})	
							 }

						    </tbody>
						  </table>
					  </div>
    			</div>
    		</div>
    		<div className="row justify-content-start">
				<div className="col-md-6"></div>
    			<div className=" col-md-6 mt-3 cart-wrap ftco-animated">
    				<div className="cart-total mb-3">
    					<h3>Cart Totals</h3>
    					<p className="d-flex">
    						<span>Subtotal</span>
    						<span>{total}</span>
    					</p>
    					<p className="d-flex">
							 
    						<span>Delivery</span>
    						 {quantity=="your delviary is free"?<span>{quantity}</span>:<span>{shipping}</span>}
							
    					</p>
    					
    					<hr/>
    					<p className="d-flex total-price">
    						<span>Total</span>
    						<span>{final}</span>
    					</p>
    				</div>
    				<p className="text-center"><Link to="/checkout" className="btn btn-primary py-3 px-4">Proceed to Checkout</Link></p>
    			</div>
    		</div>
			</div>
		</section>
 
    </>
  )
}
