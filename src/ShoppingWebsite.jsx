import React, { useState } from 'react';

const ShoppingWebsite = () => {
    const [products, setProducts] = useState([]);

    const addProduct = (name, price) => {
        const newProduct = { name, price };
        setProducts([...products, newProduct]);
    };

    const deleteProduct = (index) => {
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);
    };

    const renderProducts = () => {
        return products.map((product, index) => (
            <div key={index}>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button onClick={() => deleteProduct(index)}>Delete</button>
            </div>
        ));
    };

    return (
        <div>
            <h1>Shopping Website</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Product Name" />
                <input type="number" placeholder="Price" />
                <button onClick={() => addProduct(name, price)}>Add Product</button>
            </form>
            {renderProducts()}
        </div>
    );
};


export default ShoppingWebsite;
