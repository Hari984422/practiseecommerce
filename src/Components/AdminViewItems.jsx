import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../styles/AdminViewList.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export default function AdminViewItems() {

  let [products,setProducts] = useState([])
  let [force,setForce] = useState(0);

  useEffect(()=>{
    function fetchData(){
      axios.get('http://localhost:1000/Product')
      .then((res)=>{
        console.log(res.data)     
        setProducts(res.data)
        console.log(force);
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    fetchData()
  },[force])

  console.log(products);


  function deleteProduct(id,name){
    axios.delete(`http://localhost:1000/Product/${id}`)
    .then(()=>{
      toast.success(`${name} Deleted Successfully`)   
      setForce(force + 1)  
    })  
    .catch(()=>{
      toast.error('Data not Present')   
    }) 
  }
  

  let navigate = useNavigate()
  function editPage(id){
    navigate(`/adminhomepage/updateproducts/${id}`)
  }

  
  return (
    <div className='AdminViewItems'>
      {products.map((product)=>{
        return(
          <div className="sub_items">
            <div className="card1">
              <div className="thumbnail">
                <img src={product.image} alt="" />
              </div>
              <div className="descriptions">
                <h3>{product.name}</h3>
                <span id='cost'>M.R.P : <big><strike>{product.price}</strike></big></span>
                <h5>Offer Price : 12% off ₹ {Math.round(product.price * 0.88)} </h5>
                <p>Description : {product.desc}</p>
                <span>Ratings : <b>{product.rating}*</b></span>
                <br />
                <button onClick={()=>{editPage(product.id)}} className='m-3 btn btn-warning'><EditIcon/> Update</button>
                <button onClick={()=>{deleteProduct(product.id,product.name)}} className='m-3 btn btn-danger'><DeleteForeverIcon/> Delete</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
