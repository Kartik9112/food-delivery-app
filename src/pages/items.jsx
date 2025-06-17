function Product() {
  const products = [
    { 
      id: 1, 
      name: 'Cheese Pizza', 
      price: '₹249', 
      image: 'https://images.unsplash.com/photo-1604917877934-07d8d248d396?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZXNlJTIwcGl6emF8ZW58MHx8MHx8fDA%3D' 
    },
    { 
      id: 2, 
      name: 'Veggie Burger', 
      price: '₹199', 
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80' 
    },
    { 
      id: 3, 
      name: 'Masala Dosa', 
      price: '₹149', 
      image: 'https://images.unsplash.com/photo-1708146464361-5c5ce4f9abb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFzYWxhJTIwZG9zYXxlbnwwfHwwfHx8MA%3D%3D' 
    },
    { 
      id: 4, 
      name: 'Chicken Biryani', 
      price: '₹299', 
      image: 'https://images.unsplash.com/photo-1716550781939-beb7d7247aae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGJyaXlhbml8ZW58MHx8MHx8fDA%3D' 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Our Delicious Dishes</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
              <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
