import React, { useEffect, useState } from "react";
import { LevelProps } from "../../global/levels";
import { Container, Grid, Typography } from "@mui/material";
import { generateUniqueNumbers, getRandomNumber } from "../../utils/cardsGame";
import { CardBox } from "../../components/CardBox/CardBox";
import { useTranslation } from "react-i18next";
import "../../styles/CardsGame.css";

interface Props {
  level: LevelProps;
  onFinish: (score: number) => void;
}
export const CardsGame = ({ level, onFinish }: Props) => {
  const [initialNumbers, setInitialNumbers] = useState<number[]>([]);
  const [showNumbers, setShowNumbers] = useState<boolean>(true);
  const [userScore, setUserScore] = useState<number>(0);
  const [rightNumber, setRightNumber] = useState<number>(0);
  const { t } = useTranslation();

  useEffect(() => {
    onReset();
  }, []);

  const onReset = () => {
    setShowNumbers(true);
    setRightNumber(getRandomNumber());
    setInitialNumbers(generateUniqueNumbers());
    setTimeout(() => setShowNumbers(false), level.time * 1000);
  };

  const handleClick = (isRight: boolean) => {
    isRight
      ? setUserScore((value) => value + level.score)
      : onFinish(userScore);
    onReset();
  };

  return (
    <Container className="cardsgame_wrapper">
      <Grid
        className="cardsgame_header"
        container
        justifyContent={"space-between"}
      >
        <Grid item>
          <Typography variant="h6">
            {showNumbers
              ? t("home.memorize")
              : `${t("home.where")} ${rightNumber}`}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant={"h6"}>
            {t("game.score")} {userScore}
          </Typography>
        </Grid>
      </Grid>
      <Container className="cardsgame_numbers" maxWidth="xs">
        <Grid
          container
          spacing={{ xs: 2, md: 6 }}
          columns={{ xs: 9, sm: 9, md: 12 }}
        >
          {initialNumbers.map((value) => (
            <Grid key={value} item xs={3} md={4}>
              <CardBox
                isValid={value === rightNumber}
                number={value}
                isVisible={showNumbers}
                onClick={() => handleClick(value === rightNumber)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};
