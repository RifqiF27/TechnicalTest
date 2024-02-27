import { useState, useEffect } from "react";

export default function CreateProduct() {
  const [input, setInput] = useState({
    merk: "",
    type: "",
    stock: "",
    price: "",
    description: "",
  });

  const handleAddProduct = async () => {
    try {
      const endpoint = "http://localhost:3000/products";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      };
      setLoading(true);
      const response = await fetch(endpoint, options);
      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      const resData = await response.json();
      console.log(resData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    // console.log(event.target.value);
    const { name, value } = event.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await handleAddProduct(input);
      console.log("add product success");
      setInput({
        merk: "",
        type: "",
        stock: "",
        price: "",
        description: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        style={{ textAlign: "center", fontSize: "24px", marginBottom: "20px" }}
      >
        ADD FORM
      </div>
      <form
        style={{ maxWidth: "400px", margin: "0 auto" }}
        onSubmit={handleSubmit}
      >
        <label style={{ display: "block", marginBottom: "10px" }}>
          Merk:
          <input
            type="text"
            name="merk"
            value={input.merk}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </label>

        <label style={{ display: "block", marginBottom: "10px" }}>
          Type:
          <input
            type="text"
            name="type"
            value={input.type}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </label>

        <label style={{ display: "block", marginBottom: "10px" }}>
          Stock:
          <input
            type="text"
            name="stock"
            value={input.stock}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </label>

        <label style={{ display: "block", marginBottom: "10px" }}>
          Price:
          <input
            type="text"
            name="price"
            value={input.price}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </label>

        <label style={{ display: "block", marginBottom: "10px" }}>
          Description:
          <textarea
            name="description"
            value={input.description}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </label>

        <button
          type="submit"
          style={{
            background: "#4CAF50",
            color: "white",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
}
