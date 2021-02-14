import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errMessage, setErrMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const responce = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "dayton",
        },
      });
      setResults(responce.data.businesses);
    } catch (err) {
      setErrMessage(`Something went wrong: ${err}`);
    }
  };

  useEffect(() => {
    searchApi("poke");
  }, []);

  return [searchApi, results, errMessage];
};
