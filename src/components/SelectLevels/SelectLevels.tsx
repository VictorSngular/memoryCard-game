import React, { useEffect, useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import { LEVELS_OPTIONS, LevelProps } from "../../global/levels";
import { useTranslation } from "react-i18next";

interface Props {
  onChange: (level: LevelProps) => void;
}

export const SelectLevels = ({ onChange }: Props) => {
  const [levelSelected, setLevelSelected] = useState<string>("");
  const { t } = useTranslation();

  useEffect(() => {
    const levelOption = LEVELS_OPTIONS.find(
      (level) => level.name === levelSelected
    );
    if (levelOption) onChange(levelOption);
  }, [levelSelected]);

  const getMenuItems = () => {
    return LEVELS_OPTIONS.map((level) => (
      <MenuItem key={level.name} value={level.name}>
        <Typography>{t(`level.${level.name}`)}</Typography>
      </MenuItem>
    ));
  };
  return (
    <FormControl variant="standard">
      <InputLabel id="demo-simple-select-standard-label">
        {t("navbar.levels")}
      </InputLabel>
      <Select
        value={levelSelected}
        label={t("navbar.levels")}
        onChange={(value) => setLevelSelected(value.target.value)}
      >
        {getMenuItems()}
      </Select>
    </FormControl>
  );
};
