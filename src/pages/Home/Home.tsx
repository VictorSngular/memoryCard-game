import { Container } from "@mui/material";
import React, { useState } from "react";
import { RootState } from "../../store";
import { Welcome } from "../../modules/Welcome/Welcome";
import { CardsGame } from "../../modules/CardsGame/CardsGame";
import { useSelector } from "react-redux";
import NavBar from "../../components/NavBar/NavBar";
import { LevelProps } from "../../global/levels";
import "./Home.css";

export const Home = () => {
  const { name } = useSelector((state: RootState) => state.user);
  const [highScore, setHighScore] = useState<number>(0);
  const [isGaming, setIsGaming] = useState<boolean>(false);
  const [selectedLevel, setSelectedLevel] = useState<LevelProps>(
    {} as LevelProps
  );
  const onFinishGame = (newscore: number) => {
    setIsGaming(false);
    setHighScore(newscore);
  };
  return name ? (
    <>
      <NavBar showLevels={!isGaming} onChangeLevel={setSelectedLevel}></NavBar>
      <Container className="home_body" maxWidth="md">
        {!isGaming ? (
          <Welcome
            highscore={highScore}
            onPlay={() => setIsGaming(true)}
            username={name}
            level={selectedLevel.name}
          />
        ) : (
          <CardsGame onFinish={onFinishGame} level={selectedLevel} />
        )}
      </Container>
    </>
  ) : (
    <></>
  );
};
