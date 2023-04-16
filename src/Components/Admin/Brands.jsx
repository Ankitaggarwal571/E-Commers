import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LeftNav from './LeftNav'
import { DataGrid } from '@material-ui/data-grid';
import { useDispatch, useSelector } from 'react-redux';
// import { getMainCatagory,DeleteMainCatagory } from '../Store/ActionCreateors/MainCatagoryAction';
import { Button } from '@material-ui/core';
import { deleteBrandsAction, getBrandsAction } from '../Store/ActionCreateors/BrandsAction';




export default function Brands() {
  const [render,setrender]=useState(0)
   var navigate=useNavigate()
    var BrandsData=useSelector((state)=>state.BrandsState)
    // console.log("Brands "+ JSON.stringify(BrandsData) )
    var dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getBrandsAction())
    },[render])

    const columns = [
      { field: 'id', headerName: 'ID', width: 90 },
      {
        field: 'name',
        headerName: 'Name',
        width: 150,
        editable: true,
      },
      {
        field: "edit",
        headerName: "Edit",
        sortable: false,
        renderCell: ({ row }) =>
            <Button onClick={() => {
                navigate("/brandsUpdate/" + row.id)
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
              dispatch(deleteBrandsAction({ id: row.id }))
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
               
            </Button>,
    }

    ];
    const rows = [];
  for(let item of BrandsData){
    rows.push(item)
  }

  return (
    <>
      <div className="hero-wrap hero-bread" style={{backgroundImage:'url("../assets/images/bg_6.jpg")'}}>
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
             <h4 className='bg-primary text-light text-center p-2'>Brands<Link to="/addbrands" ><span className="material-symbols-outlined float-right p-1 text-light" style={{cursor:"pointer"}}>+ </span></Link> </h4>
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
