import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

export const CardLogo = styled(Box)(({ theme: { spacing } }) => ({
  display: "flex",
  alignItems: "center",
  gap: spacing(0.4),
}));

export const Text = styled(Typography)(({ theme: { spacing, mixins } }) => ({
  flexWrap: "wrap",
  gap: spacing(0.4),
  ...mixins.flexCenter,
}));

export const Span = styled("span")({
  display: "block",
  width: "max-content",

  "&:not(:last-child)::after": {
    content: '"|"',
    paddingLeft: 5,
  },
});
