import { Icon } from "@mui/material";
import { ElectricBolt } from "@mui/icons-material";

import * as Styled from "./styles";

const Button = () => {
  return (
    <Styled.Button
      href="/"
      target="_blank"
      onClick={(e) => e.stopPropagation()}
    >
      GI-GROUP
      <Icon component={ElectricBolt} />
    </Styled.Button>
  );
};

export default Button;
