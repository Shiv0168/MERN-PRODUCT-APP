import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";

const View = () => {
  const [product, setProducts] = useState();
  const nav = useNavigate();

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const response = await axios.get("http://localhost:8080");
    setProducts(response.data);
  };

  const handleDelete = async (_id) => {
    await axios.delete(`http://localhost:8080/${_id}`);
    getAllProducts();
  };

  return (
    <>
      <div className="container p-5 mt-5 border-sm shadow-lg">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {product &&
              product.map((products, index) => (
                <tr key={products._id}>
                  <td>{index + 1}</td>
                  <td>{products.name}</td>
                  <td>{products.description}</td>
                  <td>{products.price}</td>
                  <td>
                    <div>
                      <Link
                        className="btn btn-warning me-3"
                        to={`/edit/${products._id}`}
                      >
                        Edit
                      </Link>
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(products._id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default View;
