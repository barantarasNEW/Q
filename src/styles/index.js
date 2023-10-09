import styled from "@emotion/styled";

export const Main = styled("main")(({ theme: { mixins } }) => ({
  flexDirection: "column",
  padding: "20px 10px",
  ...mixins.flexCenter,
}));

export const Header = styled("header")(({ theme: { mixins } }) => ({
  width: "100%",
  ...mixins.flexCenter,
}));
