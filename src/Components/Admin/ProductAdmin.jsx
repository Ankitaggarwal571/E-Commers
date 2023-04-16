import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LeftNav from './LeftNav'
import { DataGrid } from '@material-ui/data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { DeleteProductAction, getProductAction } from '../Store/ActionCreateors/ProductAction';





export default function ProductAdmin() {
  const [render,setrender]=useState(0)
   var navigate=useNavigate()
    var ProductStateData=useSelector((state)=>state.ProductState)
    // console.log("Product "+JSON.stringify(ProductStateData))
    var dispatch=useDispatch()
    useEffect(()=>{
      dispatch(getProductAction())
    },[render])

    const columns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'name', headerName: 'Name', width: 150, editable: true,},
      { field: 'maincategory', headerName: 'Maincatagory', width: 170 },
      { field: 'subcategory', headerName: 'SubCatagory', width: 160 },
      { field: 'brand', headerName: 'Brands', width: 130 },
      { field: 'color', headerName: 'Color', width: 120 },
      { field: 'size', headerName: 'Size', width: 110 },
      { field: 'baseprice', headerName: 'Base Price', width: 130, renderCell:({row}) => <p> &#8377; { row.baseprice}</p>},
      { field: 'discount', headerName: 'Discount (%)', width: 160, renderCell:({row})=> <p>{row.discount} &#37;</p> },
      { field: 'finalprice', headerName: 'Final Price', width: 160 , renderCell:({row}) => <p> &#8377; { row.finalprice}</p> },
      { field: 'stock', headerName: 'Stock', width: 120 },
      { field: 'pic1', headerName: 'Pic1', width: 110, renderCell: ({ row }) => <img src={`/assets/productimages/${row.pic1}`} height="50px" width="100%" className='rounded' alt=''/>},
      { field: 'pic2', headerName: 'Pic2', width: 110,  renderCell: ({ row }) => <img src={`/assets/productimages/${row.pic2}`} height="50px" width="100%" className='rounded' alt=''/>},
      { field: 'pic3', headerName: 'Pic3', width: 110,  renderCell: ({ row }) => <img src={`/assets/productimages/${row.pic3}`} height="50px" width="100%" className='rounded' alt=''/>},
      { field: 'pic4', headerName: 'Pic4', width: 110,  renderCell: ({ row }) => <img src={`/assets/productimages/${row.pic4}`} height="50px" width="100%" className='rounded' alt=''/>},

      {
        field: "edit",
        headerName: "Edit",
        sortable: false,
        renderCell: ({ row }) =>
            <Button onClick={() => {
                navigate("/updateProduct/" + row.id)
            }}>
                <span className="material-symbols-outlined">
                    edit
                </span>
            </Button>,
    },
    {
        field: "delete",
        headerName: "Delete",
        sortable: false,
        renderCell: ({ row }) =>
            <Button onClick={() =>{ 
              dispatch(DeleteProductAction({ id: row.id }))
            if(render==0) {
              setrender(1)
            }
            else{
              setrender(0)
            }
            }
            }>
                <span className="material-symbols-outlined">
                    delete_forever
                </span>
               
            </Button>
    }

    ];
    var rows = [];
    for(let item of ProductStateData){
      rows.push(item)
    }

  return (
    <>
      <div className="hero-wrap hero-bread" style={{backgroundImage:'url("../assets/images/bg_6.jpg")'}}>
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9 ftco-animated text-center">
          	<p className="breadcrumbs"><span className="mr-2"><Link to="/">Home</Link></span> <span>Admin</span></p>
            <h1 className="mb-0 bread">Product Home </h1>
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
             <h4 className='bg-primary text-light text-center p-2'>Products<Link to="/productAdd" ><span className="material-symbols-outlined float-right p-1 text-light" style={{cursor:"pointer"}}>+ </span></Link> </h4>
             <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
        </div>
      </div>   
     </div> 
    </>
  )
}
