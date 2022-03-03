import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import useDataListSection from "../Hooks/useDataListSection";
import { Loading } from "./";

const DrawerNavbarList = ({ toggleDrawer }: any) => {
  const { dataList, errorList } = useDataListSection();
  if (errorList) {
    console.log(errorList);
  }

  return (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      style={{ backgroundColor: "#1976d2" }}
    >
      {dataList ? (
        <List>
          {dataList.map((item: any, index: number) => {
            const { display_name, section } = item;
            return (
              <Link
                to={`Section/${section}`}
                key={index}
                style={{ textDecoration: "none", color: "white" }}
              >
                <ListItem button key={index}>
                  <ListItemText primary={display_name} />
                </ListItem>
              </Link>
            );
          })}
        </List>
      ) : (
        <Loading />
      )}
    </Box>
  );
};

export default DrawerNavbarList;
