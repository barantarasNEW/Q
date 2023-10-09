import {
  Box,
  Card as MUICard,
  CardContent as MUICardContent,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";

export const Card = styled(MUICard)(({ theme: { spacing, breakpoints } }) => ({
  gap: spacing(1),
  overflow: "hidden",
  transition: "all 0.3s ease",

  [breakpoints.up("md")]: {
    "&:hover": {
      boxShadow:
        "rgba(255, 255, 255, 0.12) 0px 2px 4px 0px, rgba(255, 255, 255, 0.32) 0px 2px 16px 0px",
    },
  },
}));

export const Content = styled(MUICardContent)(({ theme: { spacing } }) => ({
  gap: spacing(1),
}));

export const TextContainer = styled(Box)(({ theme: { spacing } }) => ({
  display: "flex",
  flexDirection: "column",
  gap: spacing(0.3),
}));

export const Text = styled(Typography)(
  ({ theme: { spacing, mixins, breakpoints } }) => ({
    gap: spacing(0.1),
    ...mixins.flexCenter,

    [breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  })
);

export const SpanTitle = styled("span")({
  fontSize: 14,
});

export const SpanValue = styled("span")({
  fontSize: 14,
  fontWeight: 700,
});
