import axios from "axios";
import { API_BASE, API_KEY, API_LIST_SECTION } from "../Constant/Variable";
import { useEffect, useState } from "react";

const useDataListSection = () => {
  const [dataList, setDataList] = useState([]);
  const [errorList, setErrorList] = useState("");

  const fetchData = () => {
    axios
      .get(`${API_BASE}${API_LIST_SECTION}?api-key=${API_KEY}`)
      .then((res) => {
        setDataList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
        setErrorList(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { dataList, errorList };
};

export default useDataListSection;
