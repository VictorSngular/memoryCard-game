import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  FormControl,
  TextField,
  Typography,
  FormHelperText,
  Grid,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { checkInputText } from "../../utils/formValidation";
import "./LoginForm.css";

interface Props {
  onSelectUser: (username: string) => void;
}

export const LoginForm: React.FC<Props> = ({ onSelectUser }) => {
  const [username, setUsername] = useState("");
  const [hasError, setHasError] = useState(false);
  const { t } = useTranslation();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleButtonClick = () => {
    const isValid = checkInputText(username);
    setHasError(!isValid);
    if (isValid) {
      onSelectUser(username);
    }
  };

  return (
    <div className="logicform_wrapper">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Grid container justifyContent={"center"}>
            <Grid item>
              <Typography
                className="loginform_title"
                variant="h4"
                component="div"
                gutterBottom
              >
                {t("navbar.title")}
              </Typography>
            </Grid>
          </Grid>
          <FormControl className="loginform_form" error={hasError} fullWidth>
            <TextField
              label={t("login.input.label")}
              placeholder={t("login.input.placeholder")}
              value={username}
              onChange={handleInputChange}
              helperText={hasError ? t("login.input.error") : ""}
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            {hasError && (
              <FormHelperText>{t("login.input.required")}</FormHelperText>
            )}
          </FormControl>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleButtonClick}
            fullWidth
          >
            {t("login.button.label")}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default LoginForm;
