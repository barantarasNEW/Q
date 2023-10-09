import { useMemo, useReducer, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

export const useCard = ({ card: { win4, win6, win16 } }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const [isActiveHistory, setIsActiveHistory] = useState(false);

  const values = useMemo(() => {
    return [
      { title: "Celkovy timing WIN-série", value: "04:20:30" },
      { title: "Celkovy pocet WIN-situaci", value: "3" },
      { title: "Celkov pocet 4X pojistek", value: win4 },
      { title: "Celkov pocet 7X pojistek", value: win6 },
      { title: "Celkov pocet 16X pojistek", value: win16 },
      { title: "Úroven rizika WIN-série", value: "Vyhovujici" },
    ];
  }, [win4, win16, win6]);

  return { values, matches, isActiveHistory, setIsActiveHistory };
};
