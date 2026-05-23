{/*build a react app that displays a list of products using props 
    1.create a product card component to show details like title price ratting and img 
    2.use a product list component to store product data and display multiple product card components using map method  */}

    import ProductCard from "./ProductCard.jsx";
    import img1 from "./assets/JOCKER.jpg";
    import img2 from "./assets/JACK1.jpg";


function ProductList() {
  const products = [
    {
      title: "JOCKER",
      price: 499,
      rating: 4.5,
      img:img1
    },
    {
      title: "JACK1",
      price: 799,
      rating: 4.8,
      img:img2
    }
  ];

  return (
    <div>
      <h1>Our Pictures</h1>
      <ProductCard data={products}/>
    </div>
  );
}

export default ProductList;

    