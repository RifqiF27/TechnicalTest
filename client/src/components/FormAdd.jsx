import { useState, useEffect } from "react";

export default function CreateProduct({ visible, onClose }) {
  const [input, setInput] = useState({
    merk: "",
    type: "",
    stock: "",
    price: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await dispatch(handleAddProduct(input));
      console.log("add product success");
      setInput({
        merk: "",
        type: "",
        stock: "",
        price: "",
        description: "",
      });

      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>ADD FORM</div>
    </>
  );
}
