import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductAction } from './Store/ActionCreateors/ProductAction'
import { AddCartAction, getCartAction } from './Store/ActionCreateors/CartAction'
import { GetWishlistAction } from './Store/ActionCreateors/WishlistAction'


export default function SingleProduct() {
    var [p, setP] = useState({})
    var [qty,setqty]=useState(1)
    var product = useSelector((state) => state.ProductState)
    var cart=useSelector((state)=>state.CartState)
    const dispatch = useDispatch()
    const navigate=useNavigate()
    var { id } = useParams()
        // console.log("Product " + product)
    function getQty(e){
        setqty(e.target.value)
    }
       
    function addToCart(){
         var pr=cart.find((item)=>item.productid===Number(id))
         if(pr){
            navigate("/cart")
         }
         else{
            var item={
                productid:p.id,
                userid:localStorage.getItem("userID"),
                name:p.name,
                color:p.color,
                size:p.size,
                price:p.finalprice,
                qty:qty,
                total:p.finalprice*qty,
                pic:p.pic1,
            }
            dispatch(AddCartAction(item))
            navigate("/cart")
         }
    }

    useEffect(() => {
        dispatch(getCartAction())
        dispatch(GetWishlistAction())
        dispatch(getProductAction())
        var data = product.find((item) => item.id === Number(id))
        if (data)
            setP(data)
    }, [product.length])

    return (
        <>

            <section className="ftco-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-5 ftco-animated">
                            <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-interval="10000">
                                        <img src={`/assets/productimages/${p.pic1}`} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item" data-interval="2000">
                                        <img src={`/assets/productimages/${p.pic2}`} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={`/assets/productimages/${p.pic3}`} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={`/assets/productimages/${p.pic4}`} className="d-block w-100" alt="..." />
                                    </div>

                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 product-details pl-md-5 ftco-animated  ">
                            <h3>{p.name}</h3>
                            <div className="col-md-7">
                                <div className="d-flex " style={{width:"40vw"}}>
                                    <div className='p-3 border w-50 my-2'>Catagory</div>
                                    <div className='p-3 border w-50 my-2' style={{width:"10vw"}}>{p.maincategory} / {p.subcategory}</div>
                                </div>
                                <div className="d-flex" style={{width:"40vw"}}>
                                    <div className='p-3 border w-50 my-2'>Brands </div>
                                    <div className='p-3 border w-50 my-2'>{p.brand}</div>
                                </div>
                                <div className="d-flex" style={{width:"40vw"}}>
                                    <div className='p-3 border w-50 my-2'>Price</div>
                                    <div className='p-3 border w-50 my-2'>&#8377;{p.baseprice}<sup> -{p.discount}%</sup>&nbsp; &nbsp; &#8377; {p.finalprice} </div>
                                </div>
                                <div className="d-flex" style={{width:"40vw"}}>
                                    <div className='p-3 border w-50 my-2'>Color</div>
                                    <div className='p-3 border w-50 my-2'>{p.color}</div>
                                </div>
                                <div className="d-flex" style={{width:"40vw"}}>
                                    <div className='p-3 border w-50 my-2'>Size</div>
                                    <div className='p-3 border w-50 my-2'>{p.size}</div>
                                </div>
                                <div className="d-flex" style={{width:"40vw"}}>
                                    <div className='p-3 border w-50 my-2'>Stock</div>
                                    <div className='p-3 border w-50 my-2'>{p.stock}</div>
                                </div>
                            </div>
                            <p>{p.description}</p>
                            <p className="price"><span>&#8377; {p.finalprice}</span></p>
                            <div className="row mt-4">
                                <div className="w-100"></div>
                                <div className="input-group col-md-6 d-flex mb-3">
                                    <span className="input-group-btn mr-2">
                                        <button type="button" className="quantity-left-minus btn" data-type="minus" data-field="" min="1" onClick={()=>{if(qty>1){setqty(qty-1)}}} name="sub">
                                            <i className="ion-ios-remove"></i>
                                        </button>
                                    </span>
                                    <p id="qty" name="qty" className="quantity form-control input-number" onChange={getQty}> {qty} </p>
                                    <span className="input-group-btn ml-2">
                                        <button type="button" className="quantity-right-plus btn" onClick={()=>{setqty(qty+1)}} data-type="plus" data-field="" name="add">
                                            <i className="ion-ios-add"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <p><button  onClick={addToCart} className="btn border text-dark rounded text-center  mr-2" style={{backgroundColor:`red !important` }}>Add to Cart</button></p>
                        </div>
                    </div>
               </div>
            </section>
        </>
    )
}
