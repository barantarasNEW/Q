import { Link } from "@mui/material";
import styled from "@emotion/styled";

import { PRIMARY_BORDER_RADIUS } from "../../constants";

export const Button = styled(Link)(
  ({ theme: { spacing, breakpoints, palette } }) => ({
    display: "flex",
    alignItems: "center",
    gap: spacing(0.2),
    padding: `${spacing(0.3)} ${spacing(0.7)}`,
    textDecoration: "none",
    color: "#fff",
    backgroundColor: palette.primary.main,
    borderRadius: PRIMARY_BORDER_RADIUS,
    transition: `all 300ms`,

    [breakpoints.up("md")]: {
      "&:hover": {
        opacity: 0.8,
      },
    },
  })
);
