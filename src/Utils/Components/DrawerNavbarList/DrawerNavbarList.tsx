import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useGlobalContext } from "../../../Hooks/MyGlobalContext";
import { Loading } from "..";
import { BoxDrawer, LinkDrawer } from "./style";

const DrawerNavbarList = ({ toggleDrawer }: any) => {
  const { dataList, errorList } = useGlobalContext();
  if (errorList) {
    console.log(errorList);
  }

  return (
    <BoxDrawer
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {dataList ? (
        <List>
          {dataList.map((item: any, index: number) => {
            const { display_name, section } = item;
            return (
              <LinkDrawer to={`Section/${section}`} key={index}>
                <ListItem button key={index}>
                  <ListItemText primary={display_name} />
                </ListItem>
              </LinkDrawer>
            );
          })}
        </List>
      ) : (
        <Loading />
      )}
    </BoxDrawer>
  );
};

export default DrawerNavbarList;
