/**
 * TODO:
 * get actual product list usign async from actual data
 */

import styled from "styled-components";
import Product from "./Product";
import axios from "axios";
import { popularProducts } from "../data";
import { useEffect, useState } from "react";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      //disabled for demo branch
      // try {
      //   const res = await axios.get(
      //     category
      //       ? `http://localhost:5000/api/products?category=${category}`
      //       : "http://localhost:5000/api/products"
      //   );
      //   setProducts(res.data);
      // } catch (err) {}
      setProducts(popularProducts);
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((first, second) => first.createdAt - second.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((first, second) => first.price - second.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((first, second) => second.price - first.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {(category ? filteredProducts : products.slice(0, 8)).map((item) => (
        <Product item={item} key={item.id || Math.random()} />
      ))}
    </Container>
  );
};

export default Products;
