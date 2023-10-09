import { List as MUIList } from "@mui/material";
import styled from "@emotion/styled";

export const List = styled(MUIList)(({ theme: { spacing } }) => ({
  gap: spacing(1),
}));
