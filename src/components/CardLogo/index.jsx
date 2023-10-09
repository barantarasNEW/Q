import { Icon, Link } from "@mui/material";
import { Cloud } from "@mui/icons-material";

import * as Styled from "./styles";

const CardLogo = () => {
  return (
    <Styled.CardLogo>
      <Icon component={Cloud} />

      <Styled.Text variant="h2">
        <Styled.Span>
          R44 -{" "}
          <Link onClick={(e) => e.stopPropagation()} href="/" target="_blank">
            #FORYOU
          </Link>
        </Styled.Span>

        <Styled.Span>TOR V5.0</Styled.Span>

        <Styled.Span>ALGO-GI</Styled.Span>
      </Styled.Text>

      <Icon component={Cloud} />
    </Styled.CardLogo>
  );
};

export default CardLogo;
