import { useNavigate } from "react-router-dom";

const Store = ({ post }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${post._id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center justify-between gap-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out px-6 py-4 w-full cursor-pointer"
    >
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {post.name}
        </h2>
      </div>
      <div className="text-sm text-green-600 font-medium whitespace-nowrap">
        Location: {post.location}
      </div>
    </div>
  );
};

export default Store;
