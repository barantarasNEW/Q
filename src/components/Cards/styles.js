import { List } from "@mui/material";
import styled from "@emotion/styled";

export const Cards = styled(List)(({ theme: { spacing } }) => ({
  gap: spacing(1),
  marginBottom: spacing(2),
}));
