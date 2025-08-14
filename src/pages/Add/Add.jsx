import React from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {
  const url="http://localhost:4000";
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: '',
    category: 'Salad'
  })

  const onChangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data, [name]: value}))
  }

  //useEffect(() => {
      //console.log(data);
//  },[data])

const onSubmitHandler = async (event) => {
  event.preventDefault(); //to save the data in the form
  const formData = new FormData();
  formData.append('image', image);
  formData.append('name', data.name);
  formData.append('description', data.description);
  formData.append('price',Number(data.price));
  formData.append('category', data.category);
const response = await axios.post(`${url}/api/food/add`, formData);
  if (response.data.success){
    setData({
      name: "",
      description: "",
      price: '',
      category: 'Salad'
    })
    setImage(false)
    toast.success(response.data.message)
  }
}

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-image-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="Upload" />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required/>
          </div>
          <div className="add-product-name flex-col">
            <p>Product name</p>
            <input onChange={onChangeHandler}  value={data.name} type="text" name='name' placeholder='type here' />
          </div>
          <div className="add-product-description flex-col">
            <p>Product description</p>
            <textarea onChange={onChangeHandler}  value={data.description} name='description' row="6" placeholder='write content here' />

          </div>
          <div className="add-category-price">
            <div className="add-product-category flex-col">
              <p>Product category</p>
              <select onChange={onChangeHandler}  value={data.category} name="category">
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="sandwich">Sandwich</option>
                <option value="cake">Cake</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
              </select>
            </div>
            <div className="add-price flex-col">
              <p>Product price</p>
              <input onChange={onChangeHandler}  value={data.price} type="Number" name='price' placeholder='$20' />
            </div>

          </div>
          <button type='submit' className='add-btn'>Add Product</button>
      </form>
    </div>
  );
}

export default Add;
