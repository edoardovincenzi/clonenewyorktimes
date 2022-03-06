import axios from "axios";
import { useEffect } from "react";
import { useGlobalContext } from "./MyGlobalContext";

const useDataHome = () => {
  const { home, setHome, setErrorHome } = useGlobalContext();

  const fetchData = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_BASE}svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setHome(res.data.results);
      })
      .catch((err) => {
        console.log(err);
        setErrorHome(err);
      });
  };
  useEffect(() => {
    if (!home) {
      fetchData();
    }
  }, []);
};

export default useDataHome;
