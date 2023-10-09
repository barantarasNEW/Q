import { CardActions, Icon, Typography } from "@mui/material";
import {
  ArrowCircleDown,
  Forward,
  History as MUIHistory,
} from "@mui/icons-material";
import { CSSTransition } from "react-transition-group";

import Button from "../Button";
import CardLogo from "../CardLogo";
import History from "../History";
import { useCard } from "./useCard";
import * as Styled from "./styles";
import { useEffect, useRef } from "react";

const Card = ({ card, bg = "inherit", disabled = false }) => {
  const { matches, values, isActiveHistory, setIsActiveHistory } = useCard({
    card,
  });

  const cardRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setIsActiveHistory(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [setIsActiveHistory]);

  return (
    <Styled.Card
      ref={cardRef}
      onClick={() => setIsActiveHistory((v) => !v)}
      style={{
        pointerEvents: disabled ? "none" : "auto",
        cursor: disabled ? "default" : "pointer",
        backgroundColor: bg,
        boxShadow: isActiveHistory
          ? "rgba(255, 255, 255, 0.12) 0px 2px 4px 0px, rgba(255, 255, 255, 0.32) 0px 2px 16px 0px"
          : "",
      }}
    >
      <Styled.Content>
        <CardLogo />

        <Styled.TextContainer>
          {values.map(({ title, value }) => (
            <Styled.Text key={title}>
              <Styled.SpanTitle>{title}</Styled.SpanTitle>
              <Icon
                component={matches ? ArrowCircleDown : Forward}
                fontSize="medium"
              />
              <Styled.SpanValue>{value}</Styled.SpanValue>
            </Styled.Text>
          ))}
        </Styled.TextContainer>
      </Styled.Content>

      {!disabled && (
        <CardActions>
          <Button />
        </CardActions>
      )}

      <CSSTransition
        in={isActiveHistory}
        timeout={300} // Задайте тривалість анімації в мілісекундах
        classNames="history"
        unmountOnExit
      >
        {isActiveHistory ? (
          <Styled.Content>
            <Typography variant="h3">
              <Icon component={MUIHistory} fontSize="medium" />
              History
            </Typography>

            <History />
          </Styled.Content>
        ) : (
          <></>
        )}
      </CSSTransition>
    </Styled.Card>
  );
};

export default Card;
