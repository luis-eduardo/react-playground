import Product from "./Product";

const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 }
];

function ProductList() {
    const listItems = products.map(product =>
        <Product key={product.id} myTitle={product.title} />
    );

    return <ul>{listItems}</ul>
}

export default ProductList;