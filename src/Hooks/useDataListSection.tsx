import axios from "axios";
import { useEffect } from "react";
import { sectionFail } from "../Utils/costant";
import { useGlobalContext } from "./MyGlobalContext";

const useDataListSection = () => {
  const { dataList, setDataList, setErrorList } = useGlobalContext();

  const fetchData = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_BASE}${process.env.REACT_APP_API_LIST_SECTION}?api-key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setDataList(
          res.data.results.filter((data: any) =>
            sectionFail.includes(data.section)
          )
        );
      })
      .catch((err) => {
        console.log(err);
        setErrorList(err);
      });
  };
  useEffect(() => {
    if (!dataList || dataList.length === 0) {
      fetchData();
    }
  }, []);
};

export default useDataListSection;
