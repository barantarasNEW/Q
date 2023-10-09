import { ListItem, useTheme } from "@mui/material";

import { data } from "../../data";
import Card from "../../components/Card";
import * as Styled from "./styles";

const History = () => {
  const theme = useTheme();
  return (
    <Styled.List>
      {data.map((value) => (
        <ListItem key={value.algorithm_id}>
          <Card card={value} bg={theme.palette.secondary.main} disabled />
        </ListItem>
      ))}
    </Styled.List>
  );
};

export default History;
