import axios from "axios";
import { API_BASE, API_KEY } from "../Constant/Variable";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../Hooks/MyGlobalContext";

const useDataSection = (nameSection: string) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const { home, errorHome, setHome, setErrorHome } = useGlobalContext();

  const fetchData = () => {
    if (nameSection !== "home") {
      axios
        .get(
          `${API_BASE}svc/topstories/v2/${nameSection}.json?api-key=${API_KEY}`
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
    } else {
      if (!home || errorHome) {
        axios
          .get(
            `${API_BASE}svc/topstories/v2/${nameSection}.json?api-key=${API_KEY}`
          )
          .then((res) => {
            setHome(
              res.data.results.filter(
                (item: any) =>
                  item.title &&
                  item.abstract &&
                  item.multimedia[0].url &&
                  item.multimedia[0].caption
              )
            );
            setErrorHome("");
          })
          .catch((err) => {
            console.log(err);
            setErrorHome(err);
          });
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, [nameSection]);

  return { data, error };
};

export default useDataSection;
