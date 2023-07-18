import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface Props {
  username: string;
  level: string;
  onPlay: () => void;
}

export const Welcome = ({ username, level, onPlay }: Props) => {
  const { t } = useTranslation();
  return (
    <Box>
      <Typography variant="h5">
        {t("home.welcome")} {username?.toUpperCase()}
      </Typography>
      <Typography variant="h6">
        {t("home.difficulty")} {t(`level.${level}`).toUpperCase()}
      </Typography>
      <Typography>{t("home.ready")}</Typography>
      <Button onClick={onPlay} variant="contained">
        {t("home.start")}
      </Button>
    </Box>
  );
};
