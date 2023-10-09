import { Icon, ListItem, Typography, useTheme } from "@mui/material";
import { FlashOff, FlashOn } from "@mui/icons-material";

import { data } from "../../data";
import Card from "../Card";
import * as Styled from "./styles";

const Cards = () => {
  const theme = useTheme();

  return (
    <>
      <Typography variant="h1">
        <Icon component={FlashOn} fontSize="large" />
        Active
      </Typography>

      <Styled.Cards>
        {data.map((value) => (
          <ListItem key={value.algorithm_id}>
            <Card key={value.algorithm_id} card={value} />
          </ListItem>
        ))}
      </Styled.Cards>

      <Typography variant="h1">
        <Icon component={FlashOff} fontSize="large" />
        Not active
      </Typography>

      <Styled.Cards>
        {data.map((value) => (
          <ListItem key={value.algorithm_id}>
            <Card
              key={value.algorithm_id}
              card={value}
              bg={theme.palette.primary.disabled}
            />
          </ListItem>
        ))}
      </Styled.Cards>
    </>
  );
};

export default Cards;
