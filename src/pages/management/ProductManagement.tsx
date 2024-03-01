// import React, { ChangeEvent, FormEvent, useState } from "react";
import { ChangeEvent, FormEvent, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const ProductManagement = () => {
  const [name, setName] = useState<string>("Puma Shoes");
  const [price, setPrice] = useState<number>(2000);
  const [stock, setStock] = useState<number>(10);
  const [photo, setPhoto] = useState<string>(img);

  const [nameUpdate, setNameUpdate] = useState<string>(name);
  const [priceUpdate, setPriceUpdate] = useState<number>(price);
  const [stockUpdate, setStockUpdate] = useState<number>(stock);
  const [photoUpdate, setPhotoUpdate] = useState<string>(photo);

  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // reading the file of photo
    const file: File | undefined = e.target.files?.[0];
    console.log(file);

    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result == "string") {
          setPhotoUpdate(reader.result);
        }
      };
    }
  };

  const submitHandler = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setName(nameUpdate)
    setPrice(priceUpdate)
    setStock(stockUpdate)
    setPhoto(photoUpdate)
  }
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="product-management">
        <section>
          <strong className="">ID = 123</strong>
          <img src={photo} alt="product" />
          <p>{name}</p>
          {stock > 0 ? <span className="green">{stock} Avialable</span> : <span className="red">Not Available</span>}
          <h3>${price}</h3>
        </section>
        <article>
          <form action="" onSubmit={submitHandler}>
            <h2>Manage</h2>
            <div>
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="nameUpdate"
                value={name}
                onChange={(e) => setNameUpdate(e.target.value)}
                
              />
            </div>
            <div>
              <label htmlFor="">Price</label>
              <input
                type="number"
                placeholder="Name"
                value={priceUpdate}
                onChange={(e) => setPriceUpdate(Number(e.target.value))}
                
              />
            </div>
            <div>
              <label htmlFor="">Stock</label>
              <input
                type="number"
                placeholder="Stock"
                value={stockUpdate}
                onChange={(e) => setStockUpdate(Number(e.target.value))}
                
              />
            </div>
            <div>
              <label htmlFor="">Photo</label>
              <input type="file" onChange={changeImageHandler}  />
            </div>
            {photoUpdate && <img src={photoUpdate} alt="New Imgage" />}
            <button type="submit">Update</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default ProductManagement;
