import useDataListSection from "../Hooks/useDataListSection";
import { Loading } from "../Components/";
import { Link } from "react-router-dom";

const ListSectionNav = ({ hide }: any) => {
  const { dataList, errorList } = useDataListSection();

  if (errorList) {
    return <h1>Errore</h1>;
  }

  if (dataList.length > 0) {
    return (
      <div
        id="list"
        style={{
          height: "100vh",
          width: "30vw",
          position: "absolute",
          top: "0px",
          left: hide ? "0px" : "-100%",
          overflowY: "scroll",
          transition: "left 1s",
          backgroundColor: "white",
          zIndex: "999",
        }}
      >
        <ul style={{ listStyleType: "none" }}>
          {dataList.map((item: any, index: number) => {
            const { display_name, section } = item;
            return (
              <Link
                to={`Section/${section}`}
                key={index}
                style={{ textDecoration: "none" }}
              >
                <li
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid black",
                    width: "max-content",
                  }}
                >
                  {display_name}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
  return <Loading />;
};

export default ListSectionNav;
