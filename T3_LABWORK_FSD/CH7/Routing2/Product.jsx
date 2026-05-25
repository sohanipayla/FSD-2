

function Product(props) {
    return (
        <div>
            <h2>Product Page</h2>
            {props.items.map((item, index) => (
                <div key={index} style={{ margin: '10px 0' }}>
                    <img src={item.image} alt={item.name} width="100" />
                    <h3>{item.name}</h3>
                    <p>Price: {item.price}</p>
                </div>
            ))}
        </div>
    );
}

export default Product;
