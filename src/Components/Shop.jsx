import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getProductAction } from './Store/ActionCreateors/ProductAction'
import { getMainCatagory } from './Store/ActionCreateors/MainCatagoryAction'
import { getSubCatagoryAction } from './Store/ActionCreateors/SubCatagoryAction'
import { getBrandsAction } from './Store/ActionCreateors/BrandsAction'


export default function Shop() {
    var dispatch=useDispatch()
    var {filterd}=useParams()
    const [mc,Setmc]=useState("All")
    const [sc,Setsc]=useState("All")
    const [br,Setbr]=useState("All")
    const [minPrice ,setminPrice]=useState(1)
     const [maxPrice ,setmaxPrice]=useState(100000)
    const [filterProduct , setfilterProduct]=useState([])
    var mainCatagoryData=useSelector((state)=>state.MainCatagoryState)
    var subCatagoryData=useSelector((state)=>state.SubCatagoryState)
    var brandsData=useSelector((state)=>state.BrandsState)
    var product=useSelector((state)=>state.ProductState)
    product=  product.slice()
    product= product.reverse()
    
    function getProduct(mc,sc,br){
         if(mc==="All" && sc==="All" && br==="All"){
            setfilterProduct(product) 
         }
         else  if(mc!=="All" && sc==="All" && br==="All"){
            setfilterProduct(product.filter((item)=>item.maincategory==mc))
         }
         else if(mc==="All" && sc!=="All" && br==="All"){
            setfilterProduct(product.filter((item)=>item.subcategory==sc))
         }
         else if(mc==="All" && sc==="All" && br!=="All"){
            setfilterProduct(product.filter((item)=>item.brand==br))
         }
         else if(mc!=="All" && sc!=="All" && br==="All"){
            setfilterProduct(product.filter((item)=>item.maincategory===mc && item.subcategory===sc))
         }
         else if(mc!=="All" && sc!=="All" && br!=="All"){
            setfilterProduct(product.filter((item)=>item.maincategory===mc && item.subcategory===sc && item.brand===br))
         }
         else if(mc==="All" && sc!=="All" && br!=="All"){
            setfilterProduct(product.filter((item)=>item.subcategory===sc && item.brand===br))
         }
         else{
            setfilterProduct(product.filter((item)=>item.maincategory===mc && item.brand===br))
         }
         
    }
    function getFilter(data){
        if(data.mc){
             Setmc(data.mc)
             getProduct(data.mc,sc,br)
        }
        else if(data.sc){
            Setsc(data.sc)
            getProduct(mc,data.sc,br)
        }
        else{
            Setbr(data.br)
            getProduct(mc,sc,data.br)
        }
    }
  
    function priceFilterData(min,max){
        setfilterProduct(product.filter((item)=>item.finalprice>=min && item.finalprice<=max))
    }

    function getpriceData(e){
       if(e.target.name==='min'){
        setminPrice(e.target.value)
        priceFilterData(e.target.value,maxPrice)
       }
       else{
        setmaxPrice(e.target.value)
        priceFilterData(minPrice,e.target.value)
       }

    }

    useEffect(()=>{
        if(filterd==="All")
       setfilterProduct(product)
       else(
        setfilterProduct(product.filter((item)=>item.maincategory===filterd))
       )
       dispatch(getProductAction())
       dispatch(getMainCatagory())
       dispatch(getSubCatagoryAction())
       dispatch(getBrandsAction())
    },[product.length])
    return (
        <>
            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-10 order-md-last">
                            <div className="row">
                               {
                                filterProduct.map((item,index)=>{
                                 return    <div className="col-sm-12 col-md-12 col-lg-4 ftco-animated d-flex" key={index}>
                                <div className="product d-flex flex-column">
                                    <a href={`/assets/productimages/${item.pic1}`} target='blank' className="img-prod"><img className="img-fluid" src={`/assets/productimages/${item.pic1}`} alt="Colorlib Template" style={{height:"350px" , width:"300px"}}/>
                                        <span className="status" style={{fontSize:"14px"}}>{item.discount}% Off</span>
                                        <div className="overlay"></div>
                                    </a>
                                    <div className="text py-3 pb-4 px-3">
                                     <Link  to={`/singleProduct/${item.id}`}><h3>{item.name}</h3> </Link>
                                        <div className="pricing">
                                            <p className="price"><span className="mr-2 price-dc">&#8377; {item.baseprice}</span><span className="price-sale">&#8377; {item.finalprice}</span></p>
                                        </div>
                                        <p className="bottom-area d-flex px-3">
                                            <Link to={`/singleProduct/${item.id}`} className="add-to-cart text-center py-2 mr-1"><span>Add to cart <i className="ion-ios-add ml-1"></i></span></Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                                })
                               }
                                </div>
                            <div className="row mt-5">
                                <div className="col text-center">
                                    <div className="block-27">
                                        <ul>
                                            {/* <li><a href="#">&lt;</a></li>
                                            <li className="active"><span>1</span></li>
                                            <li><Link to="#">2</Link></li>
                                            <li><Link to="#">3</Link></li>
                                            <li><Link to="#">4</Link></li>
                                            <li><Link to="#">5</Link></li>
                                            <li><Link to="#">&gt;</Link></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-2">
                            <div className="sidebar">
                                <div className="sidebar-box-2">
                                    <h2 className="heading">Categories</h2>
                                    <div className="fancy-collapse-panel">
                                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="headingOne">
                                                    <h4 className="panel-title">
                                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Main Categories
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                                    <div className="panel-body">
                                                        <ul>
                                                        <li><button className='btn btn-light' onClick={()=>getFilter({mc:"All"})}>All</button></li>
                                                            {
                                                                mainCatagoryData.map((item,index)=>{
                                                                    return <li key={index}> <button className='btn btn-light' onClick={()=>getFilter({mc:item.name})}>{item.name}</button></li>
                                                                })
                                                            }
                                                            {/* <li><a href="#">Sport</a></li> */}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="headingTwo">
                                                    <h4 className="panel-title">
                                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Sub Categories
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                                    <div className="panel-body">
                                                        <ul>
                                                        <li><button className='btn btn-light' onClick={()=>getFilter({sc:"All"})}>All</button></li>
                                                            {
                                                                subCatagoryData.map((item,index)=>{
                                                                    return <li key={index}> <button className='btn btn-light' onClick={()=>getFilter({sc:item.name})}>{item.name}</button></li>
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="headingFour">
                                                    <h4 className="panel-title">
                                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseThree">Brands
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                                    <div className="panel-body">
                                                        <ul>
                                                            <li><button className='btn btn-light' onClick={()=>getFilter({br:"All"})}>All</button></li>
                                                        {
                                                               brandsData.map((item,index)=>{
                                                                    return <li key={index}> <button className='btn btn-light' onClick={()=>getFilter({br:item.name})}>{item.name}</button></li>
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-box-2">
                                    <h2 className="heading">Price Range</h2>
                                    <form method="post" className="colorlib-form-2">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="guests">Price from:</label>
                                                    <div className="form-field">
                                                        <i className="icon icon-arrow-down3"></i>
                                                        {/* <select name="people" id="people" className="form-control">
                                                            <option value="#">1</option>
                                                            <option value="#">200</option>
                                                            <option value="#">300</option>
                                                            <option value="#">400</option>
                                                            <option value="#">1000</option>
                                                        </select> */}
                                                        <input type="number" value={minPrice} name='min' className='form-control' onChange={getpriceData} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="guests">Price to:</label>
                                                    <div className="form-field">
                                                        <i className="icon icon-arrow-down3"></i>
                                                        <input type="number" value={maxPrice} name='max' className='form-control' onChange={getpriceData} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-gallery">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 heading-section text-center mb-4 ftco-animated">
                            <h2 className="mb-4">Follow Us On Instagram</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-0">
                    <div className="row no-gutters">
                        <div className="col-md-4 col-lg-2 ftco-animated">
                            <a href="assets/images/gallery-1.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url('assets/images/gallery-1.jpg')" }}>
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram"></span>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 col-lg-2 ftco-animated">
                            <a href="assets/images/gallery-2.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url('assets/images/gallery-2.jpg')" }}>
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram"></span>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 col-lg-2 ftco-animated">
                            <a href="assets/images/gallery-3.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url('assets/images/gallery-3.jpg')" }}>
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram"></span>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 col-lg-2 ftco-animated">
                            <a href="assets/images/gallery-4.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url('assets/images/gallery-4.jpg')" }}>
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram"></span>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 col-lg-2 ftco-animated">
                            <a href="assets/images/gallery-5.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url('assets/images/gallery-5.jpg')" }}>
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram"></span>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 col-lg-2 ftco-animated">
                            <a href="assets/images/gallery-6.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: "url('assets/images/gallery-6.jpg')" }}>
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram"></span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
