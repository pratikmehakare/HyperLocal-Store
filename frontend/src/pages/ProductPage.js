import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { storeId } = useParams();
  const API_URL = `${process.env.REACT_APP_API_URL}/productbystore/${storeId}`;
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      console.log("data", res.data.data);
      setPosts(res.data.data);
      console.log("post", res.data.data);
    } catch (error) {
      console.log("Error ", error);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProductData();
  }, [storeId]);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[40vh]">
          {posts.map((post) => (
            <Product key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
