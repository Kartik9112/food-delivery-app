function Product() {
  const products = [
    {
      id: 1,
      name: 'Cheese Pizza',
      description: 'Hot cheesy delight with tomato base.',
      price: '₹249',
      image: 'https://images.unsplash.com/photo-1604917877934-07d8d248d396?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZXNlJTIwcGl6emF8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 2,
      name: 'Veggie Burger',
      description: 'Loaded with fresh veggies & sauces.',
      price: '₹199',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 3,
      name: 'Masala Dosa',
      description: 'Crispy dosa with spiced potato filling.',
      price: '₹149',
      image: 'https://images.unsplash.com/photo-1708146464361-5c5ce4f9abb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFzYWxhJTIwZG9zYXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 4,
      name: 'Chicken Biryani',
      description: 'Spiced rice with tender chicken chunks.',
      price: '₹299',
      image: 'https://images.unsplash.com/photo-1716550781939-beb7d7247aae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGJyaXlhbml8ZW58MHx8MHx8fDA%3D',
    },
  ];

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <h1 className="text-2xl font-bold text-black mb-6">ZomatoMall</h1>

      <div className="flex space-x-4 overflow-x-auto pb-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[200px] bg-white rounded-lg shadow-md border p-4 flex-shrink-0"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 object-cover rounded-full mx-auto mb-3"
            />
            <h2 className="text-md font-semibold text-center">{product.name}</h2>
            <p className="text-sm text-gray-600 text-center mt-1">{product.description}</p>
            <p className="text-center text-blue-600 font-bold mt-2">{product.price}</p>

            <div className="mt-3 space-y-2">
              <button className="w-full bg-blue-600 text-white text-sm py-1.5 rounded hover:bg-blue-700">
                Order Now
              </button>
              <button className="w-full border border-blue-600 text-blue-600 text-sm py-1.5 rounded hover:bg-blue-50">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
