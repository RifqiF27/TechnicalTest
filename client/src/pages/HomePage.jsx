import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      const endpoint = "http://localhost:3000/products";
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      setLoading(true);
      const response = await fetch(endpoint, options);
      const resData = await response.json();
      //   console.log(resData);
      setProducts(resData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      const endpoint = "http://localhost:3000/products/" + id;
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(endpoint, options);
      const resData = await response.json();
      //   console.log(resData);
      if (!response.ok) throw data;
      fetchProducts();
      // console.log("berhasil delete")
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
  };

  const handleSubmitSearch = () => {
    fetchProducts(search);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div style={{ margin: "15px" }}>
        <div style={{ marginBottom: "10px" }}>
          <input placeholder="Search..." onChange={handleSearch}></input>
          <button  type="button" onClick={handleSubmitSearch}>
            Search
          </button>
        </div>
        <div>
          <Link to={"/addProduct"}
            style={{
              margin: "10px",
            }}
          >
            Add
          </Link>
        </div>
        {!loading && products.length === 0 && <p>product tidak ditemukan</p>}
        {loading ? (
          <p>loading...</p>
        ) : (
          products.map((el, i) => {
            return (
              <div
                id={i.toString()}
                key={i}
                style={{
                  border: "1px solid black",
                  marginBottom: "10px",
                  padding: "10px",
                }}
              >
                <p>merk: {el.merk}</p>
                <p>type: {el.type}</p>
                <p>stock: {el.stock}</p>
                <p>price: {el.price}</p>
                <p>description: {el.description}</p>

                <button style={{ marginRight: "10px" }}>edit</button>
                <button
                  type="button"
                  onClick={() => {
                    handleDelete(el.id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default HomePage;
