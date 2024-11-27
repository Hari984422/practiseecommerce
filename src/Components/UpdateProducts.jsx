import { useEffect, useState } from "react"
import '../styles/UpdateProducts.css'
import axios from "axios"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
function UpdateProducts(){

    let [category,setCategory] =  useState("")
    let [name,setName] =  useState("")
    let [price,setPrice] =  useState("")
    let [image,setImage] =  useState("")
    let [rating,setRating] = useState("")
    let [desc,setDesc] = useState("")
    
    let data = {category,name,price,image,rating,desc}

    function updateItem(e){
        e.preventDefault();
        axios.put(`http://localhost:1000/Product/${param.id}`,data)
        .then((res)=>{
            console.log(res);
            toast.success("Item Updated Successfully")
        })
        .catch((err)=>{
            console.log(err);
            toast.err('Invalid Data Format')
        })
    }

    let param = useParams();
    
   useEffect(()=>{
    axios.get(`http://localhost:1000/Product/${param.id}`)
    .then((res)=>{
        console.log(res.data);
        setName(res.data.name)
        setCategory(res.data.category)
        setDesc(res.data.desc)
        setPrice(res.data.price)
        setImage(res.data.image)
        setRating(res.data.rating)
    })
    .catch((err)=>{
        console.log(err); 
    })
   },[])
    return(
        <div className="updateproducts">
            <form onSubmit={updateItem} action="">
                <fieldset>
                    <label htmlFor="">
                        Category :
                    </label>
                    <select required value={category} onChange={(e)=>{setCategory(e.target.value)}}>
                        <option>Dress Matierirals</option>
                        <option >Mobile</option>
                        <option >Mobile Accessories</option>
                        <option >Electronics</option>
                        <option >Mobile Accessories</option>
                        <option >Groceries</option>
                    </select>
                    <label htmlFor="">
                        ProductName : 
                    </label>
                    <input required type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter the Product" />
                    <label htmlFor="">
                        Product Price :
                    </label>
                    <input required type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder="Enter the Price" />
                    <label htmlFor="">
                        Desc :
                    </label>
                    <textarea required rows="2" value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder="Enter the text" cols="30"></textarea>
                    <label htmlFor="">
                        Thumbnail : 
                    </label>
                    <input required type="text" value={image} onChange={(e)=>{setImage(e.target.value)}} placeholder="Enter the Image address" />
                    <label htmlFor="">
                        Ratings : 
                    </label>
                    <input required type="Number" value={rating} onChange={(e)=>{setRating(e.target.value)}} placeholder="Enter the ratings" />
                    <button className='btn btn-warning'>Update Item</button>
                </fieldset>
                </form>     
        </div>
    )
}
export default UpdateProducts