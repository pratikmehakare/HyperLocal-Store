import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post._id));
    toast.error("Item removed from Cart");
  };

  const isInCart = cart.some((p) => p._id === post._id);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out p-4 w-64 m-4 flex flex-col h-full">
      {/* Image */}
      <div className="h-44 w-full flex items-center justify-center rounded-md overflow-hidden">
        <img
          src={post.image}
          alt={post.name}
          className="h-full w-full object-contain p-2"
        />
      </div>

      {/* Info */}
      <div className="mt-4 space-y-1">
        <div className="flex justify-between">
          <h2 className="text-base font-semibold text-gray-800 truncate">
            {post.name}
          </h2>
          <p className="text-green-600 font-bold text-md">₹{post.price}</p>
        </div>
        <p className="text-xs text-gray-500">Quantity: {post.quantity}</p>
      </div>

      {/* Button */}
      <button
        onClick={isInCart ? removeFromCart : addToCart}
        className={`mt-3 w-full py-2 text-sm font-semibold rounded-full transition-colors duration-300 
        ${
          isInCart
            ? "border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white"
            : "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
        }`}
      >
        {isInCart ? "Remove Item" : "Add to Cart"}
      </button>
 
    </div>
  );
};

export default Product;
