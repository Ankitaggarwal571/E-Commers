import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProductAction } from './Store/ActionCreateors/ProductAction'


export default function Home() {
    var dispatch=useDispatch()
  var  product=useSelector((state)=>state.ProductState)
  product=product.slice()
  product = product.reverse()
  product=product.slice(0,8)

    useEffect(()=>{
        dispatch(getProductAction())
    },[])
    return (
        <>
            <section id="home-section" className="hero">
                {/* <div className="home-slider owl-carousel">
	      <div className="slider-item js-fullheight">
	      	<div className="overlay"></div>
	        <div className="container-fluid p-0">
	          <div className="row d-md-flex no-gutters slider-text align-items-center justify-content-end" data-scrollax-parent="true">
	          	<img className="one-third order-md-last img-fluid" src="assets//images/bg_1.png" alt=""/>
		          <div className="one-forth d-flex align-items-center ftco-animated" data-scrollax=" properties: { translateY: '70%' }">
		          	<div className="text">
		          		<span className="subheading">#New Arrival</span>
		          		<div className="horizontal">
				            <h1 className="mb-4 mt-3">Shoes Collection 2019</h1>
				            <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>
				            
				            <p><Link to="#" className="btn-custom">Discover Now</Link></p>
				          </div>
		            </div>
		          </div>
	        	</div>
	        </div>
	      </div>

	      <div className="slider-item js-fullheight">
	      	<div className="overlay"></div>
	        <div className="container-fluid p-0">
	          <div className="row d-flex no-gutters slider-text align-items-center justify-content-end" data-scrollax-parent="true">
	          	<img className="one-third order-md-last img-fluid" src="assets//images/bg_2.png" alt=""/>
		          <div className="one-forth d-flex align-items-center ftco-animated" data-scrollax=" properties: { translateY: '70%' }">
		          	<div className="text">
		          		<span className="subheading">#New Arrival</span>
		          		<div className="horizontal">
				            <h1 className="mb-4 mt-3">New Shoes Winter Collection</h1>
				            <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>
				            
				            <p><Link to="#" className="btn-custom">Discover Now</Link></p>
				          </div>
		            </div>
		          </div>
	        	</div>
	        </div>
	      </div>
	    </div> */}
                <div id="carouselExampleSlidesOnly" className="carousel slide " style={{backgroundColor:"#dbcc8f"}} data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active text-center">
                            <img src="assets/images/bg_1.png" height="600px" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="assets/images/bg_2.png" height="600px" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section ftco-no-pt ftco-no-pb">
                <div className="container">
                    <div className="row no-gutters ftco-services">
                        <div className="col-lg-4 text-center d-flex align-self-stretch ftco-animated">
                            <div className="media block-6 services p-4 py-md-5">
                                <div className="icon d-flex justify-content-center align-items-center mb-4">
                                    <span className="flaticon-bag"></span>
                                </div>
                                <div className="media-body">
                                    <h3 className="heading">Free Shipping</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center d-flex align-self-stretch ftco-animated">
                            <div className="media block-6 services p-4 py-md-5">
                                <div className="icon d-flex justify-content-center align-items-center mb-4">
                                    <span className="flaticon-customer-service"></span>
                                </div>
                                <div className="media-body">
                                    <h3 className="heading">Support Customer</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center d-flex align-self-stretch ftco-animated">
                            <div className="media block-6 services p-4 py-md-5">
                                <div className="icon d-flex justify-content-center align-items-center mb-4">
                                    <span className="flaticon-payment-security"></span>
                                </div>
                                <div className="media-body">
                                    <h3 className="heading">Secure Payments</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row justify-content-center mb-3 pb-3">
                        <div className="col-md-12 heading-section text-center ftco-animated">
                            <h2 className="mb-4">Latest Product</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {
                            product.map((item,index)=>{
                                return <div key={index} className="col-sm-12 col-md-6 col-lg-3 ftco-animated d-flex">
                                <div className="product d-flex flex-column">
                                    <a href={`assets/productimages/${item.pic1}`} target='blank' className="img-prod"><img className="img-fluid" src={`assets/productimages/${item.pic1}`} alt="Colorlib Template" style={{height:"350px", width:"450px"}} />
                                        <span className="status">{item.discount}% Off</span>
                                        <div className="overlay"></div>
                                    </a>
                                    <div className="text py-3 pb-4 px-3">
                                        <div className="d-flex">
                                            
                                        </div>
                                        <h3><Link to={`/singleProduct/${item.id}`}>{item.name}</Link></h3>
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
                </div>
            </section>



            <section className="ftco-section ftco-choose ftco-no-pb ftco-no-pt">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-lg-4">
                            <div className="choose-wrap divider-one img p-5 d-flex align-items-end" style={{ backgroundImage: 'url("assets/images/choose-1.jpg")' }}>

                                <div className="text text-center text-white px-2">
                                    
                                    <h2>Men's Collection</h2>

                                    <p><Link to="/shop/Male" className="btn btn-black px-3 py-2">Shop now</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row no-gutters choose-wrap divider-two align-items-stretch">
                                <div className="col-md-12">
                                    <div className="choose-wrap full-wrap img align-self-stretch d-flex align-item-center justify-content-end" style={{ backgroundImage: 'url("assets/images/choose-2.jpg")' }}>
                                        <div className="col-md-7 d-flex align-items-center">
                                            <div className="text text-white px-5">
                                               
                                                <h2>Women's Collection</h2>
                                                <p><Link to="/shop/Girls" className="btn btn-black px-3 py-2">Shop now</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="row no-gutters">
                                        <div className="col-md-6">
                                            <div className="choose-wrap wrap img align-self-stretch bg-light d-flex align-items-center">
                                                <div className="text text-center px-5">
                                                    <span className="subheading">Sale</span>
                                                    <h2>Extra 50% Off</h2>
                                                    <p><Link to="/shop/All" className="btn btn-black px-3 py-2">Shop now</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choose-wrap wrap img align-self-stretch d-flex align-items-center" style={{ backgroundImage: 'url("assets/productimages/p62.jpg")' }}>
                                                <div className="text text-center text-white px-5">
                                                    <h2>Kids Collection</h2>
                                                    <p><Link to="/shop/Kids" className="btn btn-black px-3 py-2">Shop now</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           
            <section className="ftco-section testimony-section">
                <div className="container">
                    
                        {/* <div className="col-md-5"> */}
                           <div className="row justify-content-center">
                            <div className="col-10">
                            <div className="services-flow">
                                <div className="services-2 p-4 d-flex ftco-animated">
                                    <div className="icon">
                                        <span className="flaticon-bag"></span>
                                    </div>
                                    <div className="text">
                                        <h3>Free Shipping</h3>
                                        <p className="mb-0">Separated they live in. A small river named Duden flows</p>
                                    </div>
                                </div>
                                <div className="services-2 p-4 d-flex ftco-animated">
                                    <div className="icon">
                                        <span className="flaticon-heart-box"></span>
                                    </div>
                                    <div className="text">
                                        <h3>Valuable Gifts</h3>
                                        <p className="mb-0">Separated they live in. A small river named Duden flows</p>
                                    </div>
                                </div>
                                <div className="services-2 p-4 d-flex ftco-animated">
                                    <div className="icon">
                                        <span className="flaticon-payment-security"></span>
                                    </div>
                                    <div className="text">
                                        <h3>All Day Support</h3>
                                        <p className="mb-0">Separated they live in. A small river named Duden flows</p>
                                    </div>
                                </div>
                                <div className="services-2 p-4 d-flex ftco-animated">
                                    <div className="icon">
                                        <span className="flaticon-customer-service"></span>
                                    </div>
                                    <div className="text">
                                        <h3>All Day Support</h3>
                                        <p className="mb-0">Separated they live in. A small river named Duden flows</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                           </div>
                        {/* </div> */}
                        {/* <div className="col-lg-7">
                            <div className="heading-section ftco-animated mb-5">
                                <h2 className="mb-4">Our satisfied customer says</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                            </div>
                            <div className="carousel-testimony owl-carousel">
                                <div className="item">
                                    <div className="testimony-wrap">
                                        <div className="user-img mb-4" style={{ backgroundImage: 'url("assets/images/person_1.jpg")' }}>
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left"></i>
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Garreth Smith</p>
                                            <span className="position">Marketing Manager</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap">
                                        <div className="user-img mb-4" style={{ backgroundImage: 'url("assets/images/person_2.jpg")' }}>
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left"></i>
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Garreth Smith</p>
                                            <span className="position">Interface Designer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap">
                                        <div className="user-img mb-4" style={{ backgroundImage: 'url("assets/images/person_3.jpg")' }}>
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left"></i>
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Garreth Smith</p>
                                            <span className="position">UI Designer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap">
                                        <div className="user-img mb-4" style={{ backgroundImage: 'url("assets/images/person_1.jpg")' }}>
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left"></i>
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Garreth Smith</p>
                                            <span className="position">Web Developer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap">
                                        <div className="user-img mb-4" style={{ backgroundImage: 'url("assets/images/person_1.jpg")' }}>
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left"></i>
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Garreth Smith</p>
                                            <span className="position">System Analyst</span>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div> */}
                    
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
                            <Link to="assets/images/gallery-1.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: 'url("assets/images/gallery-1.jpg")' }}>
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram"></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4 col-lg-2 ftco-animated">
                            <Link to="assets/images/gallery-2.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: 'url("assets/images/gallery-2.jpg")' }}>
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram"></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4 col-lg-2 ftco-animated">
                            <Link to="assets/images/gallery-3.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: 'url("assets/images/gallery-3.jpg")' }}>
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram"></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4 col-lg-2 ftco-animated">
                            <Link to="assets/images/gallery-4.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: 'url("assets/images/gallery-4.jpg")' }}>
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram"></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4 col-lg-2 ftco-animated">
                            <Link to="assets/images/gallery-5.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: 'url("assets/images/gallery-5.jpg")' }}>
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram"></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4 col-lg-2 ftco-animated">
                            <Link to="assets/images/gallery-6.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: 'url("assets/images/gallery-6.jpg")' }}>
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram"></span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
