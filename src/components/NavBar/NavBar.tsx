import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { SelectLevels } from "../SelectLevels/SelectLevels";
import { LEVELS_OPTIONS, LevelProps } from "../../global/levels";

interface Props {
  onChangeLevel: (level: LevelProps) => void;
  showLevels: boolean;
}

export const NavBar = ({ onChangeLevel, showLevels }: Props) => {
  const [levelSelected, setLevelSelected] = useState<LevelProps | null>(
    LEVELS_OPTIONS[0]
  );

  const { t } = useTranslation();

  useEffect(() => {
    if (levelSelected) onChangeLevel(levelSelected);
  }, [levelSelected, onChangeLevel]);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" noWrap>
          {t("navbar.title")}
        </Typography>
      </Toolbar>
      {showLevels ? (
        <SelectLevels onChange={setLevelSelected}></SelectLevels>
      ) : (
        <></>
      )}
    </AppBar>
  );
};

export default NavBar;
