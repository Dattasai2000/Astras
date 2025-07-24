export default function Cards({ product, addToCart }) {
  const { name, imageUrl, price, instock } = product;

  return (
    <div className="justify-between bg-gray-100 m-2 w-72">
      <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img className="w-full h-48 object-cover" src={imageUrl} alt={name} />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
          <p className="text-gray-600 mb-4">{`Price: ₹${price}`}</p>
          <p className="mb-4 text-sm text-gray-500">
            Instock:
            <span className={instock ? "text-green-500" : "text-red-500"}>
              {instock ? "Available" : "Out of Stock"}
            </span>
          </p>
          <button
            className="text-white bg-blue-500 px-4 py-2 rounded disabled:bg-gray-600"
            onClick={() => addToCart(product)}
            disabled={!instock}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
