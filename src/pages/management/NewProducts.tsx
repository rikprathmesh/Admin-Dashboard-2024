import React, { ChangeEvent, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const NewProducts = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [stock, setStock] = useState<number>();
  const [photo, setPhoto] = useState<string>("");

  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // reading the file of photo
    const file: File | undefined = e.target.files?.[0];
    console.log(file);

    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result == "string") {
          setPhoto(reader.result);
        }
      };
    }
  };
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="product-management">
        <article>
          <form action="">
            <h2>New Product</h2>
            <div>
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="">Price</label>
              <input
                type="number"
                placeholder="Name"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                required
              />
            </div>
            <div>
              <label htmlFor="">Stock</label>
              <input
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(Number(e.target.value))}
                required
              />
            </div>
            <div>
              <label htmlFor="">Photo</label>
              <input type="file" onChange={changeImageHandler} required />
            </div>
            {photo && <img src={photo} alt="New Imgage" />}
            <button type="submit">Create</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default NewProducts;
