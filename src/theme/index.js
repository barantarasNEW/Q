import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#9370DB", disabled: "rgba(255, 255, 255, 0.12)" },
    secondary: {
      main: "rgba(255, 255, 255, 0.16)",
    },
  },
  spacing: 15,
  transitions: {
    duration: 300,
  },
  breakpoints: {
    values: {
      sm: 390,
    },
  },
  typography: {
    h1: {
      display: "flex",
      alignItems: "center",
      padding: 15,
      fontSize: 30,
      fontWeight: 700,
    },
    h2: {
      fontSize: 15,
      fontWeight: 700,
    },
    h3: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      fontSize: 20,
      fontWeight: 700,
    },
    fontSize: 14,
    allVariants: {
      userSelect: "none",
    },
  },
  mixins: {
    flexCenter: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  components: {
    MuiIcon: {
      defaultProps: {
        fontSize: "small",
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
          borderRadius: 10,
          transition: `all 300ms`,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: 0,
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "center",
          paddingTop: 0,
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          padding: 0,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          justifyContent: "center",
          padding: 0,
        },
      },
    },
    MuiFormControl: {
      defaultProps: {
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          maxWidth: 600,
          textAlign: "center",
        },
      },
    },
  },
});

export default theme;
