import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function ProductList(){
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        getProducts();
    },[])
    const getProducts=async()=>{
        let result=await fetch('http://localhost:3600/products',{
            // headers:{
            //     authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            // }
        });
        result=await result.json();
        setProducts(result);
    }
    const RemoveProduct=async (id)=>{
        let result=await fetch(`http://localhost:3600/products/${id}`,{
            method:"Delete",
            // headers:{
            //     authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            // }
        });
        result=await result.json();
        if(result){
            window.alert("Record is delete");
        }
    }
    const searchHandle=async (event)=>{
        let key=event.target.value;
        if(key){
            let result=await fetch(`http://localhost:3600/search/${key}`,{
                // headers:{
                //     authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
                // }
            });
            result=await result.json();
            if(result){
                setProducts(result)
            }
        }
        else{
            getProducts();
        }
    }
    return(
        <div className='list'>
            <h3>Product List</h3>
            <input className='search' type='text' placeholder='Search' onChange={searchHandle} />
            <ul>
                <li>S No.</li>
                <li>Name</li>
                <li>Category</li>
                <li>Company</li>
                <li>Price</li>
                <li>Operation</li>
            </ul>
            {
                products.length>0 ? products.map((item,index)=>
                <ul key={item._id}>
                    <li>{index+1}</li>
                    <li>{item.name}</li>
                    <li>{item.category}</li>
                    <li>{item.company}</li>
                    <li>$ {item.price}</li>
                    <li>
                        <button className='remove' onClick={()=>RemoveProduct(item._id)}>remove</button>
                        <NavLink to={`/update/${item._id}`}>update</NavLink>
                    </li>
                </ul>
                )
                :<h3>No Result Found</h3>
            }
        </div>
    )
}
export default ProductList;