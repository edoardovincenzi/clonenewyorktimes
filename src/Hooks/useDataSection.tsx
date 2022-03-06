import axios from "axios";
import { useEffect, useState } from "react";

const useDataSection = (nameSection: string | undefined) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const fetchData = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_BASE}svc/topstories/v2/${nameSection}.json?api-key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setData(
          res.data.results.filter(
            (item: any) =>
              item.title &&
              item.abstract &&
              item.multimedia[0].url &&
              item.multimedia[0].caption
          )
        );
        setError("");
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, [nameSection]);

  return { data, error };
};

export default useDataSection;
