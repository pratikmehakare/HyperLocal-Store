import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import Store from "../components/Store";

const Home = () => {

  const Store_API_URL = `${process.env.REACT_APP_API_URL}/getstore`;
  const [loading, setLoading] = useState(false);
  const [stores, setStore] = useState([]);

  async function fetchStoreData() {
    setLoading(true);
    try {
      const res = await axios.get(Store_API_URL);
      console.log("data", res.data.store);
      setStore(res.data.store);
      console.log("post", res.data.store);
    } catch (error) {
      console.log("Error ", error);
      setStore([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchStoreData();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
        
      ) : stores.length > 0 ? (
        <div className="flex flex-col gap-6 max-w-4xl mx-auto p-4">
          {stores.map((store) => (
            <Store key={store.id} post={store} />
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

export default Home;
