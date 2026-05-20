// create react component that contains array of fruit object with item id item name and avablity perform the following task
// using filter and map 1)display only available fruits 2) display fruit name in h1 tag. je fruit filter thay che aeni price ma + 10 thavi joye 

function MF4() {
    const fruits = [
      { id: 1, name: "Apple", availability: true, price: 80 },
      { id: 2, name: "Banana", availability: false, price: 40 },
      { id: 3, name: "Mango", availability: true, price: 50 }, 
      { id: 4, name: "Orange", availability: false, price: 60 }
    ];
  
    return (
      <div>
        {fruits
          .filter(item => item.availability === true) 
          .map(item => (
            <div key={item.id}>
              <h1>{item.name} - {item.price + 10}</h1>
            </div>
          ))
        }
      </div>
    );
  }
  
  export default MF4;
  