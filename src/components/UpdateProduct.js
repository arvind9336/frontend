import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params=useParams();
  const navigate=useNavigate()
  useEffect(()=>{
    getProductDetails();
  },[]);
  const getProductDetails=async()=>{
    console.log(params);
    let result=await fetch(`http://localhost:3600/update/${params.id}`,{
      // headers:{
      //   authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
      // }
    });
    result=await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  }
  const updateProduct=async()=>{
    let result=await fetch(`http://localhost:3600/update/${params.id}`,{
        method:"put",
        body:JSON.stringify({name,price,category,company}),
        headers:{
            'Content-type':"application/json",
            // authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
    });
    result=await result.json();
    console.log(result);
    navigate('/');
  }
  return (
    <div className="product">
      <h3>Update Product</h3>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product Price"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product Category"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />

      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product Company"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
      />
      <button className="updatebtn" onClick={updateProduct}>
        Update Product
      </button>
    </div>
  );
}
export default UpdateProduct;
