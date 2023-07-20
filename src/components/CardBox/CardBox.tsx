import { Card, CardContent, Grid, Typography } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import "./CardBox.css";
import React, { useEffect, useState } from "react";

interface Props {
  isValid: boolean;
  isVisible: boolean;
  onClick: () => void;
  number: number;
}
export const CardBox = ({ isVisible, onClick, number, isValid }: Props) => {
  const [color, setColor] = useState<string>("");
  const [showNumber, setShowNumber] = useState<boolean>(isVisible);
  const handleClick = () => {
    if (!isVisible) {
      setShowNumber(true);
      setColor(isValid ? "success-bg" : "error-bg");
      setTimeout(onClick, 2000);
    }
  };

  useEffect(() => {
    setColor("");
    setShowNumber(isVisible);
  }, [number, isVisible]);
  return (
    <Card component={"button"} onClick={handleClick}>
      <CardContent
        data-testid="cardbox-content__id"
        className={`cardbox-body ${color}`}
      >
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid item>
            <Zoom in={showNumber}>
              <Typography variant="h4">{number}</Typography>
            </Zoom>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
