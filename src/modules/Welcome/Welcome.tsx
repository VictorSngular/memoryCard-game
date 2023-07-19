import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import "../../styles/Welcome.css";

interface Props {
  username: string;
  level: string;
  highscore: number;
  onPlay: () => void;
}

export const Welcome = ({ username, level, onPlay, highscore }: Props) => {
  const { t } = useTranslation();
  return (
    <Box className={"welcome_wrapper"}>
      <Grid className="welcome_title" container>
        <Grid item>
          <Typography variant="h4">
            {t("home.welcome")} {username?.toUpperCase()}
          </Typography>
          <Divider></Divider>
        </Grid>
      </Grid>
      <Grid
        className="welcome_body"
        container
        spacing={{ xs: 4, md: 4 }}
        columns={{ xs: 12, md: 12 }}
      >
        <Grid item xs={12} md={12}>
          <Grid container alignContent={"center"}>
            <Grid item>
              <Typography variant="h6">
                {t("home.highscore")} {highscore}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="h5">
            {t("home.difficulty")} {t(`level.${level}`).toLowerCase()}
          </Typography>
          <Typography variant="h6">{t("home.ready")}</Typography>
        </Grid>
      </Grid>
      <Grid className="welcom_action" container justifyContent={"end"}>
        <Grid item>
          <Button color="success" onClick={onPlay} variant="contained">
            {t("home.start")}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
