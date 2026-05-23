function ProductCard(props) {
  return (
    <div>
      {props.data.map((P, index) => (
        <div>
         
          <img src={P.img} alt={P.title} style={{ width: "100%" }} />
          <h3>{P.title}</h3>
          <p>Price: {P.price}</p>
          <p>Rating:  {P.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
