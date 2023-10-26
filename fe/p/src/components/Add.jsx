import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Add = () => {
  const initailState = { name: "", description: "", price: 0 };

  const [product, setProduct] = useState(initailState);
  const [error, setError] = useState({});
  const nav = useNavigate();

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};

    if (!product.name.trim()) {
      errors.name = "Name required !!!";
    }

    if (!product.description.trim()) {
      errors.description = "Description required !!!";
    }

    if (!product.price) {
      errors.price = "Price required !!!";
    }

    setError(errors);

    if (Object.keys(errors).length === 0) {
      await axios.post("http://localhost:8080", product);
      setProduct(initailState);
      nav("/");
    }
  };

  return (
    <>
      <div className="container p-5 mt-5 border-sm shadow-lg w-50">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              value={product.name}
            />
            {error.name && <p className="alert alert-danger">{error.name}</p>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Description"
              name="description"
              value={product.description}
              onChange={handleChange}
            />
            {error.description && (
              <p className="alert alert-danger">{error.description}</p>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword1">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Price"
              name="price"
              value={product.price}
              onChange={handleChange}
            />
            {error.price && <p className="alert alert-danger">{error.price}</p>}
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Add;
